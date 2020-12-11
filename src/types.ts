/**
 * Defines the states an element can be.
 * Shared by all interactive elements like link, button, etc.
 */
export type TElementState =
  | "default"
  | "active"
  | "visited"
  | "disabled"
  | "hidden";

export type TPreset = {
  type?: string;
  name?: string;
  state?: TElementState;
};

export type TStyle = {
  state?: TElementState;
  presets?: TPreset[];
  css?: object;
};
