import React from 'react';
import styled from 'styled-components';

const Text = styled.h1`
  color: black;
  text-align: center;
  margin: 0;
  padding: 0;
  padding-top: 5vh;
`;

const StyledHeader = ({ headerText }) => <Text>{headerText}</Text>;

export default StyledHeader;
