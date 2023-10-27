import React from "react";
import ReactDOM from "react-dom/client";
import {App} from "./app"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./WatchPage";
const appRouter = createBrowserRouter(
    [
        {
            path:"/",
            element:<App />,
        },
        {
            path:"movie",
            element:<WatchPage />
        }
 
    ]
)

const Index = ()=>{
    
    return(<div>
        
    <RouterProvider router={appRouter}>
            <App />
            </RouterProvider>
        </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />)