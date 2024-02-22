import { Outlet, Navigate } from "react-router-dom";
import { useDataProvider } from "../context/DataProvider";
import { useAuthUser } from "../context/AuthContextProvider";
import { useEffect } from "react";

export function PrivateRoutes() {
  const { handleOnClose } = useDataProvider();
  const { logged } = useAuthUser();

  useEffect(() => {
    if (!logged) {
      // Si el usuario no está autenticado, redirigir a la ruta "/"
      handleOnClose(); // Cambiar el estado onClose aquí
    }
  }, [logged, handleOnClose]);

  return <>{logged ? <Outlet /> : <Navigate to="/" />}</>;
}
