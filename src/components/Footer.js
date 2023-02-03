import link from "../img/logos/linkedin.png";
import github from "../img/logos/github-blanc.png";
import envelope from "../img/logos/envelope.png";

const Footer = () => {
  return (
    <footer>
      <div className="to-center-footer">
        <div className="all-footer">
          <nav className="footer-contact">
            <ul>
              <a
                href="mailto:ricoland@hotmail.fr"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="logos-footer"
                  src={envelope}
                  alt="Picto enveloppe"
                />
              </a>
            </ul>
            <ul>
              <a
                href="https://www.linkedin.com/in/eric-allain-440344247/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="logos-footer" src={link} alt="Logo LinkedIn" />
              </a>
            </ul>
            <ul>
              <a
                href="https://github.com/ricoland77"
                target="_blank"
                rel="noreferrer"
              >
                <img className="logos-footer" src={github} alt="Logo GitHub" />
              </a>
            </ul>
          </nav>
          <p className="sign">portfolio 2023 - by ricoland©</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
