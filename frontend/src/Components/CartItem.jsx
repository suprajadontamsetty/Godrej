import React from "react";
import styles from "../Components/CartItem.module.css";
import { useCart } from "../Contexts/Cart-Context";
export const CartItem = ({ id, Company, Itemname, url, price, quantity }) => {
  const {remove,toggleAmount}=useCart();
  return (
    <>
      <article key={id} className={`${styles.Product}`}>
        <div className={`${styles.sideImg}`}>
          <img src={url} alt={Company} className={`${styles.Image}`} />
        </div>
        <div className={`${styles.sideImgContent}`}>
          <div className={`${styles.ContentBox}`}>
            <p className={`${styles.price}`}>Price : Rs.{price} </p>
          </div>

          <div className={`${styles.IncDec}`}>
            <button className={`${styles.toggleBtn}`} onClick={()=>toggleAmount(id,'INC')}>+</button>
            <p>{quantity}</p>
            <button className={`${styles.toggleBtn}`} onClick={()=>toggleAmount(id,'DEC')}>-</button>
          </div>
          <button className={`${styles.RemoveBtn}`} onClick={()=>remove(id)}>Remove</button>
        </div>
      </article>
    </>
  );
};
