import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import Projects from './Projects'
import { /*useForm,*/ SubmitHandler } from "react-hook-form";
import { useForm, ValidationError } from '@formspree/react';

import Link from 'next/link'

type Props = {}

// type Inputs = {
//     name: string,
//     email: string,
//     subject: string,
//     message: string,
// };


function ContactMe({}: Props) {

    const [state, handleSubmit] = useForm("xayzyova");
    if (state.succeeded) {
        alert('Thanks for reaching out!');
    }

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl
    px-10 justify-evenly mx-auto items-center'>
        
            <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-00
            text-2xl '>
                Contact
            </h3>
        
        <div className='flex flex-col space-y-6'>
            <h4 className='text-4xl font-semibold text-center mt-20 mb-10'>
                Get in touch with me.
            </h4>

            <div className='space-y-8 mt-5 md:mt-5 l:mt-5 xl:mt-10 '>
                {/* <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-xl'>+1234567890</p>
                </div> */}

                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#e09e0f] h-7 w-7 animate-pulse'/>
                    <p className='text-xl'>ahmedfarag.tech@gmail.com</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#e09e0f] h-7 w-7 animate-pulse'/>
                    <p className='text-xl'>Giza, Egypt</p>
                </div>

            </div>


            <form onSubmit={handleSubmit} className='flex flex-col space-y-1 w-fit mx-auto '>
                <div className='flex space-x-1'>
                    {/* <label htmlFor="email">
                        Email Address
                    </label> */}

                    <input
                        id="name"
                        type="name" 
                        name="name"
                        placeholder=' Name'
                        className='contactInput'
                    />
                    <ValidationError
                        prefix="Name" 
                        field="name"
                        errors={state.errors}
                    />



                    <input
                        id="email"
                        type="email" 
                        name="email"
                        placeholder=' Email'
                        className='contactInput'
                    />
                    <ValidationError
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />

                </div>

                <textarea
                    id="message"
                    name="message"
                    className='contactInput2'
                    placeholder=' Message'
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting} className='bg-[#e09e0f] py-3 px-10 rounded-md
                text-black font-bold text-lg'>
                    Submit
                </button>
            </form>

        </div>




   </div>
  )
}

export default ContactMe