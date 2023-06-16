import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Welcome from "../pages/Welcome/Welcome";
import SignUp from "../pages/SignUp/SignUp";
import CreateProfile from "../pages/CreateProfile/CreateProfile";
import LoginForm from "../componets/LoginForm/LoginForm";

export const router = createBrowserRouter([
  { path: '/',
    element: <App />,
    children:[ 
      { path: '/', element: <Welcome /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/createProfile', element: <CreateProfile /> },
      { path: '/login', element: <LoginForm/> }
    ]
  }
])