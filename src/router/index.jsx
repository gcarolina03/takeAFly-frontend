import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Login from "../pages/Login/Login";

export const router = createBrowserRouter([
  { path: '/',
    element: <App />,
    children:[ 
      { path: '/', element: <Login /> },
      { path: '/signup', element: <Login /> },
      { path: '/createProfile', element: <Login /> }
    ]
  }
])