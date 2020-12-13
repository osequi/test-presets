import type { TTokenIds, TTokenNames, TState } from "./theme";
import { default as theme } from "./theme";
import { isNil, isArray } from "lodash";

/**
 * Loads (recursively) a set of tokens.
 * @param 	tokens	An array of tokens.
 * @return          A style object
 */
const loadTokens = (tokens) => {
  return (
    tokens &&
    tokens.reduce((result, token) => {
      const { type, name, state } = token;

      const newToken = loadAll(type, name, state);

      const newTokenFiltered =
        newToken && newToken.filter((item) => item.state === state).pop();

      return { state, ...result, ...newTokenFiltered };
    }, {})
  );
};

/**
 * Loads (recursively) the responsive style declarations.
 * @param 	responsive	An array of responsive style declarations.
 * @return          	A style object
 */
const loadResponsive = (responsive) => {
  return (
    responsive &&
    responsive.reduce((result, item) => {
      const { breakpoint, tokens, css } = item;

      const mediaQuery = loadAll("breakpoint", breakpoint).pop();
      const token = loadTokens(tokens);

      let query = {};
      for (let key in mediaQuery) {
        query[key] = { ...token, ...css };
      }

      return { ...result, ...query };
    }, {})
  );
};

/**
 * Loads tokens recursively.
 * @param	type	The token type.
 * @param	name	The token name.
 * @param	state	The stoken state.
 * @return			An array of style objects.
 * @example
 * loadAll("font", "Default") => {"fontFamily":"default","lineHeight":1.5}
 * loadAll("link", "default", "default") => {"state":"default","color":"#000","backgroundColor":"#fff","fontFamily":"Nimbus Sans Regular","fontWeight":400,"lineHeight":1.25,"textDecoration":"underline"}
 * loadAll("link", "default") => [{"state":"default","color":"#000","backgroundColor":"#fff","fontFamily":"Nimbus Sans Regular","fontWeight":400,"lineHeight":1.25,"textDecoration":"underline"},{"state":"active","color":"red","backgroundColor":"#000","textDecoration":"line-through"},{"state":"visited","color":"gray","backgroundColor":"#000","textDecoration":"underline"}]
 */
const loadAll = (
  type?: TTokenIds,
  name?: TTokenNames,
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
      const { type: tokenType, name: Name } = id;
      return type === tokenType && name === Name;
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
      const { tokens: styleTokens, css, responsive } = style;

      const styleTokensObject = loadTokens(styleTokens);
      const responsiveObject = loadResponsive(responsive);

      return { ...styleTokensObject, ...css, ...responsiveObject };
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
  type?: TTokenIds,
  name?: TTokenNames,
  state?: TState
): object[] | object | null => {
  const tokens = loadAll(type, name, state);

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
