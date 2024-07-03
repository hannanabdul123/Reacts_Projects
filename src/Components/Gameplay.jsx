import styled from "styled-components"
import NumberComponent from "./NumberComponent";
import Dice from "./Dice";
import { useState } from "react";

function Gameplay() {
  const [score,Setscore]=useState(0);
  const [selectedNum,SetselectNum]=useState();
  const [currentdice,Setcurrentdice]=useState(1);
  const [error,Seterror]=useState("");
  const generaterandomeno=(min,max)=>{
    return Math.floor(Math.random()*(max-min)+min);
    }
    const rolldice=()=>{
      if(!selectedNum) {
        Seterror("You haven't select any number");
        return;
      }
      const dice=generaterandomeno(1,7);
      Setcurrentdice((prev) => dice);
      
      if(selectedNum === dice){
        Setscore((prev)=>prev+selectedNum);
     }else{
       Setscore((prev)=>prev-2);
     }
     SetselectNum(undefined);
    
    };
    
    
  return (
    <div>
 <Boxes>    
  <Box>
<h1>{score}</h1>

<p>Total Score</p>
</Box>
<NumberComponent 
selectedNum={selectedNum}
SetselectNum={SetselectNum}
error={error}/> 
    </Boxes>
   <Dice currentdice={currentdice}
     rolldice={rolldice}
     Setscore={Setscore}
   />
    </div>
   
  )

}

export default Gameplay;

const Box=styled.div`
margin-top: 20px;
   max-width: 200px;
text-align: center;
h1{
    font-size: 100px;

line-height: 100px;
};
p{
font-size: 24px;
font-weight: 500px;

}
`
const Boxes=styled.div`
margin-top: 70px;
     gap:850px;
    display: flex;
`