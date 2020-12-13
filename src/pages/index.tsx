import type { CSSProperties } from "react";
import { css, cx } from "@emotion/css";

import { default as useToken } from "../useToken";

const Home = () => {
  const defaultLink = useToken("link", "default");
  //const {default, active, visited} = useToken("link", "default");
  const defaultLinkDefaultState = useToken("link", "default", "default");
  const defaultFont = useToken("font", "Default");
  const failedFont = useToken("font", "default");
  const mobile = useToken("breakpoint", "mobile");

  return (
    <ul>
      <li>default link, all states: {JSON.stringify(defaultLink)}</li>
      <li className={cx(css(defaultLinkDefaultState))}>
        default link, default state: {JSON.stringify(defaultLinkDefaultState)}
      </li>
      <li>default font: {JSON.stringify(defaultFont)}</li>
      <li>failed font: {JSON.stringify(failedFont)}</li>
      <li>mobile: {JSON.stringify(mobile)}</li>
    </ul>
  );
};

export default Home;
