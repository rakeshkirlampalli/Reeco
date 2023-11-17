import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Body from './Body';

const MainContainer = styled.div`
  height: 100vh;
  width:100%;
  overflow: hidden;
  margin: 0; 
`;

const Main = () => {
  return (
    <MainContainer>
      <Header />
      <Body />
    </MainContainer>
  );
};

export default Main;


