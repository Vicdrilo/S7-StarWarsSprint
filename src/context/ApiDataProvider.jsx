import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

const getAPIInfo = React.createContext();

export function useGetAPIInfo() {
  return useContext(getAPIInfo);
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
      {children}
    </getAPIInfo.Provider>
  );
}
