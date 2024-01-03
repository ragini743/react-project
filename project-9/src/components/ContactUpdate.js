import React from 'react'
import Modal from './Modal';
// import {formik} from "formik" ;
import { useFormik } from 'formik';
import { db } from "../config/Firebase";
import { addDoc, collection } from 'firebase/firestore';

const ContactUpdate = ({open,onClose,onOpen,setOpen ,setContact,contact ,update ,setUpdate, cont }) => {
    console.log('update:::', update)
    console.log('cont:::', cont)

    const addContact = async (contact) => {
     try{
   const contactRef = collection (db,"contacts");
   await addDoc(contactRef,contact)
    }catch(error){
        console.log("error",error)
    }

      } ;


    const formik = useFormik({
     initialValues : {
        name : "",
        email : "",
     },
  
     onSubmit : (values) => {
         console.log(values);
        addContact(values);
        onClose();
        setContact((pre)=> [values,...pre])
       
        console.log("contact")
    
     },
    });
  return (
    <div>
      <Modal onClose={onClose} open={open} formik={formik} onOpen={onOpen} setOpen={setOpen} update={update} setUpdate={setUpdate} />
    </div>
  )
}

export default ContactUpdate