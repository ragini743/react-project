import React from "react";
import Modal from "./Modal";
// import {formik} from "formik" ;
import { useFormik } from "formik";
import { db } from "../config/Firebase";
import { addDoc, collection, updateDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";

const ContactUpdate = ({
  open,
  onClose,
  onOpen,
  setOpen,
  setContact,
  contact,
  isUpdate,
  setIsUpdate,
  cont,
  data,
}) => {
  // console.log("update:::", isUpdate);
  // console.log("cont:::", cont);
  console.log("setData", data);

  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
    } catch (error) {
      // console.log("error", error);
    }
  };
  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      console.log("id", id);
      await updateDoc(contactRef, contact);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: isUpdate ? data.name : "",
      email: isUpdate ? data.email : "",
    },

    onSubmit: (values) => {
      isUpdate ? updateContact(values, data.id) : addContact(values);
      onClose();
    },
  });

  return (
    <div>
      <Modal
        onClose={onClose}
        open={open}
        formik={formik}
        onOpen={onOpen}
        setOpen={setOpen}
        isUpdate={isUpdate}
        setIsUpdate={setIsUpdate}
      />
    </div>
  );
};

export default ContactUpdate;
