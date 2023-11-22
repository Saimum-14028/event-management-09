import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./Home";
import ServiceDetails from "./ServiceDetails";
import MyEvents from "./MyEvents";

const myCreatedRoute =  createBrowserRouter([
    {

        path : "/",
        element : <MainLayout></MainLayout>,
        // errorElement: <ErrorPage></ErrorPage>,
         children : [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : "/my events",
                //element : <PrivateRoute><MyEvents></MyEvents></PrivateRoute>
                element : <MyEvents></MyEvents>
            },
        //     {
        //         path : "/donation",
        //         element : <PrivateRoute><Donation></Donation></PrivateRoute>
        //     },
             {
                path : "service/:id",
               // element : <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
                element : <ServiceDetails></ServiceDetails>,
                loader:()=>fetch('/data.json')
            },
        //     {
        //         path: "login",
        //         element : <Login></Login>
        //     },
        //     {
        //     path: "register",
        //     element : <Register></Register>
        //     },
         ]

    }
])

export default myCreatedRoute;