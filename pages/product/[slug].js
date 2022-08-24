import React, {useState} from 'react'
import {client,urlFor} from '../../lib/client'
import {AiOutlineMinus, AiOutlinePlus, AiOutlineStar, AiFillStar} from 'react-icons/ai'
import Products from '../../container/Products';
import { RiFacebookLine, RiTwitterLine, RiInstagramLine } from "react-icons/ri";
import {useStateContext} from '../../context/StateContext'

const ProductDetails = ({product, products}) => {
    const {image, name,details,price, care} = product
    const [index, setIndex] = useState(0)
    const {decreaseQty,  increaseQty, qty, onAdd} = useStateContext()
    const handleBuyNow=()=>{
      onAdd(product,qty)
      setShowCart(true)
    }

  return (
    <div className="py-16 h-full px-12 w-full  xl:mx-auto relative ">
      <div className="block  gap-12 h-full w-full sm:flex justify-center gap-8">
        <div>
          <div className="image w-full">
            <img
              src={urlFor(image && image[index])}
              className="w-[40rem]   h-[40rem] rounded-xl mb-4 mx-auto"
            />
          </div>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            {image?.map((item, index) => (
              <img
                key={index}
                src={urlFor(item)}
                onMouseEnter={() => setIndex(index)}
                className={
                  index === index
                    ? "rounded w-[45px] sm:w-[45px] md:w-[55px] h-[70px] cursor-pointer bg-red-300"
                    : "rounded w-[70px] h-[70px] cursor-pointer"
                }
              />
            ))}
          </div>
        </div>
        <div className="text-center sm:text-left w-full sm:w-2/4 md:w-[35rem] gap-4">
          <div className="sm:flex  gap-12 justify-between items-center">
            <h2 className="font-bold text-4xl text-green-900">{name}</h2>
            <p className="pt-4 font-bold">${price}</p>
          </div>

          <div className=" mx-auto block">
            <div className="flex sm:justify-start justify-center text-yellow-500 items-center mx-auto block py-2">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>

          <div className="pt-4 flex justify-center  sm:justify-start items-center gap-4">
            <h3>Quantity:</h3>
            <p className="justify-center sm:justify-start pt-2 flex gap-4 items-center">
              <span className="border-2 px-2" onClick={decreaseQty}>
                <AiOutlineMinus />
              </span>
              <span className="" onClick="">
                {qty}
              </span>
              <span className="border-2 px-2" onClick={increaseQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="block  flex justify-center  sm:justify-start gap-8">
            <button
              type="button"
              className="mt-8 rounded-xl hover:bg-yellow-500 py-2 hover:animate-pulse  px-2 text-center"
              onClick={() => onAdd(product, qty)}
            >
              Add to Cart
            </button>
            <button
              type="button"
              className="mt-8  py-2   px-6 text-center rounded-xl bg-yellow-500 hover:animate-ping hover:bg-gray-100"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>
          <h4 className="pt-8 pb-2 font-bold text-2xl">Details:</h4>
          <p>{details}</p>
          <h4 className="pt-8 pb-2 font-bold text-2xl">Care:</h4>
          <p>{care}</p>
          <h4 className="pt-8 pb-2 font-bold text-2xl">License:</h4>
          <p>
            For personal and professional use only. You can not resell or
            resdistribute these wigs unless you are a signed distributor.
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-12 items-center ">
        <h4 className="pt-8 pb-2 font-bold text-2xl">Share:</h4>
        <div className="flex justify-center gap-4 items-center  pt-8">
          <a href="#">
            <RiFacebookLine size={25} />
          </a>
          <a href="#">
            <RiInstagramLine size={25} />
          </a>
          <a href="#">
            <RiTwitterLine size={25} />
          </a>
        </div>
      </div>

      <div className="maylike-products mt-[12rem] ">
        <h2 className="text-center font-bold text-4xl pb-8">
          You may also Like
        </h2>
        <div className="marquee relative h-[300px] md:h-[420px]  w-full overflow-x-hidden ">
          <div className="maylikecon track flex justify-center gap-4 mt-2 absolute w-full animate-[marquee_15s_linear_infinite] whitespace-nowrap will-change-transform  ">
            {products.map((item) => (
              <>
                <Products key={item._id} product={item} />
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths = async ()=>{
     const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;
    const products = await client.fetch(query)
    const paths = products.map((product)=>({
      params:{
        slug: product.slug.current
      }
    }))
    return{
      paths,
      fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  };
};

export default ProductDetails;