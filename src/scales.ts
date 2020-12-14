import ms from "modularscale-js";

import type { TToken } from "./theme";

export type TScaleId = "scale";
export type TScaleNames = "linear" | "modular";

const linear = (value: number = 1): TToken => {
  return {
    id: {
      type: "scale",
      name: "linear",
    },
    styles: [
      {
        css: {
          fontSize: `${value + 1}em`,
        },
      },
    ],
  };
};

const modularScaleSettings = {
  base: [1],
  ratio: 1.25,
};

const modular = (value: number = 1): TToken => {
  return {
    id: {
      type: "scale",
      name: "modular",
    },
    styles: [
      {
        css: {
          fontSize: `${ms(value, modularScaleSettings)}em`,
        },
      },
    ],
    settings: modularScaleSettings,
  };
};

const scales: TToken[] = [linear(), modular()];
export { scales };
