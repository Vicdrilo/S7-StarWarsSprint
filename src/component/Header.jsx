import star from "../assets/Captura.JPG";
import { Menu } from "./Menu";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSquareFacebook,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCircleUser,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useDataProvider } from "../context/DataProvider";
import { FormModal } from "./FormModal";
import { useAuthUser } from "../context/AuthContextProvider";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";

export function Header() {
  const {
    activeNav,
    setActiveNav,
    handleActiveNav,
    isOpen,
    handleOnClose,
    formData,
    handleFormOnChange,
  } = useDataProvider();

  const { logged, setLogged } = useAuthUser();

  const loginBox = logged ? (
    <div
      className="cursor-pointer square-right-btn"
      onClick={() => {
        signOut(auth);
        setLogged(null);
      }}
    >
      <FontAwesomeIcon icon={faCircleUser} style={{ color: "green" }} /> LOG OUT
    </div>
  ) : (
    <div className="cursor-pointer square-right-btn" onClick={handleOnClose}>
      <FontAwesomeIcon icon={faCircleUser} /> LOGIN
    </div>
  );

  return (
    <>
      <div className="flex flex-nowrap justify-center header-container">
        <div className="flex items-start justify-center w-1/3">
          <FontAwesomeIcon
            icon={faInstagram}
            className="media-icon cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faSquareFacebook}
            className="media-icon cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faXTwitter}
            className="media-icon cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faYoutube}
            className="media-icon cursor-pointer"
          />
        </div>
        <div className="flex justify-center w-1/3">
          <Link to="/" className="flex justify-center">
            <img src={star} alt="Star Wars Logo" className="h-full" />
          </Link>
        </div>
        <div className="flex items-start justify-center w-1/3">
          <div className="cursor-pointer square-right-btn">
            <FontAwesomeIcon icon={faMagnifyingGlass} /> SEARCH
          </div>
          {loginBox}
          <FormModal />
        </div>
      </div>
      <div className="flex justify-center menu-container">
        <Menu />
      </div>
    </>
  );
}
