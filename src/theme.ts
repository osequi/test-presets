import type { TColorsTokenId, TColorsTokenNames } from "./colors";
import type { TFontsTokenId, TFontsTokenNames } from "./fonts";
import type { TLinksTokenId, TLinksTokenNames } from "./links";

import { default as colors } from "./colors";
import { default as fonts } from "./fonts";
import { default as links } from "./links";

/**
 * Collects all tokens.
 */
const tokens: TToken[] = [...colors, ...fonts, ...links];

/**
 * Defines the available design token id types.
 */
export type TTokenIdTypes = TColorsTokenId | TFontsTokenId | TLinksTokenId;

/**
 * Defines the available design token id names.
 */
export type TTokenIdNames =
  | TColorsTokenNames
  | TFontsTokenNames
  | TLinksTokenNames;

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
  type?: TTokenIdTypes;
  name?: TTokenIdNames;
  state?: TState;
};

/**
 * Defines a design token style.
 * It can (recursively) contain other tokens.
 * It can represent style for a state.
 */
export type TStyle = {
  state?: TState;
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

const theme = {
  tokens: tokens,
};

export default theme;
