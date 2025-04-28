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

        <motion.h2 variants={itemVariants} className="md:text-5xl text-2xl font-bold text-[#FE4F6C] mb-4">
          BAMBA Mansogbê
        </motion.h2>

        <motion.p variants={itemVariants} className="text-white text-md mb-6">
          I am a dedicated and innovative FullStack Developer passionate about creating impactful
          digital experiences. With a keen eye for detail and a commitment to excellence, I specialize in designing
          and developing solutions that combine creativity with functionality.
        </motion.p>

        <motion.div variants={itemVariants}>
          <a href="BAMBA_CV.pdf" download="BAMBA_CV.pd"  className="md:px-6 px-4 py-2 text-white font-semibold outline outline-[#FE4F6C] rounded-full hover:bg-[#FE4F6C] hover:border border-white transform transition delay-300">
            Download CV
          </a>
        </motion.div>
      </motion.div>
    </section>
        </>
    )
}