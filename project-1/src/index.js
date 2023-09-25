import React from "react";
import ReactDOM from "react-dom/client";
import {App} from "./app"
console.log("hello");
import { useState,useEffect } from "react";
// import {App} from "./App";

const Index = ()=>{
    
    return(<>
      
           
            <App />
        </>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />)