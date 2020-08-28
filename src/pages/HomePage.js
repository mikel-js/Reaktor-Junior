import React from 'react';
import StyledHeader from '../elements/StyledHeader';
import PackageTable from '../components/Home/PackageTable';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  background: linear-gradient(141deg, #7d8581 0%, #4d4855 51%, #57606f 75%);
`;

const HomePage = ({ packages }) => {
  return (
    <>
      <HomeWrapper>
        <StyledHeader headerText='Home Page' />
        <PackageTable />
      </HomeWrapper>
    </>
  );
};

export default HomePage;
