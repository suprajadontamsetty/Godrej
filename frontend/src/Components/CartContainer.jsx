import React from "react";
import styles from "../Components/CartContainer.module.css";
import { useCart } from "../Contexts/Cart-Context";
import { CartItem } from "./CartItem";
import { Link } from "react-router-dom";
export const CartContainer = () => {
  const { cart, total, clearcart } = useCart();
  

  if (cart.length === 0) {
    return (
      <section className={`${styles.cart}`}>
        <header>
          <h2>Your Bag is Empty ! </h2>
        </header>
      </section>
    );
  } else {
    return (
      <>
        <section className={`${styles.cart}`}>
          <div className={`${styles.CartHead}`}>
            <h2>YOUR CART</h2>
          </div>

          <div className={`${styles.CartContent}`}>
            <div className={`${styles.displayItems}`}>
              {cart.map((cartItem) => {
                return <CartItem key={cartItem.id} {...cartItem} />;
              })}
            </div>
            <div className={`${styles.Footer}`}>
              {/* cartFooter */}
              <footer>
                <div className={`${styles.CartTotal}`}>
                  <h4>
                    Total Amount : <span>Rs.{total}</span>
                  </h4>
                </div>
                <button className={`${styles.clearBtn}`} onClick={clearcart}>
                  Clear Cart
                </button>
                <button>
                <Link to="/checkout">
                <div className={`${styles.checkout}`} >Checkout</div>
              </Link>
                </button>
                
               
              </footer>
            </div>
          </div>
        </section>
      </>
    );
  }
};