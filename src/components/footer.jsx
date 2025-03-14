import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function MyFooter({ usefulLinks, myAccount, customer, contact, keepin = [] }) {
  // Font Awesome Icons Mapping
  const socialIcons = {
    Facebook: "fa-brands fa-facebook",
    Instagram: "fa-brands fa-instagram",
    Twitter: "fa-brands fa-twitter",
    Youtube: "fa-brands fa-youtube"
  };

  return (
    <div className="footer-container">
      <Container>
        <Row>
          <Col>
            <h4>USEFUL LINKS</h4>
            <ul>
              {usefulLinks?.map((val, ind) => <li key={ind}>{val}</li>)}
            </ul>
          </Col>
          <Col>
            <h4>MY ACCOUNT</h4>
            <ul>
              {myAccount?.map((val, ind) => <li key={ind}>{val}</li>)}
            </ul>
          </Col>
          <Col>
            <h4>CUSTOMER SERVICE</h4>
            <ul>
              {customer?.map((val, ind) => <li key={ind}>{val}</li>)}
            </ul>
          </Col>
          <Col>
            <h4>CONTACT US</h4>
            <ul>
              {contact?.map((val, ind) => <li key={ind}>{val}</li>)}
            </ul>
          </Col>
          <Col>
            <h4>KEEP IN TOUCH</h4>
            <ul className="social-icons">
              {keepin.map((val, ind) => (
                <li key={ind} className="social-item">
                  <i className={socialIcons[val]}></i>
                  <span>{val}</span>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>

      <style>
        {`
          .footer-container {
            background-color: rgb(46, 46, 84);
            color: white;
            padding: 20px;
          }
          ul {
            list-style: none;
            padding-left: 0;
          }
          ul li {
            color: rgba(255, 255, 255, 0.65);
            margin-top: 10px;
            transition: color 0.3s;
          }
          ul li:hover {
            color: white;
            cursor: pointer;
          }
          .social-icons {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          .social-item {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 18px;
          }
          .social-item i {
            font-size: 24px;
            color: white;
            transition: transform 0.3s;
          }
          .social-item:hover i {
            transform: scale(1.2);
          }
        `}
      </style>
    </div>
  );
}
