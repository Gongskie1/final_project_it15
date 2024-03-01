import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { 
  LoginPage,
  MainChat,
  Message } from './components';
import Register from './components/loginpage/registerpage/Register';
import { userLoader as loader } from './components/message/hooks/useLoader';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>,
  },
  {
    path:"/register",
    element: <Register/>
  },
  {
    path:"/chat-page",
    element: <Message/>,
    loader: loader,
    children:[
      {
        path: "friend/:friendID",
        element: <MainChat/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
