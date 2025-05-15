import { Container, Row, Col } from 'react-bootstrap';
import { HiCheck } from 'react-icons/hi';
import './aboutUs.scss'; 
import aboutImg from '../../assets/about.jpg';

const About = ({ title, description, features }) => {
    return (
      <section className="about" id='about'>
        <Container>
          <Row className="about-row align-items-center">
            <Col md={6}>
              <div className="image-wrapper">
                <img src={aboutImg} alt="About" className="about-img img-fluid" />
              </div>
            </Col>
            <Col md={6}>
              <div className="about-content">
                <h2 className="title">{title}</h2>
                <p className="text">{description}</p>
                <h5 className="subtitle">Why Choose Us?</h5>
                <Row>
                  <Col xs={6}>
                    <ul className="features-list">
                      {features.slice(0, Math.ceil(features.length / 2)).map((item, index) => (
                        <li key={index}><HiCheck /> {item}</li>
                      ))}
                    </ul>
                  </Col>
                  <Col xs={6}>
                    <ul className="features-list">
                      {features.slice(Math.ceil(features.length / 2)).map((item, index) => (
                        <li key={index}><HiCheck /> {item}</li>
                      ))}
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  };
  

export default About;
