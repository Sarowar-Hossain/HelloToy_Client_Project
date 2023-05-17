import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home/Home";
import AllToys from '../pages/AllToys/AllToys'
import AddToys from '../pages/AddToys/AddToys'
import MyToys from '../pages/MyToys/MyToys'
import Blog from '../pages/Blog/Blog'
import Login from '../pages/Login/Login'
import NotFound from "../NotFound/NotFound";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'alltoys',
                element: <AllToys></AllToys>
            },
            {
                path: 'addtoys',
                element: <AddToys></AddToys>
            },
            {
                path: 'mytoys',
                element: <MyToys></MyToys>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'login',
                element: <Login></Login>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])