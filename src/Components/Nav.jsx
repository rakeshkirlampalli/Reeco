// Nav.js
import React, { useState } from 'react';
import styled from 'styled-components';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 12vh;
  padding: 0 20px;
  background-color: white; 
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); 
  position: fixed; /* Change to fixed */
  top: 8%; /* Fix it to the top of the viewport */
  width: 100%; /* Make it span the full width */
  z-index: 1000; 
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: flex-start; 
  padding-left: 7rem;
  padding-top: 1rem;
  font-weight: bold;
`;
const RightSide = styled.div`
  display: flex;
  align-items: center;
  padding-right: 6.8rem;
`;
const Order = styled.div`
  color: #aaaaaa;
  display:flex;
  align-items:center;
`;

const CustomChevronRightIcon = styled(ChevronRightIcon)`
  margin: 0 5px; /* Adjust the margin as needed */
`;
const CustomButton = styled.button`
  background-color: ${({ isApprove }) => (isApprove ? '#046A38' : 'transparent')};
  color: ${({ isApprove }) => (isApprove ? 'white' : 'black')};
  border: 2px solid black;
  border-radius: 15px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 16px;
  margin: 0 10px;
  margin-top:1.5rem;
`;
const Nav = () => {
  const [orderNumber, setOrderNumber] = useState('32457ABC');
  function generateRandomOrderNumber() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < 8; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return `Order ${result}`;
  }

  const generateRandomOrder = () => {
    setOrderNumber(generateRandomOrderNumber());
  };
  return (
    <NavContainer>
      <LeftSide>
        <Order>
          Orders <CustomChevronRightIcon /> <u>{orderNumber}</u>
        </Order>
        <h2> {orderNumber}</h2>
      </LeftSide>
      <RightSide>
        <CustomButton onClick={generateRandomOrder}>Back</CustomButton>
        <CustomButton isApprove onClick={generateRandomOrder}>
          Approve Order
        </CustomButton>
      </RightSide>
    </NavContainer>
  );
};

export default Nav;
