import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";

const Index = () =>{
    return(
        <div className="p-2">
      <App />
        </div>
    )
}
console.log("x:", ReactDOM)
const root= ReactDOM.createRoot(document.getElementById("root")) ;
root.render(<Index />) ;