import { InfoShip } from "./InfoShip";
import { StarshipsList } from "./StarshipsList";
import { Welcome } from "./Welcome";
import "../styles/MainContent.css";
import { useDataProvider } from "../context/DataProvider";

export function MainContent({ type }) {
  const { handleActiveNav } = useDataProvider();

  handleActiveNav(type);
  return (
    <main className="main-container">
      <div className={`${type === "home" ? "flex justify-center" : "hidden"} `}>
        <Welcome />
      </div>
      <div className={`${type === "list" ? "flex justify-center" : "hidden"} `}>
        <StarshipsList />
      </div>
      <div className={type === "ship" ? "flex " : "hidden"}>
        <InfoShip />
      </div>
    </main>
  );
}
