import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import Root from './components/Root/Root';
import Donat from './components/AllreadyDonate/Donat';
import DonationDetails from './components/DonationDetails/DonationDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/donation",
          element: <Donat></Donat>,
          loader: () => fetch('/donation.json')
        },
        {
          path: "/donation/:id",
          element: <DonationDetails></DonationDetails>,
          loader: () => fetch('../donation.json')
        },
        {
          path: "/statistics",
          element: <Statistics></Statistics>
        },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
