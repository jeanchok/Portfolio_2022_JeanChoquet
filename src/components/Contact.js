import React, { useRef, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import emailjs from '@emailjs/browser';
import Particules from '../components/Particules';


const Contact = () => {
    const [message, setMessage] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [messageBody, setMessageBody] = useState('');

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9krjany', 'template_npw1bqt', form.current, 'Kk1GXDbI61romaMWa')
            .then((result) => {
                console.log(result.text);
                setMessage(true);
                setEmail('');
                setName('');
                setSubject('');
                setMessageBody('');
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="main">
            <header>
                <Navigation />
            </header>
            <div className='contactContainer'>
                <div className='contact'>
                    <h2 className='portfolioTitle linear-wipe'>Contact</h2>
                </div>
                <p className='textContact tracking-in-expand-fwd-top'>Pour toutes informations, vous pouvez me contacter avec le formulaire ci-desous.</p>
                <div className='contactFormContainer'>

                    <form className='contactForm' id='contact-form' ref={form} onSubmit={sendEmail}>
                        {/* Row 1 of form */}
                        <div className='formRow'>
                            <div className='col-6'>
                                <input
                                    type='text'
                                    name='name'
                                    className='form-control formInput'
                                    placeholder='Nom'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                ></input>

                            </div>
                            <div className='col-6'>
                                <input
                                    type='email'
                                    name='email'
                                    className='form-control formInput'
                                    placeholder='Addresse email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                    required
                                ></input>

                            </div>
                        </div>
                        {/* Row 2 of form */}
                        <div className='row formRow'>
                            <div className='col'>
                                <input
                                    type='text'
                                    name='subject'
                                    className='form-control formInput'
                                    placeholder='Subjet'
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    required
                                    minLength={3}
                                ></input>

                            </div>
                        </div>
                        {/* Row 3 of form */}
                        <div className='row formRow'>
                            <div className='col'>
                                <textarea
                                    rows={3}
                                    name='message'
                                    className='form-control formInput'
                                    placeholder='Message'
                                    value={messageBody}
                                    onChange={(e) => setMessageBody(e.target.value)}
                                    required                                ></textarea>

                            </div>
                        </div>
                        <button className='submit-btn' type='submit'>
                            Envoyer
                        </button>
                        {message ? <p className='successMessage'>Votre message a bien été envoyé</p> : null}
                    </form>
                    <div className='contactInfo'>
                        <h3>Informations</h3>
                        <p>
                            <span>
                                <i className='fas fa-map-marker-alt'></i>
                            </span>
                            <span>
                                Lieu dit les Placis, 35230 Bourgbarré
                            </span>
                        </p>
                        <p>
                            <span>
                                <i className='fas fa-phone'></i>
                            </span>
                            <span>
                                <a href='tel:+33624777746'>
                                    +33 6 24 77 77 46
                                </a>
                            </span>
                        </p>
                        <p>
                            <span>
                                <i className='fas fa-envelope'></i>
                            </span>
                            <span>
                                <a href='mailto:jean.choquet@hotmail.fr'>
                                    jean.choquet@hotmail.fr
                                </a>
                            </span>
                        </p>
                    </div>


                </div>
            </div>
            <Particules />
            <Footer />

        </div>
    );
};

export default Contact;