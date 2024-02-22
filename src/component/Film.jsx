import { useGetFilmsData } from "../context/ApiDataProvider";

export function Film() {
  const { filmsUrl, infoFilms } = useGetFilmsData();

  const pilotsElements = infoFilms.map((film, index) => {
    const imgUrl = urlCreation(filmsUrl[index]);

    return (
      <div
        key={index}
        className="pilot-container flex flex-col m-3 bg-gray-dark"
      >
        <img src={imgUrl} alt="" className="border-img" />
        <div className="flex flex-col justify-center items-center p-4">
          <h2 className="text-xl">{film.title}</h2>

          <p>Episode {film.episode_id}</p>
        </div>
      </div>
    );
  });
  return <div className="grid grid-cols-4">{pilotsElements}</div>;
}

function urlCreation(url) {
  let aux = url.split("/");
  const shipId = aux[aux.length - 2];

  const api = "https://starwars-visualguide.com/assets/img/films/";

  return api + shipId + ".jpg";
}
