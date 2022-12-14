import React, { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Col, Tooltip, UncontrolledTooltip } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addWishList } from "../../redux/slices/cartSlice";
import { toast } from "react-toastify";
const wishList1 = localStorage.getItem("wishList") || [];

const ProductCart = ({ item }) => {
  const dispatch = useDispatch();
  const wishListState = () => {
    for (const wishListItem of wishList1) {
      if (wishListItem.id === item.id) {
        return true;
      }
    }
    return false;
  };

  const [wishListOpen, setWishListOpen] = useState(wishListState);
  const toggleWishList = () => setWishListOpen(!wishListOpen);
  const handleAddToCart = () => {
    const action = addToCart({
      id: item.id,
      item: item,
      quantity: 1,
    });
    dispatch(action);
    toast.success("🛒 Product Added To The Cart");
    toggleWishList();
  };

  const handleAddToWishList = () => {
    const action = addWishList({
      id: item.id,
      item,
      quantity: 1,
    });
    dispatch(action);
    toggleWishList();
  };

  return (
    <Col lg="3" md="6" className="product mb-2">
      <div className="product__item">
        <Link to={`/shop/${item.id}`}>
          <div className="product__img">
            <motion.img
              whileHover={{ scale: [null, 0.9] }}
              transition={{ duration: 0.3 }}
              src={item.imgUrl}
              alt={item.productName}
            />
          </div>
          <div className="p-2 product__info">
            <h3 className="product__name">{item.productName}</h3>
            <span>{item.category}</span>
          </div>
        </Link>
        <div className="product__item-menu">
          <motion.div
            id="add-wish"
            whileTap={{ scale: 1.3 }}
            onClick={handleAddToWishList}
            className={`menu-item rounded-circle d-flex align-items-center justify-content-center
            ${wishListOpen ? "active__menu" : ""}
            `}
          >
            <i className="ri-heart-2-fill"></i>
          </motion.div>
          <UncontrolledTooltip
            placement="bottom"
            autohide
            flip
            target="add-wish"
          >
            Wish List
          </UncontrolledTooltip>
        </div>
        <div className="product__cart-bottom d-flex align-items-center justify-content-between p-2">
          <span className="price">${item.price}</span>
          <motion.span
            whileTap={{ scale: 1.2 }}
            onClick={handleAddToCart}
            id="add-cart"
          >
            <i className="ri-add-line"></i>
          </motion.span>
          <UncontrolledTooltip
            placement="bottom"
            autohide
            flip
            target="add-cart"
          >
            Add to cart
          </UncontrolledTooltip>
        </div>
      </div>
    </Col>
  );
};

export default ProductCart;
