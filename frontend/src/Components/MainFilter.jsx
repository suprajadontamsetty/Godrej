import React from "react";
import styles from "../Components/MainFilter.module.css";
import { useMainFilter } from "../Contexts/MainFilterContext";
export const MainFilter = () => {
  const { dispatch } = useMainFilter();

  return (
    <>
      <div className={`${styles.FilterContainer}`}>
        <div className={`${styles.category}`}>
          <div className={`${styles.FilterHeader}`}>
            <button onClick={() => dispatch({ type: "CLEAR" })}>
              Clear Filters
            </button>
          </div>
          <h3>Category</h3>
          <div>
            <input
              type="radio"
              name="category"
              id="menc"
              value="men"
              onChange={() =>
                dispatch({ type: "MEN_CLOTHING", payload: "men" })
              }
            />

            <label htmlFor="menc"> Men Clothing</label>
          </div>
          <div>
            <input
              type="radio"
              name="category"
              id="womenc"
              value="women"
              onChange={() =>
                dispatch({ type: "WOMEN_CLOTHING", payload: "women" })
              }
            />
            <label htmlFor="womenc"> Women Clothing</label>
          </div>
          <div>
            <input
              type="radio"
              name="category"
              id="footwear"
              onChange={() =>
                dispatch({ type: "FOOT_WEAR", payload: "footwear" })
              }
            />
            <label htmlFor="footwear"> Foot Wear</label>
          </div>
        </div>
        <div className={`${styles.rating}`}>
          <h3>Rating</h3>
          <div>
            <input
              type="radio"
              name="star"
              id="4star"
              onChange={() => dispatch({ type: "RATING", payload: 4 })}
            />
            <label htmlFor="4star"> 4 Stars & Above</label>
          </div>
          <div>
            <input
              type="radio"
              name="star"
              id="3star"
              onChange={() => dispatch({ type: "RATING", payload: 3 })}
            />
            <label htmlFor="3star"> 3 Stars & Above</label>
          </div>
          <div>
            <input type="radio" name="star" id="2star" />
            <label htmlFor="2star"> 2 Stars & Above</label>
          </div>
          <div>
            <input type="radio" name="star" id="1star" />
            <label htmlFor="1star"> 1 Stars & Above</label>
          </div>
        </div>
        <div className={`${styles.SortBy}`}>
          <h3>Sort By</h3>
          <div>
            <input
              type="radio"
              name="sort"
              id="lth"
              onChange={() => dispatch({ type: "SORT_LOW" })}
            />
            <label htmlFor="lth"> Price-Low to High</label>
          </div>
          <div>
            <input
              type="radio"
              name="sort"
              id="htl"
              onChange={() => dispatch({ type: "SORT_HIGH" })}
            />
            <label htmlFor="htl"> Price-High to Low</label>
          </div>
          <div>
            <input
              type="radio"
              name="stock"
              id="instock"
              onChange={() => dispatch({ type: "IN_STOCK" })}
            />
            <label htmlFor="instock"> In Stock</label>
          </div>
          <div>
            <input
              type="radio"
              name="stock"
              id="Fd"
              onChange={() => dispatch({ type: "FAST_DELIVERY" })}
            />
            <label htmlFor="Fd"> Fast Delivery</label>
          </div>
        </div>
      </div>
    </>
  );
};
