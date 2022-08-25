import React from 'react'
import {Content} from '../components'
import logo from '../assets/wig6.jpeg'
import logo1 from '../assets/check3.jpeg'

const Main = () => {
  return (
    <section className='bg-gray-100  py-16 h-full   w-full px-4 sm:px-0  text-center' id='home'>
      <div className=' mt-12 sm:flex  flex-row-reverse items-end   sm:justify-start sm:text-left gap-8  mx-auto w-full h-full xl:w-5/6 px-10 '>
        <div className='  sm:block h-2/5 sm:w-72  text-left  w-5/6 mx-auto sm:mx-0'>
          <h2 className='border-4 border-yellow-300 text-6xl px-4 py-8 sm:px-12 font-bold text-green-900 sm:text-left text-center'>A Great Deal of Style</h2>
        </div>
        <div className='w-full sm:w-2/4 md:w-1/4 sm:text-left'>
          <h4 className='capitalize text-4xl  font-bold py-4 '>hair is the way to slay</h4>
          <p className=' w-full lg:w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum vel iure ad in obcaecati porro.</p>
        </div>
      </div>
      <div className='mt-12 sm:flex  flex-row items-end   sm:justify-start sm:text-left gap-8  mx-auto w-full h-full xl:w-5/6 px-10 '>
        <Content desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum vel iure ad in obcaecati porro.' image={logo} span='hair is the way to slay'/>
      </div>
      <div className=' mt-12 sm:flex  flex-row-reverse items-end   sm:justify-start sm:text-left gap-8  mx-auto w-full h-full xl:w-5/6 px-10 '>
        <Content desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum vel iure ad in obcaecati porro.' image={logo1} span='hair is the way to slay'/>
      </div> 
    </section>
  )
}

export default Main