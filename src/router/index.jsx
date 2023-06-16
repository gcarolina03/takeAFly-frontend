import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Login from "../pages/Login/Login";
import LoginForm from "../componets/LoginForm/LoginForm";

export const router = createBrowserRouter([
  { path: '/',
    element: <App />,
    children:[ 
      { path: '/', element: <Login /> },
      { path: '/signup', element: <Login /> },
      { path: '/createProfile', element: <Login /> }
    ]
  }
  { path: '/', element: <App /> },
  {path: '/', element: <LoginForm/>}
])