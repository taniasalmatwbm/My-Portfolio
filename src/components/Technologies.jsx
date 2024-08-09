import { RiReactjsLine} from 'react-icons/ri'
import { SiMongodb} from 'react-icons/si'
import { FaNodeJs} from 'react-icons/fa'
import { BiLogoPostgresql} from 'react-icons/bi'
import { SiExpress } from 'react-icons/si' 
import { motion } from 'framer-motion'

const iconsVariants=(duration)=>({
  initial:{y: -10},
  animate:{
    y: [10, -10], 
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"

    }
    },
});

function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
       <motion.h1 
       whileInView={{opacity:1, y:0}}
       initial={{opacity:0, x:-100}}
       transition={{duration:1.5}}
       className="my-20 text-center text-4xl ">Technologies</motion.h1>
       <motion.div 
       whileInView={{opacity:1, x:0}}
       initial={{opacity:0, x:-100}}
       transition={{duration:0.5}}
       className="flex flex-wrap items-center justify-center gap-4">
       <motion.div
       initial="initial"
       animate="animate"
       variants={iconsVariants(2.5)}
        className="rounded-2xl border-4 border-neutral-800 p-4">
           <SiMongodb className='text-7xl text-green-700'/>
         </motion.div>

         <motion.div 
         initial="initial"
         animate="animate"
         variants={iconsVariants(3)}
         className="rounded-2xl border-4 border-neutral-800 p-4">
           <SiExpress className='text-7xl text-cyan-400'/>
         </motion.div>
         <motion.div
         initial="initial"
         animate="animate"
         variants={iconsVariants(6)}
          className="rounded-2xl border-4 border-neutral-800 p-4">
           <RiReactjsLine className='text-7xl text-cyan-400'/>
         </motion.div>

         <motion.div
         initial="initial"
         animate="animate"
         variants={iconsVariants(4)}
          className="rounded-2xl border-4 border-neutral-800 p-4">
           <FaNodeJs className='text-7xl text-green-400'/>
         </motion.div>

         <motion.div
         initial="initial"
         animate="animate"
         variants={iconsVariants(3)}
          className="rounded-2xl border-4 border-neutral-800 p-4">
           <BiLogoPostgresql className='text-7xl text-cyan-400'/>
         </motion.div>
       </motion.div>
        </div>
  )
}

export default Technologies;
