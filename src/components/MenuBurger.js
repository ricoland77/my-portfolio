import { Link } from "react-router-dom";

const MenuBurger = ({ setDisplayMenu }) => {
  return (
    <div className="app">
      <div
        className="floating-menu-root"
        onClick={() => {
          setDisplayMenu(false);
        }}
      >
        <div
          className="floating-menu"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <button
            className="btn-close"
            onClick={() => {
              setDisplayMenu(false);
            }}
          >
            X
          </button>
          <nav className="floating-menu-links">
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
        </div>
      </div>
    </div>
  );
};

export default MenuBurger;
