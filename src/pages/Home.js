import { Link } from "react-router-dom";
import Mail from "../components/Mail";

// Import images
import anonymous from "../img/anonymous-label-site.jpg";
import css from "../img/logos/CSS3.png";
import express from "../img/logos/express.png";
import fleche from "../img/fleche.ico";
import git from "../img/logos/git.png";
import html from "../img/logos/HTML5.png";
import inDesign from "../img/logos/InDesign.png";
import illustrator from "../img/logos/Illustrator.png";
import javascript from "../img/logos/javascript.png";
import marvel from "../img/Marvel.png";
import mongodb from "../img/logos/mongodb.png";
import nodejs from "../img/logos/nodejs.png";
import photoshop from "../img/logos/Photoshop.png";
import punk from "../img/punk.png";
import quark from "../img/logos/QuarkXpress.png";
import rawg from "../img/rawg.png";
import react from "../img/logos/React.png";
import smartphone from "../img/smartphone.jpg";
import vinted from "../img/vinted.png";

const Home = () => {
  return (
    <main className="container">
      <section>
        <div className="bg-img-one">
          <div className="all-name">
            <div className="my-name">
              <h1>Eric Allain</h1>
              <h2>Développeur Web & Mobile</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="all-section">
        <div className="left-section">
          <h3 className="surtitle">à propos de moi</h3>
          <h2 className="title">Qui suis-je ?</h2>
          <p className="article">
            Actuellement en reconversion professionnelle, je viens de terminer
            avec succès le Bootcamp proposé par « Le Reacteur » à Paris, où j’ai
            acquis les compétences nécessaires pour devenir Développeur Web et
            Mobile full stack. Je suis désormais à la recherche d’un stage de 6
            mois pour mettre en pratique mes connaissances et développer mes
            compétences en tant que Développeur.
          </p>
        </div>

        <div className="btn-cv">
          <Link
            target="_blank"
            className="link"
            to={
              "https://drive.google.com/file/d/1ZUJ6qKSMAv7TGeRRILwvxUfR9mEWtvL1/view?usp=drive_link"
            }
          >
            <img className="arrow" src={fleche} alt="Arrow pictogram" />
            <p>Mon CV</p>
          </Link>
        </div>
      </section>

      <div className="fix-scroll-img">
        <div className="scroll-img"></div>
      </div>

      <section className="competences">
        <div className="title-competences">
          <h3 className="surtitle">en savoir plus</h3>
          <h2 className="title">Sur mon savoir-faire !</h2>
        </div>

        <div className="all-logos">
          <div className="logos-competences">
            <img src={react} alt="Picto react" />
            <p>React</p>
          </div>
          <div className="logos-competences">
            <img src={javascript} alt="Picto Javascript" />
            <p>JavaScript</p>
          </div>
          <div className="logos-competences">
            <img src={nodejs} alt="Picto nodejs" />
            <p>Node.js</p>
          </div>
          <div className="logos-competences">
            <img src={html} alt="Picto html" />
            <p>HTML5</p>
          </div>
          <div className="logos-competences">
            <img src={css} alt="Picto css" />
            <p>CSS3</p>
          </div>
          <div className="logos-competences">
            <img src={express} alt="Picto express" />
            <p>Express</p>
          </div>
          <div className="logos-competences">
            <img src={mongodb} alt="Picto mongodb" />
            <p>MongoDB</p>
          </div>
          <div className="logos-competences">
            <img src={git} alt="Picto git" />
            <p>git</p>
          </div>
          <div className="logos-competences">
            <img src={photoshop} alt="Picto photoshop" />
            <p>Photoshop</p>
          </div>
          <div className="logos-competences">
            <img src={illustrator} alt="Picto illustrator" />
            <p>Illustrator</p>
          </div>
          <div className="logos-competences">
            <img src={quark} alt="Picto quark" />
            <p>QuarkXpress</p>
          </div>
          <div className="logos-competences">
            <img src={inDesign} alt="Picto inDesign" />
            <p>InDesign</p>
          </div>
        </div>
      </section>

      <div className="scroll-img02"></div>

      <section className="all-section-projects">
        <div className="left-section">
          <h3 className="surtitle">Les réalisations</h3>
          <h2 className="title">De mes projets</h2>
        </div>
        <div className="all-projects">
          <Link target="_blank" to={"https://anonymous-label.netlify.app"}>
            <div className="project">
              <img src={anonymous} alt="Site Anonymous Label" />
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
        </div>
      </section>

      <section className="all-section-contact">
        <div className="left-section-contact">
          <h3 className="surtitle">Contactez-moi</h3>
          <h2 className="title">Une question ?</h2>
          <div className="my-mail">
            <Mail />
          </div>
        </div>

        <div className="right-section-contact">
          <img className="visuel-contact" src={smartphone} alt="Macbook" />
        </div>
      </section>
    </main>
  );
};

export default Home;
