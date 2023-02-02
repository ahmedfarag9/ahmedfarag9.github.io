import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import Image from 'next/image'
import ExperienceCard from './ExperienceCard'
import itSpecialistPic from '../public/itSpecialist.jpg'
import freelancePic from '../public/freelance.webp'



type Props = {}

function WorkExperience({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    transition={{ duration: 1 }}
    whileInView={{opacity: 1}}
    className='h-screen relative flex overflow-hidden flex-col text-center md:text-left xl:text-left
    max-w-full justify-evenly mx-auto items-center z-0'>
        <h3
        className='absolute top-20 uppercase tracking-[20px] text-gray-500
        text-2xl'>
        Experience
        </h3>
    
    <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-20
    scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 '>
        <ExperienceCard/>
    </div>

    <div className='w-full absolute top-[30%] bg-[#F7AB01]/10 left-0 h-[500px]
      -skew-y-12 '/>

    </motion.div>
  )
}

export default WorkExperience