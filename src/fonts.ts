import type { TToken } from "./theme";

const defaultFont: TToken = {
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

const nimbusSansRegular: TToken = {
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

const fonts: TToken[] = [defaultFont, nimbusSansRegular];
export default fonts;
