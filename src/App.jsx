import { useEffect, useState } from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import styled from 'styled-components';
export const BASE_URL="http://localhost:9000";
import SearchResult from './Components/SearchResult';

function App() {
  const [data,setdata]=useState(null);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(false);
  const [filteredData,setFilteredData]=useState(null);
  const [Selectbtn,Setselectbtn]=useState("all");
  
  useEffect(()=>{
    const fetchFoodData= async()=>{
      setLoading(true);
      try {
        const response=await fetch(BASE_URL);
      const json=await response.json();
      
      setdata(json);
      setFilteredData(json);
      setLoading(false);
     
      } catch (error) {
         setError("Unable to fetch Data: ");
         setLoading(false);
      }
      
    };
    fetchFoodData();
    console.log(data);
  },[]);
const filterbtn = [
  {
    name:"All",
    type:"all",
  },
  {
    name:"BreakFast",
    type:"breakfast",
  },
  {
    name:"Lunch",
    type:"lunch",
  },
  {
    name:"Dinner",
    type:"dinner",
  },
 

]
 const searchFood=(e)=>{
  const searchValue=e.target.value.toLowerCase();
  const filtered=data.filter(food => food.name.toLowerCase().includes(searchValue),
  
);

setFilteredData(filtered);
console.log(filtered);
 }


const filterFood=(type)=>{
  if(type === "all"){
    setFilteredData(data);
    Setselectbtn("all");
    return;
  }
  const filter=data?.filter((food)=>
  food.type.toLowerCase().includes(type.toLowerCase()));
  setFilteredData(filter);
  Setselectbtn(type);
};

 

if(error)
  return <div>{error}</div>;
  if(loading) return <div>loading...</div>;

  return (
    <>
     <Navigation searchFood={searchFood} />
    <Container>  
       
       <FilterContainer>
        {
          filterbtn.map((value)=>(
            <Button 
            isSelected={Selectbtn === value.type}   onClick={() => filterFood(value.type)}>{value.name}</Button>
          )
        )
        }
  
    </FilterContainer>
    {filteredData && filteredData.length === 0 ? (
        <div>No matches found</div>
      ) : (
     <SearchResult data={filteredData}/>
      )}
    </Container>
    
    </>
      
  );
}

export default App;

export const Container=styled.div`
 
 background-color: rgb(50, 51, 52);

  margin: 0 auto;
 overflow: hidden;
`

export const Button=styled.div`
  background: ${({ isSelected }) => (isSelected ? 'blue' : '#f22f2f')};
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
  cursor: pointer;
  &:hover{
    background-color: blue;
  }
  
`
const FilterContainer=styled.div`
 display: flex;

 justify-content: center;
 gap: 12px;
 padding-bottom: 40px;


`
  