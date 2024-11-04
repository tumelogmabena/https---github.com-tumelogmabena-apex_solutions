import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Welcome_Page from './Pages/Welcome_Page';
import Current_Jobs from './Pages/CJ_Page';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Side_Bar from './Compontents/Side_Bar';
import Top_Bar from './Compontents/Top_Bar';
import Clients_Home from './Pages/Clients_Home';
import Reports from './Pages/Reports';
import Login_Page from './Pages/Login_Page.js';
import Info_Form from './Pages/Clients_Profile.js';
import Edit_Info_Page from './Pages/Clients_Profile.js';
import Service_History from './Pages/Service_History.js';
import Technicians_Home from './Pages/Technicians_Home.js';



const router = createBrowserRouter([
  {//this is a list of the roters of the url
    path: "/",
    element: <Welcome_Page/>,
  },

  {
    path: "current",
    element: <Current_Jobs/>,
  },

  {
    path: "side",
    element: <Side_Bar/>,
  },

  {
    path: "top_bar",
    element: <Top_Bar/>,
  },


  {
    path: "clients",
    element: <Clients_Home/>,
  },

  {
    path: "report",
    element: <Reports/>,
  },

  {
    path: "login",
    element: <Login_Page/>,
  },

  {
    path: "profile",
    element: <Info_Form/>,
  },

  {
    path: "info",
    element: <Edit_Info_Page/>,
  },
    
  
  {
    path: "history",
    element: <Service_History/>,
  },

  {
    path: "technicians",
    element: <Technicians_Home/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <RouterProvider router={router} />
  
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
