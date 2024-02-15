/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";

const data = React.createContext();

export function useDataProvider() {
  return useContext(data);
}

export function DataProvider({ children }) {
  const [isOpen, onClose] = useState(false);
  const handleOnClose = () => onClose(!isOpen);

  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleFormOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [activeNav, setActiveNav] = useState("");

  const handleActiveNav = (id) => {
    setActiveNav(id);
  };

  const values = {
    activeNav,
    setActiveNav,
    handleActiveNav,
    isOpen,
    handleOnClose,
    formData,
    handleFormOnChange,
  };

  return (
    <>
      <data.Provider value={values}>{children}</data.Provider>
    </>
  );
}
