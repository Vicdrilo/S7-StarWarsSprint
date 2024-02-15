/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";

const data = React.createContext();

export function useDataProvider() {
  return useContext(data);
}

export function DataProvider({ children }) {
  const [activeNav, setActiveNav] = useState("");

  const handleActiveNav = (id) => {
    setActiveNav(id);
  };

  const values = { activeNav, setActiveNav, handleActiveNav };

  return (
    <>
      <data.Provider value={values}>{children}</data.Provider>
    </>
  );
}
