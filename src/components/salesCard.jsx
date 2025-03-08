import React, { useRef } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

export default function SalesCard({ data }) {
  const scrollContainer = useRef(null);

  // Scroll manually using buttons
  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      if (
        scrollContainer.current.scrollLeft + scrollContainer.current.clientWidth >=
        scrollContainer.current.scrollWidth
      ) {
        scrollContainer.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollContainer.current.scrollBy({ left: 200, behavior: "smooth" });
      }
    }
  };

  return (
    <Container className="position-relative mt-5">
        <h4 style={{background:"#EEF1DA",padding:"20px 14px",color:"grey"}}>FLASH SALE</h4>
        <div style={{display:"flex",borderBottom:"1px solid black",gap:"2.5rem",padding:"10px",alignItems:"center",marginBottom:"0px"}}>
            <p style={{marginBottom:"0px",}}>On Sale Now</p>
            <p style={{marginBottom:"0px",}}>Ending in</p>
            <Button style={{marginLeft:"auto"}} variant="outline-success">Shop More</Button>
        </div>
      <button className="scroll-btn left" onClick={scrollLeft}>{"<"}</button>
      <button className="scroll-btn right" onClick={scrollRight}>{">"}</button>

      <div id="card-con" ref={scrollContainer}>
        {data.map((value, ind) => (
          <div className="product-card" key={ind}>
            <Card style={{ width: "18rem", border: "1px solid #ddd", borderRadius: "10px", padding: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}>
              
              <span className="discount-badge">Save {value.discount}%</span>

              <Card.Img variant="top" src={value.imgSrc} style={{ height: "200px", objectFit: "cover", borderRadius: "8px" }} />

              <Card.Body className="text-center">
                <div className="stars">★★★★★</div>
                <h5>{value.name}</h5>

                <div className="price-section">
                  <span className="old-price">Rs.{value.oldPrice}</span>
                  <span className="new-price">Rs.{value.newPrice}</span>
                </div>

                <Button variant="success" className="w-100 mt-2">Buy Now</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <style>
        {`
        #card-con {
          display: flex;
          gap: 0.5rem;
          margin-top: 10px;
          overflow-x:hidden;
          padding: 20px 15px;
          scroll-behavior: smooth;
          white-space: nowrap;
        }
        .product-card {
          flex: 0 0 auto;
        }
        .discount-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          background: #ff5722;
          color: white;
          padding: 5px 10px;
          font-size: 12px;
          border-radius: 10px;
          font-weight: bold;
        }
        .stars {
          color: #ccc;
          font-size: 14px;
          margin-bottom: 5px;
        }
        .price-section {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .old-price {
          text-decoration: line-through;
          color: red;
          font-size: 18px;
        }
        .new-price {
          font-size: 16px;
          font-weight: bold;
          color: #28a745;
        }
        .scroll-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0,0,0,0.6);
          color: white;
          border: none;
          font-size: 20px;
          padding: 10px;
          cursor: pointer;
          border-radius: 30%;
          z-index: 1111;
        }
        .scroll-btn.left {
          left: -10px;
        }
        .scroll-btn.right {
          right: -10px;
        }
        `}
      </style>
    </Container>
  );
}
