import React from 'react'
import { urlFor } from '../lib/client'

const Review = ({testimony: {image,name,desc}}) => {
  return (
    <div className='mt-4 w-[30rem]   flex flex-wrap  items-center justify-start relative px-8 h-[17rem] '>
      <img 
        src={urlFor(image )}
        alt='reviews' className='h-96 gap-12 sm:h-full w-[30rem] mx-auto rounded-xl'/>
      <div className=' lg:pt-16 sm:gap-8  w-[30rem]     pt-8'>
        <p>"{desc}"</p>
        <h4 className='pt-4 font-bold text-green-900'>{name}</h4>
      </div>
    </div>
  )
}

export default Review