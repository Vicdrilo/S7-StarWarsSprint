import star from "../assets/Captura.JPG";
import { Menu } from "./Menu";
import { Link } from "react-router-dom";
import "../styles/Header.css";

export function Header() {
  return (
    <>
      <div className="flex flex-nowrap justify-center header-container">
        <div className="flex justify-center w-1/3">
          <Link to="/" className="flex justify-center">
            <img src={star} alt="Star Wars Logo" className="h-full" />
          </Link>
        </div>
      </div>
      <div className="flex justify-center menu-container">
        <Menu />
      </div>
    </>
  );
}
