import { useGetPilotsData } from "../context/ApiDataProvider";

export function Pilot() {
  const { pilotUrl, infoPilots } = useGetPilotsData();

  const pilotsElements = infoPilots.map((pilot, index) => {
    const imgUrl = urlCreation(pilotUrl[index]);

    return (
      <div
        key={index}
        className="pilot-container flex flex-col m-3 bg-gray-dark"
      >
        <img src={imgUrl} alt="" className="border-img" />
        <div className="flex justify-center items-center p-4">
          <h2 className="text-xl">{pilot.name}</h2>
        </div>
      </div>
    );
  });
  return <div className="grid grid-cols-4">{pilotsElements}</div>;
}

function urlCreation(url) {
  let aux = url.split("/");
  const shipId = aux[aux.length - 2];

  const api = "https://starwars-visualguide.com/assets/img/characters/";

  return api + shipId + ".jpg";
}
