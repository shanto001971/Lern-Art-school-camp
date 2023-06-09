import { createBrowserRouter } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Home from "../Components/Home/Home";
import Dashboard from "../Components/Dashboard/Dashboard";
import SelectedClasses from "../Components/Dashboard/SelectedClasses/SelectedClasses";
import Login from "../Components/Login/Login";
import SingUp from "../Components/SingUp/SingUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                element: <Login/>
            },
            {
                path: 'singUp',
                element:<SingUp/>
            },
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard/></PrivateRoute>,
        children:[
            {
                path:'selectedClasses',
                element:<SelectedClasses/>
            },
        ]
    },
]);