import type { TToken, TStyle } from "./theme";

export type TFontsTokenId = "font";
export type TFontsTokenNames = "Default" | "Nimbus Sans Regular";

export type TFontsToken = TToken & {
  id: {
    type: TFontsTokenId;
    name: TFontsTokenNames;
  };
  styles: TStyle[];
};

const defaultFont: TFontsToken = {
  id: {
    type: "font",
    name: "Default",
  },
  styles: [
    {
      css: {
        fontFamily: "default",
        lineHeight: 1.5,
      },
    },
  ],
};

const nimbusSansRegular: TFontsToken = {
  id: {
    type: "font",
    name: "Nimbus Sans Regular",
  },
  styles: [
    {
      css: {
        fontFamily: "Nimbus Sans Regular",
        fontWeight: 400,
        lineHeight: 1.25,
      },
    },
  ],
};

const fonts: TFontsToken[] = [defaultFont, nimbusSansRegular];
export default fonts;
