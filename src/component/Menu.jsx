import { Link } from "react-router-dom";
import "../styles/Menu.css";
import { useDataProvider } from "../context/DataProvider";

export function Menu() {
  const { activeNav, handleActiveNav, handleUrl } = useDataProvider();

  console.log("ACYIVENAV: ", activeNav);
  const activeHome = activeNav === "home" ? "menu-btn activated" : "menu-btn";
  const activeStarships =
    activeNav === "starships" ? "menu-btn activated" : "menu-btn";

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
            handleActiveNav("starships");
            handleUrl("https://swapi.dev/api/starships/?page=1");
          }}
        >
          STARSHIPS
        </Link>
      </div>
    </>
  );
}
