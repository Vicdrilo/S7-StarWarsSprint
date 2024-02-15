import { useGetAPIInfo } from "../context/ApiDataProvider";
import { useParams } from "react-router-dom";
import "../styles/InfoShip.css";
import { useState } from "react";
import errorImg from "../assets/opcionSinFoto2.jpg";

export function InfoShip() {
  const { urlShip, isPending, isError, data, error } = useGetAPIInfo();

  const imgUrl = urlCreation(urlShip);
  const [img, setImg] = useState(imgUrl);
  const handleErrorImg = () => {
    setImg(errorImg);
  };

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
        return (
          <div key={index} className="flex justify-around h-1/2">
            <div className="w-1/2 mb-4">
              <img
                src={img}
                alt=""
                className="w-full"
                onError={handleErrorImg}
              />
            </div>
            <div className="info-sh-container w-1/2  text-left bg-gray-dark p-5 mb-4">
              <h1 className="text-gray-light">{ship.name}</h1>
              <div className="details flex flex-col">
                <p className="text-2xl text-gray mt-3 mb-1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas consequatur pariatur deleniti fugit consequuntur!
                  Ipsum aspernatur pariatur fuga unde reiciendis?
                </p>
                <div className="flex justify-evenly">
                  <div className="flex flex-col items-start">
                    <p className="m-5 text-xl text-gray">
                      <strong>Model:</strong> {ship.model}
                    </p>
                    <p className="m-5 text-xl text-gray">
                      <strong>Cost in credits:</strong> {ship.cost_in_credits}
                    </p>
                    <p className="m-5 text-xl text-gray">
                      <strong>Atmospheric speed:</strong>{" "}
                      {ship.max_atmosphering_speed}
                    </p>
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="m-5 text-xl text-gray">
                      <strong>Manufacturer:</strong> {ship.manufacturer}
                    </p>
                    <p className="m-5 text-xl text-gray">
                      <strong>Length:</strong> {ship.length}
                    </p>
                    <p className="m-5 text-xl text-gray">
                      <strong>Crew:</strong> {ship.crew}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
  /*
  return (
    <>
      {ship && (
        <>
          <div></div>
          <div className="info-sh-container w-1/2 h-1/2 text-left bg-gray-dark p-5">
            <h1 className="text-gray-light">{ship[0].name}</h1>
            <div className="details flex flex-col">
              <p className="text-2xl text-gray mt-3 mb-1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptas consequatur pariatur deleniti fugit consequuntur! Ipsum
                aspernatur pariatur fuga unde reiciendis?
              </p>
              <div className="flex justify-evenly">
                <div className="flex flex-col items-start">
                  <p className="m-5 text-xl text-gray">
                    <strong>Model:</strong> {ship[0].model}
                  </p>
                  <p className="m-5 text-xl text-gray">
                    <strong>Cost in credits:</strong> {ship[0].cost_in_credits}
                  </p>
                  <p className="m-5 text-xl text-gray">
                    <strong>Atmospheric speed:</strong>{" "}
                    {ship[0].max_atmosphering_speed}
                  </p>
                </div>
                <div className="flex flex-col items-start">
                  <p className="m-5 text-xl text-gray">
                    <strong>Manufacturer:</strong> {ship[0].manufacturer}
                  </p>
                  <p className="m-5 text-xl text-gray">
                    <strong>Length:</strong> {ship[0].length}
                  </p>
                  <p className="m-5 text-xl text-gray">
                    <strong>Crew:</strong> {ship[0].crew}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>

    
  );*/
}
function urlCreation(url) {
  let aux = url.split("/");
  const shipId = aux[aux.length - 2];

  const api = "https://starwars-visualguide.com/assets/img/starships/";

  return api + shipId + ".jpg";
}
