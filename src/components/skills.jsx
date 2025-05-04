import { motion } from "framer-motion";
export default function Skills() {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };
    return (
        <>
            <div className=" "
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}>
                <div className=" w-full text-center ">
                    <div className=" flex  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 ">
                    <motion.div 
                        variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="w-full">
                            <h1 className="mb-8 text-3xl text-white">Languages De Programations </h1>
                            <div className="  grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-4 items-start auto-rows-auto">

                                <div className="flex flex-col items-center p-4  rounded-xl shadow-md shadow-white transition transform hover:scale-105 hover:bg-gray-600">
                                    <motion.img variants={itemVariants} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="w-12 h-12 mb-2" />
                                    <motion.p variants={itemVariants} className="text-gray-300">HTML</motion.p>
                                    <motion.div variants={itemVariants} className=" mt-4 w-full h-4 bg-gray-400 rounded-full">
                                        <div className="w-10/10 h-full text-center text-xs text-white bg-[#FE4F6C] rounded-full">
                                            100%
                                        </div>
                                    </motion.div>
                                </div>
                                <div className="flex flex-col items-center p-4  rounded-xl shadow-md shadow-white transition transform hover:scale-105 hover:bg-gray-600">
                                    <motion.img variants={itemVariants} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="HTML" className="w-12 h-12 mb-2" />
                                    <motion.p variants={itemVariants} className="text-gray-300">CSS</motion.p>
                                    <motion.div variants={itemVariants} className=" mt-4 w-full h-4 bg-gray-400 rounded-full">
                                        <div className="w-7/10 h-full text-center text-xs text-white bg-[#FE4F6C] rounded-full">
                                            70%
                                        </div>
                                    </motion.div>
                                </div>
                                <div className="flex flex-col items-center p-4  rounded-xl shadow-md shadow-white transition transform hover:scale-105 hover:bg-gray-600">
                                    <motion.img variants={itemVariants} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="HTML" className="w-12 h-12 mb-2" />
                                    <motion.p variants={itemVariants} className="text-gray-300">JavaScript</motion.p>
                                    <motion.div variants={itemVariants} className=" mt-4 w-full h-4 bg-gray-400 rounded-full">
                                        <div className="w-6/10 h-full text-center text-xs text-white bg-[#FE4F6C] rounded-full">
                                            60%
                                        </div>
                                    </motion.div>
                                </div>
                                <div className="flex flex-col items-center p-4  rounded-xl shadow-md shadow-white transition transform hover:scale-105 hover:bg-gray-600">
                                    <motion.img variants={itemVariants} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="HTML" className="w-12 h-12 mb-2" />
                                    <span className="text-gray-300">PHP</span>
                                    <motion.div variants={itemVariants} className=" mt-4 w-full h-4 bg-gray-400 rounded-full">
                                        <div className="w-8/10 h-full text-center text-xs text-white bg-[#FE4F6C] rounded-full">
                                            80%
                                        </div>
                                    </motion.div>
                                </div>
                                <div className="flex flex-col items-center p-4  rounded-xl shadow-md shadow-white transition transform hover:scale-105 hover:bg-gray-600">
                                    <motion.img variants={itemVariants} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="HTML" className="w-12 h-12 mb-2" />
                                    <span className="text-gray-300">Python</span>
                                    <motion.div variants={itemVariants} className=" mt-4 w-full h-4 bg-gray-400 rounded-full">
                                        <div className="w-4/10 h-full text-center text-xs text-white bg-[#FE4F6C] rounded-full">
                                            40%
                                        </div>
                                    </motion.div>
                                </div> 
                            </div>
                        </motion.div>

                        

                        {/* bloc 2 */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="w-full"
                        >
                            <h1 className="mb-8 text-3xl text-white">Frameworks</h1>
                            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-4 items-start auto-rows-auto">
                                <motion.div
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex flex-col items-center p-4 rounded-xl shadow-md shadow-white transition transform hover:scale-105 hover:bg-gray-600"
                                >
                                    <motion.img variants={itemVariants}
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"
                                        alt="Laravel"
                                        className="w-12 h-12 mb-2"
                                    />
                                    <motion.p variants={itemVariants} className="text-gray-300">Laravel</motion.p>
                                    <motion.div variants={itemVariants} className="mt-4 w-full h-4 bg-gray-400 rounded-full">
                                        <div className="w-8/10 h-full text-center text-xs text-white bg-[#FE4F6C] rounded-full">
                                            80%
                                        </div>
                                    </motion.div>
                                </motion.div>

                                <motion.div
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex flex-col items-center p-4 rounded-xl shadow-md shadow-white transition transform hover:scale-105 hover:bg-gray-600"
                                >
                                    <motion.img variants={itemVariants}
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                                        alt="Tailwind CSS"
                                        className="w-12 h-12 mb-2"
                                    />
                                    <motion.p variants={itemVariants} className="text-gray-300">Tailwind CSS</motion.p>
                                    <motion.div variants={itemVariants} className="mt-4 w-full h-4 bg-gray-400 rounded-full">
                                        <div className="w-8/10 h-full text-center text-xs text-white bg-[#FE4F6C] rounded-full">
                                            80%
                                        </div>
                                    </motion.div>
                                </motion.div>

                                <motion.div
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex flex-col items-center p-4 rounded-xl shadow-md shadow-white transition transform hover:scale-105 hover:bg-gray-600"
                                >
                                    <motion.img variants={itemVariants}
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                                        alt="Vue JS"
                                        className="w-12 h-12 mb-2"
                                    />
                                    <motion.p variants={itemVariants} className="text-gray-300">Vue JS</motion.p>
                                    <motion.div variants={itemVariants} className="mt-4 w-full h-4 bg-gray-400 rounded-full">
                                        <div className="w-7/10 h-full text-center text-xs text-white bg-[#FE4F6C] rounded-full">
                                            70%
                                        </div>
                                    </motion.div>
                                </motion.div>

                                <motion.div
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex flex-col items-center p-4 rounded-xl shadow-md shadow-white transition transform hover:scale-105 hover:bg-gray-600"
                                >
                                    <motion.img variants={itemVariants}
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                        alt="React JS"
                                        className="w-12 h-12 mb-2"
                                    />
                                    <motion.p variants={itemVariants} className="text-gray-300">React JS</motion.p>
                                    <motion.div variants={itemVariants} className="mt-4 w-full h-4 bg-gray-400 rounded-full">
                                        <div className="w-6/10 h-full text-center text-xs text-white bg-[#FE4F6C] rounded-full">
                                            60%
                                        </div>
                                    </motion.div>
                                </motion.div>

                                <motion.div
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex flex-col items-center p-4 rounded-xl shadow-md shadow-white transition transform hover:scale-105 hover:bg-gray-600"
                                >
                                    <motion.img variants={itemVariants}
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                                        alt="Next JS"
                                        className="w-12 h-12 mb-2"
                                    />
                                    <motion.p variants={itemVariants} className="text-gray-300">Next JS</motion.p>
                                    <motion.div variants={itemVariants} className="mt-4 w-full h-4 bg-gray-400 rounded-full">
                                        <div className="w-6/10 h-full text-center text-xs text-white bg-[#FE4F6C] rounded-full">
                                            60%
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* bloc 3 */}
                        <motion.div 
                        variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="w-full">
                            <h1 className="mb-8 text-3xl text-white">Autre </h1>
                            <div className="  grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-4">

                                <div className="flex flex-col items-center p-4  rounded-xl shadow-md shadow-white transition transform hover:scale-105 hover:bg-gray-600">
                                    <motion.img variants={itemVariants} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="HTML" className="w-12 h-12 mb-2" />
                                    <motion.p variants={itemVariants} className="text-gray-300">GitHub</motion.p>
                                    <motion.div variants={itemVariants} className=" mt-4 w-full h-4 bg-gray-400 rounded-full">
                                        <div className="w-7/10 h-full text-center text-xs text-white bg-[#FE4F6C] rounded-full">
                                            70%
                                        </div>
                                    </motion.div>
                                </div>
                                <div className="flex flex-col items-center p-4  rounded-xl shadow-md shadow-white transition transform hover:scale-105 hover:bg-gray-600">
                                    <motion.img variants={itemVariants} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="HTML" className="w-12 h-12 mb-2" />
                                    <motion.p variants={itemVariants} className="text-gray-300">Figma</motion.p>
                                    <motion.div variants={itemVariants} className=" mt-4 w-full h-4 bg-gray-400 rounded-full">
                                        <div className="w-6/10 h-full text-center text-xs text-white bg-[#FE4F6C] rounded-full">
                                            60%
                                        </div>
                                    </motion.div>
                                </div>
                                <div className="flex flex-col items-center p-4  rounded-xl shadow-md shadow-white transition transform hover:scale-105 hover:bg-gray-600">
                                    <motion.img variants={itemVariants} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" alt="HTML" className="w-12 h-12 mb-2" />
                                    <motion.p variants={itemVariants} className="text-gray-300">Postman</motion.p>
                                    <motion.div variants={itemVariants} className=" mt-4 w-full h-4 bg-gray-400 rounded-full">
                                        <div className="w-7/10 h-full text-center text-xs text-white bg-[#FE4F6C] rounded-full">
                                            70%
                                        </div>
                                    </motion.div>
                                </div>
                                <div className="flex flex-col items-center p-4  rounded-xl shadow-md shadow-white transition transform hover:scale-105 hover:bg-gray-600">
                                    <motion.img variants={itemVariants} src="https://img.icons8.com/?size=100&id=TMZAZMLFozcL&format=png&color=000000" alt="HTML" className="w-12 h-12 mb-2" />
                                    <motion.p variants={itemVariants} className="text-gray-300">Bash</motion.p>
                                    <motion.div variants={itemVariants} className=" mt-4 w-full h-4 bg-gray-400 rounded-full">
                                        <div className="w-7/10 h-full text-center text-xs text-white bg-[#FE4F6C] rounded-full">
                                            70%
                                        </div>
                                    </motion.div>
                                </div>
                               
                            </div>
                        </motion.div>
                        {/* bloc 4 */}

                        <motion.div variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="w-full">
                            <h1 className="mb-8 text-3xl text-white">Base de Données </h1>
                            <div className="  grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-4">


                                <div className="flex flex-col items-center p-4  rounded-xl shadow-md shadow-white transition transform hover:scale-105 hover:bg-gray-600">
                                    <motion.img variants={itemVariants} src="https://e7.pngegg.com/pngimages/890/928/png-clipart-sqlite-logo-sqlite-logo-icons-logos-emojis-tech-companies.png" alt="HTML" className="w-12 h-12 mb-2" />
                                    <motion.p variants={itemVariants} className="text-gray-300">SQLite</motion.p>
                                    <motion.div variants={itemVariants} className=" mt-4 w-full h-4 bg-gray-400 rounded-full">
                                        <div className="w-6/10 h-full text-center text-xs text-white bg-[#FE4F6C] rounded-full">
                                            60%
                                        </div>
                                    </motion.div>
                                </div>
                                <div className="flex flex-col items-center p-4  rounded-xl shadow-md shadow-white transition transform hover:scale-105 hover:bg-gray-600">
                                    <motion.img variants={itemVariants} src="/MongoDB.png" alt="HTML" className="w-12 h-12 mb-2" />
                                    <motion.p variants={itemVariants} className="text-gray-300">MongoDB</motion.p>
                                    <motion.div variants={itemVariants} className=" mt-4 w-full h-4 bg-gray-400 rounded-full">
                                        <div className="w-5/10 h-full text-center text-xs text-white bg-[#FE4F6C] rounded-full">
                                            50%
                                        </div>
                                    </motion.div>
                                </div>
                                <div className="flex flex-col items-center p-4  rounded-xl shadow-md shadow-white transition transform hover:scale-105 hover:bg-gray-600">
                                    <motion.img variants={itemVariants} src="/image.png" alt="HTML" className="w-12 h-12 mb-2" />
                                    <motion.p variants={itemVariants} className="text-gray-300">SQL</motion.p>
                                    <motion.div variants={itemVariants} className=" mt-4 w-full h-4 bg-gray-400 rounded-full">
                                        <div className="w-6/10 h-full text-center text-xs text-white bg-[#FE4F6C] rounded-full">
                                            60%
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>



            </div>
        </>
    )
}