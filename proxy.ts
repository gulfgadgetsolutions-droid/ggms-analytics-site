import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const regionCookie = "ggms-region";
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

  // The URL controls the region. Redirecting the rewritten global destination
  // using the saved cookie can send the request back into the same rewrite.
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)"],
};
