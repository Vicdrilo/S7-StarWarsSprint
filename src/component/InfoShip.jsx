import {
  useGetAPIInfo,
  useGetFilmsData,
  useGetPilotsData,
} from "../context/ApiDataProvider";
import { useParams } from "react-router-dom";
import "../styles/InfoShip.css";
import { Ship } from "./Ship";
import { Pilot } from "./Pilot";
import { Film } from "./Film";

export function InfoShip() {
  const { isPending, isError, data, error } = useGetAPIInfo();
  const { handlePilotUrl } = useGetPilotsData();
  const { handleFilmsUrl } = useGetFilmsData();

  const { shipId } = useParams();

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const ship = data.results.filter((ship) => ship.name === shipId);

  return (
    <>
      {ship.map((ship, index) => {
        let pilots;
        let films;
        if (ship.pilots.length > 0) {
          handlePilotUrl(ship.pilots);
          pilots = (
            <>
              <h2 className="titulo-info-ship text-2xl border-t-4 border-b-2 mt-3">
                Pilots
              </h2>
              <Pilot />
            </>
          );
        }
        if (ship.films.length > 0) {
          handleFilmsUrl(ship.films);
          films = (
            <>
              <h2 className="titulo-info-ship text-2xl border-t-4 border-b-2 mt-3">
                Films
              </h2>
              <Film />
            </>
          );
        }
        return (
          <>
            <div className="flex flex-col" key={index}>
              <h2 className="titulo-info-ship text-2xl border-t-4 border-b-2 mt-3">
                Starship
              </h2>
              <Ship data={ship} />
              {pilots}
              {films}
            </div>
          </>
        );
      })}
    </>
  );
}
