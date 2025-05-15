import { Row, Col } from 'react-bootstrap';
import './contacts.scss';

const Contacts = ({ title, subtitle, members }) => {
  return (
    <div className="contacts-section text-center" id='team'>
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{subtitle}</p>

      <div className="container">
        <Row className="justify-content-center">
          {members.map((member) => (
            <Col key={member.id} xs={12} sm={6} md={3} className="mb-4">
              <div className="contact-member">
                <img
                  src={member.image}
                  alt={member.name}
                  className="img-fluid mb-3"
                />
                <h5 className="member-name">{member.name}</h5>
                <p className="member-role">{member.role}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Contacts;
