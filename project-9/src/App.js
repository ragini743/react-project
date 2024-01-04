import { useEffect, useState } from "react";
import Header from "./components/Header";
import NoContact from "./components/NoContact";
import SearchContact from "./components/SearchContact";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/Firebase";
import UserCart from "./components/UserCart";

import ContactUpdate from "./components/ContactUpdate";

function App() {
  const [contact, setContact] = useState([]);
  const [open, setOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [data, setData] = useState([]);
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const getContacts = async () => {
    const contactCollection = collection(db, "contacts");
    // const snapshot = await getDocs(contactCollection);
    onSnapshot(contactCollection, (snapshot) => {
      const contactData = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      setContact(contactData);
      return contactData;
    });
  };
  useEffect(() => {
    getContacts();
  }, []);

  console.log("contact::", contact);

  return (
    <div className="App px-6 h-[100vh] overflow-hidden md:w-[50%] py-5 mx-auto md:px-10 relative bg-zinc-900 max-w-md">
      <Header />
      <SearchContact
        onOpen={onOpen}
        isUpdate={isUpdate}
        setIsUpdate={setIsUpdate}
      />
      {contact.length === 0 ? (
        <div className="my-[50%]">
          <NoContact />
        </div>
      ) : (
        <div className="mt-4 overflow-scroll h-full ">
          {contact.map((cont) => (
            <UserCart
              key={cont.id}
              cont={cont}
              setContact={setContact}
              contact={contact}
              onOpen={onOpen}
              setIsUpdate={setIsUpdate}
              setData={setData}
            />
          ))}
        </div>
      )}

      {open && (
        <ContactUpdate
          open={open}
          onClose={onClose}
          onOpen={onOpen}
          setOpen={setOpen}
          setContact={setContact}
          contact={contact}
          isUpdate={isUpdate}
          setIsUpdate={setIsUpdate}
          data={data}
        />
      )}
    </div>
  );
}

export default App;
