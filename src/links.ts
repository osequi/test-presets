import type { TToken } from "./theme";

const defaultLink: TToken = {
  id: {
    type: "link",
    name: "default",
  },
  styles: [
    {
      name: "default",
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
      name: "active",
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
      name: "visited",
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
