import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { remove } from '../store/productSlice';
import { useDispatch } from 'react-redux';
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px; /* Adjust the gap between cards as needed */
  padding: 16px;
  
`;

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 100%;
  max-height: 150px; /* Adjust the maximum height of the image */
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 8px;
`;

const ProductName = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;

const ProductBrand = styled.p`
  color: #666;
  margin-bottom: 8px;
`;

const ProductPrice = styled.p`
  font-weight: bold;
  color: #333;
`;

const BackButton = styled.button`
  margin-top: 16px;
  padding: 8px 18px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Cart = () => {
  const productCart = useSelector((state) => state.cart);
  const history = useNavigate();
  const dispatch=useDispatch()
  const handleBack = () => {
    history('/')
  };
  const handleRemove=(id)=>{
      dispatch(remove(id))
  }
  return (
    <>
      <BackButton onClick={handleBack}>Back</BackButton>
      <CardsContainer>
        {productCart.map((product, index) =>(
          <Card key={index}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductBrand>{product.brand}</ProductBrand>
            <ProductPrice>${product.price}</ProductPrice>
            <BackButton onClick={()=>handleRemove(product.id)}>remove from cart</BackButton>
          </Card>
        ))}
      </CardsContainer>
    </>
  );
};

export default Cart;
