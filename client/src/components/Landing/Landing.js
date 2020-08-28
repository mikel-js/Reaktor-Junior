import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './Landing.css';
import { Button, Container, Col, Row } from 'react-bootstrap';

import ComputerBg from '../images/comp.jpg';
import StarBg from '../images/comp.jpg';

// background: #be93c5; /* fallback for old browsers */
// background: -webkit-linear-gradient(to right, #be93c5, #7bc6cc); /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to right, #be93c5, #7bc6cc); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

const LandingWrapper = styled.div`
  background-image: url(${ComputerBg});
  height: 100vh;
  width: 100vw;
  float: left;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
`;

const CanvasWrapper = styled.div`
  margin: 40vh auto;
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

const coverStyle = {
  margin: 0,
  padding: 0,
  height: `100%`,
};
const Landing = () => {
  return (
    <LandingWrapper>
      <div>
        <div>hi</div>
        <CanvasWrapper>
          <Canvas>
            <Container style={coverStyle}>
              <Row style={coverStyle}>
                <Col xs={8} style={(coverStyle, { border: `1px solid black` })}>
                  <h1>Welcome to Rising Tahdet!</h1>
                  <p>
                    This is a simple website for all developers who are looking
                    to find their first dream job.
                  </p>
                  <p>
                    <Link to='/home'>
                      <Button variant='primary'>Learn more</Button>
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
      </div>
    </LandingWrapper>
  );
};

export default Landing;
