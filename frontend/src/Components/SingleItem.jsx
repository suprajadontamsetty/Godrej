import React from "react";
import styles from "../Components/SingleItem.module.css";
import { useParams } from "react-router-dom";
import { FeaturedItems } from "./HomePageArray";
import { useCart } from "../Contexts/Cart-Context";
// import { MenAssets } from "./MenItems";
const SingleItem = () => {
  const { addItem } = useCart();
  const { itemId } = useParams();

  const singleItem = FeaturedItems.find(
    (item) => item.id.toString() === itemId
  );
  console.log(singleItem);
  const {  Company, Itemname, url, price } = singleItem;
  return (
    <>
    
      <div className={`${styles.itemContainer}`}>
        <div className={`${styles.itemimg}`}>
          <img src={url} alt={Itemname} className={`${styles.img}`}/>
        </div>
        <div className={`${styles.itemdetails}`}>
          <h2 className={`${styles.companyname}`}>{Company}</h2>
          <h4>{Itemname}</h4>
          <h4>Rs.{price}</h4>
     
          <button  onClick={()=>addItem(singleItem)} className={`${styles.cartBtn}`} >Add to Cart</button>
          
          <h4 className={`${styles.product}`}>Product Details</h4>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            voluptatem nulla perspiciatis, delectus amet, quos ipsum perferendis
            impedit blanditiis dolore laudantium mollitia maxime incidunt ab
            beatae maiores inventore illo ratione repellendus dolorum ex id?
            Numquam ipsa dolores, explicabo, accusamus officiis corporis facilis
            ut in id placeat a maiores? Tenetur maiores rerum ut impedit
            blanditiis fugit ea quae doloremque aliquid neque aut quam maxime
            quis assumenda sint dicta, repellendus dignissimos quod sed
            veritatis dolorum non molestiae voluptatum? Eligendi nesciunt
            possimus ipsum?
          </span>
        </div>
      </div>
      
    </>
  );
};

export default SingleItem;