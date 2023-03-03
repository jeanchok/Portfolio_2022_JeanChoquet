import React, { useState } from "react";

const ModalProjects = (props) => {
    const [modal, setModal] = useState(props.modalActive);

    const toggleModal = () => {
        setModal(!modal);
        console.log(modal)
    };
    console.log(props)

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }


    const technosList = [
        {
            name: 'Sequelize',
            imgSrc: './58482ee4cef1014c0b5e4a75 (2).png'
        },
        {
            name: 'CSS3',
            imgSrc: './icons8-css3-48.png'
        },
        {
            name: 'HTML5',
            imgSrc: './icons8-html-5-48.png'
        },
        {
            name: 'React',
            imgSrc: './icons8-réagir-40.png'
        },
        {
            name: 'Wix',
            imgSrc: './wix.png'
        },
        {
            name: 'JS',
            imgSrc: './js.png'
        },
        {
            name: 'NextJS',
            imgSrc: './next_logo.png'
        },
        {
            name: 'Tailwind',
            imgSrc: './tailwindcss-ar21.png'
        },
        {
            name: 'ViteJS',
            imgSrc: './Vitejs-logo.png'
        },
        {
            name: 'NodeJS',
            imgSrc: './kisspng-node-js-javascript-express-js-portable-network-gra-mixin-software-5b7c7247ce6172.8523259515348823758453.png'
        },
        {
            name: 'Sass',
            imgSrc: './sass.png'
        }
    ]


    const MODAL_STYLES = {
        position: 'fixed',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 50%)',
        height: '100%',
        top: '0',
        left: '0',
        zIndex: "1000",
    };
    const OVERLAY_STYLE = {
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        zIndex: "1000",
        overflowY: "auto"
    };

    return (
        <>
            {modal && (
                <div className='modal' style={MODAL_STYLES}>
                    <div
                        style={OVERLAY_STYLE}
                        //onClick={() => { props.setModalActive(false); toggleModal }}
                        className="overlay"></div>
                    <div className="modal-content" style={MODAL_STYLES} onClick={() => { props.setModalActive(false); toggleModal() }}>
                        <button className="close-modal"
                            onClick={() => { props.setModalActive(false); toggleModal() }}
                        >
                            X
                        </button>
                        <div className='portfolio__TitleContainer'>
                            <img className='portfolio__ImgTitle' src={props.propsModal.logoSrc} alt="openclassrooms logo" />
                            <h3>{props.propsModal.name}</h3>
                        </div>
                        <div className='portfolio__technoSection'>
                            <h4>Technologies utilisées</h4>
                            <div className='portfolio__technoContainer'>
                                {props.propsModal.allTechnos.map((technos, index) => (
                                    <img className='portfolio__technoImg' src={technosList.find(element => element.name === technos).imgSrc} alt={technosList.find(element => element.name === technos).name} />
                                ))}
                            </div>
                        </div>
                        <div className='portfolio__TextContainer'>
                            <h4>Étude de cas</h4>
                            <p>{props.propsModal.text}
                            </p>
                        </div>
                        <div className='ProjectCardL__Head--Links'>
                            <div className='ProjectCardL__Head--LinksGit'>
                                {props.propsModal.github !== '' ?
                                    <a href={props.propsModal.github}>
                                        <a href={props.propsModal.link} target="_blank"><img src="github-fill.png" alt={`${props.propsModal.name} + git link`} />
                                        </a>
                                    </a>
                                    : null}
                            </div>
                            <div className='ProjectCardL__Head--LinksOut'>
                                {props.propsModal.link !== '' ?
                                    <a href={props.propsModal.link} target="_blank"><img src="external-link (1).png" alt={`${props.propsModal.name} + link`} />
                                    </a>
                                    : null}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>

    );
};
export default ModalProjects;