import React from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "reactstrap";
import ProductList from "./ProductList";

const RenderProductList = ({ className = "", data = [], title = "" }) => {
  return (
    <section className={className}>
      <Container>
        <Row>
          <Col lg="12" className="text-center  mb-5">
            <h2 className="section__title">{title}</h2>
          </Col>
          <ProductList data={data} />
        </Row>
      </Container>
    </section>
  );
};

RenderProductList.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  data: PropTypes.array,
};

export default RenderProductList;
