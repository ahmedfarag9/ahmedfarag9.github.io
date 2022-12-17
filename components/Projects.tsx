import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import Image from 'next/image'
import robotPic from '../public/robot.jpg'
import portfolioPic from '../public/portfolio.png'
import cicdPic from '../public/cicd.png'
import uniSearchPic from '../public/uniSearch.png'



type Props = {}

function Projects({}: Props) {

  const projects = {
    1: {name:"Modern Portfolio", picture: portfolioPic, description:"Modern Portfolio Built with REACT.JS & NEXT.JS Using (JavaScript, TypeScript, Framer Motion, Tailwind CSS)", link:"https://github.com/ahmedfarag9/modern-portfolio-reactjs-nextjs"},
    2: {name:"CI-CD Pipeline", picture: cicdPic, description:"A Multi-branch CI-CD Pipeline Using Jenkins, Docker & AWS To Deploy Odoo ERP instance & a simple Java Maven app.", link:"https://github.com/ahmedfarag9/CI-CD-Pipeline-Jenkins-Odoo-Project"},
    3: {name:"Humanoid Robot", picture: robotPic, description:"A Humanoid Robot Built From Scratch (Graduation Project).", link:"https://github.com/ahmedfarag9/humaniod-robot-graduation-project"},
    4: {name:"Uni-Search Egypt", picture: uniSearchPic, description:"A React-Native mobile app to search among hundreds of Egyptian Universities. (published on Google Play)", link:"https://github.com/ahmedfarag9/UniSearch-Egypt"},
   }



  return (
<div className="h-screen relative flex overflow-hidden flex-col text-left
    max-w-full justify-evenly mx-auto items-center z-0 pr-3">

  <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500
      text-2xl'>
        Projects
  </h3>

  <div className='container'>

  <ul className="cards">
      {Object.entries(projects).map(([key, project]) =>  (


        <li key={key} className="card">
      <div>
            <h3 className="card-title">{project.name}</h3>
              <div className='card-zoom'>
                <Image
                className='card-zoom-image '
                src={project.picture}
                alt='user profile picture'
                />
        </div>
        <div className="card-content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repudiandae magnam harum natus fuga et repellat in maiores.</p>
        </div>
      </div>
      <div className="card-link-wrapper">
        <a href="" className="card-link">Read More</a>
      </div>
    </li>
    <li className="card">
      <div>
        <h3 className="card-title">Project 3</h3>
        <img src="https://cdn.pixabay.com/photo/2019/01/17/19/11/login-3938432_960_720.jpg" alt="" />
        <div className="card-content">
          <p>Phasellus ultrices lorem vel bibendum ultricies. In hendrerit nulla a ante dapibus pulvinar eu eget quam.</p>
        </div>
      </div>
      <div className="card-link-wrapper">
        <a href="" className="card-link">Read More</a>
      </div>
    </li>
    <li className="card">
      <div>
        <h3 className="card-title">Project 4</h3>
        <img src="https://cdn.pixabay.com/photo/2019/01/17/19/11/login-3938432_960_720.jpg" alt="" />
        <div className="card-content">
          <p>Aenean posuere mauris quam, pellentesque auctor mi bibendum nec. Sed scelerisque lacus nisi, quis auctor lorem ornare vel.</p>
        </div>
      </div>
      <div className="card-link-wrapper">
        <a href="" className="card-link">Read More</a>
      </div>
    </li>
    <li className="card">
      <div>
        <h3 className="card-title">Project 5</h3>
        <img src="https://cdn.pixabay.com/photo/2019/01/17/19/11/login-3938432_960_720.jpg" alt="" />
        <div className="card-content">
          <p>Vestibulum pharetra fringilla felis sit amet tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras et arcu sit amet est consequat feugiat. Nam ut sapien pulvinar.</p>
        </div>
      </div>
      <div className="card-link-wrapper">
        <a href="" className="card-link">Read More</a>
      </div>
    </li>
    <li className="card">
      <div>
        <h3 className="card-title">Project 6</h3>
        <img src="https://cdn.pixabay.com/photo/2019/01/17/19/11/login-3938432_960_720.jpg" alt="" />
        <div className="card-content">
          <p>Donec ut tincidunt nisl. Vivamus eget eros id elit feugiat mollis. Nam sed sem quis libero finibus tempor.</p>
        </div>
      </div>
      <div className="card-link-wrapper">
        <a href="" className="card-link">Read More</a>
      </div>
    </li>

  </ul>
  
</div>
</div>
  )
}

export default Projects