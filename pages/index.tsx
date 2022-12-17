import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import profilePic from '../public/avatar.jpg'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-[#363636] text-white h-screen snap-y snap-mandatory
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20
     scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Ahmed's Portfolio</title>
      </Head>

      <Header/>

      <section id="hero" className='snap-start'>
        <Hero/>
      </section>

      <section id="about" className='snap-center'>
        <About/>
      </section>

      {/* <section id="experience" className='snap-center'>
        <WorkExperience/>
      </section>
       */}
      <section id="skills" className='snap-start'>
        <Skills/>
      </section>

      <section id="projects" className='snap-start'>
        <Projects/>
      </section>

      <section id="contact" className='snap-start'>
        <ContactMe/>
      </section>



          <footer className='sticky bottom-20 md:bottom-8 justify-end flex w-full pr-10 ' >
            <div className='flex items-center justify-center '>
              <Link
              href='#hero'>
                <Image
                className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer '
                src={profilePic}
                alt="Home Button" />
              </Link>
            </div>
          </footer>


    </div>
  )
}