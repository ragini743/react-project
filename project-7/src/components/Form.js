import React, { useState } from "react";

const Form = () => {
  const [name,setName]= useState("")
  const [email,setEmail]= useState("")
  const [des,setDes]= useState("")
  const SUbmit = (e) =>{
    e.preventDefault()
    console.log("name",e.target[0].value)
    setName(e.target[0].value)
    setEmail(e.target[1].value)
    setDes(e.target[2].value)
  }
  return (
    <div className="mt-6 mb-10">
      <form onSubmit={SUbmit}>
        <div className="border-2 border-black relative mb-6">
          <label className="absolute -top-4 left-10 px-2 bg-white">Name </label>
          <input type="text" className="w-full h-full p-5"></input>
        </div>
        <div className="border-2 border-black relative  mb-6">
          <label className="absolute -top-4 left-10 px-2 bg-white">
            E-mail{" "}
          </label>
          <input type="email" className="h-full w-full p-5"></input>
        </div>
        <div className="border-2 border-black relative mb-6 p-2">
          <label className="absolute -top-4 left-10 px-2 bg-white">TEXT </label>
          <textarea className="w-full h-full border-none row-10 my-auto outline-none"></textarea>
        </div>
        <div className="flex justify-end">
          <button type="submit" className="bg-black px-3 text-white">
            Submit
          </button>
        </div>
      </form>
      <div>
<h1>{name}</h1>
<h1>{email}</h1>
<h1>{des}</h1>
      </div>
    </div>
    
  );
};

export default Form;
