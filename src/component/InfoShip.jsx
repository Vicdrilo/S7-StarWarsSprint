import { useGetAPIInfo } from "../context/ApiDataProvider";

import { useQuery } from "@tanstack/react-query";

export function InfoShip() {
  const { methodInfoShip } = useGetAPIInfo();

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["ship"],
    queryFn: methodInfoShip,
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  console.log(data);
  return (
    <>
      <div></div>
      <div className="info-sh-container w-1/2 h-1/2 text-left bg-gray-dark p-5">
        <h1 className="text-gray-light">{data.name}</h1>
        <div className="details flex flex-col">
          <p className="text-2xl text-gray mt-3 mb-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            consequatur pariatur deleniti fugit consequuntur! Ipsum aspernatur
            pariatur fuga unde reiciendis?
          </p>
          <div className="flex justify-evenly">
            <div className="flex flex-col items-start">
              <p className="m-5 text-xl text-gray">
                <strong>Model:</strong> {data.model}
              </p>
              <p className="m-5 text-xl text-gray">
                <strong>Cost in credits:</strong> {data.cost_in_credits}
              </p>
              <p className="m-5 text-xl text-gray">
                <strong>Atmospheric speed:</strong>{" "}
                {data.max_atmosphering_speed}
              </p>
            </div>
            <div className="flex flex-col items-start">
              <p className="m-5 text-xl text-gray">
                <strong>Manufacturer:</strong> {data.manufacturer}
              </p>
              <p className="m-5 text-xl text-gray">
                <strong>Length:</strong> {data.length}
              </p>
              <p className="m-5 text-xl text-gray">
                <strong>Crew:</strong> {data.crew}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
