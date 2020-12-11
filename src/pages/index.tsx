import { default as usePreset } from "../usePreset";

const Home = () => {
  const defaultLink = usePreset("link", "default");
  //const defaultFont = usePreset("font", "default");

  return (
    <ul>
      <li>link: {JSON.stringify(defaultLink)}</li>
      <li>font: {/*JSON.stringify(defaultFont)*/}</li>
    </ul>
  );
};

export default Home;
