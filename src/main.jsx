import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from './Components/Sign-Up/SignUp';
import CardCheckout from './Components/Credit Card Checkout/CardCheckout';
import Main from './Layout/Main';
import LandingPage from './Components/landingpage/landingpage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: 'login',
        element: <SignUp />,
      },
      {
        path: 'cardCheckout',
        element: <CardCheckout/>
      },
      {
        path: 'landingPage',
        element: <LandingPage/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
