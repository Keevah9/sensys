import React, {useState} from 'react'
import Link from 'next/link'
import { AiOutlineShopping, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Cart } from './'
import {useStateContext} from '../context/StateContext'

export const Menu = ()=>{
  return(
    <ul className='sm:flex gap-12 justify-center items-center  '>
      <li className='pb-2'><a href="/">Home</a></li>
      <li className='pb-2'><a href="/MainBanner">About</a></li>
      <li className='pb-2'><a href="/NewsletterForm">Join</a></li>
    </ul>
  )
}
const Navbar = () => {
  const {showCart, setShowCart, totalQty} = useStateContext()
  const [toggle, setToggle] = useState(false)

  return (
    <header className=' flex justify-between py-8  mx-auto items-center   px-12 w-full xl:w-5/6 xl:mx-auto relative '>
      <h3 className='font-bold sm:text-5xl text-4xl text-green-900'>
        <Link href='/'>Sensys</Link>
      </h3>
      <div className='h-full flex  gap-16 w-full justify-center items-center hidden sm:block'>
        <Menu/>
      </div>

      {toggle &&
        <div className='sm:hidden block absolute right-0 text-right pr-12 h-[14rem] py-4 min-w-[250px] border-4 top-28 bg-gray-200 z-40 opacity-90'>
          <Menu/>
        </div>
      }
      <button type='button' onClick={()=>setShowCart(true)} className='relative'>
        <AiOutlineShopping size={30}/>
        <span className='text-white font-bold  h-4/6 absolute top-0 right-[-.7rem] rounded-full w-4/6 px-4 text-center items-center flex justify-center border-2 bg-red-600'>{totalQty}</span>
      </button>
      {showCart && <Cart/> }
      <div className='sm:hidden block'>
        {toggle ? (<AiOutlineClose color='black' size={27} onClick={()=> setToggle(false)}/>
          )
          : ( <AiOutlineMenu color='black' size={27} onClick={()=> setToggle(true)}/>
          )}
      </div>  
    </header>
  )
}

export default Navbar