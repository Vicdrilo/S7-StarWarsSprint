import { InfoShip } from "./InfoShip";
import { StarshipsList } from "./StarshipsList";
import { Welcome } from "./Welcome";
import "../styles/MainContent.css";

export function MainContent({ type }) {
  return (
    <main className="main-container">
      <div className={`${type === "home" ? "flex justify-center" : "hidden"} `}>
        <Welcome />
      </div>
      <div className={`${type === "list" ? "flex justify-center" : "hidden"} `}>
        <StarshipsList />
      </div>
      <div className={type === "ship" ? "flex justify-around" : "hidden"}>
        <InfoShip />
      </div>
    </main>
  );
}
