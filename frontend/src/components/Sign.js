// Sign.js
import React from 'react';
import { Card } from 'react-bootstrap';

const Sign = ({ title, backgroundColor, onClick }) => {
  return (
    <Card 
      style={{ marginBottom: '20px', backgroundColor, cursor: 'pointer' }}
      onClick={onClick}
    >
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the sign's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Sign;
