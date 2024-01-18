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
            putFirst: false,
            name: `Réseau social d'entreprise`,
            logoSrc: './logo-openclassroom.jpg',
            github: 'https://github.com/jeanchok/Projet_7_Groupomania_Choquet_Jean',
            link: '',
            text: `
            Création d'un réseau social d'entreprise pour le projet de fin de formation OpenClassrooms. Développé "From scratch" avec Sequelize, Express et Node.js pour l'API, et React.js pour l'interface, il inclut aussi un rôle d'administrateur pour la modération.`,
            mainTechnos: ['React', 'NodeJS', 'Sequelize', 'Sass'],
            allTechnos: ['React', 'NodeJS', 'Sequelize', 'Sass'],
            id: 4
        },
        {
            putFirst: false,
            name: 'PopCorn Games',
            logoSrc: './android-chrome-512x512.png',
            capture: './popcornScreen.webp',
            github: 'https://github.com/jeanchok/popcorngame',
            link: 'https://popcornfront.jeanchoquet.fr/',
            text: `J'ai réalisé un jeu multijoueurs en ligne qui reprend le jeu icônique Picass de l'émission POPCORN sur twitch (qui sera bientôt disponible je l'espères).
        Les règles du jeu : chacun son tour, l'un des joueur doit faire deviner une expression française en dessinnant, plus les autres joueurs devinent tôt et plus ils ont de points !`,
            mainTechnos: ['React', 'Tailwind'],
            allTechnos: ['React', 'Tailwind'],
            id: 6
        },
        {
            putFirst: true,
            name: 'Eurekia | Saas IA',
            logoSrc: './128.png',
            github: '',
            capture: './screenshot_eurekia.webp',
            link: 'https://eurekia.xyz/',
            text: `Je créé une expérience utilisateur unique en fusionnant chat spécialisé, génération d'images AI, et texte-to-speech hyper réaliste, le plus grand défi étant d'assurer une intégration fluide et intuitive de ces outils diversifiés.`,
            mainTechnos: ['NextJS', 'Tailwind', 'Supabase', 'Typescript'],
            allTechnos: ['NextJS', 'Tailwind', 'Supabase', 'Typescript'],
            id: 2
        }
    ]

    

    const projectsSite = [
        {
            putFirst: true,
            name: `Agatha Festival`,
            logoSrc: './têteDragon.webp',
            capture: './agatha capture (1).webp',
            github: 'https://github.com/jeanchok/Agatha-Site',
            link: '',
            text: `Réalisation d'un site pour un festival. J'ai tout réaliser : du design à la configuration de l'API avec Strapi en passant évidemment par le frontend.
            Le plus gros challenge de ce projet était de prévoir la mise en page qui changeait au fur et à mesure de l'annonce des artistes et des différentes informations.`,
            mainTechnos: ['React', 'ViteJS', 'Sass'],
            allTechnos: ['React', 'ViteJS', 'Sass', 'HTML5'],
            id: 1
        },
        {
            putFirst: false,
            name: `Le Camion à Pizzas`,
            logoSrc: './camion.png',
            github: '',
            link: 'https://www.lecamionapizzas.com/',
            text: `Réalisation d'un site vitrine pour un Camion à Pizzas. Le principal travail réalisé était la refonte totale du design. Le SEO devait être également pris en compte. Il est effectivement classé n°1 sur le terme "Camion à Pizzas".`,
            mainTechnos: ['JS', 'Wix'],
            allTechnos: ['JS', 'Wix', 'HTML5', 'CSS3'],
            id: 3
        },
        {
            putFirst: false,
            name: `Agence Webzh`,
            logoSrc: './logo webzh white.png',
            github: 'https://github.com/jeanchok/webagence',
            link: 'https://www.webzh.site/',
            text: `Réalisation d'un site vitrine pour l'agence web crée par ma soeur et moi. J'ai fais le choix de Next.js pour développer ce projet, pour optimiser le SEO du site web (Grâce au "serveur side rendering"). J'ai également fais le choix de Tailwind CSS pour réduite le temps de développement.`,
            mainTechnos: ['React', 'NextJS', 'Tailwind'],
            allTechnos: ['React', 'NextJS', 'Tailwind', 'HTML5'],
            id: 5
        }
    ]

    if (modalActive) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

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
                            <ProjectCardL key={projectFirst.id} project={projectFirst} />
                        ))}
                        {projectsSite.filter(project => project.putFirst === false).map((projectSmall, index) => (
                            <ProjectCardS key={projectSmall.id} project={projectSmall} />
                        ))}

                    </div>
                    <div className='cardContainer__side'>
                        <div>
                            <h3 className='cardContainer__side--title'>
                                Applications Web
                            </h3>
                        </div>
                        {projectsApp.filter(project => project.putFirst === true).map((projectFirst, index) => (
                            <ProjectCardL key={projectFirst.id} project={projectFirst} />
                        ))}
                        {projectsApp.filter(project => project.putFirst === false).map((projectSmall, index) => (
                            <ProjectCardS key={projectSmall.id} project={projectSmall} />
                        ))}

                    </div>

                </div>
            </div >
            <Particules />
            <Footer />
        </div >
    );
};

export default Portfolio;