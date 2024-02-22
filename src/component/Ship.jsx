import { useState } from "react";
import errorImg from "../assets/opcionSinFoto2.jpg";
import { useGetAPIInfo } from "../context/ApiDataProvider";

export function Ship({ data }) {
  const { urlShip } = useGetAPIInfo();

  const ship = data;

  //foto de la nave
  const imgUrl = urlCreation(urlShip);
  const [img, setImg] = useState(imgUrl);
  const handleErrorImg = () => {
    setImg(errorImg);
  };
  return (
    <>
      <div className="flex justify-around h-1/2">
        <div className="w-1/2 mb-4">
          <img src={img} alt="" className="w-full" onError={handleErrorImg} />
        </div>
        <div className="info-sh-container w-1/2  text-left bg-gray-dark p-5 mb-4">
          <h1 className="text-gray-light">{ship.name}</h1>
          <div className="details flex flex-col">
            <p className="text-2xl text-gray mt-3 mb-1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
              consequatur pariatur deleniti fugit consequuntur! Ipsum aspernatur
              pariatur fuga unde reiciendis?
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
    </>
  );
}

function urlCreation(url) {
  let aux = url.split("/");
  const shipId = aux[aux.length - 2];

  const api = "https://starwars-visualguide.com/assets/img/starships/";

  return api + shipId + ".jpg";
}
{
  /* <div key={index} className="flex justify-around h-1/2">
  <div className="w-1/2 mb-4">
    <img src={img} alt="" className="w-full" onError={handleErrorImg} />
  </div>
  <div className="info-sh-container w-1/2  text-left bg-gray-dark p-5 mb-4">
    <h1 className="text-gray-light">{ship.name}</h1>
    <div className="details flex flex-col">
      <p className="text-2xl text-gray mt-3 mb-1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
        consequatur pariatur deleniti fugit consequuntur! Ipsum aspernatur
        pariatur fuga unde reiciendis?
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
            <strong>Atmospheric speed:</strong> {ship.max_atmosphering_speed}
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
</div>; */
}
