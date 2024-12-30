import React from "react";
import styles from "../Components/Hero.module.css";

const Hero = () => {
  return (
    <>
      <section className={`${styles.Hero}`} >
      
        <div className={`${styles.HeroContent}`}>
        <h1>EXclusive sale 30% Off</h1>
        <h2>On Every Product</h2>
        <p>save more with coupons & have a chance to win 70% off</p>
        <button className={`${styles.btn}`}>Shop Now</button>
        </div>
      </section>
    </>
  );
};

export default Hero;
