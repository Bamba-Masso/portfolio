import { motion } from "framer-motion"
export default function Contact() {
  return (
    <>


 <section id="contact" className="  shadow-xl 
 ">
         <h1 className="mb-10 text-3xl text-center font-bold text-white"> Contacter <span className="text-[#FE4F6C]">Moi</span></h1>
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
                    initial={{ opacity: 0, x: 100 }} // Commence un peu plus à droite
                    whileInView={{ opacity: 1, x: 0 }} // Se déplace sans décalage
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <form>
                        <input type="checkbox" id="" className="hidden" />
                        <div className="mb-5">
                            <input type="text" placeholder="Nom complet" autocomplete="false"
                                className="w-full px-4 py-3 border-2 placeholder:text-white dark:text-white rounded-md outline-none border-[#FE4F6C]  "
                                name="name" />
                        </div>
                        <div className="mb-5">
                            <label for="email_address" class="sr-only">Email Address</label>
                            <input id="email_address" type="email" placeholder="Email" autocomplete="false"
                                className="w-full px-4 py-3 border-2 placeholder:text-white dark:text-white rounded-md outline-none border-[#FE4F6C]  "
                                name="email" />
                        </div>
                        <div className="mb-3">
                            <textarea placeholder="votre Message"
                                className="w-full px-4 py-3 border-2 placeholder:text-white dark:text-white rounded-md outline-none border-[#FE4F6C] h-36  "
                                name="message">
                            </textarea>
                        </div>
                        <button type="submit"
                            className="w-full py-4 font-semibold text-white transition-colors rounded-md border border-[#FE4F6C] hover:bg-[#FE4F6C] hover:border-white focus:outline-none  ">
                            Envoyer
                        </button>
                    </form>
                </motion.div>
            </motion.div>
        </section>

        </>
        )
}