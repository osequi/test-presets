import type { TToken } from "./theme";

export type TColorsTokenId = "colors";
export type TColorsTokenNames =
  | "default"
  | "inverted"
  | "inactive"
  | "highlighted";

const textColor = "#000";
const backgroundColor = "#fff";
const highlightColor = "red";
const shaderColor = "gray";

const defaultColorPair: TToken = {
  id: {
    type: "colors",
    name: "default",
  },
  styles: [
    {
      css: {
        color: textColor,
        backgroundColor: backgroundColor,
      },
    },
  ],
};

const invertedColorPair: TToken = {
  id: {
    type: "colors",
    name: "inverted",
  },
  styles: [
    {
      css: {
        color: backgroundColor,
        backgroundColor: textColor,
      },
    },
  ],
};

const inactiveColorPair: TToken = {
  id: {
    type: "colors",
    name: "inactive",
  },
  styles: [
    {
      css: {
        color: shaderColor,
        backgroundColor: textColor,
      },
    },
  ],
};

const highlightedColorPair: TToken = {
  id: {
    type: "colors",
    name: "highlighted",
  },
  styles: [
    {
      css: {
        color: highlightColor,
        backgroundColor: textColor,
      },
    },
  ],
};

const colors: TToken[] = [
  defaultColorPair,
  invertedColorPair,
  inactiveColorPair,
  highlightedColorPair,
];
export default colors;
