import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const Products = ({product: {image, name, slug, price}}) => {
  return (
    <section>
        <Link href={`/product/${slug.current}`}>
            <div className='sm:h-[40%] pb-4 w-full h-[80%] mx-auto'>
                <img
                    src={urlFor(image && image[0])}
                    className=' w-[35rem] px-4 mx-auto my-4 h-[22rem] rounded-xl hover:animate-[transform 0.5s ease] '/>
                <div className=' rounded-b-xl text-center  mx-auto pb-8 '>
                    <p className=' text-green-900 font-bold '>{name}</p>
                    <p>${price}</p>
                </div>
            </div>
        </Link>
    </section> 
  )
}

export default Products