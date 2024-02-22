import { Link } from "react-router-dom";
import "../styles/Menu.css";
import { useDataProvider } from "../context/DataProvider";
import { useGetAPIInfo } from "../context/ApiDataProvider";

export function Menu() {
  const { activeNav, handleActiveNav } = useDataProvider();

  const { url, handleUrl } = useGetAPIInfo();

  const activeHome = activeNav === "home" ? "menu-btn activated" : "menu-btn";
  const activeStarships =
    activeNav === "list" ? "menu-btn activated" : "menu-btn";

  return (
    <>
      <div className={`${activeHome}  p-3`}>
        <Link
          to="/"
          className={`cursor-pointer menu-link text-2xl text-gray-light`}
          onClick={() => handleActiveNav("home")}
        >
          HOME
        </Link>
      </div>
      <div className={`${activeStarships}  p-3`}>
        <Link
          to="/ships-list"
          className={`cursor-pointer menu-link text-2xl text-gray-light`}
          onClick={() => {
            handleActiveNav("list");
            handleUrl("https://swapi.dev/api/starships/?format=json");
          }}
        >
          STARSHIPS
        </Link>
      </div>
    </>
  );
}
