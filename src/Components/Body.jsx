import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import Aside from './aside';
import Section from './section';


const BodyContainer = styled.div`
  display: flex;
  height: 100vh;
  overflow-y: auto; 
  flex-direction:column;
  margin-top:10rem;
`;

const Body = () => {
  return (
    <BodyContainer>
      <Nav />
      <Aside/>
      <Section/>
    </BodyContainer>
  );
};

export default Body;
