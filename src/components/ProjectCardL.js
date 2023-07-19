import React, { useState, useEffect } from 'react';
import ModalProjects from '../components/ModalProjects';

// {
//     name: `Site vitrine mon agence web familiale`,
//     logoSrc: './logo webzh white.png',
//     github: '',
//     link: 'https://www.lecamionapizzas.com/',
//     text: `Réalisation d'un site vitrine pour l'agence web crée par ma soeur et moi. J'ai fais le choix de Next.js pour développer ce projet, pour optimiser le SEO du site web (Grâce au "serveur side rendering"). J'ai également fais le choix de Tailwind CSS pour réduite le temps de développement.`,
//     mainTechnos: ['React', 'NextJS', 'Tailwind'],
//     allTechnos: ['React', 'NextJS', 'Tailwind', 'HTML5']
// }

const ProjectCardL = ({ project }) => {
    const [modalActive, setModalActive] = useState(false);
    const [propsModal, setPropsModal] = useState(project);


    if (modalActive) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    console.log(project)
    return (
        <>
            {
                project ?
                    <div className={'ProjectCardL puff-in-center' + project.id}>
                        <div className='ProjectCardL__Capture' style={{ backgroundImage: `url("${project.capture}")`, height: '50%', backgroundSize: 'cover' }}>
                            <div className='ProjectCardL__Head'>
                                <div className='ProjectCardL__Head--logo'>
                                    <img src={project.logoSrc} alt={project.name} />
                                </div>
                                <div className='ProjectCardL__Head--Links'>
                                    <div className='ProjectCardL__Head--LinksGit'>
                                        {project.github !== '' ?
                                            <a href={project.github}>
                                                <a href={project.github} target="_blank"><img src="github-fill.png" alt={`${project.name} + git link`} />
                                                </a>
                                            </a>
                                            : null}
                                    </div>
                                    <div className='ProjectCardL__Head--LinksOut'>
                                        {project.link !== '' ?
                                            <a href={project.link} target="_blank"><img src="external-link (1).png" alt={`${project.name} + link`} />
                                            </a>
                                            : null}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='ProjectCardL__Content' style={{ padding: '15px' }}>



                            <div className='ProjectCardL__Title'>
                                <h3>
                                    {project.name}
                                </h3>
                            </div>
                            <div className='ProjectCardL__More'>
                                <button
                                    onClick={() => setModalActive(true)}
                                    className='ProjectCardL__More--btn'>
                                    En savoir +
                                </button>
                            </div>
                            <div className='ProjectCardL__Techno'>
                                {
                                    project.mainTechnos ?
                                        <>
                                            {
                                                project.mainTechnos.map((mainTechnos, index) => (
                                                    <p key={index}>
                                                        {mainTechnos}
                                                    </p>

                                                ))
                                            }
                                        </>
                                        :
                                        null
                                }


                            </div>
                        </div>
                    </div>
                    : null
            }
            {
                modalActive && <ModalProjects propsModal={propsModal} modalActive={modalActive} setModalActive={setModalActive} />
            }
        </>
    );
};

export default ProjectCardL;