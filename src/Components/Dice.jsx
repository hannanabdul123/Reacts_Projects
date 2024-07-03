import React, { useState } from 'react'
import styled from 'styled-components'

function Dice({currentdice,rolldice,Setscore}) {
    const [showrule,SetRule]=useState(false);
    const togglerule=()=>{
      SetRule((prev)=>!prev);
    };
   
    console.log(currentdice);
    const handleResetScore=()=>{
      Setscore(0);
    }
  return (
    <div>
        <Boxes>
            <div className='dice' onClick={rolldice}>
            <img src={`/images/images/dice_${currentdice}.png`} alt="Loading Image..." />
            <br />
        <p>Click on Dice to roll</p>
            </div>
            <br />
        <div>
        <button className='btn1' onClick={handleResetScore} >Reset Score</button>
        <br />
        <br />
        <button className='btn2' onClick={togglerule}>Show Rules</button>
        </div>
        </Boxes>
        {showrule && (
        <Rules>
          <h1>How to play Dice game</h1>
          <ul>
            <li>Select any number</li>
            <li>Click on dice image</li>
            <li>After clicking on the dice, if the selected number is equal to the dice number, you will get the same points as the dice</li>
            <li>If you guess wrong, 2 points will be deducted</li>
          </ul>
        </Rules>
      )}
        
    </div>
  )
}

export default Dice

const Boxes=styled.div`
  display: grid;
 justify-content: center;

 margin-bottom: 20px;
 cursor: pointer;

  .btn1 {
    width: 220px;
    height: 44px;
    background-color: white;
    color: black;
    border: 1px solid black;
     /* Optional: add border for better visibility */
     margin-left: 10px;
     border-radius: 5px;
     cursor: pointer;
     &:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
transition: 0.3s background ease-in ;
  }
}

  .btn2 {
    width: 220px;
    height: 44px;
    background-color: black;
    color: white;
    border: 1px solid black;
     /* Optional: add border for better visibility */
     margin-left: 10px;
     border-radius: 5px;
     cursor: pointer;
     &:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
transition: 0.3s background ease-in ;
     }
     
  }  
  p{
    font-family: Poppins;
font-size: 24px;
font-weight: 500;
line-height: 36px;

    margin-left: 10px;
  }
`
const Rules=styled.div`
margin-top: 100px;
margin-bottom: 20px;
     display: flex;
  flex-direction: column;
  align-items: center;
  
  h1{
    margin-right: 515px;
  }
  ul{
    margin-top: 10px;
  }

ul li{
  list-style: none;
}
  `