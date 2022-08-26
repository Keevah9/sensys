import React, {useEffect} from 'react'
import Link from 'next/link'
import {BsBagCheckFill} from 'react-icons/bs'
import { runConfetti } from '../lib/Utils'
import { useStateContext } from '../context/StateContext'

const Success = () => {
    const {setCartItems, setTotalPrice, setTotalQty} = useStateContext()
    useEffect(()=>{
      localStorage.clear()
      setCartItems([])
      setTotalPrice(0)
      setTotalQty(0)
      runConfetti()
    },[])
    
  return (
    <>
      <div className="text-center ">
        <p className=" h-full text-center">
          <BsBagCheckFill size={50} className="text-center my-16 mx-auto" />
        </p>
        <div className="mx-auto w-5/6 sm:w-[30rem]">
          <h2 className="text-3xl   font-bold pb-8">
            Thank you for your order!
          </h2>
          <p className="pb-4 ">Check your email inbox for the receipt.</p>
          <p>
            If you have any question or complaint, please send an email
            <a
              className="text-yellow-500 font-bold pl-2"
              href="mailto:sensysinfo31@gmail.com"
            >
              sensysinfo@gmail.com
            </a>
          </p>
        </div>
        <Link href="/">
          <button
            type="button"
            className="h-1/5 items-end mx-auto block mt-4 2xl:mt-16 bg-black text-white px-4 rounded-lg py-2 capitalize md:mt-12"
          >
            Continue shopping
          </button>
        </Link>
      </div>
    </>
  );
}

export default Success