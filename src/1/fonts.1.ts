import type { TPreset, TStyle } from "./types";

export type TFont = {
  preset: TPreset;
  styles: TStyle[];
};

const defaultFont: TFont = {
  preset: {
    type: "font",
    name: "default",
  },
  styles: [
    {
      state: "default",
      css: {
        fontFamily: "default",
        lineHeight: 1.5,
      },
    },
  ],
};

const fonts: TFont[] = [defaultFont];

export default fonts;
