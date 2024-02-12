import React, { useContext } from "react";
import { useDataProvider } from "./DataProvider";

const getAPIInfo = React.createContext();

export function useGetAPIInfo() {
  return useContext(getAPIInfo);
}

export function GetDifferentAPIInfo({ children }) {
  const { url } = useDataProvider();
  const methodAllStarships = () => {
    console.log("URL dentro getDiff...: ", url);
    return fetch("https://swapi.dev/api/starships/?page=1").then((response) =>
      response.json()
    );
  };

  const methodInfoShip = () => {
    console.log("vemos 2a vez urlShip: ", url);
    return fetch(url).then((response) => response.json());
  };

  return (
    <getAPIInfo.Provider value={{ methodAllStarships, methodInfoShip }}>
      {children}
    </getAPIInfo.Provider>
  );
}

//para la lista de naves
//const getAllStarships = () => {
//    return fetch("https://swapi.dev/api/starships/?page=1").then((response) =>
//      response.json()
//    );
//  };

//para la info de la nave
//() => {
//    return fetch(urlShip).then((response) => response.json());
//  }
