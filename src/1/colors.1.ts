import type { TPreset, TStyle } from "./types";

export type TColor = {
  preset: TPreset;
  styles: TStyle[];
};

const defaultColors: TColor = {
  preset: {
    type: "colors",
    name: "default",
  },
  styles: [
    {
      state: "default",
      css: {
        color: "black",
        backgroundColor: "white",
      },
    },
    {
      state: "disabled",
      css: {
        color: "gray",
        backgroundColor: "white",
      },
    },
  ],
};

const colors: TColor[] = [defaultColors];

export default colors;
