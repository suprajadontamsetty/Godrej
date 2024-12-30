import React from "react";
import styles from "./Profile.module.css";
import { useAuth } from "../Contexts/authContext";
const Profile = () => {
  const [auth, setAuth] = useAuth();
  const { name, email, phone, address } = auth.user;

  return (
    <>
      <div className={`${styles.profile}`}>
        <h2>User Profile</h2>

        <div>User    : {`${name}`}</div>
        <div>Email   :  {`${email}`}</div>
        <div>phone :  {`${phone}`}</div>
        <div>Address :  {`${address}`}</div>
      </div>
    </>
  );
};

export default Profile;
