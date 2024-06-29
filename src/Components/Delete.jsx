
import { deleteDoc, doc } from "firebase/firestore";
import {db} from "../Configs/firebase";
import React from 'react'

const Delete = ({setContacts,contacts,id}) => {
    const handleDelete=async ()=>{
        try {
            console.log("Deleting docs with id: ",id);
            setContacts(contacts.filter(contact=>contact.id!==id));
            await deleteDoc(doc(db,"contacts",id));
            console.log("Deleting succesfully ",id); 
        } catch (error) {
            console.error("Error deleting document: ", error); 
        }
       
    }
  return (
    
        <img className='img3' src="./images/Delete.png" 
         alt="Delete." onClick={handleDelete} />
    
  )
}

export default Delete;