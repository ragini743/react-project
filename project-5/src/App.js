
import './App.css';
import { LOGO } from './utils/Constant';

function App() {
  return (
    <div className="App">

   <nav className="flex items-center">
    <div className="inline-block w-[10%] mr-[10%]">
      <img src={LOGO} alt="LOGO" className='w-full'></img>
    </div>
    <ul className="list-none flex justify-evenly w-[60%] mr-[10%]">
      <li href ="#">MENU</li>
      <li href ="#">LOCATION</li>
      <li href ="#">LOCATION</li>
      <li href ="#">ABOUT</li>
      <li href ="#">CONTACT</li>
    </ul>
    <button className='w-[10%]'>Login</button>
   </nav>
    </div>
  );
}

export default App;
