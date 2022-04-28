import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Portfolio = () => {
    const [isLoading2, setIsLoading2] = useState(true);

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
                <h2 className={isLoading2 ? 'portfolioTitle tracking-in-contract-bck' : 'portfolioTitle linear-wipe'}>Portfolio</h2>
                <p className='tracking-in-expand-fwd-top'>Découvrez mes projets réalisés en tant que développeur web.</p>
                <div className='portfolio text-focus-in'>
                    <div className='flip-card'>
                        <div className='flip-card-inner'>
                            <div className='flip-card-front OC'>
                                {/* <h4>OpenClassrooms</h4> */}
                                <img src="./logo-openclassroom.jpg" alt="logo-openclassroom" />
                            </div>
                            <div className='flip-card-back'>
                                <h4>OpenClassrooms back</h4>
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
                                <h4>Mes Projets back</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    );
};

export default Portfolio;