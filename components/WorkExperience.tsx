import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import Image from 'next/image'
import ExperienceCard from './ExperienceCard'
import itSpecialistPic from '../public/itSpecialist.jpg'
import freelancePic from '../public/freelance.webp'



type Props = {}

function WorkExperience({}: Props) {

  const experiences = {
    1: {name:"IT SPECIALIST", company: "the Egyptian Armed Forces", timelapse: "Jun 2021 - Jun 2022 · 1 yr 1 mo", picture: itSpecialistPic, summary1: "Installing new software and hardware components.", summary2: "Network administration and troubleshooting.", summary3: "Ensuring data storage is safe and secure."},
    2: {name:"Devops engineer", company: "Freelance", timelapse: "Jan 2023 - Present", picture: freelancePic, summary1: "Working with various tools and cloud services.", summary2: "Managing AWS instances.", summary3: "Creating and composing Docker clusters."},
  }



  return (
  <div className="h-screen relative flex overflow-hidden flex-col text-left
      max-w-full justify-evenly mx-auto items-center z-0 pr-3">

    <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-400
        text-2xl'>
          Experience
    </h3>

    <div className='container mt-28 mb-5'>

    <ul className="cards">
      {Object.entries(experiences).map(([key, experience]) =>  (


        <li key={key} className="card">
          <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
          w-[300px] md:w-[600px] xl:w-[600px] snap-center bg-[#292929 p-10] hover:opacity-100
          opacity-90 cursor-pointer transition-opacity duration-200 overflow-hidden'>
              <Image
              className='w-32 h-32 rounded-full object-cover object-center' 
                  src={experience.picture}
                  alt=""
                  height={400}
                  width={500}
              />

              <div className='px-0 md:px-10'>
                  <h4 className='uppercase text-3xl font-light'>{experience.name}</h4>
                  <p className='uppercase font-bold text-xl mt-1'>{experience.company}</p>
                  <p className='uppercase py-5 text-gray-300'>{experience.timelapse}</p>
                  <ul className='list-disc space-y-4 text-sm md:text-xl'>
                      <li>{experience.summary1}</li>
                      <li>{experience.summary2}</li>
                      <li>{experience.summary3}</li>
                  </ul>
              </div>
          </article>

        </li>

      ))}

    </ul>
    
    </div>
  </div>
  )
}

export default WorkExperience