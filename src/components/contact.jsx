import { motion } from "framer-motion"
import React, { useRef } from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

// 

export default function Contact() {
    // toast.configure();
    const form = useRef();



    const [notif, setNotif] = useState(false);
    // const [error, setError]=useState('');
    const handelSubmit = (e) => {

        e.preventDefault();
        const formData = new FormData(form.current);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        if (!name || !email || !message) {
            toast.error('Veuillez remplir tous les champs');
            return;
        }

        emailjs
            .sendForm('react_contact_id', 'react_contacFt_form', form.current, {
                publicKey: 'fBzrcXhQl5RPaZSFC',
            })
            .then(
                (result) => {
                    setNotif(true)
                    toast.success('Le mail à bien été envoyé')
                    console.log(result.text);
                    console.log("message sent");
                    //  
                },
                (error) => {
                    // sentMessage=false
                    //  error="Une erreur c'est produit lors de l'envoie de l'email"
                    console.log('FAILED...', error.text);
                },
             form.current.reset(),  
            );

     
    };
 
    return (
        <>
            <section id="contact" className=" 
 ">

                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-2 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16"
                >

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h2 className="font-bold text-lg text-white dark:text-gray-100">Contact Us</h2>

                        <div className="flex items-center mt-8 space-x-2 text-dark-600 dark:text-gray-400">
                            <img src="localisation.png " className="w-8" alt="" />
                            <span className=" text-white">Abidjan (Abobo)</span>
                        </div>
                        <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
                            <img src="mobile.png " className="w-8" alt="" />
                            <span className=" text-white">05-54-21-99-29 / 01-50-94-02</span>
                        </div>
                        <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
                            <img src="poster.png " className="w-8" alt="" />
                            <span className=" text-white">mansogbe.bamba@epitech.eu</span>
                        </div>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <form ref={form} onSubmit={handelSubmit}>
                            <input type="checkbox" id="" className="hidden" />
                            <div className="mb-5">
                                <label htmlFor="email_address" className="text-white">Nom complet</label>
                                <input type="text"
                                    className="w-full px-4 py-3 border-2 text-white dark:text-white rounded-md outline-none border-[#FE4F6C]  "
                                    name="name" />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="email_address" className="text-white">Email Address</label>
                                <input id="email_address" type="email"
                                    className="w-full px-4 py-3 border-2 text-white dark:text-white rounded-md outline-none border-[#FE4F6C]  "
                                    name="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email_address" className="text-white">Message</label>
                                <textarea
                                    className="w-full px-4 py-3 border-2 text-white dark:text-white rounded-md outline-none border-[#FE4F6C] h-36  "
                                    name="message">
                                </textarea>
                            </div>
                            <button type="submit"
                                className="w-full py-4 font-semibold text-white transition-colors rounded-md border border-[#FE4F6C] hover:bg-[#FE4F6C] hover:border-white focus:outline-none  ">
                                Envoyer
                            </button>

                        </form>

                        <ToastContainer
                            position="top-right"
                            reverseOrder={true}
                        />

                    </motion.div>
                </motion.div>
            </section>

        </>
    )
}