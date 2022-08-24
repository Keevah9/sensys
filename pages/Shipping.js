import React from 'react'

const Shipping = () => {
  return (
    <div className="py-8  mx-auto h-full px-20 w-full xl:w-5/6 xl:mx-auto relative   ">
      <h1 className="font-bold text-4xl text-center py-8">
        SHIPPING & RETURNS
      </h1>
      <div>
        <h3 className="font-bold text-3xl pt-4">Return Policy</h3>
        <p className="py-4">
          You may return most new, unopened items within 30 days of delivery for
          a full refund. We'll also pay the return shipping costs if the return
          is a result of our error (you received an incorrect or defective item,
          etc.). You should expect to receive your refund within four weeks of
          giving your package to the return shipper, however, in many cases you
          will receive a refund more quickly.
        </p>
        <p>
          This time period includes the transit time for us to receive your
          return from the shipper (5 to 10 business days), the time it takes us
          to process your return once we receive it (3 to 5 business days), and
          the time it takes your bank to process our refund request (5 to 10
          business days).
        </p>
        <p className="py-4">
          If you need to return an item, please
          <a
            className="text-yellow-500 font-bold px-2"
            href="mailto:sensysinfo31@gmail.com"
          >
            Contact us
          </a>
          with your order number and details about the product you would like to
          return. We will respond quickly with instructions for how to return
          items from your order.
        </p>
      </div>

      <div className="mt-8">
        <h3 className="py-4 font-bold text-3xl">Shipping</h3>
        <p>
          We can ship to virtually any address in the world. Note that there are
          restrictions on some products, and some products cannot be shipped to
          international destinations. When you place an order, we will estimate
          shipping and delivery dates for you based on the availability of your
          items and the shipping options you choose.
        </p>
        <p>
          Depending on the shipping provider you choose, shipping date estimates
          may appear on the shipping quotes page. Please also note that the
          shipping rates for many items we sell are weight-based. The weight of
          any such item can be found on its detail page. To reflect the policies
          of the shipping companies we use, all weights will be rounded up to
          the next full pound.
        </p>
      </div>
    </div>
  );
}

export default Shipping