import { useState } from "react";
import styled from "styled-components"

function NumberComponent ({selectedNum,SetselectNum,error}) {
    const arrayNum=[1,2,3,4,5,6];
   
    
  return (
   
 <NumberSelector>
    {!selectedNum && (
        <Error>
          <p>{error}</p>
        </Error>
      )}
 <div className="flex">
 {arrayNum.map((value,i)=>(
    <Box key={i}
    isSelected={value===selectedNum}
    onClick={
       ()=>SetselectNum(value)
    }>{value}</Box>
   ))
}
 </div>

    <p>Select Number</p>

   </NumberSelector>                                                                  
  );
};

export default NumberComponent;

const NumberSelector=styled.div`
display: flex;
flex-direction: column;
align-items: end;

    .flex {
     display: flex;
    }
    p{
      
margin-top: 20px;

font-size: 24px;
font-weight: 700;

    }
`
const Box=styled.div`
   width: 72px;
height: 72px;

gap: 24px;
border: 1px solid black;

 display: grid;
 place-items: center;
 font-size:24px ;
 font-weight: 700px;
 background-color: ${(props) => (props.isSelected ? "black" : "white" )};
color: ${(props) => (!props.isSelected ? "black" : "white" )};
`

const Error = styled.div`
  color: red;
  font-size: 18px;
  font-family: Poppins;
  
`;