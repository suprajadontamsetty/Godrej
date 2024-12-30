import React from 'react';
import styles from "../Components/Checkout.module.css"
import { Link } from 'react-router-dom';
export const Checkout = () => {
    return (
        <>
            <div className={`${styles.payment}`}  >
                <h1 className={`${styles.payTitle}`}>Personal Information</h1>
                <div>
                    <p><label htmlFor='name'>Name and Surname</label></p>
                    <p><input type="text" placeholder="John Doe" className={`${styles.payInput}`} id='name' /></p>
                </div>
                <div>
                    <p><label htmlFor='pn'>Phone Number</label></p>
                    <p><input type="text" placeholder="+1 234 5678" className={`${styles.payInput}`} id='pn' /></p>
                </div>
                <div>
                    <p><label htmlFor='add'>Address</label></p>
                    <p><input type="text" placeholder="Elton St 21 22-145" className={`${styles.payInput}`} id='add' /></p>
                </div>

                <h1 className={`${styles.payTitle}`}>Card Information</h1>
                <div className={`${styles.cardIcons}`}>
                    <img src="/images/crater/visa.png" width="40" alt="" className={`${styles.cardIcon}`} />
                    <img src="/images/crater/master.png" alt="" width="40" className={`${styles.cardIcon}`} />
                </div>
                <input type="password" className={`${styles.payInput}`} placeholder="Card Number" />
                <div className={`${styles.cardInfo}`}>
                    <input type="text" placeholder="mm" className={`${styles.payInputsm}`} />
                    <input type="text" placeholder="yyyy" className={`${styles.payInputsm}`} />
                    <input type="text" placeholder="cvv" className={`${styles.payInputsm}`} />
                </div>
                <button className={`${styles.payButton}`}>Checkout!</button>
                <Link to='/cart'><span className={`${styles.close}`}>X</span></Link>
            </div>
        </>
    );
}