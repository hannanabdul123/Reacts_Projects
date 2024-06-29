    import React, { useEffect, useState } from 'react'
    import styled from "styled-components"
import Contact from './Contact';
import SearchBar from './SearchBar';
import {db} from "../Configs/firebase";
import { addDoc, collection,getDocs } from "firebase/firestore";
import Delete from './Delete';
    function Navigation() {
      const [contacts,setContacts]=useState([]);
      const [error,Seterror]=useState("");
        const[isForm,SetForm]=useState(true);
        const[name,Setname]=useState('');
        const[email,Setmail]=useState('');
       
        const[isshow,Setshow]=useState(false);
        useEffect(()=>{
          const getContacts=async ()=>{
            try{
              const contactRef=collection(db,"contacts");
              const contactsSnapshot=await getDocs(contactRef);
              const contactList=contactsSnapshot.docs.map((doc)=>{
                return{
                  id: doc.id,
                  ...doc.data(),
                };
              });
             setContacts(contactList);
             console.log(contactList);
            }catch(eror){
              console.log(error);
            }
          };
          getContacts();

        },[]);
        const handleShow=()=>{
          Setshow(!isshow);
        //   SetForm(!isForm);
        }
        
        const handleUser=(e)=>{
            e.preventDefault();
            if(contacts.some(user=>user.Email.toLowerCase()==email.toLowerCase())){
                alert('User with this email already exists');
            } else{
              try{
                const newuser={Name:name,Email:email};

                 addDoc(collection(db,"contacts"),newuser);

              setContacts([...contacts,newuser]);
                Setname('');
                Setmail('');
                SetForm(false);
                Setshow(false);
            }catch(error){
              console.error("Error adding user: ", error);
            }
          }
        };
        

    return (
        <div>
      
   <SearchBar handleShow={handleShow}/>
    {isshow && (<Form onSubmit={handleUser}>
          <Label>Name</Label>
          <Input type='text' value={name} onChange={(e) => Setname(e.target.value)} required />
          <Label>Email</Label>
          <Input type='email' value={email} onChange={(e) => Setmail(e.target.value)} required />
          <Button type='submit' >Add User</Button>
          </Form>)
    }
    <UserList>
      {contacts.map((contact)=>
      (
        <UserItem key={contact.id}>
         {console.log(contact.Name)}
          <img className='img1' src="./images/Contact.png" alt="loading..." />
        <Text><strong>{contact.Name}  </strong>
        <br />
         {contact.Email}
         </Text>
         <Icons> 
          <div className='Edtbtn'>
          <img className='img2' src="./images/Edit.png" alt="loading..." />
          </div>
        
        
         
         {contact.id&&(<Delete setContacts={setContacts}
         contacts={contacts}
         id={contact.id}/>)}
        
         
         </Icons>
        </UserItem>
      )) }
    </UserList>
      {isForm && <Contact/>}
    
        </div>
    )
    }

    export default Navigation;


    const Input = styled.input`
  background-color: rgba(50, 51, 52, 1);
  margin: 10px;
  height: 30px;
  width: 295px;
  color: black;
  padding: 7px 10px;
  border-radius: 10px;
  
  font-size: 18px;
 background-color: white;
 outline: none ;
 border: 1px solid black;
 
`;
const Button = styled.button`
  margin-top: 15px;
  padding: 10px 20px;
  background-color: rgba(252, 202, 63, 1);
  color:black;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgba(252, 202, 63, 1);
    ;
  }
`;
const Label = styled.label`
  margin: 10px 0 5px;
`;
const Form = styled.form`
position: absolute;
width: 348pxpx;
height: 244pxpx;
top: 172px;
left: 23px;
padding: 16px 0px 0px 0px;
gap: 20px;
border-radius: 8px 0px 0px 0px;
opacity: 0px;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
 
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
`;
const UserList=styled.div`

  padding: 0px;
  border-radius: 5px;
`
const UserItem=styled.div`

  margin-left: 10px;
  display: flex;
  height: 64px;
  width: 360px;
  margin-top: 10px;
  border-radius: 5px;
  .img1{
    margin :12px ;
    
    width: 37.5px;
    height: 37.5px;
  }
  background-color:  rgba(252, 202, 63, 1);
`
const Text=styled.div`
  flex-grow: 1;
 margin-top: 14px;
 
`
const Icons=styled.div`
display: flex;
margin: 20px;

  .img2,.img3{
    margin-left: 20px;
    cursor: pointer;
  }
  
`