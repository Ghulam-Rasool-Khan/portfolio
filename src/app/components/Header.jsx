import Image from "next/image";
import { assets } from "../../../assets/assets";
import { motion} from "motion/react"

function Header() {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto flex flex-col items-center justify-center gap-4 pt-16 sm:pt-32">
      <motion.div
        
        initial={{ scale: 0}}
        whileInView={{ scale: 1}}
        transition={{duration:0.8, type: 'spring', stiffness: 100}}
      >
        <Image src={assets.myImage2} alt="" className="rounded-full w-32 h-32 " />
      </motion.div>
      <motion.h3

        initial={{ y: -20, opacity: 0}}
        whileInView={{ y:0, opacity: 1}}
        transition={{duration:0.6, delay:0.3}}

        className="flex items-end gap-2 text-xl md:text-2xl font-Ovo">Hi! I'm GR. Khan <Image src={assets.hand_icon} alt="" className="w-6" />
      </motion.h3>
      <motion.h1
      
        initial={{ y: -30, opacity: 0}}
        whileInView={{ y:0, opacity: 1}}
        transition={{duration:0.8, delay:0.5}}
        
        className="text-3xl sm:text-5xl font-Ovo ">frontend web developer based in Pakistan.
      </motion.h1>
      <motion.p
      
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration:0.6, delay:0.7}}
        
        className="max-w-2xl mx-auto font-Ovo">
        I am a frontend developer from Lahore, Pakistan with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 ">
        <motion.a
        
          initial={{ y: 30, opacity: 0}}
          whileInView={{ y:0, opacity: 1}}
          transition={{duration:0.6, delay:1}}
          
          href="#contact" className="bg-black text-white flex items-center gap-2 px-10 py-3 rounded-full dark:bg-transparent dark:border dark:border-white/50">Contact me
          <Image src={assets.right_arrow_white} alt="" className="w-4"/>
        </motion.a>
        <motion.a
          
          initial={{ y: 30, opacity: 0}}
          whileInView={{ y:0, opacity: 1}}
          transition={{duration:0.6, delay:1.2}}
          
          href="/sample-resume.pdf" download className="border border-gray-500 px-10 py-3 flex items-center gap-2 rounded-full bg-white dark:text-black">My resume
          <Image src={assets.download_icon} alt="" className="w-4"/>
        </motion.a>
      </div>
    </div>
  )
}
export default Header;