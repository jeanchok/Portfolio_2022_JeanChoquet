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
                <div className='ProjectCardS'>
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
                        <button onClick={() => setModalActive(true)}>+</button>
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