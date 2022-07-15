import React from 'react'
import CamilleImg from '../assets/CamilleCropped.jpg'
import { Typewriter } from "react-simple-typewriter"
import "react-simple-typewriter/dist/index.js"
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs'

const Hero = () => {
  return (
   //flex container
    <div className='container flex flex-col-reverse items-center px-6 mx-auto md:space-y-0 md:flex-row w-full h-screen'>
      
        <div className='flex flex-col mb-32 space-y-0 md:w-1/2'>
          <div className='m-8'>
            <h1 className='font-bold text-3xl text-center space-y-6 md:text-5xl md:mt-44 w-full'>
              Hello I'm Camille!
            </h1>
          </div>
            <div className='items-center text-1xl ml-6 text-center font-semibold'>
            <p>
              You can call me 'Cams' 
            </p>
            <p>
              A software engineer based on Manila
            </p>
            <h1 className='pt-10'>
              I'm 
              <span>
                <Typewriter
                   loop={false}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={100}
                    words={[' Software Engineer', ' Developer',' Woman']}
                />
            </span>
            </h1>
            <div className='flex space-x-8 justify-center mt-8'>
              <button>
                Click here to view CV
              </button>
            <BsLinkedin size={20}/>
              <BsGithub size={20}/>
            </div>
           
            </div>
        </div>
        <div className='w-52 md:w-1/4'>
            <img src={CamilleImg} className='rounded-lg' alt="" />
            </div>
    </div>
  )
}

export default Hero