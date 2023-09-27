import React from "react";
import  ReactDOM  from "react-dom/client" ;
import Accordian from "./src/Accordian";
const Body = () => {
    return (
        <div className="p-4 bg-gradient-to-bl bg-cyan-50">
            
            <Accordian />
            
        </div>
    )
}


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body />)