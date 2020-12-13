import type { TTokenIdTypes, TTokenIdNames, TState } from "./theme";
import { default as theme } from "./theme";
import { isNil, isArray } from "lodash";

/**
 * Loads tokens recursively.
 * @param	type	The token type.
 * @param	name	The token name.
 * @param	state	The stoken state.
 * @return			An array of style objects.
 * @example
 * loadTokensRecursively("font", "Default") => {"fontFamily":"default","lineHeight":1.5}
 * loadTokensRecursively("link", "default", "default") => {"state":"default","color":"#000","backgroundColor":"#fff","fontFamily":"Nimbus Sans Regular","fontWeight":400,"lineHeight":1.25,"textDecoration":"underline"}
 * loadTokensRecursively("link", "default") => [{"state":"default","color":"#000","backgroundColor":"#fff","fontFamily":"Nimbus Sans Regular","fontWeight":400,"lineHeight":1.25,"textDecoration":"underline"},{"state":"active","color":"red","backgroundColor":"#000","textDecoration":"line-through"},{"state":"visited","color":"gray","backgroundColor":"#000","textDecoration":"underline"}]
 */
const loadTokensRecursively = (
  type?: TTokenIdTypes,
  name?: TTokenIdNames,
  state?: TState
): object[] | null => {
  if (isNil(type) || isNil(name)) return null;

  if (isNil(theme?.tokens)) return null;
  const { tokens } = theme;

  /**
   * Loads the token.
   */
  const token =
    tokens &&
    tokens.find((token) => {
      const { id } = token;
      const { type: tokenType, name: tokenName } = id;
      return type === tokenType && name === tokenName;
    });

  if (isNil(token?.styles)) return null;
  const { styles } = token;

  /**
   * Loads token styles for a state.
   */
  const stylesForState =
    styles && styles.filter((style) => style.state === state);

  /**
   * If `state` is set only the styles for that state will be returned.
   */
  const styles2 = state ? stylesForState : styles;

  return (
    styles2 &&
    styles2.map((style) => {
      const { state, tokens: styleTokens, css } = style;

      const styleTokensObject =
        styleTokens &&
        styleTokens.reduce((result, styleToken) => {
          const {
            type: styleTokenType,
            name: styleTokenName,
            state: styleTokenState,
          } = styleToken;

          const newToken = loadTokensRecursively(
            styleTokenType,
            styleTokenName,
            styleTokenState
          );

          const newTokenFiltered =
            newToken &&
            newToken.filter((item) => item.state === styleTokenState).pop();

          return { state, ...result, ...newTokenFiltered };
        }, {});

      return { ...styleTokensObject, ...css };
    })
  );
};

/**
 * Returns the style object(s) for the token.
 * @param	type	The token type.
 * @param	name	The token name.
 * @param	state	The stoken state.
 * @return			An array of style objects.
 * @example
 * useToken("font", "Default") => {"fontFamily":"default","lineHeight":1.5}
 * useToken("link", "default", "default") => {"color":"#000","backgroundColor":"#fff","fontFamily":"Nimbus Sans Regular","fontWeight":400,"lineHeight":1.25,"textDecoration":"underline"}
 * useToken("link", "default") => [{"state":"default","color":"#000","backgroundColor":"#fff","fontFamily":"Nimbus Sans Regular","fontWeight":400,"lineHeight":1.25,"textDecoration":"underline"},{"state":"active","color":"red","backgroundColor":"#000","textDecoration":"line-through"},{"state":"visited","color":"gray","backgroundColor":"#000","textDecoration":"underline"}]
 */
const useToken = (
  type?: TTokenIdTypes,
  name?: TTokenIdNames,
  state?: TState
): object[] | object | null => {
  const tokens = loadTokensRecursively(type, name, state);

  /**
   * Returns the token as is when it's not an array.
   */
  if (!isArray(tokens)) return tokens;

  /**
   * Returns a single style object.
   */
  if (tokens.length === 1) {
    const token = tokens.pop();
    const { state: tokenState, ...rest } = token;
    return rest;
  }

  /**
   * Returns an array of style objects.
   */
  return tokens;
};

export default useToken;
