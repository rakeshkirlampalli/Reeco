// Aside.js
import React from 'react';
import styled from 'styled-components';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LiquorIcon from '@mui/icons-material/Liquor';
import CakeIcon from '@mui/icons-material/Cake';
import EggAltIcon from '@mui/icons-material/EggAlt';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
const StyledAside = styled.div`
  width: 83%;
  margin: 2rem auto;
  display: flex;
  flex-direction: row; /* Change flex direction to row */
  align-items: center;
  border: 2px solid transparent; /* Set border color as transparent */
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add box-shadow */
  padding:.5rem;
`;
const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
  width: 15%;
`;

const SectionHeading = styled.h3`
  margin-bottom: 1rem;
`;

const SectionContent = styled.p`
 font-size:18px;
 font-weight: normal;
 color:#aaaaaa;
margin-bottom:0;
font-weight: bold;
`;

const LineDivider = styled.div`
  width: 1px;
  height: 100px; /* Adjust the height as needed */
  background-color: #efe5e5;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.1);
`;
const IconicDiv=styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap:.6rem;
  color:#999090;
`
const Aside = () => {
  return (
    <StyledAside>
       <SectionContainer>
        <SectionContent>Supplier</SectionContent>
        <SectionHeading>Eat coast Fruits &vegetables</SectionHeading>
      </SectionContainer>
      <LineDivider />
      <SectionContainer>
        <SectionContent>Shipping date</SectionContent>
        <SectionHeading>Thu,Feb 10</SectionHeading>
      </SectionContainer>
      <LineDivider />
      <SectionContainer>
      <SectionContent>Total</SectionContent>
        <SectionHeading>$15,028.3</SectionHeading>
      </SectionContainer>
      <LineDivider />
      <SectionContainer>
      <SectionContent>Category</SectionContent>
        <SectionHeading>
          <IconicDiv>
          <BakeryDiningIcon></BakeryDiningIcon>
            <LiquorIcon></LiquorIcon>
           <AcUnitIcon></AcUnitIcon>
          <CakeIcon></CakeIcon>
          <LunchDiningIcon></LunchDiningIcon>
        <EggAltIcon></EggAltIcon>
        <RiceBowlIcon></RiceBowlIcon>
        <TakeoutDiningIcon></TakeoutDiningIcon>
          </IconicDiv>
       
        </SectionHeading>
      </SectionContainer>
      <LineDivider />
      <SectionContainer>
      <SectionContent>Department</SectionContent>
        <SectionHeading>300-444-678</SectionHeading>
      </SectionContainer>
      <LineDivider />
      <SectionContainer>
      <SectionContent>Status</SectionContent>
        <SectionHeading>Awaiting your approval</SectionHeading>        
      </SectionContainer>
    </StyledAside>
  );
};

export default Aside;
