import React, {useState} from "react";

const Component1 = (prop) => {
    const {item, isActive, onShow} =prop // isActive: True/False prop = {}, prop.asdfsdf = undefined
    const{Question, Answer}=item 

    console.log(isActive)
return(
    <div className="border-2 shadow-lg p-4 pt-6 pb-6 flex justify-between m-auto w-3/5 rounded-lg bg-gray-100">
        <div>
      <h1 className="py-2 font-bold"> Ques - {Question} </h1>

      {isActive? <p className="text-slate-600 text-base "> Ans - {Answer} </p>: null}
   
      </div>
      <button onClick={() => {
        onShow(item.id); }}>hint</button> 
    </div>
)
}
export default Component1 ;
