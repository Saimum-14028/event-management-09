import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./Home";

const myCreatedRoute =  createBrowserRouter([
    {

        path : "/",
        element : <MainLayout></MainLayout>,
        // errorElement: <ErrorPage></ErrorPage>,
         children : [
            {
                path : "/",
                element : <Home></Home>,
            },
        //     {
        //         path : "/my events",
        //         element : <PrivateRoute><MyEvents></MyEvents></PrivateRoute>
        //     },
        //     {
        //         path : "/donation",
        //         element : <PrivateRoute><Donation></Donation></PrivateRoute>
        //     },
        //     {
        //         path : "service/:id",
        //         element : <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
        //     },
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