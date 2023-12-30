import { useEffect, useState } from "react";
import Header from "./components/Header";
import NoContact from "./components/NoContact";
import SearchContact from "./components/SearchContact";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/Firebase";
function App() {
  const [contact ,setContact] = useState([]) ;
  const getContacts = async () => {
    const contactCollection = collection (db, 'contacts'  );
    const snapshot = await getDocs(contactCollection);
    console.log("json",snapshot);
    const constactData = snapshot.docs.map((doc) => doc.data()); 
    console.log("data",constactData)
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
    </div>
  );
}

export default App;
