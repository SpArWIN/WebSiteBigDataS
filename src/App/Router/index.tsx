import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../../ui/Layout";
import { Home } from "../../Pages/Home";
import { BigData } from "../../Pages/BigData";
import { Dev } from "../../Pages/Developer";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'/',
                element:<Home/>

            },
            {
                path:'bigdata',
                element:<BigData/>
            },
            {
                path:'developer',
                element:<Dev/>
            }
        ]
    }
])