import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const Products = ({product: {image, name, slug, price}}) => {
  return (
    <section id='features'>
        <div className='sm:h-[40%] pb-4 w-full h-[80%] mx-auto'>
            <img
                src={urlFor(image && image[0])}
                className=' w-[35rem] px-4 mx-auto my-4 h-[22rem] rounded-xl hover:animate-[transform 0.5s ease] '/>
            <div className=' rounded-b-xl text-center  mx-auto pb-8 '>
                <p className=' text-green-900 font-bold '>{name}</p>
                <p>${price}</p>
                <Link href={`/product/${slug.current}`}>
                    <button className=' bg-black text-white px-8 rounded-lg py-2 capitalize mt-4 block mx-auto    hover:bg-yellow-400 hover:text-black'>Buy</button>
                </Link>
            </div>
        </div>
    </section> 
  )
}

export default Products