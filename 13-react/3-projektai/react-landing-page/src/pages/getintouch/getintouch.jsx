import './getintouch.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

const GetInTouch = ({ title, subtitle, contacts }) => {
  return (
    <section className="getintouch" id="contact">
    <Container>
        <Row>
            <Col md={8}>
                <h2>{title}</h2>
                <p className="subtitles">{subtitle}</p>
            <form>
            <Row className="mb-3">
                <Col>
                    <input type="text" placeholder="Name" required />
                </Col>
                <Col>
                    <input type="email" placeholder="Email" required />
                </Col>
              </Row>
                <textarea placeholder="Message" rows="5" required></textarea>
                <button type="submit">Send Message</button>
            </form>
            </Col>

            <Col md={3} className='contacts'>
                <h5>Contact Info</h5>
                {contacts.map((c, i) => (
                    <div key={i} className="contactinfo">
                    <p><MdLocationOn /><span><strong>Address:</strong><br />{c.address}</span></p>
                    <p><MdPhone /><span><strong>Phone:</strong><br />{c.phone}</span></p>
                    <p><MdEmail /><span><strong>Email:</strong><br />{c.email}</span></p>
                    </div>
                ))}
            </Col>
        </Row>

        <Row className="justify-content-center social">
            <Col xs="auto"><a href="#"><FaFacebookF /></a></Col>
            <Col xs="auto"><a href="#"><FaTwitter /></a></Col>
            <Col xs="auto"><a href="#"><FaYoutube /></a></Col>
            <s></s>
        </Row>
    </Container>
    </section>
  );
};

export default GetInTouch;
