import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

const Contact = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {

        const { name, email, subject, message } = data;
        try {
            const templateParams = {
                name,
                email,
                subject,
                message
            };
            await emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_USER_ID
            );
            reset();
        } catch (e) {
            console.log(e);
        }
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

                    <form classname='contactForm' id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                        {/* Row 1 of form */}
                        <div className='formRow'>
                            <div className='col-6'>
                                <input
                                    type='text'
                                    name='name'
                                    {...register('name', {
                                        required: { value: true, message: 'Veuillez entrer votre nom' },
                                        maxLength: {
                                            value: 30,
                                            message: 'Veuillez entrer 30 caractères au maximum'
                                        }
                                    })}
                                    className='form-control formInput'
                                    placeholder='Nom'
                                ></input>
                                {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                            </div>
                            <div className='col-6'>
                                <input
                                    type='email'
                                    name='email'
                                    {...register('email', {
                                        required: true,
                                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                    })}
                                    className='form-control formInput'
                                    placeholder='Addresse email'
                                ></input>
                                {errors.email && (
                                    <span className='errorMessage'>Veuillez entrer une adresse e-mail valide</span>
                                )}
                            </div>
                        </div>
                        {/* Row 2 of form */}
                        <div className='row formRow'>
                            <div className='col'>
                                <input
                                    type='text'
                                    name='subject'
                                    {...register('subject', {
                                        required: { value: true, message: 'Veuillez enter un sujet' },
                                        maxLength: {
                                            value: 75,
                                            message: 'Le sujet ne doit pas excéder 75 caractères'
                                        }
                                    })}
                                    className='form-control formInput'
                                    placeholder='Subjet'
                                ></input>
                                {errors.subject && (
                                    <span className='errorMessage'>{errors.subject.message}</span>
                                )}
                            </div>
                        </div>
                        {/* Row 3 of form */}
                        <div className='row formRow'>
                            <div className='col'>
                                <textarea
                                    rows={3}
                                    name='message'
                                    {...register('message', {
                                        required: true
                                    })}
                                    className='form-control formInput'
                                    placeholder='Message'
                                ></textarea>
                                {errors.message && <span className='errorMessage'>Veuillez entrer un message</span>}
                            </div>
                        </div>
                        <button className='submit-btn' type='submit'>
                            Envoyer
                        </button>
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
            <Footer />

        </div>
    );
};

export default Contact;