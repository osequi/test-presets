import type { TPreset, TElementState } from "./types";

import { default as links } from "./links";
import { default as fonts } from "./fonts";
import { default as colors } from "./colors";

const presets = [...links, ...fonts, ...colors];

const usePreset = (type?: string, name?: string, state?: TElementState) => {
  const preset = presets.find((item) => {
    const { preset: itemPreset } = item;
    const { type: presetType, name: presetName } = itemPreset;
    return type === presetType && name === presetName;
  });

  const styles = preset?.styles;

  return (
    styles &&
    styles.map((item) => {
      const { state, presets, css } = item;

      const presetsObject =
        presets &&
        presets.reduce((storedValue, preset) => {
          const { type, name } = preset;
          const value = usePreset(type, name, state);
          const valueFiltered =
            value && value.filter((item) => item.state === state).pop();
          return { ...storedValue, ...valueFiltered };
        }, {});

      return { state: state, ...presetsObject, ...css };
    })
  );
};

export default usePreset;
