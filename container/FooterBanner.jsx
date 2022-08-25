
import React from 'react'
import {RiFacebookLine, RiTwitterLine, RiInstagramLine} from 'react-icons/ri'
import { useStateContext } from '../context/StateContext'
import Link from 'next/link'

const FooterBanner = () => {
  const {setShowCart} = useStateContext()
  return (
    <div className='py-28  mx-auto  px-16 w-full  relative bg-yellow-400 mt-8  '>
      <div className='justify-between  h-full w-full sm:flex xl:w-5/6  gap-12 xxl:gap-4 xl:mx-auto '>
        <div className='h-full sm:text-left text-center sm:w-1/3'>
          <h2 className='text-5xl font-bold pb-4 text-green-900'><a href="/">Sensys</a> </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, labore? Dolores architecto sint maxime distinctio eos minima reprehenderit iste facere.</p>
        </div>
        <div className='flex justify-between  sm:w-2/4 mt-8 sm:mt-0'>
          <div>
            <div>
              <h4 className='pb-4 font-bold text-2xl'>Home</h4>
              <p><a href="/">Discover</a></p>
              <p className='py-4'><a href="#features">Explore</a></p>
              <p><a href="#join">Join</a></p>
            </div>
            <div className='mt-6'>
              <h4 className='pb-4 font-bold text-2xl'>Company</h4>
              <a href='/Shipping'>
                <p>Shipping & Returns </p>
              </a>
              <a href='/Terms'>
                <p className='py-4'>Terms of use </p>
              </a>
              <a href='/Privacy'>
                <a className='py-4'>Privacy Policy </a>
              </a>
            </div>
          </div>
          <div>
            <div>
              <h4 className='pb-4 font-bold text-2xl'>Features</h4>
              <p ><a href="/MainBanner">About Us</a> </p>
              <p onClick={()=>setShowCart(true)}className='pt-2 cursor-pointer'>Cart</p>
            </div>
            <div className='mt-6 '>
              <h4 className='pb-4 font-bold text-2xl'> Contact </h4>
              <p className='pb-4'>+123456789</p>
              <p><a href="mailto:sensysinfo31@gmail.com">Email us</a> </p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-around items-center py-8'>
        <p className='text-center'>2022 All rights reserved</p>
        <div className='flex justify-start gap-4 items-center  pt-4'>
          <a href="#"><RiFacebookLine size={25}/></a>
          <a href="#"><RiInstagramLine size={25}/></a>
          <a href="#"><RiTwitterLine size={25}/></a>
        </div>
      </div>
    </div>
  )
}

export default FooterBanner