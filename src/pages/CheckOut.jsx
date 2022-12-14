import React from "react";
import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
const CheckOut = () => {
  return (
    <Helmet title="Check Out">
      <CommonSection title="Check Out" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Billing Information</h6>
              {/* <Form>
                <FormGroup>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="with a placeholder"
                    type="email"
                  />{" "}
                </FormGroup>
                <FormGroup className="from__group search__box">
                  <input type="text" placeholder="Enter your name" />
                </FormGroup>
                <FormGroup className="from__group">
                  <input type="text" placeholder="Enter your email" />
                </FormGroup>
                <FormGroup className="from__group">
                  <input type="text" placeholder="Phone Number" />
                </FormGroup>
                <FormGroup className="from__group">
                  <input type="text" placeholder="Street address" />
                </FormGroup>{" "}
                <FormGroup className="from__group">
                  <input type="text" placeholder="City" />
                </FormGroup>{" "}
                <FormGroup className="from__group">
                  <input type="text" placeholder="Postal code" />
                </FormGroup>
                <FormGroup className="from__group">
                  <input type="text" placeholder="Country" />
                </FormGroup>
              </Form> */}
              <Form>
                <FormGroup floating>
                  <Input id="name" name="name" placeholder="Enter Your Name" />
                  <Label for="name">Name</Label>
                </FormGroup>
                <Row>
                  <Col md={6}>
                    <FormGroup floating>
                      <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="Enter Your email"
                        type="email"
                      />
                      <Label for="exampleEmail hidden">Email</Label>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup floating>
                      <Input
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        // type="number"
                      />
                      <Label for="phoneNumber">Phone Number</Label>
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup floating>
                  <Input
                    id="address"
                    name="address"
                    placeholder="street address"
                  />
                  <Label for="address">Address</Label>
                </FormGroup>
                <Row>
                  <Col md={5}>
                    <FormGroup floating>
                      <Input
                        id="city"
                        name="city"
                        placeholder="enter your City"
                      />
                      <Label for="city">City</Label>
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup floating>
                      <Input
                        id="country"
                        name="country"
                        placeholder="enter your country"
                      />
                      <Label for="country">Country</Label>
                    </FormGroup>
                  </Col>
                  <Col md={3}>
                    <FormGroup floating>
                      <Input
                        id="postalCode"
                        name="postalCode"
                        placeholder="Postal Code"
                      />
                      <Label for="postalCode">Postal Code</Label>
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </Col>

            <Col lg="4">
              <div className="checkout__cart">
                <h6 className="">
                  Total Qty: <span>0</span>
                </h6>
                <h6 className="">
                  Subtotal: <span>$120</span>
                </h6>{" "}
                <h6 className="">
                  Shipping: <span>$1</span>
                </h6>
                <h6>Shipping Free</h6>
                <h4 className="">
                  Total Cost: <span>$120</span>
                </h4>
              </div>
              <button className="btn buy__btn auth__btn"></button>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CheckOut;
