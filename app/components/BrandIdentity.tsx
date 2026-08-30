import Image from "next/image";
import Link from "next/link";

type BrandIdentityProps = {
  compact?: boolean;
  footer?: boolean;
  onNavigate?: () => void;
};

export default function BrandIdentity({ compact = false, footer = false, onNavigate }: BrandIdentityProps) {
  return (
    <div className="group/brand relative w-fit">
      <Link href="/" onClick={onNavigate} className="flex items-center gap-3 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-cyan-400" aria-label="GGMS Analytics home">
        <Image src="/images/ggms-analytics-logo.png" alt="" width={640} height={546} priority={!footer} className="h-11 w-[52px] shrink-0 rounded-md object-cover mix-blend-lighten transition duration-300 group-hover/brand:scale-105 group-hover/brand:drop-shadow-[0_0_10px_rgba(34,211,238,.35)]" />
        <span className={`block whitespace-nowrap transition-all duration-300 ${compact ? "max-w-0 -translate-x-2 overflow-hidden opacity-0 group-hover/brand:max-w-44 group-hover/brand:translate-x-0 group-hover/brand:opacity-100 group-focus-within/brand:max-w-44 group-focus-within/brand:translate-x-0 group-focus-within/brand:opacity-100" : "max-w-44 opacity-100"}`}>
          <span className={`block text-[1.05rem] font-bold leading-tight tracking-[-.02em] ${footer ? "text-white" : "text-white"}`}>GGMS <span className="text-cyan-400">Analytics</span></span>
        </span>
      </Link>
    </div>
  );
}
