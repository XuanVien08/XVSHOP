import React from "react";
import PropTypes from "prop-types";
import ProductCart from "./ProductCart";

const ProductList = ({ data = [] }) => {
  return (
    <>
      {data?.map((item) => (
        <ProductCart item={item} key={item.id} />
      ))}
    </>
  );
};
ProductList.propTypes = {
  data: PropTypes.array,
};
export default ProductList;
