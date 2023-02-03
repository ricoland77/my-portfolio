import { Link } from "react-router-dom";

// Import images
import deliveroo from "../img/deliveroo.jpg";
import marmiton from "../img/marmiton.jpg";
import marvel from "../img/Marvel.png";
import netflix from "../img/netflix.jpg";
import rawg from "../img/rawg.png";
import vinted from "../img/vinted.png";

const Project = () => {
  return (
    <div className="container">
      <section>
        <div className="bg-img-three">
          <div className="all-name">
            <div className="my-name">
              <h1>Full Stack</h1>
              <h2>React - JavaScript - Node.js</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="all-section-projects-bis">
        <h3 className="surtitle">Mes projets</h3>
        <h2 className="title">Première esquisse</h2>
        <p className="article">
          Lors de ma formation de Développeur Web & Mobile, j'ai participé à de
          nombreux projets qui m'ont permis de mettre en pratique les
          compétences que j'ai acquises au cours de cette formation intense.
          J'ai démontré un engagement sans faille pour acquérir de solides
          compétences en Développement, ce qui m'a permis de travailler sur des
          projets passionnants et stimulants. <br />
          Ces projets ont été des opportunités incroyables pour moi de
          développer mes compétences dans ce secteur, et de démontrer ma
          capacité à résoudre des défis complexes. Ils ont également renforcé ma
          passion pour le Dev et ma détermination à continuer à apprendre et à
          grandir dans ce domaine passionnant.
        </p>
        <div className="all-projects-bis">
          <Link target="_blank" to={"https://rawg-api-ricoland.netlify.app"}>
            <div className="project">
              <img src={rawg} alt="Site Rawg" />
            </div>
          </Link>
          <Link target="_blank" to={"https://vinted-api-ricoland.netlify.app"}>
            <div className="project">
              <img src={vinted} alt="Site Vinted" />
            </div>
          </Link>
          <Link
            target="_blank"
            to={"https://marvel-api-ricoland.netlify.app/characters"}
          >
            <div className="project">
              <img src={marvel} alt="Site Marvel" />
            </div>
          </Link>
          <Link
            target="_blank"
            to={"https://deliveroo-front-ricoland.netlify.app/"}
          >
            <div className="project">
              <img src={deliveroo} alt="Site Deliveroo" />
            </div>
          </Link>
          <Link target="_blank" to={"https://netflix-ricoland.netlify.app/"}>
            <div className="project">
              <img src={netflix} alt="Site Netflix" />
            </div>
          </Link>
          <Link
            target="_blank"
            to={"https://marmiton-by-ricoland.netlify.app/"}
          >
            <div className="project">
              <img src={marmiton} alt="Site Marmiton" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Project;
