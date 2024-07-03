import React from 'react'
import styled from 'styled-components';
import { Button } from '../App';
function Navigation({searchFood}) {
  return (

<TopContainer>

 <div className='logo'>
 <img src="./Images/Foody Zone.png" alt="Image is loading" />
 </div>
<div className='search'>
<input onChange={searchFood} placeholder='Search Food...' /> 
</div>

</TopContainer> 
  )
}

export default Navigation;


const TopContainer=styled.div`
min-height: 140px;
width: 100%;
max-width: 1200px;
display: flex;
 align-items :center ;
justify-content: space-between;
padding: 20px;
gap: 750px;
.logo{
  margin-left: 20px;
}
.search{
margin-right: 20px;

  input{
  background-color:  rgb(50, 51, 52); 
  color: white;
  border: 1px solid red;
  border-radius: 5px;
  height: 40px;
  font-size: 16px;
  padding: 0 10px;

width: 265px;
  &::placeholder {
    color: white; 
    opacity: 0.7;
  }
  
border-color: red;
&:focus {
  
    outline: none;
  }

}
}
  
 @media (max-width: 600px) {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 20px;

  
  input{
    width: calc(100% - 32px); /* Full width minus padding */
    max-width: none;
  }
  
    .search {
      width: 100%;
      margin-right: 0px;
    }

    .logo {
      margin-left: 0;
    }

  }  


 
`


