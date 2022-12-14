import React from "react";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/slices/cartSlice";
import { cartTotalSelector } from "../redux/slices/selectors";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotal = useSelector(cartTotalSelector);
  return (
    <Helmet title="cart">
      <CommonSection title="Shopping Cart" />

      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h2 className="fs-4 text-center">No item added to the cart</h2>
              ) : (
                <table className="table bordered align-middle">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <Tr item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3">
              <h6 className="d-flex align-items-center justify-content-between">
                Subtotal
                <span className="fs-4 fw-bold">${cartTotal}</span>
              </h6>
              <p className="fs-6 mt-2">
                taxes and shipping will Calculate in checkout
              </p>
              <div className="">
                <Link to="/shop">
                  <button className="buy__btn w-100 mb-0">
                    Continue Shopping
                  </button>
                </Link>

                <Link to="/checkout">
                  <button className="buy__btn w-100 mt-3">Checkout</button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    const action = removeFromCart(item.id);
    dispatch(action);
  };

  return (
    <tr>
      <td>
        <img src={item.item.imgUrl} alt="img" />
      </td>
      <td>{item.item.productName}</td>
      <td>${item.item.price}</td>
      <td>{item.quantity}px</td>
      <td>
        <motion.i
          whileTap={{ scale: 1.2 }}
          onClick={deleteProduct}
          className="ri-delete-bin-line"
        ></motion.i>
      </td>
    </tr>
  );
};

export default Cart;
