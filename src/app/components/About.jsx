import Image from "next/image";
import { assets, infoList, toolsData } from "../../../assets/assets";
import { motion } from 'motion/react'
import projectsData from "../../../assets/projectsData";


function About({isDarkMode}) {
  return (
    <motion.div
    
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration:1}}
        
      id="about" className="mt-20 w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4
      
        initial={{opacity: 0, y:-20}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration:0.5, delay:0.3}}
          
        className="text-center mb-2 text-lg font-Ovo">Introduction</motion.h4>
      <motion.h2
      
      initial={{opacity: 0, y:-20}}
      whileInView={{opacity: 1, y:0}}
      transition={{duration:0.5, delay:0.5}}
        className="text-center text-5xl font-Ovo">About me</motion.h2>

      <motion.div
      
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration:0.8}}
          
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <motion.div
        
          initial={{opacity: 0, scale:0.9}}
          whileInView={{opacity: 1, scale:1}}
          transition={{duration:0.6}}
            
          className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image src={assets.myImage2} alt="" className="w-full rounded-3xl"/>
        </motion.div>
        <motion.div
        
          initial={{opacity: 0}}
          whileInView={{opacity:1 }}
          transition={{duration:0.6, delay:0.8}}
          
          className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">I am an experienced Frontend Developer with over a decade of professional experience in the field. Throughout my career, I have had the privilege of collaborating with prestigious organization, contributing to their success.</p>

          <motion.ul
          
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration:0.8, delay:1}}
            
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({icon, iconDark, title, description}, index) => (
              <motion.li
              
              whileHover={{ scale: 1.05 }}
                
                key={index} className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
                <Image src={isDarkMode ? iconDark : icon} alt="" className=" w-7 mt-3"/>
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{title}</h3>
                <p className=" text-gray-600 text-sm dark:text-white/80">{description }</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
          
            initial={{ y:20, opacity: 0}}
            whileInView={{y:0, opacity: 1}}
            transition={{delay:1.3, duration:0.5}}
              
            className="my-6 text-gray-700 font-Ovo dark:text-white/80">Tools I use</motion.h4>
          <motion.ul
          
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay:1.5, duration:0.6}}
              
            className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index)  => (
              <motion.li
            
                whileHover={{scale:1.1}}
                  
                key={index} className="flex justify-center items-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <Image src={tool} alt="" className=" w-5 sm:w-7"/>
            </motion.li>
            ))}
          </motion.ul>

          {/* ================================ */}


          <motion.h4
  initial={{ y: 20, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ delay: 1.7, duration: 0.5 }}
  className="my-6 text-gray-700 font-Ovo dark:text-white/80"
>
  My Live Projects
</motion.h4>

<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 1.9, duration: 0.6 }}
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4"
>
  {projectsData.map((project, index) => (
    <motion.div
      key={index}
      whileHover={{ scale: 1.03 }}
       className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50 relative"
    >
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
      <p className="text-sm text-gray-600 dark:text-white/80 mb-4">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-400 underline text-[14px] absolute bottom-1 "
      >
        Visit Project →
      </a>
    </motion.div>
  ))}
</motion.div>



          {/* ================================= */}

        </motion.div>
      </motion.div>
    </motion.div>
  )
}
export default About;