import { default as colors } from "./colors";
import { default as fonts } from "./fonts";
import { default as links } from "./links";

/**
 * Defines the states an element can be.
 * Shared by all interactive elements like link, button, etc.
 */
export type TState = "default" | "active" | "visited" | "disabled" | "hidden";

/**
 * Defines a design token id.
 * Uniquely identifies a design token.
 */
export type TTokenId = {
  type?: string;
  name?: string;
  state?: TState;
};

/**
 * Defines a design token style.
 * It can (recursively) contain other tokens.
 */
export type TStyle = {
  name?: string;
  tokens?: TTokenId[];
  css?: object;
};

/**
 * Defines a design token.
 * - Uniquely identified.
 * - Fully styled.
 */
export type TToken = {
  id?: TTokenId;
  styles: TStyle[];
};
