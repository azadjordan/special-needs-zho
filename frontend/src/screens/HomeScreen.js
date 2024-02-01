// HomeScreen.js
import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Sign from '../components/Sign'; // Adjust the path as necessary

const HomeScreen = () => {
  useEffect(() => {
    // Preload the speech synthesis
    window.speechSynthesis.getVoices();
  }, []);

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = window.speechSynthesis.getVoices().find(voice => voice.lang === 'en-US');
    utterance.pitch = 1;
    utterance.rate = 1;
    window.speechSynthesis.speak(utterance);
  };

  const getBlueShade = (index) => {
    const hue = 210; // Hue for blue
    const lightness = 90 - (index % 20) * 2;
    return `hsl(${hue}, 60%, ${lightness}%)`;
  };

  const signs = [...Array(20)].map((_, index) => (
    <Col key={index} md={4} lg={3}>
      <Sign 
        title={`Sign ${index + 1}`}
        backgroundColor={getBlueShade(index)}
        onClick={() => speak(`Sign ${index + 1}`)}
      />
    </Col>
  ));

  return (
    <div>
      <h2>HomeScreen</h2>
      <Row>
        {signs}
      </Row>
    </div>
  );
};

export default HomeScreen;
