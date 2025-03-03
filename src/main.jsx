import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DailyUi_1 from './Components/DailyUi_1/DailyUi_1';
import DailyUi_2 from './Components/DailyUi-2/DailyUi-2';
import DailyUi_3 from './Components/DailyUi-3/DailyUi-3';
import DailyUi_4 from './Components/DailyUi_4/DailyUi_4';
import Main from './Layout/Main';
import DailyUi_6 from './Components/DailyUi_6/DailyUi_6';
import DailyUi_7 from './Components/DailyUi_7/DailyUi_7';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: 'login',
        element: <DailyUi_1 />,
      },
      {
        path: 'cardCheckout',
        element: <DailyUi_2/>
      },
      {
        path: 'landingPage',
        element: <DailyUi_3/>
      },
      {
        path: 'calculation',
        element: <DailyUi_4/>
      },
      {
        path: 'profile',
        element: <DailyUi_6/>
      },
      {
        path: 'settings',
        element: <DailyUi_7/>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
