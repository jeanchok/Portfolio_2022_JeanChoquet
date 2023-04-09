import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Particules from '../components/Particules';




const Accueil = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoading2, setIsLoading2] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading2(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="main">

            <Navigation />

            <div className='accueilContainer'>
                <div className='accueil'>
                    <div className='profilePictureContainer'>
                        <img className='profilePicture text-focus-in' src='./1651058775675.webp' alt='Jean Choquet Photo de profile'></img>
                    </div>
                    <div className='accueil__text'>
                        <h1 className={isLoading ?
                            'hidden' :
                            isLoading2 ? 'tracking-in-contract-bck' : 'linear-wipe'}>
                            Jean Choquet</h1>
                        <h2 className={isLoading ? 'hidden' : 'tracking-in-expand-fwd-top'}>Développeur Web</h2>
                        <h3 className={isLoading ? 'hidden' : 'text-focus-in'}>Code avec passion, pour que vos projets voient le jour.</h3>
                    </div>
                </div>
            </div>
            <Footer />
            <Particules />
        </div>
    );
};

export default Accueil;