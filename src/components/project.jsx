import { motion } from "framer-motion";
export default function Project() {

    return (

        <>

            <section id="projects" class=" animate-fade-in-up">

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <motion.div initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }} class="  p-2 rounded-lg  shadow-md shadow-[#DCD9D0] hover:shadow-md transition-shadow duration-300 transform hover:scale-105 transition-transform">
                        <div className="w-[100%] h-72  bg-cover bg-center bg-[url(/post-it.PNG)]"></div>
                        <h3 class="text-xl font-bold text-white text-center mt-4 mb-4">Projet POST-IT</h3>
                        <p class="mb-4 text-white">Un projet simple qui marque mes débuts avec Vue.js.
                            J'ai créé une mini projet post-it, en utilisant les composants Vue pour l'interactivité et Tailwind CSS pour un design rapide et moderne.</p>
                        <a href="https://post-it-tzon.vercel.app/#/" class=" text-[#FE4F6C] dark:text-primary-dark hover:underline duration-300">voir le projet →</a>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }} class="  p-2 rounded-lg  shadow-md shadow-[#DCD9D0] hover:shadow-md transition-shadow duration-300 transform hover:scale-105 transition-transform">
                        <div className="w-[100%] h-72  bg-cover bg-center bg-[url(/freeads.PNG)] "></div>
                        <h3 class="text-xl text-center text-white font-bold mt-4 mb-4">Projet FREEADS</h3>
                        <p class="mb-4 text-white ">Projet collaboratif réalisé avec Laravel et Tailwind CSS.
                            J'étais en charge du CRUD des articles. Cette expérience m'a permis de renforcer mes compétences en développement back-end  tout en travaillant efficacement en équipe.
                        </p>
                        <a href="https://getmarcket.clyktech.com" class="text-[#FE4F6C] dark:text-primary-dark hover:underline duration-300">Voir le projet →</a>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }} class="  p-2 rounded-lg  shadow-md shadow-[#DCD9D0] hover:shadow-md transition-shadow duration-300 transform hover:scale-105 transition-transform">
                        <div className="w-[100%] h-72 bg-cover bg-center bg-[url(/myshop.PNG)] "></div>
                        <h3 class="text-xl text-center text-white font-bold mt-4 mb-4">Projet MYSHOP</h3>
                        <p class="mb-4 text-white">Projet collaboratif réalisé avec PHP native et Tailwind CSS.
                            J'étais en charge de l'authentification et de la partie admin. Cette expérience m'a permis de renforcer mes compétences en développement back-end  tout en travaillant efficacement en équipe.</p>
                        <a href="https://masso.clyktech.com/" class="text-[#FE4F6C] dark:text-primary-dark hover:underline duration-300">View Project →</a>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }} class="  p-2 rounded-lg  shadow-md shadow-[#DCD9D0] hover:shadow-md transition-shadow duration-300 transform hover:scale-105 transition-transform">
                        <div className="w-[100%] h-72  bg-cover bg-center bg-[url(/streming.PNG)] "></div>
                        <h3 class="text-xl text-center text-white font-bold mt-4 mb-4">Projet STRAMING</h3>
                        <p class="mb-4  text-white">Ce projet marque le début de mon aventure dans le développement web.
                            Il s'agit d'un site statique entièrement réalisé avec HTML et CSS, sans framework ni librairie externe.</p>
                        <a href="https://bambamasso.github.io/streaming/" class=" text-[#FE4F6C] dark:text-primary-dark hover:underline transition-colors duration-300">View Project →</a>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }} class="  p-2 rounded-lg  shadow-md shadow-[#DCD9D0] hover:shadow-md transition-shadow duration-300 transform hover:scale-105 transition-transform">
                        <div className="w-full h-72  bg-cover bg-center bg-[url(/moovies.PNG)] "></div>
                        <h3 class="text-xl text-center text-white font-bold mt-4 mb-4">Projet MY_ROUTER_TOMATO</h3>
                        <p class="mb-4 text-white ">Mon premier projet avec Next.js, utilisant l'API de Moovies pour afficher des films.
                            J'ai appris à intégrer une API, à gérer le rendu côté serveur (SSR) et à styliser l'interface avec Tailwind CSS.</p>
                        <a href="#" class="text-[#FE4F6C] dark:text-primary-dark hover:underline transition-colors duration-300">View Project →</a>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }} class="  p-2 rounded-lg  shadow-md shadow-[#DCD9D0] hover:shadow-md transition-shadow duration-300 transform hover:scale-105 transition-transform">
                        <div className="w-[100%] h-72  bg-cover bg-center bg-[url(/integration.PNG)] "></div>
                        <h3 class="text-xl text-center text-white font-bold mt-4 mb-4"> Projet INTEGRATION</h3>
                        <p class="mb-4 text-white ">Projet de groupe où nous avons reproduit une maquette à l’identique à l’aide de HTML et CSS.
                            Un excellent exercice de précision, de collaboration et de maîtrise du positionnement et du design responsive.</p>
                        <a href="https://integration-eta-pearl.vercel.app/" class="text-[#FE4F6C] dark:text-primary-dark hover:underline transition-colors duration-300">View Project →</a>
                    </motion.div>
                </div>
            </section>

        </>
    )
}

