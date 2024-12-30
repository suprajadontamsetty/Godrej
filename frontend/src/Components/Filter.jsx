import React from "react";
import styles from "../Components/Filter.module.css";
import { useFilter } from "../Contexts/Filter-context";
export const Filter = () => {
   
    const {searchTerm,setsearchTerm}=useFilter();
  return <>
  <section className={`${styles.sideFilter}`}>
   <form action="">
    <div className={`${styles.FormControl}`}>
    <label htmlFor="search">SEARCH BY YOUR CHOICE :  </label>
    <input type="text" id="search"  value={searchTerm} onChange={(e)=>setsearchTerm(e.target.value)} className={`${styles.searchchoice}`}/>
    </div>
   </form>
   </section>
  </>;
};


