import React, { useState, useEffect } from 'react';
import ModalProjects from '../components/ModalProjects';


const ProjectCardS = ({ project }) => {

    const [modalActive, setModalActive] = useState(false);
    const [propsModal, setPropsModal] = useState(project);


    if (modalActive) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    return (
        <>{
            project ?
                <div className={'ProjectCardS puff-in-center' + project.id}>
                    <div className='ProjectCardS__Text'>
                        <h3 className='ProjectCardS__Title'>{project.name}</h3>
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
                    <div className='ProjectCardS__btn'>
                        <button onClick={() => setModalActive(true)}>
                            <svg width={26} height={26} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.75 12h16.5" />
                                <path d="M12 3.75v16.5" />
                            </svg>
                        </button>
                    </div>
                </div>

                :
                null}
            {
                modalActive && <ModalProjects propsModal={propsModal} modalActive={modalActive} setModalActive={setModalActive} />
            }
        </>
    );
};

export default ProjectCardS;