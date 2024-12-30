import React from "react";
import styles from "./NavBar.module.css";
import {
  FaBars,
  FaShoppingCart,
  FaHeart,
  FaChevronDown,
  FaUser,
} from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { Links } from "./Links";
import { Link, NavLink } from "react-router-dom";

import { useCart } from "../Contexts/Cart-Context";
import { useAuth } from "../Contexts/authContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Button,
} from "@chakra-ui/react";
export const NavBar = () => {
  const [auth, setAuth] = useAuth();
  const { quantity } = useCart();
  const [showlinks, setshowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linkRef = useRef(null);
  useEffect(() => {
    const linksHeight = linkRef.current.getBoundingClientRect().height;
    if (showlinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showlinks]);

  const handleLogout = (e) => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem(`auth`);
    toast.success("Logged out successfully");
  };
  return (
    <>
      <nav>
        <div className={`${styles.NavContainer}`}>
          <div className={`${styles.NavLogo}`}>
            <img
              src="images/NavBar/LogoImg.webp"
              alt="Logo"
              className={`${styles.Logo}`}
            />
            <div className={`${styles.hamburg}`}>
              <div className={`${styles.CartBar}`}>
                <Link to="/cart">
                  <FaShoppingCart className={`${styles.FontIcon}`} />
                </Link>
                <div className={`${styles.AmountContainer}`}>
                  <p className={`${styles.Amount}`}>{quantity}</p>
                </div>
              </div>
              <button
                className={`${styles.ToggleBtn}`}
                onClick={() => setshowLinks(!showlinks)}
              >
                {<FaBars />}
              </button>
            </div>
          </div>
          <div className={`${styles.LinksContainer}`} ref={linksContainerRef}>
            <ul className={`${styles.Links}`} ref={linkRef}>
              {Links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <NavLink
                      to={url}
                      className={({ isActive }) =>
                        isActive ? "active EachLink" : "EachLink"
                      }
                    >
                      {text}
                    </NavLink>
                  </li>
                );
              })}
              {!auth.user && (
                <>
                  <li>
                    <NavLink
                      to="/register"
                      className={({ isActive }) =>
                        isActive ? "active EachLink" : "EachLink"
                      }
                    >
                      register
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        isActive ? "active EachLink" : "EachLink"
                      }
                    >
                      Login
                    </NavLink>
                  </li>
                </>
              ) }
            </ul>
            <ToastContainer />
          </div>
          <div className={`${styles.ThreeLinks}`}>
            <div className={`${styles.user}`}>
              <Menu>
                <MenuButton as={Button} rightIcon={<FaUser />}>
                  User
                </MenuButton>
                <MenuList>
                  <MenuItem minH="48px">
                    <Image
                      boxSize="2rem"
                      borderRadius="full"
                      src="https://placekitten.com/100/100"
                      alt="Fluffybuns the destroyer"
                      mr="12px"
                    />
                    <span>
                      {" "}
                      <NavLink
                        // onClick={handleLogout}
                        to="/profile"
                        // className={({ isActive }) =>
                        //   isActive ? " EachLink " : "EachLink logout"
                        // }
                      >
                        Profile
                      </NavLink>
                    </span>
                  </MenuItem>
                  <MenuItem minH="40px">
                    <Image
                      boxSize="2rem"
                      borderRadius="full"
                      src="https://placekitten.com/120/120"
                      alt="Simon the pensive"
                      mr="12px"
                    />
                    <span>
                      <NavLink
                        onClick={handleLogout}
                        to="/login"
                        // className={({ isActive }) =>
                        //   isActive ? "active EachLink " : "EachLink logout"
                        // }
                      >
                        Logout
                      </NavLink>
                    </span>
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
            <div className={`${styles.wishlist}`}>
              <FaHeart className={`${styles.FontIcon}`} />
            </div>
            <div className={`${styles.CartBar}`}>
              <Link to="/cart">
                <FaShoppingCart className={`${styles.FontIcon}`} />
              </Link>
              <div className={`${styles.AmountContainer}`}>
                <p className={`${styles.Amount}`}>{quantity}</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
