import { motion } from "framer-motion";
export default function Formation() {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };
  return (
    
    <>
      <div className="container">
      <h1 className="mb-10 text-3xl text-center font-bold text-white"> Mes <span className="text-[#FE4F6C]">Formation</span></h1>
      <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">

        {/* Premier bloc */}
        <motion.div className="flex flex-row-reverse md:contents" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="border-1 border-r-2 border-r-[#FE4F6C] col-start-1 col-end-5 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
            <h3 className="font-bold text-lg mb-1 text-white">DÉVELOPPEMENTS FULLSTACK </h3>
            <p className="text-white text-justify w-full">We.code | 2024-2025</p>
          </div>
          <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-[#FE4F6C] pointer-events-none"></div>
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-[#FE4F6C] bg-white rounded-full shadow"></div>
          </div>
        </motion.div>

        {/* Deuxième bloc */}
        <motion.div className="flex md:contents" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-[#FE4F6C] pointer-events-none"></div>
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full border-2 border-[#FE4F6C] bg-white shadow"></div>
          </div>
          <div className="border-1 border-l-2 border-l-[#FE4F6C] col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
            <h3 className="font-bold text-lg mb-1 text-white">DÉVELOPPEMENTS WEB (PHP)</h3>
            <p className="text-white text-justify w-full">NaN Digitale Academy | 2023-2024</p>
          </div>
        </motion.div>

        {/* Troisième bloc */}
        <motion.div className="flex flex-row-reverse md:contents" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="border-1 border-r-2 border-r-[#FE4F6C] col-start-1 col-end-5 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
            <h3 className="font-bold text-lg mb-1 text-white">LICENCE INFORMATIQUE (base de données)</h3>
            <p className="text-white text-justify">Université Virtuelle de Côte d'Ivoire | 2021-2024</p>
          </div>
          <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-[#FE4F6C] pointer-events-none"></div>
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full border-2 border-[#FE4F6C] bg-white shadow"></div>
          </div>
        </motion.div>

        {/* Quatrième bloc */}
        <motion.div className="flex flex-row-reverse md:contents" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="border-1 border-r-2 border-r-[#FE4F6C] col-start-1 col-end-5 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
            <h3 className="font-bold text-lg mb-1 text-white">INTRODUCTION TO DATA SCIENCE</h3>
            <p className="text-white text-justify">Cisco Networking Academy | 2024</p>
          </div>
          <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-[#FE4F6C] pointer-events-none"></div>
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full border-2 border-[#FE4F6C] bg-white shadow"></div>
          </div>
        </motion.div>

        {/* Cinquième bloc */}
        <motion.div className="flex md:contents" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-[#FE4F6C] pointer-events-none"></div>
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full border-2 border-[#FE4F6C] bg-white shadow"></div>
          </div>
          <div className="border-1 border-l-2 border-l-[#FE4F6C] col-start-6 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
            <h3 className="font-bold text-lg mb-1 text-white">BACCALAUREAT série D</h3>
            <p className="text-white text-justify">Lycée moderne Cocody Angré | 2018-2021</p>
          </div>
        </motion.div>

      </div>
    </div>
    </>
  )
}