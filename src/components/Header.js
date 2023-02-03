import { Link } from "react-router-dom";
import logoPu from "../img/LogoPU.png";

const Header = () => {
  return (
    <header>
      <div className="to-center-header">
        <div className="all-header">
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

          <div className="menu">
            <nav>
              <Link
                to="/"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <ul>Accueil</ul>
              </Link>
              <Link
                to="/presentation"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <ul>Présentation</ul>
              </Link>
              <Link
                to="/project"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <ul>Projets</ul>
              </Link>
              <Link
                to="/contact"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <ul>Contact</ul>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
