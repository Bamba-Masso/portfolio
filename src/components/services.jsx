import { motion } from "framer-motion";
export default function Services(){
return(
    <>


<section id="features" className="">
            <motion.div
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1, ease: "easeInOut" }} 
                viewport={{ once: true }}
                className="relative mx-auto max-w-7xl grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2"
            >
             
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }} 
                    whileInView={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 1, ease: "easeOut" }} 
                    className="  rounded-xl shadow-md shadow-white transition p-8 text-center shadow hover:shadow-lg transition-all duration-300"
                >
                    <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md ">
                       <img src="development.png" alt="" />
                    </div>
                    <h3 className="mt-6 font-bold text-lg hover:text-[#FE4F6C] text-white">Développement de site</h3>
                    <p className="my-4 mb-0 font-normal leading-relaxed text-lg tracking-wide text-white">
                        Création de sites web modernes, responsives et optimisés pour tous les appareils.
                    </p>
                </motion.div>

               
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }} 
                    whileInView={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 1, ease: "easeOut" }} 
                    className="rounded-xl shadow-md shadow-white transition  p-8 text-center shadow hover:shadow-lg transition-all duration-300"
                >
                    <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md ">
                  <img src="development-mobile.png " className="text-[#FE4F6C]" alt="" />
                    </div>
                    <h3 className="mt-6 font-bold text-lg hover:text-[#FE4F6C] text-white">Développement d'application</h3>
                    <p className="my-4 mb-0 font-normal text-lg   leading-relaxed tracking-wide text-white">
                        Conception d'applications performantes pour le mobile et le web, adaptées à vos besoins.
                    </p>
                </motion.div>

            </motion.div>
        </section>
    </>
)

}