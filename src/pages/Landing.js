import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Container, Col, Row } from 'react-bootstrap';

import ComputerBg from '../images/comp.jpg';
import StarBg from '../images/comp.jpg';

const LandingWrapper = styled.div`
  background-color: #000000;
  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);
  height: 100vh;
  width: 100vw;
  float: left;
  margin: 0;
`;

const CanvasWrapper = styled.div`
  margin: 20vh auto;
  margin-bottom: 0;
  width: 60vw;
`;

const Canvas = styled.div`
  margin: 0;
  padding: 0;
  height: 40vh;
`;

const CanvasImage = styled.div`
  background-image: url(${StarBg});
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
`;

const LearnMore = styled.button`
  border: solid white 1px;
  border-radius: 10px;
  background: none;
  color: white;
  &:hover {
    color: black;
    background: white;
  }
`;

const Copyright = styled.div`
  margin: 0 auto;
  margin-top: 35vh;
  color: white;
  width: 100%;
  text-align: center;
`;

const coverStyle = {
  margin: 0,
  padding: 0,
  height: `100%`,
  color: `white`,
};

const Landing = () => {
  return (
    <LandingWrapper>
      <CanvasWrapper>
        <Canvas>
          <Container style={coverStyle}>
            <Row style={coverStyle}>
              <Col xs={6} style={coverStyle}>
                <h1>REAKTOR</h1>
                <p>This is my pre-assingment for Reaktor Junior</p>
                <p>
                  <Link to='/home'>
                    <LearnMore>Learn more</LearnMore>
                  </Link>
                </p>
              </Col>
              <Col style={{ margin: 0, padding: 0 }}>
                <CanvasImage />
              </Col>
            </Row>
          </Container>
        </Canvas>
      </CanvasWrapper>
      <Copyright>
        <p>Copyright: Michael Castro 2020</p>
      </Copyright>
    </LandingWrapper>
  );
};

export default Landing;
