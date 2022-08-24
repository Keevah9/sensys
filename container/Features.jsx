import React from 'react'
import Link from 'next/link'
import image1 from '../assets/one.jpg'
import image2 from '../assets/two.jpg'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'

const Features = ({heroBanner}) => {
  return (
    <section className='py-16  mx-auto  px-16 w-full xl:w-5/6 xl:mx-auto relative bg-yellow-400'>
      <div className=' sm:flex justify-between  gap-8'>
        <div className='pb-4'>
          <h2 className='font-bold text-5xl pb-4 text-green-900'>Featured</h2>
            <p className='w-full sm:w-5/6  pb-4'>We have an eye catching design that is perfect for you...it's not confusing, it's delectable</p>
            <Link href='#features'>
              <button className='mb-8  bg-black text-white px-4 rounded-lg py-2 block mx-auto sm:mx-0 capitalize hover:bg-white hover:text-black'>See all</button>
            </Link>
            <Fade left>
              <Image
                  src={image1}
                  height={500} width={450}
                  alt='featured wigs' className='rounded-xl '
              />
            </Fade>
        </div>
        <div >
          <Fade right>
            <Image
              src={image2}
              height={600} 
              width={450}
              alt='featured wigs' className='rounded-xl'
            />
          </Fade>
          <p className='w-full  pt-4 sm:w-5/6 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore officiis</p>
          <Link href={`/product/${heroBanner.product}`}>
            <button type='button' className=' bg-black text-white px-4 rounded-lg py-2 capitalize md:mt-6 mt-4 mx-auto block sm:mx-0 hover:bg-white hover:text-black'>Buy Now</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Features