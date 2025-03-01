import React, { useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import "./resumeTemplate.css";

const ResumeTemplateQueue = () => {
  const templates = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnyBdKsAh9GP8-bLeswC54ANlvsyim8keXvQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-9KF8M_zb5dRpSxyGVWTHZjK-qZrxsi64gA&s",
    "https://d25zcttzf44i59.cloudfront.net/standout-resume-template.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnyBdKsAh9GP8-bLeswC54ANlvsyim8keXvQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-9KF8M_zb5dRpSxyGVWTHZjK-qZrxsi64gA&s",
    "https://d25zcttzf44i59.cloudfront.net/standout-resume-template.png"
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleTemplates = templates.slice(startIndex, startIndex + 3);

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (startIndex + 3 < templates.length) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <Container className="mt-4 text-center">
      <div className="d-flex justify-content-center align-items-center">
        
        {/* Left Button - Hide when at first template */}
        {startIndex > 0 && (
          <Button variant="primary" onClick={handlePrev} className="me-3">
            ❮
          </Button>
        )}

        {/* Templates Display */}
        <Row className="justify-content-center">
          {visibleTemplates.map((image, index) => (
            <Col key={index} md={4} className="d-flex justify-content-center">
              <div className="template-card position-relative">
                {/* Template Card */}
                <Card className="shadow-sm" style={{ width: "250px", height: "290px", borderRadius: "10px", overflow: "hidden" }}>
                  <Card.Img src={image} className="template-img" />

                  {/* Hover Overlay */}
                  <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                    <span className="text-white fw-bold">Use this template</span>
                  </div>
                </Card>
              </div>
            </Col>
          ))}
        </Row>

        {/* Right Button - Hide when at last template */}
        {startIndex + 3 < templates.length && (
          <Button variant="primary" onClick={handleNext} className="ms-3">
            ❯
          </Button>
        )}

      </div>
    </Container>
  );
};

export default ResumeTemplateQueue;
