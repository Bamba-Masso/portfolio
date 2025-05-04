import Profile from './components/profile';
import Formation from './components/timeline';
import Skills from './components/skills';
import Project from './components/project';
import Services from './components/services';
import Contact from './components/contact';
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Index() {


  const TypewriterEffect = ({ text, speed, deleteSpeed, loop }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
      const interval = setInterval(() => {
        if (isDeleting) {
          setDisplayedText(displayedText.slice(0, -1));
          setIndex(index - 1);
        } else {
          if (index < text.length) {
            setDisplayedText(displayedText + text[index]);
            setIndex(index + 1);
          }
        }

        if (index === text.length) {
          setIsDeleting(true);
        }

        if (index === 0 && isDeleting) {
          setIsDeleting(false);
          if (loop) {
            setIndex(0);
            setDisplayedText('');
          }
        }
      }, isDeleting ? deleteSpeed : speed);

      return () => clearInterval(interval);
    }, [index, text, speed, deleteSpeed, isDeleting, loop, displayedText],
    );
    return <span className="typewriter-text">{displayedText}</span>;
  };
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.8, 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const waveAnimation = {
    animate: {
      rotate: [0, 20, -10, 20, 0],
      transition: {
        repeat: Infinity,
        duration: 2,
      },
    },
  };

  return (
    <>
      <main className="bg-[#3A3973]">
        <header className="w-full bg-[#3A3973] px-16 px-4 flex fixed justify-around items-center py-4 shadow-md top-0 z-50">
          <span className="text-2xl font-bold text-[#FE4F6C]">BAMBA</span>
          <input type="checkbox" className="peer hidden" id="navbar-open" />
          <label className="absolute top-5 right-7 cursor-pointer md:hidden" htmlFor="navbar-open">
            <span className="sr-only">Toggle Navigation</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>

          <nav aria-label="Header Navigation" className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
            <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
              <li className="text-white md:mr-12 hover:text-[#FE4F6C]"><a href="#props">A propos</a></li>
              <li className="text-white md:mr-12 hover:text-[#FE4F6C]"><a href="#formation">Formation</a></li>
              <li className="text-white md:mr-12 hover:text-[#FE4F6C]"><a href="#conpetences">Competences</a></li>
              <li className="text-white md:mr-12 hover:hover:text-[#FE4F6C]"><a href="#services">Services</a></li>
              <li className="text-white md:mr-12 hover:text-[#FE4F6C]"><a href="#projets">Projets</a></li>
              <li className="text-white md:mr-12 hover:text-[#FE4F6C]"><a href="#contact">Contact</a></li>

            </ul>
          </nav>
        </header>
        <div className="w-full flex justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className=" mt-20  w-[80%] px-4 py-16  flex items-center justify-center "
      >
        <div className="mt-20">
          <motion.h1
            variants={itemVariants}
            className="text-3xl text-white"
          >
           Salut !{" "}
        <motion.span
          variants={waveAnimation}
          animate="animate"
          style={{ display: "inline-block", transformOrigin: "70% 70%" }}
        >
          👋
          </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-5xl mb-10 text-white"
          >
            Mon nom est <span className="font-bold text-[#FE4F6C]">BAMBA Goubo Mansogbê, </span>
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-white text-3xl"
          >
            Je suis
            <TypewriterEffect text=" développeuse Full-Stack junior" speed={250} deleteSpeed={100} loop={true} />
          </motion.p>
        </div>

       
      </motion.div>
    </div>
        {/* partie à propos */}
        <div className=' w-full flex justify-center'>
          <div className=' h-auto w-[80%] px-4 py-16  '>
            <h1 id='props' className='text-center mb-14 text-3xl font-bold text-white'>A Propos  <span className='text-[#FE4F6C]'> De Moi</span> </h1>
          <Profile />
          </div>
        </div>
        
        <div className='bg-[#3A3980]  w-full flex justify-center'>
          <div className=' w-[80%] px-4 py-16 '>
          <h1 id='formation' className="mb-14 text-3xl text-center font-bold text-white"> Mes <span className="text-[#FE4F6C]">Formations</span></h1>
          <Formation />
          </div>
        </div>

        <div className='w-full flex justify-center'>
          <div className=' w-[80%] px-4 py-16'>
          <h1 id='competences' className='text-center mb-14 text-3xl font-bold text-white'>Mes<span className='text-[#FE4F6C]'> Conpétences</span> </h1>
          <Skills />
          </div>
        </div>
         <div className='bg-[#3A3980] w-full flex justify-center'>
          <div className='w-[85%] px-4 py-16'>
          <h1 id='services' className="mb-14 text-3xl text-center font-bold text-white"> Mes <span className="text-[#FE4F6C]">Services</span></h1>
          <Services />
          </div>
        </div>
        <div className='w-full flex justify-center'>
          <div className='w-[85%] px-4 py-16'>
          <h1 id='projets' className="mb-14 text-3xl text-center font-bold text-white"> Mes <span className="text-[#FE4F6C]">Projets</span></h1>
          <Project />
          </div>
        </div>
       
        <div className='bg-[#3A3980] w-full flex justify-center'>
          <div className='w-[85%] px-4 py-16'>
          <h1 id='contact' className="mb-14 text-3xl text-center font-bold text-white"> Contacter <span className="text-[#FE4F6C]">Moi</span></h1>
          <Contact />
          </div>
        </div>
        
      </main>

    </>
  )
}