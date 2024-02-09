import { useQuery } from "@tanstack/react-query";
import "../styles/StarshipsList.css";
import { Link } from "react-router-dom";

export function StarshipsList() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["ships"],
    queryFn: getAllStarships,
  });

  console.log(data);
  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <div className="w-1/2 flex flex-col items-start">
        {data.results.map((ship) => {
          return (
            <Link
              to="/ships-list/:shipId"
              key={ship.name}
              className="ship-container w-full m-2 p-4 flex flex-col items-start border-2 border-solid border-gray-dark cursor-pointer"
            >
              <h2 className="font-serif text-2xl text-gray">
                <strong>{ship.name.toUpperCase()}</strong>
              </h2>
              <p className="font-serif text-xl text-gray">{ship.model}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
}

const getAllStarships = () => {
  return fetch("https://swapi.dev/api/starships/?page=1").then((response) =>
    response.json()
  );
};
