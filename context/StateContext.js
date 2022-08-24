import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";
44;
const Context = createContext();

const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQty, setTotalQty] = useState(0);
  const [qty, setQty] = useState(1);

  let specificProduct;
  let indexOfProduct;

  // add products to cart
  const onAdd = (product, quantity) => {
    const checkProduct = cartItems.find((item) => item._id === product._id);
    setTotalPrice((prevPrice) => prevPrice + product.price * quantity);
    setTotalQty((prevQuantities) => prevQuantities + quantity);
    {
      // console.log(product);
    }
    if (checkProduct) {
      const updatedCart = cartItems.map((cart) => {
        if (cart._id === product._id)
          return {
            ...cart,
            quantity: cart.quantity + quantity,
          };
      });
      setCartItems(updatedCart);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qty} ${product.name} added to the cart!`);
  };

  // delete specific product from cart
  const onDelete = (product) => {
    specificProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - specificProduct.price * specificProduct.quantity
    );
    setTotalQty((prevTotalQty) => prevTotalQty - specificProduct.quantity);
    setCartItems(newCartItems);
  };

  // updating cart item qty in the cart section
  const cartItemQty = (id, value) => {
    // finding the particular item in the cart
    specificProduct = cartItems.find((item) => item._id === id);
    // finding its index
    indexOfProduct = cartItems.findIndex((product) => product._id === id);
    // filtering out
    const newCartItems = cartItems.filter((item) => item._id !== id);
    if (value === "inc") {
      setCartItems([
        ...newCartItems.slice(0, indexOfProduct),
        { ...specificProduct, quantity: specificProduct.quantity + 1 },
        ...newCartItems.slice(indexOfProduct),
      ]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + specificProduct.price);
      setTotalQty((prevQty) => prevQty + 1);
    } else if (value === "dec") {
      if (specificProduct.quantity > 1) {
        setCartItems([
          ...newCartItems.slice(0, indexOfProduct),
          { ...specificProduct, quantity: specificProduct.quantity - 1 },
          ...newCartItems.slice(indexOfProduct),
        ]);
        setTotalPrice(
          (prevTotalPrice) => prevTotalPrice - specificProduct.price
        );
        setTotalQty((prevQty) => prevQty - 1);
      }
    }
  };

  // increase and decrease cart item qty from product page
  const increaseQty = () => {
    setQty((prevQty) => prevQty + 1);
  };
  const decreaseQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQty,
        qty,
        increaseQty,
        decreaseQty,
        onAdd,
        setShowCart,
        cartItemQty,
        onDelete,setCartItems, setTotalPrice,setTotalQty
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
export { StateContext, Context };
