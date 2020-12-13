import type { TPreset, TStyle } from "./types";

export type TLink = {
  preset: TPreset;
  styles: TStyle[];
};

const defaultLink: TLink = {
  preset: {
    type: "link",
    name: "default",
  },
  styles: [
    {
      state: "default",
      presets: [
        {
          type: "colors",
          name: "default",
          state: "default",
        },
        {
          type: "font",
          name: "default",
          state: "default",
        },
      ],
      css: {
        textDecoration: "underline",
      },
    },
    {
      state: "hidden",
      css: {
        display: "none",
      },
    },
    {
      state: "disabled",
      presets: [
        {
          type: "colors",
          name: "default",
          state: "disabled",
        },
      ],
      css: {
        textDecoration: "underline",
      },
    },
  ],
};

const links: TLink[] = [defaultLink];

export default links;
