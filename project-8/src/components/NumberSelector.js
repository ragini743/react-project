import React, { useState } from "react";

const NumberSelector = () => {
  const number = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectedNumber] = useState();

//   console.log("sele", selectedNumber);

  return (
    <div className="w-[100%] md:w-[50%]">
    <div className="flex justify-evenly flex-wrap">
      {number.map((value) => (
        <div
          key={value}
          onClick={() => {
            setSelectedNumber(value);
            console.log("sele", selectedNumber);
          }}
          style={{
            background: value === selectedNumber ? "black" : "white",
            color: value === selectedNumber ? "white" : "black",
          }}
          className="border-2  border-black mt-2 px-6 h-[50px] py-3 font-bold"
        >
          {value}
        </div>
      ))}
    </div>
    <p className='text-right  pr-8 font-bold mt-5 text-xl  md:text-2xl md:pr-20'>select Number</p>
    </div>
    
     );
};

export default NumberSelector;
