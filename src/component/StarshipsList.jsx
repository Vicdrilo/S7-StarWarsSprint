import { useQuery } from "@tanstack/react-query";
import "../styles/StarshipsList.css";
import { Link } from "react-router-dom";
import { useDataProvider } from "../context/DataProvider";
import { useGetAPIInfo } from "../context/ApiDataProvider";

export function StarshipsList() {
  const { handleUrl, handleActiveNav } = useDataProvider();
  const { methodAllStarships } = useGetAPIInfo();

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["ships"],
    queryFn: methodAllStarships,
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const listBtnViewMore = data.next ? "flex justify-center" : "hide";

  return (
    <>
      <div className="w-1/2 flex flex-col items-start">
        {data.results.map((ship) => {
          return (
            <Link
              to={`/ships-list/${ship.name}`}
              key={ship.name}
              className="ship-container w-full m-2 p-4 flex flex-col items-start bg-gray-dark cursor-pointer"
              onClick={() => {
                handleUrl(ship.url);
                handleActiveNav("");
              }}
            >
              <h2 className="font-serif text-2xl text-gray-light">
                <strong>{ship.name.toUpperCase()}</strong>
              </h2>
              <p className="font-serif text-xl text-gray">{ship.model}</p>
            </Link>
          );
        })}
        <div className={`${listBtnViewMore} w-full`}>
          <div
            className="list-btn"
            onClick={() => {
              handleUrl(data.next);
            }}
          >
            View More
          </div>
        </div>
      </div>
    </>
  );
}
