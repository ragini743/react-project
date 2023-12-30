import { useEffect, useState } from "react";
import Header from "./components/Header";
import NoContact from "./components/NoContact";
import SearchContact from "./components/SearchContact";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/Firebase";
import GroupOfContact from "./components/GroupOfContact";
function App() {
  const [contact ,setContact] = useState([]) ;
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
    <div className="App px-12 h-[100vh] md:w-[40%] py-5 md:px-16 md:mx-auto bg-zinc-900">
        <Header />
        <SearchContact />
        <NoContact />
        
          {contact.map((cont ) => (
            <div key={cont.id}>
          <GroupOfContact />
          </div>))}
      
    </div>
  );
}

export default App;
