import React from 'react'
import {Main, HeroBanner,Features, Products, Reviews} from '../container'
import NewsletterForm from './NewsletterForm'
import MainBanner from './MainBanner';
import { Single,  Review, } from '../components';
import { client } from '../lib/client';
import Zoom from "react-reveal/Zoom";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 664 },
      items: 3,
    },
    miniTable: {
      breakpoint: { max: 664, min: 564 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 564, min: 0 },
      items: 1,
    },
  };

const index = ({products, bannerData, testiData}) => {
  return (
    <div className=" bg-gray-100 ">
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <Zoom>
        <Main />
      </Zoom>
      <div className="bg-yellow-400">
        <Features heroBanner={bannerData.length && bannerData[0]} />
      </div>
      <Zoom>
        <MainBanner />
      </Zoom>
      <>
        <Single />
        <div className="w-5/6 mx-auto xl:w-4/5">
          <Carousel responsive={responsive}>
            {products?.map((product) => (
              <Products key={product._id} product={product} />
            ))}
          </Carousel>
        </div>
        <div className="bg-gray-100">
          <Reviews />
          <div className="marquee relative h-[460px] md:h-[420px]   overflow-x-hidden ">
            <div className="flex justify-center gap-4 mt-2 absolute w-full animate-[marquee_25s_linear_infinite]  will-change-transform   ">
              {testiData?.map((testimony) => (
                <Review key={testimony._id} testimony={testimony} />
              ))}
            </div>
          </div>
        </div>
      </>
      <NewsletterForm />
    </div>
  );
}
export const getServerSideProps = async()=>{
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const testiQuery = '*[_type == "testimonial"]';
  const testiData = await client.fetch(testiQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData, testiData},
  };
}
export default index
