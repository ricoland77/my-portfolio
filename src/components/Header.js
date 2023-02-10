import { Link } from "react-router-dom";
import logoPu from "../img/LogoPU.png";
import burgerPicto from "../img/burger-picto.png";

// import MenuBurger from "./MenuBurger";

const Header = ({ displayMenu, setDisplayMenu }) => {
  return (
    <header>
      <div className="to-center-header">
        <div className="all-header">
          {/* logo */}
          <div>
            <Link
              to="/"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <img className="logoPu" src={logoPu} alt="Logo Peace & Unity" />
            </Link>
          </div>

          {/* menu */}
          <nav className="navbar-links">
            <Link
              to="/"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <ul className="navbar-link">Accueil</ul>
            </Link>
            <Link
              to="/presentation"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <ul className="navbar-link">Présentation</ul>
            </Link>
            <Link
              to="/project"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <ul className="navbar-link">Projets</ul>
            </Link>
            <Link
              to="/contact"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <ul className="navbar-link">Contact</ul>
            </Link>
          </nav>
          <div
            className="menu-burger"
            onClick={() => {
              setDisplayMenu(!displayMenu);
            }}
          >
            <img className="burger" src={burgerPicto} alt="" />
          </div>
          {/* <MenuBurger /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
