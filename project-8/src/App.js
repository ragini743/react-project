import { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";

// import './app.css';
function App() {
  const [playGame,setPlayGame]
 = useState(true) ;
 const startGame = () => {
setPlayGame(!playGame);
console.log("BOfy",playGame);
 }
   return (
    <div className="w-full h-[100vh]">
      {playGame?<Header event={startGame} />:<Body /> }
     {/* <Header /> */}
    </div>
  );
}

export default App;
