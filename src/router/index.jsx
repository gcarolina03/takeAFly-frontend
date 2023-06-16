import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import WelcomePage from "../pages/WelcomePage/WelcomePage";
import SignUp from "../pages/signup/signup";
import CreateProfile from "../pages/CreateProfile/CreateProfile";
import Login from "../pages/Login/Login";

export const router = createBrowserRouter([
  { path: '/',
    element: <App />,
    children:[ 
      { path: '/', element: <WelcomePage /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/createProfile', element: <CreateProfile /> },
      {path: '/login', element: <Login/>}
    ]
  }
])