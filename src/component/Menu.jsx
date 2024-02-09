import { Link } from "react-router-dom";
import "../styles/Menu.css";

export function Menu() {
  return (
    <>
      <div className="menu-btn  p-3 ">
        <Link
          to="/"
          className="cursor-pointer menu-link text-2xl text-gray-light"
        >
          HOME
        </Link>
      </div>
      <div className="menu-btn p-3 ">
        <Link
          to="/ships-list"
          className="cursor-pointer menu-link text-2xl text-gray-light"
        >
          STARSHIPS
        </Link>
      </div>
    </>
  );
}
