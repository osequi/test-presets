import { default as usePreset } from "../usePreset";

const Home = () => {
  const defaultLink = usePreset("link", "default");
  const defaultLinkDefaultState = usePreset("link", "default", "default");
  const defaultFont = usePreset("font", "default");

  return (
    <ul>
      <li>default link, all states: {JSON.stringify(defaultLink)}</li>
      <li>
        default link, default state: {JSON.stringify(defaultLinkDefaultState)}
      </li>
      <li>default font: {JSON.stringify(defaultFont)}</li>
    </ul>
  );
};

export default Home;
