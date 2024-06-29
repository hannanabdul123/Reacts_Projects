import React from 'react'
import styled from "styled-components"
import { FaSearch } from "react-icons/fa"
import { AiFillPlusCircle } from "react-icons/ai";


export default function 
({handleShow}) {
  return (
    <div>
        <Box> 
    <img src="./images/Frame 1.png" alt="image is Loading.." />
    </Box>
    <Wrapper>
    <Icons>
    <FaSearch className='Search'/>
    </Icons>
    
   <Input placeholder='Search Contact '/>
   <Circle className='Circle' onClick={handleShow}/>
   </Wrapper>
    </div>
  )
}


const Box=styled.div`

    height: 60px;
    width:361px;
    top: 8px;
    left: 16px;
    gap: 0px;
    border-radius: 10px;
    opacity: 0px;
   margin: 10px;
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    
    `
    const Input=styled.input`
      background-color: rgba(50, 51, 52, 1);
      outline: none ;
      margin: 10px;
      border: 1px solid white;
      
height: 40px;
width:295px;
color: white;
font-size: 15px;
&::placeholder{
  font-size: 15px;
  color: white;
    ;
}

padding: 7px 10px 7px 30px;

border-radius: 10px ;
   
    `
    const Icons=styled.div`
       position: absolute;
       padding: 30px 0px 7px 20px;
       bottom: 20px;
      color: white;
      pointer-events: none;
      
    `
const Wrapper=styled.div`
position: relative;
display: flex;



`
const Circle = styled(AiFillPlusCircle)`

  color: white;
  width: 52px;
  height: 52px; 
    cursor: pointer; 
  gap: 0px;
  opacity: 0px;
 margin-top: 10px;
`;

