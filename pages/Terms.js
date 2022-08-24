import React from "react"

const Terms = () => {
  return (
    <div className="py-8  mx-auto h-full px-20 w-full xl:w-5/6 xl:mx-auto relative   ">
      <h1 className="font-bold text-4xl text-center py-8">
        Terms of use
      </h1>
      <div>
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
    </div>
  );
};

export default Terms;
