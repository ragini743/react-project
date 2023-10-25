import React from "react";
import { useState } from "react";
// import style.css from "../src/style.css" 

const App =() =>{
   const [text, setText]=useState("")

   console.log("HHH:", text)

   x = 5

    console.log(text)

    const calculateTotal = () => {
        return eval(text);
    }
    return(
    <div className="max-w-sm mx-auto my-5 p-4 rounded-lg shadow-lg">
        <div className="w-full h-24 pb-2 bg-slate-200 border-gray-300 border-2 break-words">
            {text}
        </div>
        <div className="w-full bg-emerald-200 grid grid-cols-4 justify-center m-auto  shadow-lg  mt-0" onClick={(e)=>{
            const userSelect = e.target.value;
            console.log(userSelect)
            if (userSelect == '=') {
                const total = calculateTotal();
                console.log("while selecting total", text)
                setText(text + "=" + total)
            } else if (userSelect == 'AC') {
                setText("")
            }
            else if(userSelect == "DEL"){
        setText(text.slice(0,text.length-1))
            }
            else {
                setText(text + userSelect)
            }
        }}
        >

            <button className=" text-center
            border-2  border-gray-50 m-2 p-2 col-span-2 font-bold text-lg shadow-sm rounded-lg"value="AC">AC</button>
            <button className="text-center
            border-2 p-2 m-2 rounded-lg border-gray-50  font-bold text-lg shadow-sm"value="DEL">DEL</button>
            <button className="text-center
            border-2 p-2 m-2 rounded-lg border-gray-50  font-bold text-lg shadow-sm"value="/">/</button>
            <button className="text-center
            border-2 p-2 m-2 rounded-lg border-gray-50  font-bold text-lg shadow-sm"value="1">1</button>
            <button className="text-center
            border-2 p-2 m-2 rounded-lg border-gray-50  font-bold text-lg shadow-sm"value="2">2</button>
            <button className="text-center
            border-2 p-2 m-2 rounded-lg border-gray-50  font-bold text-lg shadow-sm"value="3">3</button>
            <button className="text-center
            border-2 p-2 m-2 rounded-lg border-gray-50  font-bold text-lg shadow-sm"value="*">*</button>
            <button className="text-center
            border-2 p-2 m-2 rounded-lg border-gray-50  font-bold text-lg shadow-sm"value="4">4</button>
            <button className="text-center
            border-2 p-2 m-2 rounded-lg border-gray-50  font-bold text-lg shadow-sm"value="5">5</button>
            <button className="text-center
            border-2 p-2 m-2 rounded-lg border-gray-50  font-bold text-lg shadow-sm"value="6">6</button>
            <button className="text-center
            border-2 p-2 m-2 rounded-lg border-gray-50  font-bold text-lg shadow-sm"value="+">+</button>
            <button className="text-center
            border-2 p-2 m-2 rounded-lg border-gray-50  font-bold text-lg shadow-sm" value="7">7</button>
            <button className="text-center
            border-2 p-2 m-2 rounded-lg border-gray-50  font-bold text-lg shadow-sm"value="8">8</button>
            <button className="text-center
            border-2 p-2 m-2 rounded-lg border-gray-50  font-bold text-lg shadow-sm" value="9">9</button>
            <button className="text-center
            border-2 p-2 m-2 rounded-lg border-gray-50  font-bold text-lg shadow-sm" value="-">-</button>
            <button className="text-center
            border-2 p-2 m-2 rounded-lg border-gray-50  font-bold text-lg shadow-sm" value=".">.</button>
            <button className="text-center
            border-2 p-2 m-2 rounded-lg border-gray-50  font-bold text-lg shadow-sm" value="0">0</button>
            <button className="text-center
            border-2 p-2 m-2 rounded-lg border-gray-50  font-bold text-lg shadow-sm col-span-2" value="=">=</button>
        </div>
        </div>
    )
}

export default App
