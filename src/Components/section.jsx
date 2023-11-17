import React, { useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import PrintIcon from '@mui/icons-material/Print';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { Data } from './ProductData';
import { useDispatch } from 'react-redux';
import { add } from '../store/productSlice';
const StyledSection = styled.div`
  width: 82%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column; /* Change flex direction to column */
  align-items: center;
  border: 2px solid transparent; /* Set border color as transparent */
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add box-shadow */
  padding: 1rem;
`;
const Header = styled.div`
  display: flex;
  gap:38rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding:1.4rem 4rem;
`;
const SearchBar = styled.div`
  display: flex;
  align-items: center;
  position:relative
`;
const SearchInput = styled.input`
  margin-right: 1rem;
  width:450px;
  height:4.4vh;
  border-radius:20px;
  padding:.2rem 1rem;
  border:2px solid #bbbbbb;
`;
const Addbutton=styled.button`
   width:100px;
   height:4.4vh;
   border-radius:20px;
   background-color:transparent;
   font-weight:bold;
   color:#999090;
   border:2px solid#999090;
`
const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap :5rem;
`;
const ProductList = styled.div`
  width: 97%;
`;
const PrinterLogo = styled(PrintIcon)`
  cursor: pointer;
  width:10px;
`;
const SearchIconWrapper = styled.div`
  position: absolute;
  left:88%;
  top: 53%;
  transform: translateY(-50%);
  cursor: pointer;
  color:#bbbbbb;
`;
const PrinterLogoWrapper = styled.div`
  font-size: 2rem;
  color:#999090;
`;
const Head=styled.div`
 display:flex;
 font-size:19px;
 color:#999090;
 border: 2px solid #999090; 
 width:100%;
 gap:10rem;
 padding:0.5rem 0rem;
 border-radius: 10px 10px 0 0;
 border:2px solid #bbbbbb;
 box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1); 
`;
const LeftDiv=styled.div`
 padding-left:9rem;
`;
const RightDiv=styled.div`
 padding-right:1rem;
 display:flex;
 gap:5.5rem;
 margin-left:0rem
`;
const Selector=styled.div`
color:#999090;
`
const AddProduct=styled.div`
width:100%;
color:#808080;
display:flex;
gap:2rem;
border:2px solid #bbbbbb;
box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1); 
`
const ProductImage=styled.img`
  width:3%;
  padding:.5rem;
`
const ProductData=styled.div`
width:43%;
padding:.3rem;
`
const ProductBrand=styled.div`
width:15%;
padding:.5rem;
`
const ProductPrice=styled.div`
width:10%;
padding:.5rem;
`
const ProductQuantity=styled.div`
width:15%;
padding:.5rem;
`
const ProductTotal=styled.div`
width:10%;
padding:.5rem;
`
const ProductStatus=styled.div`
width:45%;
background-color:#ECEBF0;
padding-top:.5rem;
display:flex;
gap:2rem;
`
const EditButton=styled.button`
width:3.4rem;
height:4vh;
border-radius:10px;
border:none;
background-color:transparent;
font-size:15px;
`
const Statusright=styled.div`
display:flex;
gap:1.8rem;
margin-left:6rem;
padding-top:.4rem;
`
const StyledCheckIcon = styled.div`
  cursor: pointer;
  color: ${(props) => (props.isApproved ? 'green' : 'black')};
  /* Add any additional styling for the check icon */
 
`;
const ApproveButton=styled.button`
  background-color:#83D475;
  padding:0rem .3rem;
  border-radius:10px;
  color:white;
  border:none;
  margin-top:.6rem;
  margin-left:1rem;
  margin-bottom:1rem;
  visibility: ${(props) => (props.isApproved ? 'visible' : 'hidden')};
`;
const MissingButton=styled.button`
background-color:red;
padding:0rem .4rem;
border-radius:10px;
color:white;
border:none;
margin-top:.5rem;
margin-left:1rem;
margin-bottom:1rem;
visibility: ${(props) => (props.isMissing ? 'visible' : 'hidden')};
`
const IsurgentMissing=styled.button`
background-color:red;
padding:0.2rem;
border-radius:10px;
color:white;
border:none;
margin-top:.5rem;
margin-left:1rem;
margin-bottom:1rem;
visibility: ${(props) => (props.isUrgentMissing ? 'visible' : 'hidden')};
`
const PopupButton = styled.button`
  margin: 0 10px;
  padding: 8px 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  color: #fff;
`;
const PopupWrapper = styled.div`
display: ${(props) => (props.isVisible ? 'block' : 'none')};
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.5);
z-index: 1000;
`;
const PopupContent = styled.div`
background: #fff;
padding: 20px;
border-radius: 10px;
text-align: center;
width:20%;
height:20vh;
position:absolute;
bottom:15%;
left:40%
`;
const PopupButtons = styled.div`
display: flex;
justify-content: center;
margin-top: 20px;
`;
const Editup = styled.div`
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;
const Div = styled.div`
  display: flex;
  gap: 5rem;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  font-size: 16px;
  color: #333;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;
const Section = () => {
  const [isApproved, setApproved] = useState(false);
  const [inputValue, setInputValue] = useState('');
  // const [data, setData] = useState(Data);
  const [isMissing,setIsMissing]=useState(false)
  const [isPopupVisible, setPopupVisibility] = useState(false);
  const [productDataForPopup, setProductDataForPopup] = useState(null);
  const [isUrgentMissing,setIsUrgentMissing]=useState(false);
  const [isEdit,setIsEdit]=useState(false)
  const [ProductDataForEdit,setProductDataForEdit]=useState(null)
  const dispatch=useDispatch()
  const markAsApproved = () => {
    setApproved(true);
    setIsMissing(false); 
    setIsUrgentMissing(false)
  };
  const showPopup = (data) => {
    setProductDataForPopup(data);
    setPopupVisibility(true);
  };
  const EditProduct = (data) => {
    setProductDataForEdit(data);
     setIsEdit(true);
  };

  const closePopup = () => {
    setPopupVisibility(false);
    setIsEdit(false)
  };
   
  const handleYesClick = () => {
    setIsUrgentMissing(true);
    setIsMissing(false)
    setApproved(false)
    console.log('Product is Missing Urgent!');
    closePopup();
    
  };
  const HandleSave = () => {
    setProductDataForEdit({ ...ProductDataForEdit, name: inputValue });
    setInputValue(''); // Reset the input value
    alert('Data Changed');
  }
  
  const handleNoClick = () => {
    setApproved(false)
    setIsUrgentMissing(false)
    setIsMissing(true)
    console.log('Product is Missing!');
    closePopup();
  };
 const AddtoCart=(product)=>{
     dispatch(add(product))
 }
  return (
    <StyledSection>
      <Header>
        <SearchBar>
          <SearchInput type="text" placeholder="Search..." />
          <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        </SearchBar>
        <ActionButtons>
          <Addbutton>Add Item</Addbutton>
          <PrinterLogoWrapper>
        <PrinterLogo />
      </PrinterLogoWrapper>
        </ActionButtons>
      </Header>
        <ProductList>
         <Head>
          <LeftDiv>Product Name</LeftDiv>
         <RightDiv>
         <Selector>Brand</Selector>
         <Selector>Price</Selector>
         <Selector>Quantity</Selector>
         <Selector>Total</Selector>
         <Selector>Status</Selector>
         </RightDiv>
         </Head> 
         {Data.map((product,index)=>(
            <AddProduct key={index}>
              <ProductImage src={product.image} alt="Product Image" />
              <ProductData>{product.name}</ProductData>
              <ProductBrand>{product.Brand}</ProductBrand>
              <ProductPrice>${product.price}/6*1LB</ProductPrice>
              <ProductQuantity><b>{product.Quantity}</b> x 6 * 1LB</ProductQuantity>
              <ProductTotal>${product.Total}</ProductTotal>
              <ProductStatus>
              {isApproved && (
               <ApproveButton isApproved={isApproved}>
                 Approved!
               </ApproveButton>
             )}
             {isMissing && (
               <MissingButton isMissing={isMissing}>
                 Missing!
               </MissingButton>
             )}
              {isUrgentMissing&&
              (<IsurgentMissing isUrgentMissing={isUrgentMissing}>
               Urgent-Missing!
              </IsurgentMissing>
             )}
                 <Statusright>           
                 <StyledCheckIcon isApproved={isApproved} onClick={() => markAsApproved(product.id)}>
                 {isApproved ? <CheckIcon onClick={()=>AddtoCart(product)} /> : <CheckIcon style={{color:'green'}}/>}
                 </StyledCheckIcon>
     
                 <CloseIcon style={{color:'red'}}  onClick={() => showPopup(product.name)}></CloseIcon>           
                 <EditButton onClick={()=>EditProduct(product)}>Edit</EditButton>
                 </Statusright >
              </ProductStatus>
              </AddProduct>
         ))       
         }
         <PopupWrapper isVisible={isPopupVisible}>
          <PopupContent>         
           <Div>
          <h3>Missing Product</h3>
          <CloseIcon onClick={closePopup}></CloseIcon>
          </Div>   
          <div>Product Data: {productDataForPopup}</div>    
          <PopupButtons >
            <PopupButton isMissing={isMissing} onClick={handleYesClick} style={{ color: 'black' }} >
              Yes 
            </PopupButton>
            <PopupButton isUrgentMissing={isUrgentMissing} onClick={handleNoClick} style={{ color: 'black' }} >
              No 
            </PopupButton>
            </PopupButtons>          
           </PopupContent>
         </PopupWrapper>
         <Editup isVisible={isEdit}>
        <PopupContent>
          <Div>
            <h3>Edit the Product</h3>
            <CloseIcon onClick={closePopup}></CloseIcon>
            </Div>
          <FormWrapper>          
      <Label htmlFor="productName">Product Name:</Label>
      {/* Check if ProductDataForEdit is not null before accessing its properties */}
      {ProductDataForEdit && (
        <Input
          type="text"
          id="productName"
          name="productName"
          value={ProductDataForEdit.name}
          onChange={(e) => setProductDataForEdit({ ...ProductDataForEdit, name: e.target.value })}
        />
      )}
      {/* ... (similar changes for other input fields) */}
      <Button onClick={HandleSave} type="submit">Save Changes</Button>
    
          </FormWrapper>
        </PopupContent>
      </Editup> 
        </ProductList>
        </StyledSection>
  );
};

export default Section;

