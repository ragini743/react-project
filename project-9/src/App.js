import { useEffect, useState } from "react";
import Header from "./components/Header";
import NoContact from "./components/NoContact";
import SearchContact from "./components/SearchContact";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/Firebase";
import GroupOfContact from "./components/GroupOfContact";
import Modal from "./components/Modal";
import ContactUpdate from "./components/ContactUpdate";


function App() {
  const [contact ,setContact] = useState([]) ;
  const [open , setOpen] = useState(false);
  const onOpen = () =>{
    setOpen(true);
  }
  const onClose = (event) => {
    setOpen(false) ; 
  }
  const getContacts = async () => {
    const contactCollection = collection (db, 'contacts'  );
    const snapshot = await getDocs(contactCollection);
    // console.log("json",snapshot);
    const contactData = snapshot.docs.map((doc) => {
       return {
         id: doc.id ,
      ...doc.data()} ;
    }
      ); 
    // console.log("data",contactData)
    setContact(contactData)
  }

 useEffect(() =>{
  getContacts(); 
},[] 
  ) ;
  console.log(<NoContact />)
  return (
    <div className="App px-6 h-[100vh] overflow-hidden md:w-[50%] py-5 mx-auto md:px-10 relative bg-zinc-900 max-w-md">
        <Header />
        <SearchContact onOpen = {onOpen} />
        { contact.length === 0 ? <div className="my-[50%]"><NoContact /></div> : <div  className="mt-4 overflow-scroll h-full ">
          {contact.map((cont ) => ( 
          <GroupOfContact key={cont.id} cont={cont} setContact={setContact} contact={contact} />
          ))}
          </div> }
       
        {/* <div  className="mt-4">
          {contact.map((cont ) => ( 
          <GroupOfContact key={cont.id} cont={cont}  />
          ))}
          </div> */}
          { open &&  <ContactUpdate open = {open} onClose= {onClose} onOpen={onOpen} setOpen={setOpen} setContact={setContact} contact={contact} /> }
      
    </div>
  );
}

export default App;
