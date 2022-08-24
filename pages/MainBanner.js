import React from 'react'
import {About} from '../components'
import image from '../assets/wig5.jpeg'
import Image from 'next/image'

const MainBanner = () => {
  return (
    <section className='h-full py-16  mx-auto  px-16 w-full xl:w-5/6 xl:mx-auto relative ' id='about'>
      <div className=' class
      sm:flex gap-8 justify-between h-full'>
          <div className='sm:w-1/2 xl:w-1/3 '>
            <h2 className='text-green-900 font-bold text-5xl text-center sm:text-left '>About Us</h2>
            <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore officiis, dignissimos deleniti optio veniam nostrum temporibus eaque qui eius asperiores.
            </p>
          </div>
          <button type='button' className=' sm:my-0 my-4 2xl:mt-16 bg-black text-white px-4 rounded-lg h-full py-2 capitalize md:mt-12 sm:mx-0 block mx-auto hover:bg-yellow-400 hover:text-black'>Explore Collection</button>
      </div>
      <div className='flex md:flex-row  sm:flex-col-reverse justify-between flex-col-reverse w-full h-full'>
        <div className='w-full  md:w-1/2 h-full  flex flex-wrap justify-around'>
          <About num='1' desc='Dolore officiis, dignissimos deleniti optio veniam nostrum temporibus eaque qui eius asperiores.' head=' eaque qui eius asperiores'/>
          <About num='2' desc='Dolore officiis, dignissimos deleniti optio veniam nostrum temporibus eaque qui eius asperiores.' head=' eaque qui eius asperiores'/>
          <About num='3' desc='Dolore officiis, dignissimos deleniti optio veniam nostrum temporibus eaque qui eius asperiores.' head=' eaque qui eius asperiores'/>
          <About num='4' desc='Dolore officiis, dignissimos deleniti optio veniam nostrum temporibus eaque qui eius asperiores.' head=' eaque qui eius asperiores'/>
        </div>

        <div className=' w-full md:w-[40rem] lg:w-2/3  items-center block mx-auto  flex justify-center py-4 md:pr-12 md:justify-end'>
          <Image
            src={image}
            alt='photo'
            width={500} height={400} className='absolute rounded-xl'/>
        </div>
      </div>
    </section>
  )
}

export default MainBanner