import React, { useCallback, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import products from "../assets/data/products";
import ProductList from "../components/UI/ProductList";
import { filterSelectValue } from "../utils";
import debounce from "lodash.debounce";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    console.log(filterValue);
    if (filterValue === "Filter By Category") {
      setProductsData(products);
    }
    filterSelectValue("sofa", filterValue, products, setProductsData);
    filterSelectValue("chair", filterValue, products, setProductsData);
    filterSelectValue("mobile", filterValue, products, setProductsData);
    filterSelectValue("watch", filterValue, products, setProductsData);
    filterSelectValue("wireless", filterValue, products, setProductsData);
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductsData(searchedProducts);
  };
  const debouncedChangeHandler = useCallback(debounce(handleSearch, 500), []);

  return (
    <Helmet title="shop">
      <CommonSection title="Product"></CommonSection>

      <section className="shop">
        <Container>
          <Row>
            <Col lg="3" md="6" xs="6">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="chair">Chair</option>
                  <option value="mobile">Mobile</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" xs="6" className="text-end ">
              <div className="filter__widget">
                <select>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="12" xs="12 ">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search Product ......."
                  onChange={debouncedChangeHandler}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center">No Products are found!</h1>
            ) : (
              <ProductList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
