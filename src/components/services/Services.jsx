import React from "react";
import { motion } from "framer-motion";
import { Col, Container, Row } from "reactstrap";
import serviceData from "../../assets/data/serviceData.js";
const Services = () => {
  return (
    <section className="services">
      <Container>
        <Row>
          {serviceData.map((service, index) => (
            <Col key={index} lg="3" md="6" className="mt-4">
              <motion.div
                whileHover={{ scale: [null, 1.1] }}
                transition={{ duration: 0.3 }}
                className="services__item"
                style={{ background: `${service.bg}` }}
              >
                <span>
                  <i className={service.icon}></i>
                </span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.subtitle}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
