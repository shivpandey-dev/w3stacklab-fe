import Image from "next/image";
import type { SVGProps } from "react";
import ArrowRightSvg from "../../../public/assets/icons/arrow-right.svg?svgr";
import CheckSvg from "../../../public/assets/icons/check.svg?svgr";
import ChevronDownSvg from "../../../public/assets/icons/chevron-down.svg?svgr";
import CloseSvg from "../../../public/assets/icons/close.svg?svgr";
import MenuSvg from "../../../public/assets/icons/menu.svg?svgr";
import QuoteSvg from "../../../public/assets/icons/quote.svg?svgr";

// The artwork lives in public/assets/icons/*.svg. Each file uses currentColor,
// so icons follow the surrounding text colour. Props (size, strokeWidth,
// className...) go straight onto the <svg>.
type IconProps = SVGProps<SVGSVGElement>;

const DEFAULT_SIZE = 18;

export function ArrowRight(props: IconProps) {
  return <ArrowRightSvg width={DEFAULT_SIZE} height={DEFAULT_SIZE} aria-hidden {...props} />;
}

export function Check(props: IconProps) {
  return <CheckSvg width={DEFAULT_SIZE} height={DEFAULT_SIZE} aria-hidden {...props} />;
}

export function ChevronDown(props: IconProps) {
  return <ChevronDownSvg width={DEFAULT_SIZE} height={DEFAULT_SIZE} aria-hidden {...props} />;
}

export function Menu(props: IconProps) {
  return <MenuSvg width={DEFAULT_SIZE} height={DEFAULT_SIZE} aria-hidden {...props} />;
}

export function Close(props: IconProps) {
  return <CloseSvg width={DEFAULT_SIZE} height={DEFAULT_SIZE} aria-hidden {...props} />;
}

export function Quote(props: IconProps) {
  return <QuoteSvg width={DEFAULT_SIZE} height={DEFAULT_SIZE} aria-hidden {...props} />;
}

/**
 * The brand mark. Loaded from public/assets/logo.svg, so replacing that one
 * file updates the header, mobile drawer, footer and favicon.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/assets/logo.svg"
      alt=""
      width={32}
      height={32}
      priority
      className={className}
    />
  );
}
