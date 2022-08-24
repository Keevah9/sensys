import React from 'react'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'
const Content = ({ image, span, desc}) => {
  return (
    <>
        <div className=' sm:block h-2/5  md:w-[40rem] text-left  w-full mx-auto sm:px-0 px-4 sm:mx-0 '>
          <Fade left>
            <Image 
              src={image}
              alt='photo'
              width={500} height={400} className='rounded-xl '/>
          </Fade>
        </div>
      <div className='w-full sm:w-2/4 md:w-1/4  sm:text-left'>
        <h4 className='capitalize text-4xl  font-bold py-4 '>{span}</h4>
        <p className=' w-4/5 mx-auto sm:w-full lg:w-full'>{desc}</p>
      </div>
    </>
  )
}

export default Content