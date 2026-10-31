// Icon SVGs in public/assets/icons are imported as React components with the
// `?svgr` query (see the Turbopack rule in next.config.ts).
declare module "*.svg?svgr" {
  import type { FC, SVGProps } from "react";
  const Component: FC<SVGProps<SVGSVGElement>>;
  export default Component;
}
