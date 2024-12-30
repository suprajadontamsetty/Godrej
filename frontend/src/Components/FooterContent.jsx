import React from "react";
import styles from "../Components/FooterContent.module.css";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <>
      <div className={`${styles.Footer}`}>
        <div className={`${styles.ContactInfo}`}>
          <div className={`${styles.Contact}`}>
            <h4 className={`${styles.Head}`}>Contact</h4>
            <p>
              <strong>Address: </strong>562 Wellington Road,street 32,San
              Fransisco
            </p>
            <p>
              <strong>Phone:</strong>+01 2222 365 /(+91) 01 2345 6789
            </p>
            <p>
              <strong>Hours:</strong>10:00 - 18:00, Mon - Sat
            </p>
          </div>
          <div className={`${styles.SLinks}`}>

        
          <div>
          <h4 className={`${styles.Head}`}>Follow Us</h4>
          </div>
            
            <div className={`${styles.SocialLinks}`}>
            <FaFacebook className={`${styles.fonticon}`}/>
            <FaInstagram className={`${styles.fonticon}`} />
            <FaTwitter className={`${styles.fonticon}`} />
            <FaPinterest className={`${styles.fonticon}`}/>
            <FaYoutube className={`${styles.fonticon}`}/>
          </div>
          </div>
        </div>

        <div className={`${styles.Links}`}>
          <h4 className={`${styles.Head}`}>About</h4>
          <Link to="/about">About Us</Link>
          <Link>Delivery Information</Link>
          <Link>Privacy Policy</Link>
          <Link>Terms & Conditions</Link>
          <Link>Contact Us</Link>
        </div>

        <div className={`${styles.Links}`}>
          <h4 className={`${styles.Head}`}>My Account</h4>
          <Link>Sign In</Link>
          <Link>View cart</Link>
          <Link>My WishList</Link>
          <Link>Track My order</Link>
          <Link>Help</Link>
        </div>

        <div className={`${styles.WebAvail}`}>
        <h4>Install App</h4>
            <p>From App Store or Google Play</p>
            <div className={`${styles.Store}`}>
               <img  src="images/FooterImg/appstore.png" alt="App Store"  className={`${styles.store}`}/>
               <img  src="images/FooterImg/gplay.png" alt="Google Play Store" className={`${styles.store}`} />
            </div>
            <p>Secured Payment Gateways</p>
           <img src="images/FooterImg/mainpay.gif" alt="Payements" className={`${styles.store}`}/>
        </div>
      </div>
    </>
  );
};
