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
import Calculation from './Components/Calculation/Calculation';

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
      },
      {
        path: 'calculation',
        element: <Calculation/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
