import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Particules from '../components/Particules';
import ModalProjects from '../components/ModalProjects';
import ProjectCardL from '../components/ProjectCardL';
import ProjectCardS from '../components/ProjectCardS';



const Portfolio = () => {
    const [isLoading2, setIsLoading2] = useState(true);
    const [projectActive1, setProjectActive1] = useState(false);
    const [projectActive2, setProjectActive2] = useState(false);
    const [projectActive3, setProjectActive3] = useState(false);

    const [modalActive, setModalActive] = useState(false);
    const [propsModal, setPropsModal] = useState();


    const projectsApp = [
        {
            putFirst: true,
            name: `Réseau social d'entreprise`,
            logoSrc: './logo-openclassroom.jpg',
            github: 'https://github.com/jeanchok/Projet_7_Groupomania_Choquet_Jean',
            link: '',
            text: `Projet de fin de formation OpenClassrooms : Création d'un réseau social d'entreprise où les utilisateurs pouvaient échanger des messages et des images sur un fil d'actualité commun. Un rôle d'administrateur pouvait être attribué pour la modération des posts et des utilisateurs. Ce projet étant "From scratch", c'est-à-dire qu'il a nécéssité les création de la base de donnée avec Sequelize, de l'API avec Express et Node.js, et de l'interface utilisateur avec React.js.`,
            mainTechnos: ['React', 'NodeJS', 'Sequelize', 'Sass'],
            allTechnos: ['React', 'NodeJS', 'Sequelize', 'Sass']
        },
        {
            putFirst: false,
            name: 'PopCorn Games (bientôt)',
            logoSrc: './android-chrome-512x512.png',
            github: '',
            link: '',
            text: `J'ai réalisé un jeu multijoueurs en ligne qui reprend le jeu icônique Picass de l'émission POPCORN sur twitch (qui sera bientôt disponible je l'espères).
        Les règles du jeu : chacun son tour, l'un des joueur doit faire deviner une expression française en dessinnant, plus les autres joueurs devinent tôt et plus ils ont de points !`,
            mainTechnos: ['React', 'Tailwind'],
            allTechnos: ['React', 'Tailwind']
        }
    ]

    const projectsSite = [
        {
            putFirst: true,
            name: `Agatha Festival`,
            logoSrc: './têteDragon.webp',
            capture: './agatha capture (1).webp',
            github: 'https://github.com/jeanchok/Agatha-Site',
            link: 'https://www.agathafestival.fr/',
            text: `Réalisation d'un site pour un festival. J'ai tout réaliser : du design à la configuration de l'API avec Strapi en passant évidemment par le frontend.
            Le plus gros challenge de ce projet était de prévoir la mise en page qui changeait au fur et à mesure de l'annonce des artistes et des différentes informations.`,
            mainTechnos: ['React', 'ViteJS', 'Sass'],
            allTechnos: ['React', 'ViteJS', 'Sass', 'HTML5']
        },
        {
            putFirst: false,
            name: `Le Camion à Pizzas`,
            logoSrc: './camion.png',
            github: '',
            link: 'https://www.lecamionapizzas.com/',
            text: `Réalisation d'un site vitrine pour un Camion à Pizzas. Le principal travail réalisé était la refonte totale du design. Le SEO devait être également pris en compte. Il est effectivement classé n°1 sur le terme "Camion à Pizzas".`,
            mainTechnos: ['JS', 'Wix'],
            allTechnos: ['JS', 'Wix', 'HTML5', 'CSS3']
        },
        {
            putFirst: false,
            name: `Agence Webzh`,
            logoSrc: './logo webzh white.png',
            github: 'https://github.com/jeanchok/webagence',
            link: 'https://www.webzh.site/',
            text: `Réalisation d'un site vitrine pour l'agence web crée par ma soeur et moi. J'ai fais le choix de Next.js pour développer ce projet, pour optimiser le SEO du site web (Grâce au "serveur side rendering"). J'ai également fais le choix de Tailwind CSS pour réduite le temps de développement.`,
            mainTechnos: ['React', 'NextJS', 'Tailwind'],
            allTechnos: ['React', 'NextJS', 'Tailwind', 'HTML5']
        }
    ]

    if (modalActive) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    // <button onClick={() => { setModalActive(!modalActive); setPropsModal(actus.attributes) }} className="btn-modal" >LIRE +</button>


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
                    <div className='cardContainer__side'>
                        <div>
                            <h3 className='cardContainer__side--title'>
                                Sites Web
                            </h3>
                        </div>

                        {projectsSite.filter(project => project.putFirst === true).map((projectFirst, index) => (
                            <ProjectCardL key={index} project={projectFirst} />
                        ))}
                        {projectsSite.filter(project => project.putFirst === false).map((projectSmall, index) => (
                            <ProjectCardS key={index} project={projectSmall} />
                        ))}

                    </div>
                    <div className='cardContainer__side'>
                        <div>
                            <h3 className='cardContainer__side--title'>
                                Applications Web
                            </h3>
                        </div>
                        {projectsApp.filter(project => project.putFirst === true).map((projectFirst, index) => (
                            <ProjectCardL key={index} project={projectFirst} />
                        ))}
                        {projectsApp.filter(project => project.putFirst === false).map((projectSmall, index) => (
                            <ProjectCardS key={index} project={projectSmall} />
                        ))}

                    </div>
                    {/* <div className={projectActive1 ? 'showProject' : 'hideProject'}>
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
                    </div> */}

                </div>
            </div >
            <Particules />
            <Footer />
        </div >
    );
};

export default Portfolio;