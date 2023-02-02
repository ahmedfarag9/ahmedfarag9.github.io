import React from 'react'
import { motion } from "framer-motion"
//import profilePic from '../public/FullAvatar.jpg'
import Image from 'next/image'

type Props = {}

function About({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    transition={{ duration: 1 }}
    whileInView={{opacity: 1}}
    className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-full
    px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-400
        text-2xl'>
            About
        </h3>


        {/* <img src="https://media2.giphy.com/media/f3iwJFOVOwuy7K6FFw/giphy.gif?cid=790b7611750ea31b50f7a50f799f0c0a0252c02163566e18&rid=giphy.gif&ct=g" width="300"/> */}


        <Image
        // initial={{
        //     x: -200,
        //     opacity: 0
        // }}
        // transition={{
        //     duration: 1.2,
        // }}
        // whileInView={{opacity: 1, x: 0}}
        // viewport={{once: true}}
        src='https://media2.giphy.com/media/f3iwJFOVOwuy7K6FFw/giphy.gif?cid=790b7611750ea31b50f7a50f799f0c0a0252c02163566e18&rid=giphy.gif&ct=g'
        height={300}
        width={300}
        alt='user picture'
        className='mt-24 md:mb-0 flex-shrink-0 w-52 h-52 md:w-[300px] md:h-[300px]
        rounded-full object-cover md:rounded-lg 
        xl:w-[350px] xl:h-[300px]'
        />
        <div className='space-y-3 px-0 md:px-10 mb-20'>
            <h4 className='text-xl font-semibold mb-10 '>
                Here is a little background
            </h4>
            <p className=' text-l'>
                - My name is Ahmed Farag. <br />
                - I live in Giza, Egypt. <br />
                - I&apos;m a Software Engineer with a background in Devops, Linux and Robotics. <br />
                - I have a Bachelor&apos;s Degree in Communications and Electronics Engineering.

            </p>
        </div>
        

        
    </motion.div>
  )
}

export default About