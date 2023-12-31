import { useEffect, useState } from "react";
import Header from "./components/Header";
import NoContact from "./components/NoContact";
import SearchContact from "./components/SearchContact";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/Firebase";
import GroupOfContact from "./components/GroupOfContact";
import Modal from "./components/Modal";
function App() {
  const [contact ,setContact] = useState([]) ;
  const [open , setOpen] = useState(false);
  const onOpen = () =>{
    setOpen(true);
  }
  const onClose = () =>{
    setOpen(false) ; 
  }
  const getContacts = async () => {
    const contactCollection = collection (db, 'contacts'  );
    const snapshot = await getDocs(contactCollection);
    console.log("json",snapshot);
    const contactData = snapshot.docs.map((doc) => {
       return {
         id: doc.id ,
      ...doc.data()} ;
    }
      ); 
    console.log("data",contactData)
    setContact(contactData)
  }

 useEffect(() =>{
  getContacts(); 
},[] 
  ) ;
  return (
    <div className="App px-6 h-[100vh] md:w-[50%] py-5 ml-auto mr-auto md:px-10 md:mx-auto relative bg-zinc-900 max-w-md">
        <Header />
        <SearchContact onOpen = {onOpen} />
        {/* <NoContact /> */}
        <div  className="mt-4">
          {contact.map((cont ) => ( 
          <GroupOfContact key={cont.id} cont={cont}  />
          ))}
          </div>
          { open &&  <Modal open = {open} onClose= {onClose} /> }
         
    </div>
  );
}

export default App;
