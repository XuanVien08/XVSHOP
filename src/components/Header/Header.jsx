import React, { useEffect, useRef } from "react";
import { Container, Row } from "reactstrap";
// import "./header.scss";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

import user_icon from "../../assets/images/user-icon.png";

const nav__link = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  const menuToggle = () => {
    menuRef.current.classList.toggle("active__menu");
  };

  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <Link to="/home">
              <div className="logo">
                <span>
                  <i className="ri-store-2-line text-black"></i>
                </span>
                <div>
                  <h4>X.VIENSHOP</h4>

                  {/* <p>Since 2000</p> */}
                </div>
              </div>
            </Link>
            <div className="navigation" onClick={menuToggle}>
              <ul className="menu" ref={menuRef}>
                <div className="nav__item nav__close" onClick={menuToggle}>
                  <i className="ri-close-line" onClick={menuToggle}></i>
                </div>
                {nav__link.map((item, index) => (
                  <li key={index} className="nav__item">
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__icons">
              <span className="fav__icon">
                <i className="ri-heart-2-line"></i>
                <span className="badge">1</span>
              </span>
              <span className="cart__icon">
                <i className="ri-shopping-bag-3-line"></i>
                <span className="badge">1</span>
              </span>
              <span>
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={user_icon}
                  alt="user_icon"
                />
                {/* <i className="ri-user-2-fill"></i> */}
              </span>
              <div className="mobile__menu" onClick={menuToggle}>
                <span>
                  <i className="ri-menu-fold-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
