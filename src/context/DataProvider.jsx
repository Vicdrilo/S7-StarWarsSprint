/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";

const data = React.createContext();

export function useDataProvider() {
  return useContext(data);
}

export function DataProvider({ children }) {
  const [showShipsList, setShipsList] = useState(false);

  const handleShowList = () => {
    setShipsList(!showShipsList);
  };
  return (
    <>
      <data value={{ showShipsList, handleShowList }}>{children}</data>
    </>
  );
}
