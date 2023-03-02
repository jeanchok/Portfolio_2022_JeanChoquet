import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Particules from '../components/Particules';



const Portfolio = () => {
    const [isLoading2, setIsLoading2] = useState(true);
    const [projectActive1, setProjectActive1] = useState(false);
    const [projectActive2, setProjectActive2] = useState(false);
    const [projectActive3, setProjectActive3] = useState(false);



    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading2(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="main">
            <header>
                <Navigation />
            </header>
            <div className='portfolioContainer'>
                <h2 className={isLoading2 ? 'portfolioTitle tracking-in-contract-bck' : 'portfolioTitle linear-wipe'}>Projets</h2>
                <p className='tracking-in-expand-fwd-top'>Découvrez mes projets réalisés en tant que développeur web.</p>



                <div className='cardContainer'>
                    <div className={projectActive1 ? 'showProject' : 'hideProject'}>
                        <div className='portfolio__TitleContainer'>
                            <img className='portfolio__ImgTitle' src="./logo-openclassroom.jpg" alt="openclassrooms logo" />
                            <h3>Réseau social d'entreprise</h3>
                        </div>
                        <div className='portfolio__technoSection'>
                            <h4>Technologies utilisées</h4>
                            <div className='portfolio__technoContainer'>
                                <img className='portfolio__technoImg' src="./58482ee4cef1014c0b5e4a75 (2).png" alt="sequelize" />
                                <img className='portfolio__technoImg' src="./icons8-css3-48.png" alt="css3" />
                                <img className='portfolio__technoImg' src="./icons8-html-5-48.png" alt="html5" />
                                <img className='portfolio__technoImg' src="./icons8-réagir-40.png" alt="react" />
                                <img className='portfolio__technoImg' src="./kisspng-node-js-javascript-express-js-portable-network-gra-mixin-software-5b7c7247ce6172.8523259515348823758453.png" alt="nodejs" />
                            </div>
                        </div>
                        <div className='portfolio__TextContainer'>
                            <h4>Étude de cas</h4>
                            <p>Projet de fin de formation OpenClassrooms : Création d'un réseau social d'entreprise
                                où les utilisateurs pouvaient échanger des messages et des images sur un fil d'actualité commun.
                                Un rôle d'administrateur pouvait être attribué pour la modération des posts et des utilisateurs.
                                Ce projet étant "From scratch", c'est-à-dire qu'il a nécéssité les création de la base de donnée
                                avec Sequelize, de l'API avec Express et Node.js, et de l'interface utilisateur avec React.js.
                            </p>
                            <a href="https://github.com/jeanchok/Projet_7_Groupomania_Choquet_Jean">Voir le projet sur GitHub</a>
                        </div>
                        <button onClick={() => setProjectActive1(!projectActive1)} className='portfolio__backButton'>
                            <img src="./arrow.png" alt="back" />
                        </button>
                    </div>


                    {/* <div className={projectActive2 ? 'showProject' : 'hideProject'}>
                        <div className='portfolio__TitleContainer'>
                            <img className='portfolio__ImgTitle' src="./logotrans.png" alt="d2m logo" />
                            <h3>Site vitrine pour un professionnel</h3>
                        </div>
                        <div className='portfolio__technoSection'>
                            <h4>Technologies utilisées</h4>
                            <div className='portfolio__technoContainer'>

                                <img className='portfolio__technoImg' src="./icons8-css3-48.png" alt="css3" />
                                <img className='portfolio__technoImg' src="./icons8-html-5-48.png" alt="html5" />
                                <img className='portfolio__technoImg' src="./Wordpress_Blue_logo.png" alt="Wordpress" />

                            </div>
                        </div>
                        <div className='portfolio__TextContainer'>
                            <h4>Étude de cas</h4>
                            <p>Réalisation d'un site vitrine pour un revendeur de machine à bois. J'ai dû m'adapter à son budget
                                en modifiant un thème gratuit pour satisfaire les besoins de son entreprise locale.
                            </p>
                            <a href="https://d2m-machine-bois.fr/">Voir le projet</a>
                        </div>
                        <button onClick={() => setProjectActive2(!projectActive2)} className='portfolio__backButton'>
                            <img src="./arrow.png" alt="back" />
                        </button>
                    </div> */}

                    <div className={projectActive2 ? 'showProject' : 'hideProject'}>
                        <div className='portfolio__TitleContainer'>
                            <img className='portfolio__ImgTitle' src="./camion.png" alt="cap logo" />
                            <h3>Site vitrine pour un professionnel</h3>
                        </div>
                        <div className='portfolio__technoSection'>
                            <h4>Technologies utilisées</h4>
                            <div className='portfolio__technoContainer'>

                                <img className='portfolio__technoImg' src="./icons8-css3-48.png" alt="css3" />
                                <img className='portfolio__technoImg' src="./icons8-html-5-48.png" alt="html5" />
                                <img className='portfolio__technoImg' src="./wix.png" alt="wix" />
                                <img className='portfolio__technoImg' src="./js.png" alt="js" />


                            </div>
                        </div>
                        <div className='portfolio__TextContainer'>
                            <h4>Étude de cas</h4>
                            <p>Réalisation d'un site vitrine pour un Camion à Pizzas. Le principal travail réalisé était la refonte totale du design. Le SEO devait
                                être également pris en compte. Il est effectivement classé n°1 sur le terme "Camion à Pizzas".
                            </p>
                            <a href="https://www.lecamionapizzas.com/">Voir le projet</a>
                        </div>
                        <button onClick={() => setProjectActive2(!projectActive2)} className='portfolio__backButton'>
                            <img src="./arrow.png" alt="back" />
                        </button>
                    </div>


                    <div className={projectActive3 ? 'showProject' : 'hideProject'}>
                        <div className='portfolio__TitleContainer'>
                            <img className='portfolio__ImgTitle' src=".\logo webzh white.png" alt="d2m logo" />
                            <h3>Site vitrine mon agence web familiale</h3>
                        </div>
                        <div className='portfolio__technoSection'>
                            <h4>Technologies utilisées</h4>
                            <div className='portfolio__technoContainer'>

                                <img className='portfolio__technoImg' src="./icons8-css3-48.png" alt="css3" />
                                <img className='portfolio__technoImg' src="./icons8-html-5-48.png" alt="html5" />
                                <img className='portfolio__technoImg' src="./next_logo.png" alt="Nextjs" />
                                <img className='portfolio__technoImg' src="./tailwindcss-ar21.png" alt="Tailwind" />
                            </div>
                        </div>
                        <div className='portfolio__TextContainer'>
                            <h4>Étude de cas</h4>
                            <p>Réalisation d'un site vitrine pour l'agence web crée par ma soeur et moi.
                                J'ai fais le choix de Next.js pour développer ce projet, pour optimiser le SEO
                                du site web (Grâce au "serveur side rendering"). J'ai également fais le choix
                                de Tailwind CSS pour réduite le temps de développement.
                            </p>
                            <a href="https://www.webzh.site/">Voir le projet</a>
                        </div>
                        <button onClick={() => setProjectActive3(!projectActive3)} className='portfolio__backButton'>
                            <img src="./arrow.png" alt="back" />
                        </button>
                    </div>


                    <div
                        className='card'>
                        <div className='cardOver'>
                            <h4 className='cardOver__Title'>Formation OpenClassrooms</h4>
                            <button className='cardOver__button'
                                onClick={() => setProjectActive1(!projectActive1)}
                            >
                                <img className='cardOver__buttonImg' src=".\external-link (1).png" alt="carré flêche" /></button>
                        </div>
                        <img className='portfolioImage' src="./mockup website p7.png" alt="logo-openclassroom" />
                    </div>
                    <div
                        className='card'>
                        <div className='cardOver'>
                            <h4 className='cardOver__Title'>Projet Professionnel</h4>
                            <button className='cardOver__button' onClick={() => setProjectActive2(!projectActive2)}><img className='cardOver__buttonImg' src=".\external-link (1).png" alt="carré flêche" /></button>
                        </div>
                        <img className='portfolioImage' src="./propjetpro.PNG" alt="logo-projet-professionnel" />
                    </div>
                    <div
                        className='card'>
                        <div className='cardOver'>
                            <h4 className='cardOver__Title'>Projet Personnel</h4>
                            <button className='cardOver__button' onClick={() => setProjectActive3(!projectActive3)}><img className='cardOver__buttonImg' src=".\external-link (1).png" alt="carré flêche" /></button>
                        </div>
                        <img className='portfolioImage' src="./webzh mockup.PNG" alt="logo webzh agence" />
                    </div>

                </div>



                {/* <div className='portfolio text-focus-in'>
                    <div className='flip-card'>
                        <div className='flip-card-inner'>
                            <div className='flip-card-front OC'>
                                <img src="./logo-openclassroom.jpg" alt="logo-openclassroom" />
                            </div>
                            <div className='flip-card-back OCback'>
                                <img src="./icon-above-font.png" alt="logo-groupomania" />
                                <h4>Réseau social d'entreprise :</h4>
                                <p>Création de compte, posts, likes, gestion des utilisateurs...</p>
                                <a href='' target='_blank' rel="noopener noreferrer">Voir le site</a>
                            </div>
                        </div>
                    </div>
                    <div className='flip-card'>
                        <div className='flip-card-inner'>
                            <div className='flip-card-front'>
                                <h4>Projets Professionnels</h4>

                            </div>
                            <div className='flip-card-back'>
                                <img src="./logotrans.png" alt="logo-projet-professionnel" />
                                <a href='https://d2m-machine-bois.fr/' target='_blank' rel="noopener noreferrer">
                                    <h4>Visiter le site</h4></a>
                            </div>
                        </div>
                    </div>
                    <div className='flip-card'>
                        <div className='flip-card-inner'>
                            <div className='flip-card-front'>
                                <h4>Mes Projets</h4>
                            </div>
                            <div className='flip-card-back'>
                                <h4>En cours ...</h4>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div >
            <Particules />
            <Footer />
        </div >
    );
};

export default Portfolio;