import { default as useToken } from "../useToken";

const Home = () => {
  const defaultLink = useToken("link", "default");
  const defaultLinkDefaultState = useToken("link", "default", "default");
  const defaultFont = useToken("font", "default");

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
