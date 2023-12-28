import Header from "./components/Header";
import NoContact from "./components/NoContact";
import SearchContact from "./components/SearchContact";
function App() {
  return (
    <div className="App px-12 h-[100vh] md:w-[40%] py-5 md:px-16 md:mx-auto bg-zinc-900">
        <Header />
        <SearchContact />
        <NoContact />
    </div>
  );
}

export default App;
