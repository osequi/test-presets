import type { TTokenIdTypes, TTokenIdNames, TState } from "./theme";
import { default as theme } from "./theme";
import { isNil } from "lodash";

const useToken = (
  type?: TTokenIdTypes,
  name?: TTokenIdNames,
  state?: TState
) => {
  if (isNil(type) || isNil(name)) return null;

  if (isNil(theme?.tokens)) return null;
  const { tokens } = theme;

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
   * Loads styles for a state.
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
      //// NOTE: for some reason `state` gets *not* confused and all works fine.
      const { state, tokens, css } = style;

      const tokensObject =
        tokens &&
        tokens.reduce((storedValue, token) => {
          const { type, name } = token;
          const value = useToken(type, name, state);
          const valueFiltered =
            value && value.filter((item) => item.state === state).pop();
          return { ...storedValue, ...valueFiltered };
        }, {});

      return { state: state, ...tokensObject, ...css };
    })
  );
};

export default useToken;
