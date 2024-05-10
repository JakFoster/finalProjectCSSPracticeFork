import { useState } from "react";
import "./headerComponent.css";
import logo from "../assets/logo.png";
import menuicon from "../assets/icons8-menu (1).svg";
import homeicon from "../assets/home-icon.svg";
import help from "../assets/help.png";
import createroute from "../assets/create-route.png";
import savedroutes from "../assets/saved-routes.png";
import { Link } from "react-router-dom";

export default function Header() {
  //state for the burger bar - so when true, it is showing
  const [showMenuBar, setShowMenuBar] = useState(false);

  return (
    <header className="header">
      {!showMenuBar && (
        <>
          <Link to={"/"}>
            <img className="header__logo" src={logo} alt="U-Plot logo"></img>
          </Link>
          <button
            className="header__openButton"
            onClick={() => {
              setShowMenuBar(!showMenuBar);
              //when click on this, we want the burger menu to show...
            }}
          >
            <img
              className="header__burger"
              src={menuicon}
              alt="Burger menu icon"
            ></img>
          </button>
        </>
      )}

      {showMenuBar && (
        <nav className="header__navigationMenu">
          <ul className="header__linksList">
            <Link className="header__link" to={"/"}>
              <li className="header__linkItem">HOME</li>
            </Link>
            <Link className="header__link" to={"../create-route"}>
              <li className="header__linkItem">CREATE ROUTE</li>
            </Link>
            <Link className="header__link" to={"../saved-routes"}>
              <li className="header__linkItem">SAVED ROUTES</li>
            </Link>
          </ul>
          <button
            className="header__closeButton"
            onClick={() => {
              setShowMenuBar(false);
            }}
          >
            X
          </button>
        </nav>
      )}
    </header>
  );
}
