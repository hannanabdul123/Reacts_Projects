import React from 'react'
import styled from 'styled-components';

function Contact() {
  return (
    <div>
        <Center>
   <img src="./images/Hands Contact.png" alt="image is Loading.." />
    <p>No Contact Found</p>
   </Center>
    </div>
  )
}

export default Contact;
const Center=styled.div`
color: white;
display: flex;
margin: 200px 40px; 
p{
    font-size: large;
    font-weight: 600;
    margin-left: 10px;
}
`