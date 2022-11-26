import React, { useEffect, useState } from "react";
import { useImmer } from "use-immer";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Helmet from "../components/Helmet/Helmet";
import Services from "../components/services/Services";
import ProductList from "../components/UI/ProductList";
import products from "../assets/data/products";

import counterImg from "../assets/images/hero-img.png";
import heroImg from "../assets/images/counter-timer-img.png";
import Clock from "../components/UI/Clock";
import RenderProductList from "../components/UI/RenderProductList";
import { cartTotalSelector } from "../redux/slices/selectors";
import { useSelector } from "react-redux";

const Home = () => {
  const [productList, setProductList] = useImmer({});
  const year = new Date().getFullYear();
  const cartTotal = useSelector(cartTotalSelector);
  // console.log(cartTotal);
  useEffect(() => {
    const filterTrendingProduct = products.filter(
      (item) => item.category === "chair"
    );

    const filterBestSaleProduct = products.filter(
      (item) => item.category === "sofa"
    );
    const filterMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );
    const filterWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );
    const filterPopularProducts = products.filter(
      (item) => item.category === "watch"
    );
    setProductList({
      trendingProduct: filterTrendingProduct,
      bestSaleProducts: filterBestSaleProduct,
      mobileProducts: filterMobileProducts,
      wirelessProducts: filterWirelessProducts,
      popularProducts: filterPopularProducts,
    });
  }, []);

  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row className="align-items-center">
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending Product in {year}</p>
                <h2>Make Your Interior More Minimalistic & Modern</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum blanditiis qui eos sint perspiciatis dolores nihil.
                </p>
                <motion.button whileHover={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="heroImg" className="logo" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />

      <RenderProductList
        className="trending__Product"
        data={productList.trendingProduct}
        title="Trending Product"
      />

      <RenderProductList
        className="best__sales"
        data={productList.bestSaleProducts}
        title="Best Sales"
      />

      <section className="timer__count p-2">
        <Container>
          <Row className="align-items-center">
            <Col lg="6" md="6" className="pt-4  timer__count-col">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Limit Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button
                whileHover={{ scale: 1.2 }}
                className="buy__btn store__btn "
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="6" className="text-end counter__img">
              <img src={counterImg} alt="counterImg" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center ">
              <h2 className="section__title">New Arrivals</h2>
            </Col>
            <ProductList data={productList.mobileProducts} />
            <ProductList data={productList.wirelessProducts} />
          </Row>
        </Container>
      </section>

      <RenderProductList
        className="popular__category"
        data={productList.popularProducts}
        title="Popular in Category"
      />
    </Helmet>
  );
};

export default Home;
