import type { TColorId, TColorNames } from "./colors";
import type { TFontId, TFontNames } from "./fonts";
import type { TLinkId, TLinkNames } from "./links";

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
export type TTokenIds = TColorId | TFontId | TLinkId;

/**
 * Defines the available design token id names.
 */
export type TTokenNames = TColorNames | TFontNames | TLinkNames;

/**
 * Defines the states an element can be.
 * Shared by all interactive elements like link, button, etc.
 */
export type TState = "default" | "active" | "visited" | "disabled" | "hidden";

/**
 * Defines a design token id.
 * Uniquely identifies a design token.
 */
export type TId = {
  type?: TTokenIds;
  name?: TTokenNames;
  state?: TState;
};

/**
 * Defines a design token style.
 * It can (recursively) contain other tokens.
 * It can represent style for a state.
 */
export type TStyle = {
  state?: TState;
  tokens?: TId[];
  css?: object;
};

/**
 * Defines a design token.
 * - Uniquely identified.
 * - Fully styled.
 */
export type TToken = {
  id?: TId;
  styles: TStyle[];
};

const theme = {
  tokens: tokens,
};

export default theme;
