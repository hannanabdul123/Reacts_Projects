import React from 'react'
import styled from 'styled-components';
import { BASE_URL,Button} from '../App';
function SearchResult({data}) {
  return (
    <FoodContainer>
    <FoodCarts>

      {data?.map(({name,image,text,price})=>(
        <FoodCart key={name}>
            <div className='Food_image'>
                <img src={BASE_URL+image} />
            </div>
            <div className='Food_info'>
              <div className='info'>
                <h3>{name}</h3>
                <p>{text}</p>
              </div>
              <Button>${price.toFixed(2)}</Button>
            </div>
        </FoodCart>
      ))}
    </FoodCarts>
    </FoodContainer>
  );
};

export default SearchResult;

const FoodContainer=styled.section`
background-image: url("./Images/Bg.png");
min-height: calc(100vh - 210px);
background-size: cover;
background-position: center;
background-repeat: no-repeat;

`
const FoodCarts=styled.div`
color: white;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
row-gap: 32px;
column-gap: 20px;
padding-top: 80px;
`
const FoodCart=styled.div`
width: 340px;
height: 167px;


border: 0.66px solid;

border-image-source: radial-gradient(80.38% 222.5% at -13.75% -12.36%, #98F9FF 0%, rgba(255, 255, 255, 0) 100%),
radial-gradient(80.69% 208.78% at 108.28% 112.58%, #EABFFF 0%, rgba(135, 38, 183, 0) 100%);


background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) ;
background-blend-mode: overlay,normal;
backdrop-filter: blur(13.1842px);
border-radius: 20px;
display: flex;
padding: 8px;
.Food_info{
    display: flex;
    flex-direction: column;
  justify-content :space-between ;
  align-items: end;
  h3{
   
margin-top:10px; 
font-size: 16px;
font-weight: 600;
line-height: 19.36px;
text-align: left;

  }
  p{
    margin-top: 8px;

font-size: 12px;
font-weight: 400;
line-height: 14.52px;
text-align: left;

  }
}

`;