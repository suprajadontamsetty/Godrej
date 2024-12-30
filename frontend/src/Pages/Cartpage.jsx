import React from "react";
import { CartContainer } from "../Components/CartContainer";
import { useCart } from "../Contexts/Cart-Context";

export const Cartpage = () => {
  const { loading } = useCart();
  if (loading) {
    return (
      <>
        <p>Loading....Pls Wait</p>
      </>
    );
  } else {
    return (
      <>
        <CartContainer />
      </>
    );
  }
};
