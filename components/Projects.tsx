import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import Image from 'next/image'
import robotPic from '../public/robot.jpg'
import portfolioPic from '../public/portfolio.png'
import cicdPic from '../public/cicd.png'
import uniSearchPic from '../public/uniSearch.png'
import elearningWebsitePic from '../public/e-learning-website.png'
import airbyteAirflowPic from '../public/airbyte_airflow.png'
import redisPic from '../public/redis.png'
import mlopsPic from '../public/mlops.png'


type Props = {}

function Projects({}: Props) {

  // const projects = {
  //   1: {name:"CI-CD Pipeline", picture: cicdPic, description:"A Multi-branch CI-CD Pipeline Using Jenkins, Docker & AWS To Deploy Odoo ERP instance & a simple Java Maven app.", link:"https://github.com/ahmedfarag9/CI-CD-Pipeline-Jenkins-Odoo-Project", preview: ''},
  //   2: {name:"MLOPS CICD Housepricing", picture: mlopsPic, description:"A MLOPS CI-CD imlementaion of a Linear Regression Machine Learning Model that predicts house pricing based on various features.", link:"https://github.com/ahmedfarag9/mlops-cicd-bostonhousepricing", preview: ''},
  //   3: {name:"Airbyte Airflow Intergration", picture: airbyteAirflowPic, description:"An Airbyte/Airflow Api integration - Airbyte handles the Api connection & Airflow does the orchestration.", link:"https://github.com/ahmedfarag9/airbyte-airflow-api-intergration", preview: ''},
  //   4: {name:"Redis Setup on AWS", picture: redisPic, description:"Guide to Setup Redis Development Stack on AWS EC2 instance", link:"https://github.com/ahmedfarag9/redis-setup-aws-ec2", preview: ''},
  //   5: {name:"Modern Portfolio", picture: portfolioPic, description:"The one you're reading now. Built with REACT.JS & NEXT.JS Using (JavaScript, TypeScript, Framer Motion, Tailwind CSS)", link:"https://github.com/ahmedfarag9/modern-portfolio-reactjs-nextjs", preview:''},
  //   6: {name:"E-learning Website", picture: elearningWebsitePic, description:"An E-learning Website Built with pure HTML, JAVASCRIPT & CSS", link:"https://github.com/ahmedfarag9/elearning-website", preview:"https://starlit-llama-47c3ea.netlify.app/"},
  //   7: {name:"Humanoid Robot", picture: robotPic, description:"A Humanoid Robot Built From Scratch (Graduation Project).", link:"https://github.com/ahmedfarag9/humaniod-robot-graduation-project", preview: ''},
  //   8: {name:"Uni-Search Egypt", picture: uniSearchPic, description:"A React-Native mobile app to search among hundreds of Egyptian Universities. (published on Google Play)", link:"https://github.com/ahmedfarag9/UniSearch-Egypt", preview: ''},
  // }

  const projects = {
    1: {name:"CI-CD Pipeline", picture: cicdPic, description:"A Multi-branch CI-CD Pipeline Using Jenkins, Docker & AWS To Deploy Odoo ERP instance & a simple Java Maven app.", link:"https://github.com/ahmedfarag9/CI-CD-Pipeline-Jenkins-Odoo-Project", preview: ''},
    2: {name:"Modern Portfolio", picture: portfolioPic, description:"The one you're reading now. Built with REACT.JS & NEXT.JS Using (JavaScript, TypeScript, Framer Motion, Tailwind CSS)", link:"https://github.com/ahmedfarag9/modern-portfolio-reactjs-nextjs", preview:''},
    3: {name:"MLOPS CICD Housepricing", picture: mlopsPic, description:"A MLOPS CI-CD imlementaion of a Linear Regression Machine Learning Model that predicts house pricing based on various features.", link:"https://github.com/ahmedfarag9/mlops-cicd-bostonhousepricing", preview: ''},
    4: {name:"Airbyte Airflow Intergration", picture: airbyteAirflowPic, description:"An Airbyte/Airflow Api integration - Airbyte handles the Api connection & Airflow does the orchestration.", link:"https://github.com/ahmedfarag9/airbyte-airflow-api-intergration", preview: ''},
    5: {name:"Humanoid Robot", picture: robotPic, description:"A Humanoid Robot Built From Scratch (Graduation Project).", link:"https://github.com/ahmedfarag9/humaniod-robot-graduation-project", preview: ''},
  }


  return (
  <div className="h-screen relative flex overflow-hidden flex-col text-left
      max-w-full justify-evenly mx-auto items-center z-0 pr-3">

    <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-400
        text-2xl'>
          Projects
    </h3>

    <div className='container mt-24 mb-5'>

    <ul className="cards">
      {Object.entries(projects).map(([key, project]) =>  (


        <li key={key} className="card">
          <div>
            <h3 className="card-title">{project.name}</h3>
              <div className='card-zoom'>
                <Image
                className='card-zoom-project-image '
                src={project.picture}
                alt='user profile picture'
                />
              </div>
            <div className="card-content">
              <p>{project.description}</p>
            </div>
          </div>
          <div className="card-link-wrapper">
            <a
              href={project.link}
              className="card-link mb-5"
              target="_blank"
              rel="noopener noreferrer">
                Read More
            </a>
            {project.preview &&
            <a
              href={project.preview}
              className="card-link-with-preview m-5"
              target="_blank"
              rel="noopener noreferrer">
                Live Preview
            </a>
            }
          </div>
        </li>




        // <li key={key} className="card">
        //   <div>
        //     <h3 className="card-title">{project.name}</h3>
        //       <Image
        //       className='relative rounded-full h-40 w-40 mx-auto object-contain '
        //       src={project.picture}
        //       alt='user profile picture'
        //       />
        //     <div className="card-content">
        //       <p>{project.description}</p>
        //     </div>
        //   </div>
        //   <div className="card-link-wrapper">
        //     <a
        //       href={project.link}
        //       className="card-link"
        //       target="_blank"
        //       rel="noopener noreferrer">
        //         Read More
        //     </a>
        //   </div>
        // </li>  
      ))}

    </ul>
    
    </div>
  </div>
  )
}

export default Projects