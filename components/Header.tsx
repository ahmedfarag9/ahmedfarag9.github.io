import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
import Link from 'next/link'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5
            }}
            className='flex flex-row items-center hover:fgColor-[#ffffff] '
            >
            <SocialIcon url="https://github.com/ahmedfarag9" 
            fgColor='white'
            bgColor='transparent'
            target="_blank"
            rel="noopener noreferrer"
            style={{height: 60, width: 60}}
            />
            {/* <SocialIcon url="https://www.twitter.com" 
            fgColor='gray'
            bgColor='transparent'
            /> */}
            <SocialIcon url="https://www.linkedin.com/in/ahmedfarag9/" 
            fgColor='white'
            bgColor='transparent'
            target="_blank"
            rel="noopener noreferrer"
            style={{height: 60, width: 60}}
            />                        
        </motion.div>


            <motion.div
            
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.5,
            }}
            animate={{
                x:0,
                opacity: 1,
                scale: 1,
            }}
            transition={{
                duration: 1.5
            }}
            className='flex flex-center items-center text-gray-300 cursor-pointer'>

                <SocialIcon
                url='#contact'
                className='cursor-pointer'
                network='email' 
                fgColor='white'
                bgColor='transparent'
                style={{height: 60, width: 60}}
                />

                <Link href='#contact'>

                    <p className='uppercase  md:inline-flex text-xs text-gray-400'>
                       Contact Me    
                    </p>
                </Link>
            </motion.div>



    </header>
  )
}