import "../styles/StarshipsList.css";
import { Link } from "react-router-dom";
import { useDataProvider } from "../context/DataProvider";
import { useGetAPIInfo } from "../context/ApiDataProvider";

export function StarshipsList() {
  const { handleActiveNav } = useDataProvider();
  const { handleUrl, handleUrlShip, isPending, isError, data, error } =
    useGetAPIInfo();

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const listBtnViewNext = data.next ? "list-btn" : "no-action";
  const listBtnViewPrev = data.previous ? "list-btn" : "no-action";

  return (
    <>
      <div className="w-1/2 flex flex-col items-start">
        {data &&
          data.results.map((ship) => {
            const id = ship.name;

            return (
              <Link
                to={`/ships-list/${id}`}
                key={id}
                className="ship-container w-full m-2 p-4 flex flex-col items-start bg-gray-dark cursor-pointer"
                onClick={() => {
                  handleActiveNav("");
                  handleUrlShip(ship.url);
                }}
              >
                <h2 className="font-serif text-2xl text-gray-light">
                  <strong>{ship.name.toUpperCase()}</strong>
                </h2>
                <p className="font-serif text-xl text-gray">{ship.model}</p>
              </Link>
            );
          })}
        <div className="flex justify-between w-full mb-5">
          <div className="flex justify-end w-full m-2">
            <div
              className={listBtnViewPrev}
              onClick={() => {
                if (data.previous) handleUrl(data.previous);
              }}
            >
              View Prev
            </div>
          </div>
          <div className="flex justify-start w-full m-2">
            <div
              className={listBtnViewNext}
              onClick={() => {
                if (data.next) handleUrl(data.next);
              }}
            >
              View Next
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
