import type { TTokenIdTypes, TTokenIdNames, TState } from "./theme";
import { default as theme } from "./theme";
import { isNil } from "lodash";

const useToken = (
  type?: TTokenIdTypes,
  name?: TTokenIdNames,
  state?: TState
): object | null => {
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
      const { state: styleState, tokens: styleTokens, css } = style;

      const styleTokensObject =
        styleTokens &&
        styleTokens.reduce((result, styleToken) => {
          const {
            type: styleTokenType,
            name: styleTokenName,
            state: styleTokenState,
          } = styleToken;

          const newToken = useToken(
            styleTokenType,
            styleTokenName,
            styleTokenState
          );

          const newTokenFiltered =
            newToken &&
            newToken.filter((item) => item.state === styleTokenState).pop();

          return { ...result, ...newTokenFiltered };
        }, {});

      return { state: styleState, ...styleTokensObject, ...css };
    })
  );
};

export default useToken;
