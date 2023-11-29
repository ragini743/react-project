
import './App.css';
import { LOGO } from './utils/Constant';

function App() {
  return (
    <div className="App">
   <nav className="flex flex-wrap items-center m-auto justify-center md:px-20">
    <div className="w-[20%] mr-[60%] sm:mr-[10%] md:w-[10%]">
      <img src={LOGO} alt="LOGO" className='w-full'></img>
    </div>
    <ul className="flex order-3 flex-wrap justify-center m-[auto] text-xs sm:order-3 md:order-2 md:text-sm">
      <li href ="#" className="mr-5">MENU</li>
      <li href ="#" className="mr-5">LOCATION</li>
      <li href ="#" className="mr-5">LOCATION</li>
      <li href ="#" className="mr-5">ABOUT</li>
      <li href ="#" className="mr-5">CONTACT</li>
    </ul>
    <div className='w-[15%] rounded-lg  order-2 sm:order-2 md:order-3'>
    <button type='button' className='border-2 border-black px-2 rounded-lg bg-red-500 text-white'>Login</button>
    </div>
   </nav>




   {/* <nav className="flex items-center px-20">
    <div className="inline-block w-[10%] mr-[15%]">
      <img src={LOGO} alt="LOGO" className='w-full'></img>
    </div>
    <ul className="list-none flex justify-evenly w-[50%] mr-[15%] text-sm">
      <li href ="#">MENU</li>
      <li href ="#">LOCATION</li>
      <li href ="#">LOCATION</li>
      <li href ="#">ABOUT</li>
      <li href ="#">CONTACT</li>
    </ul>
    <div className='w-[10%] rounded-lg'>
    <button type='button' className='border-2 border-black px-2 rounded-lg bg-red-500 text-white'>Login</button>
    </div>
   </nav> */}
    </div>
  );
}

export default App;
