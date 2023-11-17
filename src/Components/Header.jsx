// Header.js
import React from 'react';
import styled from 'styled-components';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useNavigate } from 'react-router-dom';
const HeaderContainer = styled.div`
  height: 8vh;
  background-color: #046A38;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: white;
  position: fixed; /* Change to fixed */
  top: 0; /* Fix it to the top of the viewport */
  width: 100%; /* Make it span the full width */
  z-index: 1000; 
`;
const LeftButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left:6rem;
  gap:2rem;
`;

const RightButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right:7rem;
  gap:5rem
`;

const Button = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  margin: 0 10px;
  cursor: pointer;
  font-size: 17px;
  &:hover {
    text-decoration: underline;
  }
`;
const Logo = styled.h1`
  font-size: 30px; 
  margin: 0;
  font-family: 'cursive'; 
`;
const Add = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 6px;
  height: 6px;
  font-size: 13px;
  position : absolute;
  top: 0.4rem;
  right : 22rem;
`;

const Select = styled.select`
  padding: 5px;
  font-size: 17px;
  background-color:transparent;
  color:white;
  border:none;
`;
const Header = () => {
  const Cartproducts=useSelector(state=>state.cart)
  const navigate=useNavigate()
  const HandleNavigate=()=>{
    navigate('/cart')
  }
  return (
    <HeaderContainer>
      <LeftButtonsContainer>
        <Button><Logo>Reeco</Logo></Button>
        <Button>Store</Button>
        <Button>Orders</Button>
        <Button>Analytics</Button>
      </LeftButtonsContainer>
      
      <RightButtonsContainer>
        <Add>{Cartproducts.length}</Add>
      <ShoppingCartIcon onClick={HandleNavigate}></ShoppingCartIcon>
      <Select>
      <option value="james">Hello,James</option>
       </Select>
      </RightButtonsContainer>
    </HeaderContainer>
  );
};

export default Header;
