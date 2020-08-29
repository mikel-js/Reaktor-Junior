import React, { useState, useEffect } from 'react';
import StyledHeader from '../../elements/StyledHeader';
import PackageTable from './PackageTable';
import styled from 'styled-components';
import logo from '../../images/potential.gif';

const HomeWrapper = styled.div`
  background: linear-gradient(141deg, #7d8581 0%, #4d4855 51%, #57606f 75%);
`;

const LogoWrapper = styled.div`
  padding-top: 20vh;
  height: 100vh;
  width: 100%;
  text-align: center;
`;

const LoadingLogo = styled.img`
  width: 50vw,
  height: 50vh
`;

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <HomeWrapper>
      {isLoading ? (
        <LogoWrapper>
          <h1>REAKTOR LOADING</h1>
          <LoadingLogo src={logo} />
        </LogoWrapper>
      ) : (
        <>
          <StyledHeader headerText='Home Page' />
          <PackageTable />
        </>
      )}
    </HomeWrapper>
  );
};

export default HomePage;
