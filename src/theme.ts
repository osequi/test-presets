import type { CSSProperties } from "react";

import type { TColorId, TColorNames } from "./colors";
import type { TFontId, TFontNames } from "./fonts";
import type { TLinkId, TLinkNames } from "./links";
import type { TBreakpointId, TBreakpointNames } from "./breakpoints";

import { TScaleId, TScaleNames, scales } from "./scales";

import { default as colors } from "./colors";
import { default as fonts } from "./fonts";
import { default as links } from "./links";
import { default as breakpoints } from "./breakpoints";

/**
 * Collects all tokens.
 */
const tokens: TToken[] = [
  ...colors,
  ...fonts,
  ...links,
  ...breakpoints,
  ...scales,
];

/**
 * Defines the available design token id types.
 */
export type TTokenIds = TColorId | TFontId | TLinkId | TBreakpointId | TScaleId;

/**
 * Defines the available design token id names.
 */
export type TTokenNames =
  | TColorNames
  | TFontNames
  | TLinkNames
  | TBreakpointNames
  | TScaleNames;

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
  type?: TTokenIds;
  name?: TTokenNames;
  state?: TState;
  props?: any;
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
  responsive?: TResponsiveStyle[];
};

/**
 * Defines a responsive style.
 */
export type TResponsiveStyle = {
  breakpoint?: TBreakpointNames;
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
  styles?: TStyle[];
  settings?: object;
};

const theme = {
  tokens: tokens,
};

export default theme;
