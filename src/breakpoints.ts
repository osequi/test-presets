import type { TToken } from "./theme";

export type TBreakpointId = "breakpoint";
export type TBreakpointNames = "mobile" | "tablet" | "laptop" | "desktop";

const mobile: TToken = {
  id: {
    type: "breakpoint",
    name: "mobile",
  },
  styles: [
    {
      css: {
        "@media(min-width: 768px)": {},
      },
    },
  ],
};

const breakpoints: TToken[] = [mobile];
export default breakpoints;
