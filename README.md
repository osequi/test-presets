# test-presets

Playing with a mechanism for style presets (tokens).

## Token types

- It's better to have a general type `TToken` than `TFontsToken`, `TColorToken`.
- Tokens will be accessed exclusively via `useToken` where we cannot specifiy if this call is about a color or font.
- This way invalid args can be passed to `useToken` which fails back safely with returning `null`
