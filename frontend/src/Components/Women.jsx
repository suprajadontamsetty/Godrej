import React from 'react'
import styles from "../Components/Women.module.css";
// import { WomenAssets } from './WomenItems';
import { useFilter } from '../Contexts/Filter-context';
import { useCart } from '../Contexts/Cart-Context';
import { Link } from 'react-router-dom';
 export const Women = () => {
    const {tempcart}=useFilter();
    const { addItem } = useCart();
  return (
    <>
    <h1 className={`${styles.WomenHead}`}>Women Products</h1>
   <section className={`${styles.WomenProducts}`}>
    {tempcart.map((item)=>{
        const {id,Company,Itemname,url,price,cart}=item;
        return (
            <article key={id} className={`${styles.Product}`}>
                   <Link to={`/singleitem/${id}`} item={item}>
                    <img
                      src={url}
                      alt={Company}
                      className={`${styles.Image}`}
                    />
                  </Link>
                  <div className={`${styles.productdetails}`}>
                    <div className={`${styles.details}`}>
                      <div>
                        <h3 className={`${styles.Company}`}>{Company}</h3>
                      </div>

                      <Link to={`/singleitem/${id}`}>
                        <button className={`${styles.viewit}`}>View</button>
                      </Link>
                    </div>

                    <h4 className={`${styles.Item}`}>{Itemname}</h4>
                    <p className={`${styles.PriceCart}`}>
                      <span className={`${styles.price}`}>Rs.{price} </span>
                      <span
                        className={`${styles.cart}`}
                        onClick={() => addItem(item)}
                      >
                        {cart}
                      </span>
                    </p>
                  </div>
            </article>
        )
    })}
   </section>
   </>
  )
}

