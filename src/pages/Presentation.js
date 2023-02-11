// Import images
import css from "../img/logos/CSS3.png";
import express from "../img/logos/express.png";
import git from "../img/logos/git.png";
import html from "../img/logos/HTML5.png";
import inDesign from "../img/logos/InDesign.png";
import illustrator from "../img/logos/Illustrator.png";
import javascript from "../img/logos/javascript.png";
import mongodb from "../img/logos/mongodb.png";
import nodejs from "../img/logos/nodejs.png";
import photoshop from "../img/logos/Photoshop.png";
import quark from "../img/logos/QuarkXpress.png";
import react from "../img/logos/React.png";

const Presentation = () => {
  return (
    <div className="container">
      <section>
        <div className="bg-img-two">
          <div className="all-name">
            <div className="my-name">
              <h1>Le Reacteur</h1>
              <h2>Bootcamp - Développeur Web</h2>
            </div>
          </div>
        </div>

        <div className="section-presentation">
          <h3 className="surtitle">Infographiste</h3>
          <h2 className="title">Un bagage technique et des valeurs fortes</h2>
          <p className="article">
            Au cours des 23 dernières années, j’ai exercé en tant
            qu’infographiste Print, travaillant avec passion sur des projets
            pour des clients variés dans le monde de l'Édition. Cette expérience
            a été riche en défis, en découvertes et en apprentissages, me
            permettant de développer des compétences techniques solides, mais
            aussi des valeurs fortes qui guideront mon parcours à venir.
            L'infographie Print est un métier exigeant qui requiert une grande
            précision et une attention constante aux détails. Au fil des ans,
            j’ai appris à maîtriser les différents outils nécessaires pour
            réaliser des travaux de qualité, allant de la mise en page de livres
            et de magazines, à la création d'affiches et de bannières
            publicitaires.
            <br />
            Mais cette expérience ne m'a pas seulement développé des compétences
            techniques ; elle m’a aussi permis de développer des valeurs fortes
            telles que le sens de l’écoute, la capacité à travailler en équipe
            et la rigueur professionnelle. C’est grâce à ces valeurs que j’ai pu
            livrer des projets de qualité à mes clients, en respectant les
            délais et les budgets impartis.
            <br />
            Aujourd'hui, je me tourne vers un nouveau défi en entamant une
            reconversion professionnelle en tant que{" "}
            <strong>Développeur Web</strong> . Mais les compétences techniques
            et les valeurs fortes acquises au cours de ses années en tant
            qu'Infographiste constitueront un atout précieux pour mon nouveau
            parcours.
          </p>
        </div>

        <div className="scroll-img03"></div>

        <div className="section-presentation">
          <h3 className="surtitle">Compétences</h3>
          <h2 className="title">Elles sont comme le bon vin…</h2>
          <ul className="liste-ul">
            <li className="disc">
              • JavaScript avec Node.js : Variables, conditions, boucles,
              fonctions et callback...
            </li>
            <li>• Front-end : HTML5, CSS3, React.js, React Native.</li>
            <li>• Back-end : Serveur Express, API, Base de Données MongoDB.</li>
          </ul>
        </div>

        <section className="presentation-competences">
          <div className="box-logos">
            <div className="presentation-all-logos">
              <div className="presentation-logos">
                <img src={react} alt="Picto react" />
                <a
                  href="https://fr.reactjs.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  React
                </a>
              </div>
              <div className="presentation-logos">
                <img src={javascript} alt="Picto Javascript" />
                <a
                  href="https://www.w3schools.com/js/default.asp"
                  target="_blank"
                  rel="noreferrer"
                >
                  JavaScript
                </a>
              </div>

              <div className="presentation-logos">
                <img src={nodejs} alt="Picto nodejs" />
                <a
                  href="https://nodejs.org/fr/docs/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Node.js
                </a>
              </div>
              <div className="presentation-logos">
                <img src={html} alt="Picto html" />
                <a
                  href="https://developer.mozilla.org/fr/docs/Glossary/HTML5"
                  target="_blank"
                  rel="noreferrer"
                >
                  HTML5
                </a>
              </div>
              <div className="presentation-logos">
                <img src={css} alt="Picto css" />
                <a
                  href="https://www.w3schools.com/cssref/index.php"
                  target="_blank"
                  rel="noreferrer"
                >
                  CSS3
                </a>
              </div>
              <div className="presentation-logos">
                <img src={express} alt="Picto express" />
                <a
                  href="https://expressjs.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Express
                </a>
              </div>
              <div className="presentation-logos">
                <img src={mongodb} alt="Picto mongodb" />
                <a
                  href="https://www.mongodb.com/docs/"
                  target="_blank"
                  rel="noreferrer"
                >
                  MongoDB
                </a>
              </div>
              <div className="presentation-logos">
                <img src={git} alt="Picto git" />
                <a
                  href="https://git-scm.com/doc"
                  target="_blank"
                  rel="noreferrer"
                >
                  git
                </a>
              </div>
              <div className="presentation-logos">
                <img src={photoshop} alt="Picto photoshop" />
                <a
                  href="https://helpx.adobe.com/fr/photoshop/user-guide.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Photoshop
                </a>
              </div>
              <div className="presentation-logos">
                <img src={illustrator} alt="Picto illustrator" />
                <a
                  href="https://helpx.adobe.com/fr/illustrator/user-guide.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Illustrator
                </a>
              </div>
              <div className="presentation-logos">
                <img src={quark} alt="Picto quarkXpress" />
                <a
                  href="https://www.quark.com/documentation/quarkxpress/2023/english/User%20Guide/"
                  target="_blank"
                  rel="noreferrer"
                >
                  QuarkXpress
                </a>
              </div>
              <div className="presentation-logos">
                <img src={inDesign} alt="Picto inDesign" />
                <a
                  href="https://helpx.adobe.com/fr/indesign/user-guide.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Indesign
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="section-presentation">
          <h3 className="surtitle">Formation</h3>
          <h2 className="title">Le Reacteur - Bootcamp</h2>
          <p className="article">
            Après toutes ces années, j’ai décidé de me lancer dans une nouvelle
            aventure professionnelle en suivant le <strong>Bootcamp</strong>{" "}
            proposé par <strong>Le Reacteur</strong> à Paris. Cette formation de
            haut niveau m’a permis de me familiariser avec les différents outils
            et technologies du codage et de développer de solides bases en
            programmation. Cette reconversion professionnelle était motivée par
            un désir de relever de nouveaux défis et de travailler sur des
            projets plus stimulants. J’ai toujours eu une passion pour les
            nouvelles technologies et la programmation, et cette formation m’a
            offert l’occasion de la concrétiser. <br />
            Aujourd’hui, je suis{" "}
            <strong>
              à la recherche d'un stage de 6 mois en tant que Développeur Web &
              Mobile
            </strong>{" "}
            afin de mettre en pratique mes connaissances et de développer mes
            compétences. Je suis convaincu que ce stage sera l’occasion pour moi
            de me perfectionner davantage, de découvrir de nouvelles méthodes de
            travail, et de contribuer à l’entreprise qui m’accueillera.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Presentation;
