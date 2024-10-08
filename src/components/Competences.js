import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Sphere from "./Sphere";
import Particules from "../components/Particules";

const Competences = () => {
  const [isLoading2, setIsLoading2] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading2(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navigation />

      <div className="main">
        <div className="competencesContainer">
          <div className="competencesContainer__textHeader">
            <h2
              className={
                isLoading2
                  ? "portfolioTitle tracking-in-contract-bck"
                  : "portfolioTitle linear-wipe"
              }
            >
              Compétences
            </h2>
            <h3 className="tracking-in-expand-fwd-top">
              Développeur freelance
            </h3>
            <p className="text-focus-in">
              Vous êtes à la recherche d'un développeur web polyvalent pour
              réaliser votre projet ? Je réalise des missions diverses dans le
              domaine du web, de l'intégration et du développement
              d'applications web. N'hésitez pas à me{" "}
              <a href="/contact">contacter</a> pour que nous donnions vie à vos
              idées !
            </p>
          </div>
          <div className="competencesContainer__competences">
            <div className="competencesContainer__competences__cards">
              <div className="competencesContainer__competences__cards--front puff-in-center1">
                <h4>Frontend</h4>
                <h5>Langages & Frameworks</h5>
                <p>
                  HTML, CSS, Sass, Tailwind, Javascript, Typescript, React,
                  Next.js, Angular
                </p>
              </div>
              <div className="competencesContainer__competences__cards--back puff-in-center2">
                <h4>Backend</h4>
                <h5>Langages & Frameworks</h5>
                <p>NodeJS, MySQL, Asp Net Core, C#</p>
                <p>Mongoose, Sequelize</p>
              </div>
              <div className="competencesContainer__competences__cards--platformes puff-in-center3">
                <h4>Plateformes</h4>
                <h5>Front & Back</h5>
                <p>Wordpress, Shopify</p>
              </div>
            </div>
            <div className="competencesContainer__competences__cards--globe">
              <div className="competencesContainer__competences__cards--globeHideAnimation"></div>
              <Sphere isLoading2={isLoading2} />
              {/* <div className='competencesContainer__competences__cards--buttonContainer'>
                            <button>Mon CV</button>
                        </div> */}
            </div>
          </div>
        </div>
        <Particules />
        <Footer />
      </div>
    </>
  );
};

export default Competences;
