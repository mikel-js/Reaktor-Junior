import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import compImg from '../../images/comp.jpg';

const LandingWrapper = styled.div`
  background-color: #000000;
  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);
  height: 100vh;
  width: 100vw;
  float: left;
  margin: 0;
`;

const CanvasWrapper = styled.div`
  color: white;
  margin: 20vh auto;
  margin-bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 650px) { 
    height: 20vh;
    width: 80vw;
    flex-direction: column;
`;

const Canvas = styled.div`
  margin: 0;
  padding: 0;
  height: 30vh;
  width: 30vw;
  @media (max-width: 650px) {
    height: 20vh;
    width: 70vw;
  }
  @media (max-width: 450px) {
    height: 19vh;
    margin-top: 3em;
    width: 80vw;
  }
`;

const CanvasImage = styled.div`
  background-image: url(${compImg});
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
  @media (max-width: 300px) {
    margin-top: 45vh;
  }
`;

const Landing = () => {
  return (
    <LandingWrapper>
      <CanvasWrapper>
        <Canvas>
          <h1>REAKTOR</h1>
          <p>
            This is my pre-assingment for Reaktor - Junior Developer Position
          </p>
          <p>
            <Link to='/home'>
              <LearnMore>Learn more</LearnMore>
            </Link>
          </p>
        </Canvas>
        <Canvas>
          {' '}
          <CanvasImage />
        </Canvas>
      </CanvasWrapper>
      <Copyright>
        <p>Copyright: Michael Castro 2020</p>
      </Copyright>
    </LandingWrapper>
  );
};

export default Landing;
