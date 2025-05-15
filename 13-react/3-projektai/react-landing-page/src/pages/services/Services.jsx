import { Container, Row, Col } from 'react-bootstrap';
import * as icons from 'react-icons/hi';
import './Services.scss';

const Services = ({ title, subtitle, servicesItems }) => {
  return (
    <section className="services" id='services'>
      <Container>
        <div className="services-header text-center mb-5">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <Row>
          {servicesItems.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <Col md={4} sm={6} key={index} className="service-item text-center mb-4">
                <div className="icon-wrapper">
                  {Icon && <Icon className="service-icon" />}
                </div>
                <h5>{service.title}</h5>
                <p>{service.text}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
