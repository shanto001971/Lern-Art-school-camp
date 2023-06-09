import { createBrowserRouter } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Home from "../Components/Home/Home";
import Dashboard from "../Components/Dashboard/Dashboard";
import SelectedClasses from "../Components/Dashboard/SelectedClasses/SelectedClasses";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOut />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'login',
                element: <Home />
            },
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard/>,
        children:[
            {
                path:'selectedClasses',
                element:<SelectedClasses/>
            },
        ]
    },
]);