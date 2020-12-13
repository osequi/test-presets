import type { TToken } from "./theme";

export type TLinkId = "link";
export type TLinkNames = "default";

const defaultLink: TToken = {
  id: {
    type: "link",
    name: "default",
  },
  styles: [
    {
      state: "default",
      tokens: [
        {
          type: "colors",
          name: "default",
        },
        {
          type: "font",
          name: "Nimbus Sans Regular",
        },
      ],
      css: {
        textDecoration: "underline",
      },
    },
    {
      state: "active",
      tokens: [
        {
          type: "colors",
          name: "highlighted",
        },
      ],
      css: {
        textDecoration: "line-through",
      },
    },
    {
      state: "visited",
      tokens: [
        {
          type: "colors",
          name: "inactive",
        },
      ],
      css: {
        textDecoration: "underline",
      },
    },
  ],
};

const links: TToken[] = [defaultLink];
export default links;
