import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const regionCookie = "ggms-region";
const supportedRegions = new Set(["om", "ae", "sa"]);
const regionalPathPattern = /^\/(om|ae|sa)(?=\/|$)/;

export function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  if (searchParams.get("region") === "global") {
    const destination = request.nextUrl.clone();
    destination.searchParams.delete("region");
    destination.pathname = pathname.replace(regionalPathPattern, "") || "/";
    const response = NextResponse.redirect(destination);
    response.cookies.delete(regionCookie);
    return response;
  }

  const regionalMatch = pathname.match(regionalPathPattern);
  if (regionalMatch) {
    const region = regionalMatch[1];
    const destination = request.nextUrl.clone();
    destination.pathname = pathname.replace(regionalPathPattern, "") || "/";

    const response = NextResponse.rewrite(destination);
    response.cookies.set({
      name: regionCookie,
      value: region,
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    response.headers.set("X-Robots-Tag", "noindex, follow");
    response.headers.set("Vary", "Cookie");
    return response;
  }

  const savedRegion = request.cookies.get(regionCookie)?.value;
  if (request.method === "GET" && savedRegion && supportedRegions.has(savedRegion)) {
    const destination = request.nextUrl.clone();
    destination.pathname = `/${savedRegion}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(destination);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)"],
};
