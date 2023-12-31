import { createBrowserRouter } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Home from "../Components/Home/Home";
import Dashboard from "../Components/Dashboard/Dashboard";
import SelectedClasses from "../Components/Dashboard/SelectedClasses/SelectedClasses";
import Login from "../Components/Login/Login";
import SingUp from "../Components/SingUp/SingUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Payment from "../Components/Payment/Payment";
import AddClass from "../Components/Dashboard/InstructorDashboard/AddClass/AddClass";
import MyClass from "../Components/Dashboard/InstructorDashboard/MyClass/MyClass";
import ManageClass from "../Components/Dashboard/InstructorDashboard/ManageClass/ManageClass";
import AdminManageUser from "../Components/Dashboard/AdminDashboard/AdminManageUser";
import InstructorPage from "../Components/InstructorPage/InstructorPage";
import ClassSection from "../Components/ClassSection/ClassSection";
import NotFoundPage from "../Components/NotFoundPage/NotFoundPage";
import PaymentHistory from "../Components/PaymentHistory/PaymentHistory";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOut />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/class',
                element: <ClassSection />
            },
            {
                path: '/instructor',
                element: <InstructorPage />
            },
            {
                path: 'singUp',
                element: <SingUp />
            },
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: 'selectedClasses',
                element: <SelectedClasses />
            },
            {
                path: 'payment',
                element: <Payment />
            },
            {
                path: 'PaymentHistory',
                element: <PaymentHistory />
            },
            {
                path: 'addClass',
                element: <AddClass />
            },
            {
                path: 'myClass',
                element: <MyClass />
            },
            {
                path: 'manageClass',
                element: <ManageClass />
            },
            {
                path: 'manageUser',
                element: <AdminManageUser />
            },
        ]
    },

]);