import { Link } from "react-router-dom";
import Flipbook from "../components/Flipbook";

// Import images
import anonymous from "../img/anonymous-label-site.jpg";
import deliveroo from "../img/deliveroo.jpg";
import marvel from "../img/Marvel.png";
import netflix from "../img/netflix.jpg";
import pexels from "../img/pexels.jpg";
import punk from "../img/punk.png";
import rawg from "../img/rawg.png";
import vinted from "../img/vinted.png";

const Project = () => {
  return (
    <div className="container">
      <section>
        <div className="bg-img-three">
          <div className="all-name">
            <div className="my-name">
              <h1>Développeur</h1>
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
          passion pour le Développement et ma détermination à continuer à
          apprendre et à me perfectionner dans ce domaine passionnant.
        </p>
        <div className="all-projects-bis">
          <Link target="_blank" to={"https://anonymous-label.netlify.app/"}>
            <div className="project">
              <img src={anonymous} alt="Site Anonymous Label" />
            </div>
          </Link>
          <Link target="_blank" to={"https://pexels-api-ricoland.netlify.app"}>
            <div className="project">
              <img src={pexels} alt="Site Pexels API" />
            </div>
          </Link>
          <Link target="_blank" to={"https://punk-api-ricoland.netlify.app"}>
            <div className="project">
              <img src={punk} alt="Site Punk API" />
            </div>
          </Link>
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
        </div>
      </section>

      <section>
        <div className="bg-img-fourth">
          <div className="all-name">
            <div className="my-name">
              <h1>Infographiste</h1>
              <h2>Suite Adobe - QuarkXpress… </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="all-section-projects-bis">
        <h3 className="surtitle">Mes références</h3>
        <h2 className="title">Mon book</h2>
        <p className="article">
          Maquettiste, exécutant et photograveur… depuis la création graphique
          de logos à la création de magazines, plaquettes, cartes de visites,
          annonces presse, encarts publicitaires, mise en page de périodiques
          institutionnels, en passant par la photogravure comprenant les
          corrections chromatiques des visuels, détourages et montages de toute
          sorte, j’ai pu expérimenter durant 23 années au poste d’infographiste,
          chaque étape de la chaîne graphique.
          <br /> Ainsi, je prends le contrôle total d’un projet. La typographie
          est traitée dans le respect du code typographique et chaque visuel
          contrôlé et travaillé dans le format, la résolution et la chromie
          optimale.
        </p>
        <Flipbook />
      </section>
    </div>
  );
};

export default Project;
