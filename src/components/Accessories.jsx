import React, { useRef } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

export default function AccessoriesCard({ data }) {
  const scrollContainer = useRef(null);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <Container className="position-relative accessories-container">
      <button className="scroll-btn left" onClick={scrollLeft}>⮜</button>
      <button className="scroll-btn right" onClick={scrollRight}>⮞</button>

      <div id="card-con" ref={scrollContainer} className="accessories-wrapper">
        {data.map((value, ind) => (
          <div className="accessory-card" key={ind}>
            <Card className="accessory-card-content">
              <Card.Img variant="top" src={value.img} className="accessory-img" />
              <Card.Body className="text-center">
                <div className="stars">★★★★★</div>
                <h5 className="accessory-title">{value.name}</h5>
                <p className="price">{value.price ? <span className="ifPrice">Rs.${value.price}</span>: "Contact us for a price"}</p>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <style>
        {`
        .accessories-container {
          margin-top: 20px;
          padding: 14px;
          background-color: #fff;
          border-radius: 10px;
          position: relative;
        }
        .accessories-wrapper {
          display: flex;
          gap: 1rem;
          overflow-x: auto;
          padding: 10px;
          scroll-behavior: smooth;
          white-space: nowrap;
        }
        .accessory-card {
          flex: 0 0 auto;
          width:250px;
        }
        .accessory-card-content {
          width: 100%;
          border: 1px solid #ddd;
          border-radius: 10px;
          padding:15px 10px;
          box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
        }
        .accessory-img {
        //   height: 200px;
          object-fit: cover;
          border-radius: 8px;
        }
        .stars {
          color: #ccc;
          font-size: 14px;
        }
        .accessory-title {
          font-size: 14px;
          font-weight: bold;
        }
        .price {
          font-size: 14px;
          color:grey;
        }
          .ifPrice{
          font-weight:bold;
          color:green;
          }
        .scroll-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0,0,0,0.6);
          color: white;
          border: none;
          font-size: 16px;
          padding: 8px;
          cursor: pointer;
          border-radius: 30%;
        }
        .scroll-btn.left {
          left: -10px;
        }
        .scroll-btn.right {
          right: -10px;
        }
        @media (max-width: 768px) {
          .accessory-card {
            width: 140px;
          }
          .accessory-img {
            height: 120px;
          }
          .scroll-btn {
            font-size: 12px;
            padding: 6px;
          }
        }
        `}
      </style>
    </Container>
  );
}
