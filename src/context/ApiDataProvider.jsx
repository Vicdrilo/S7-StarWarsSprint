import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

//CONTEXTS////////////////////////////////////////
const getAPIInfo = React.createContext();
const getPilotsData = React.createContext();
const getFilmsData = React.createContext();

//HOOKS///////////////////////////////////////////
export function useGetAPIInfo() {
  return useContext(getAPIInfo);
}
export function useGetPilotsData() {
  return useContext(getPilotsData);
}
export function useGetFilmsData() {
  return useContext(getFilmsData);
}

//INFO DE PILOTOS/////////////////////////////////
function GetPilotsData({ children }) {
  //useStates y handlers//////////////////////////
  const [pilotUrl, setPilotUrl] = useState([]); //array con url
  const [infoPilots, setInfoPilots] = useState([]); //array con toda la info de la api

  const handlePilotUrl = (arrayUrl) => {
    setPilotUrl(arrayUrl);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requests = pilotUrl.map((url) =>
          fetch(url).then((res) => res.json())
        );
        const data = await Promise.all(requests);
        setInfoPilots(data);
      } catch (error) {
        console.log("ERROR FETCHING: ", error);
      }
    };
    fetchData();
  }, [pilotUrl]);

  return (
    <getPilotsData.Provider
      value={{
        pilotUrl,
        handlePilotUrl,
        infoPilots,
      }}
    >
      {children}
    </getPilotsData.Provider>
  );
}

//INFO DE PELICULAS/////////////////////////////////
function GetFilmsData({ children }) {
  //useStates y handlers//////////////////////////
  const [filmsUrl, setFilmsUrl] = useState([]); //array con url
  const [infoFilms, setInfoFilms] = useState([]); //array con toda la info de la api

  const handleFilmsUrl = (arrayUrl) => {
    setFilmsUrl(arrayUrl);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requests = filmsUrl.map((url) =>
          fetch(url).then((res) => res.json())
        );
        const data = await Promise.all(requests);
        setInfoFilms(data);
      } catch (error) {
        console.log("ERROR FETCHING: ", error);
      }
    };
    fetchData();
  }, [filmsUrl]);

  return (
    <getFilmsData.Provider
      value={{
        filmsUrl,
        handleFilmsUrl,
        infoFilms,
      }}
    >
      {children}
    </getFilmsData.Provider>
  );
}

export function GetDifferentAPIInfo({ children }) {
  const [url, setUrl] = useState(
    "https://swapi.dev/api/starships/?format=json"
  );

  const handleUrl = (url) => {
    setUrl(url);
  };

  const [urlShip, setUrlShip] = useState("");

  const handleUrlShip = (url) => {
    setUrlShip(url);
  };

  const { isPending, isError, data, error, refetch } = useQuery({
    queryKey: ["ships"],
    queryFn: async () => {
      const response = await fetch(url);
      return await response.json();
    },
  });

  useEffect(() => {
    url && refetch();
  }, [url]);

  return (
    <getAPIInfo.Provider
      value={{
        url,
        handleUrl,
        urlShip,
        handleUrlShip,
        isPending,
        isError,
        data,
        error,
      }}
    >
      <GetPilotsData>
        <GetFilmsData>{children}</GetFilmsData>
      </GetPilotsData>
    </getAPIInfo.Provider>
  );
}
