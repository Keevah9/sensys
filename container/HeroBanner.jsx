import React from 'react'
import Link  from 'next/link'
import { urlFor } from '../lib/client'
import {AiOutlineArrowDown} from 'react-icons/ai'

const HeroBanner = ({heroBanner}) => {
  return (
    <section className='py-16 mb-16 sm:mb-0 mx-auto h-full px-20 w-full xl:w-5/6 xl:mx-auto relative ' >      
      <section className='  h-full w-full sm:flex justify-center  gap-12 xxl:gap-4 '>
        <div className='   md:w-1/2'>
          <img src={urlFor(heroBanner.image)} alt="wigs " className='h-full mx-auto rounded-xl opacity-90' />
        </div>
        <div className='absolute z-0 w-24 h-20 border-2 border-green-900 sm:bottom-4 left-14 animate-pulse bottom-[-4rem]'>
        </div>
        <Link href='#features' >
          <button className=' absolute w-24 h-20 bg-yellow-300  opacity-50 sm:bottom-0 left-10 flex justify-center items-center z-80 animate-bounce hover:animate-spin bottom-[-4rem]'  >
            <AiOutlineArrowDown size={28}/>
          </button>
        </Link>
        <div className='  w-full md:w-1/2'>
          <h1 className='text-green-900 text-4xl text-center sm:text-8xl font-bold pt-12 sm:pt-0 sm:text-left'>{heroBanner.smallText} <br /><span className=' px-32 sm:px-14'>{heroBanner.midText}</span> </h1>
          <div className='md:flex lg:pt-16 md:gap-8 w-full pt-8'>
            <h5 className='w-full text-2xl md:text-3xl lg:w-2/3  font-bold'>{heroBanner.desc}</h5>
            <p className='w-full sm:text-2xl pt-4 md:pt-0 lg:w-2/3'>{heroBanner.largeText1}</p>
          </div>
          <Link href={`/product/${heroBanner.product}`} >
          <button type='button' className=' mt-4 2xl:mt-16 bg-black text-white px-4 rounded-lg py-2 capitalize md:mt-12 mx-auto  sm:mx-0 hover:bg-yellow-400 hover:text-black'>{heroBanner.buttonText}</button>
          </Link>
        </div>
      </section>
    </section>
  )
}

export default HeroBanner