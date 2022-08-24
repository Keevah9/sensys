import React, {useRef} from 'react'
import Link from 'next/link'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping} from 'react-icons/ai'
import toast from 'react-hot-toast'
import { useStateContext } from '../context/StateContext'
import { urlFor } from '../lib/client'
import getStripe from '../lib/getStripe'

const Cart = () => {
  const cartRef = useRef()
  const { totalPrice, cartItemQty, totalQty, cartItems, setShowCart, onDelete} = useStateContext()

// buy now function with stripe
  const handleCheckOut = async()=>{
  const stripe = await getStripe()
  const res = await fetch('/api/stripe', {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json',
    },
      body: JSON.stringify(cartItems),
  })
    if(res.statusCode === 500) return
    const data = await res.json()
    toast.loading('Redirecting...')
    stripe.redirectToCheckout({sessionId: data.id})
}
  return (
    <div className='w-full  h-full z-40 fixed right-0 top-0 opacity-96' id='cart' ref={cartRef}>
      <div className='h-full float-right relative w-full sm:w-[500px] bg-yellow-400 px-8 '>
        <button type='button' className='flex justify-between py-12 items-center block w-full mx-auto gap-4 ' onClick={()=>setShowCart(false)}>
          <AiOutlineLeft className='' size={25}/>
          <>
            <span className='font-bold text-3xl'>Your Cart </span>
            <span className=''>({totalQty} items)</span>
          </>
        </button>
        {cartItems.length < 1 && (
          <div className='h-full flex flex-col items-center text-center m-[40px]'>
            <AiOutlineShopping size={60}  className='w-full h-1/5 '/>
            <h3>Your Cart is empty</h3>
            
              <button type='button'  className='mt-20  bg-black text-white px-4 rounded-lg py-2 cursor-pointer' onClick={()=>setShowCart(false)}>Go Shopping</button>
            
          </div>
        )}
        <div>
          {cartItems.length >= 1 && cartItems.map((item)=>(
            <div className='flex items-center pb-12 gap-8' key={item._id}>
              <img 
                  src={urlFor(item?.image[0])}
                  className='w-[12rem]  h-[15rem] rounded-2xl '
                  alt='cart item'
              />
              <div className='w-full'>
                <div className='flex justify-between'>
                  <h5>{item.name}</h5>
                  <h4>${item.price}</h4>
                </div>
                <>
                  <div>
                    <p className="justify-center sm:justify-start pt-2 flex gap-4 items-center">
                      <span className="border-2 px-2" onClick={()=>cartItemQty(item._id, 'dec')}>
                        <AiOutlineMinus />
                      </span>
                      <span>
                        {item.quantity}
                      </span>
                      <span className="border-2 px-2" onClick={()=>cartItemQty(item._id, 'inc')}>
                        <AiOutlinePlus />
                      </span>
                    </p>
                  </div>
                  <button type='button' onClick={()=>onDelete(item)} className='mt-12  bg-black text-white px-4 rounded-lg py-2'>Remove</button>
                </>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <>
            <div className='flex justify-between'>
              <h3 className='font-bold '>
                Subtotal :
              </h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className='class text-center mt-24'>
              <button type='button' className='bg-black text-white px-4 rounded-lg py-2' onClick={handleCheckOut}> Pay with Stripe </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Cart