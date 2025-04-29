import { motion } from "framer-motion";
export default function Header() {
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

      <section className="w-full relative flex items-center flex-col lg:flex-row" id="about">
        <motion.img
          src="pro-Photoroom.jpg"
          alt="port image"
          className="lg:w-1/2 border-3 border-[#FE4F6C]"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:absolute lg:left-[40%] md:left-[30%] lg:w-[55%] lg:p-12 sm:p-6 p-4 flex flex-col justify-center bg-[#3A3969] shadow-[32px_29px_4px_-24px] shadow-white"
        >
          <motion.p variants={itemVariants} className="text-white text-sm mb-1">
            Développeuse Fullstack Junior
          </motion.p>

          <motion.h2 variants={itemVariants} className="md:text-5xl text-3xl font-bold text-[#FE4F6C] mb-4">
            BAMBA Mansogbê
          </motion.h2>

          <motion.p variants={itemVariants} className="text-white text-lg mb-6">
            J'ai 21 ans et je suis développeuse fullstack junior. Cela fait maintenant deux
            ans que je me suis lancée dans le monde du développement. Depuis, je ne cesse
            d'apprendre et de me perfectionner. Curieuse et motivée, j'aime relever des
            défis techniques et travailler sur des projets concrets. Mon objectif est
            de mettre mes compétences en pratique, d'évoluer dans des environnements
            stimulants et de continuer à progresser dans ce domaine passionnant.
          </motion.p>

          <motion.div variants={itemVariants}>
            <a href="BAMBA_CV.pdf" download="BAMBA_CV.pd" className="md:px-6 px-4 py-2 text-white font-semibold outline outline-[#FE4F6C] rounded-full hover:bg-[#FE4F6C] hover:border border-white transform transition delay-300">
              Download CV
            </a>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}