import Image from "next/image";
import Link from "next/link";

type BrandIdentityProps = {
  compact?: boolean;
  footer?: boolean;
  href?: string;
  onNavigate?: () => void;
};

export default function BrandIdentity({ compact = false, footer = false, href = "/", onNavigate }: BrandIdentityProps) {
  return (
    <div className={`group/brand relative shrink-0 ${compact ? "h-10 w-7" : "w-fit"}`}>
      <Link href={href} onClick={onNavigate} className={`flex items-center rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${compact ? "relative isolate h-10 w-7" : "gap-3"}`} aria-label="GGMS Analytics home">
        <Image src="/images/ggms-forward-data-mark.svg" alt="" width={320} height={320} unoptimized priority={!footer} className={`${compact ? "relative z-20 h-7 w-7 bg-slate-900" : "h-11 w-11"} shrink-0 object-contain transition duration-500 ease-out group-hover/brand:scale-[1.03] group-hover/brand:drop-shadow-[0_0_9px_rgba(34,211,238,.38)]`} />
        <span
          aria-hidden="true"
          className={`whitespace-nowrap ${compact ? "pointer-events-none absolute left-5 top-1/2 z-10 h-9 w-0 -translate-y-1/2 overflow-hidden opacity-0 transition-[width,opacity] duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover/brand:w-48 group-hover/brand:opacity-100 group-focus-within/brand:w-48 group-focus-within/brand:opacity-100" : "block"}`}
        >
          <span className={`flex w-max items-center font-bold leading-none tracking-[-.025em] text-white ${compact ? "h-9 rounded-r-lg bg-slate-900/95 pl-3.5 pr-3 text-[1.35rem] shadow-[12px_0_26px_-17px_rgba(34,211,238,.75)] backdrop-blur-md" : "text-lg"}`}>GGMS <span className="ml-1 text-cyan-400">Analytics</span></span>
        </span>
      </Link>
    </div>
  );
}
