import React from 'react'
import { motion } from "framer-motion"
import Skill from './Skill'

type Props = {}

function Skills({}: Props) {

  const skillsSvgs = {
    "AWS":"https://www.svgrepo.com/show/313522/aws.svg",
    "Jenkins":"https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/jenkins/jenkins-original.svg",
    "Docker":"https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/docker/docker-original.svg",
    "Kubernetes":"https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/kubernetes/kubernetes-plain.svg",
    "Javascript":"https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg",
    "nodejs":"https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nodejs/nodejs-plain-wordmark.svg",
    "React":"https://cdn.worldvectorlogo.com/logos/react-1.svg",
    "Nextjs":"https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nextjs/nextjs-original-wordmark.svg",
    "Html5":"https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-plain.svg",
    "Css3":"https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original.svg",
    "Tailwind":"https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/tailwindcss/tailwindcss-plain.svg",
    "Bash":"https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/bash/bash-original.svg",
    "redhat":"https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/redhat/redhat-original.svg",
    "ubuntu":"https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/ubuntu/ubuntu-plain.svg",
    "Sqlite":"https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/sqlite/sqlite-plain-wordmark.svg",
    "pgsql":"https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/postgresql/postgresql-original.svg",
    "Python":"https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/python/python-original.svg",
    "Flask":"https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/flask/flask-original-wordmark.svg",
    "SSH":"https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/ssh/ssh-original-wordmark.svg",
    "Npm":"https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/npm/npm-original-wordmark.svg",


  }

  return (
    <motion.div
    className=' flex relative flex-col text-center md:text-left
    xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center
    xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-400
        text-2xl'>
            Skills
        </h3>
        {/* <h3 className='absolute top-20 uppercase tracking-[3px] text-gray-500
        text-sm'>
            Hover over a skill for current proficiency
        </h3> */}

        <div className='grid grid-cols-4 gap-3 mt-10 md:mt-20 xl:pt-28 pt:30 '>
          {Object.entries(skillsSvgs).map(([icon, svg]) => (
            <div key={icon} className='card-zoom group relative flex cursor-pointer md items-center justify-center m-0 overflow-hidden  w-full h-full rounded-2xl'>
                <motion.img
                // initial={{
                //     x: directionLeft ? -200 : 200,
                //     opacity: 0
                // }}
                // transition={{ duration: 1 }}
                // whileInView={{
                //     opacity: 1,
                //     x: 0
                // }}
                // viewport={{once: true}}
                src={svg}
                className='card-zoom-image rounded-full border border-[transparent] object-cover w-16 h-16 md:h-20 md:w-20 xl:w-20 xl:h-20
                filter group-hover:grayscale transition duration-300 ease-in-out'
                />
        </div>

    </motion.div>
  )
}

export default Skills