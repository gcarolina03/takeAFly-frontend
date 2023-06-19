import { createBrowserRouter, Navigate } from "react-router-dom";

import App from "../App";
import Welcome from "../pages/Welcome/Welcome";
import SignUp from "../pages/SignUp/SignUp";
import CreateProfile from "../pages/CreateProfile/CreateProfile";
import Login from "../pages/Login/Login";
import { Dashboard } from "@mui/icons-material";
import Profile from "../components/Profile/Profile";

const isAuthenticated = () => (!localStorage.getItem('token'))
console.log(isAuthenticated())

export const router = createBrowserRouter([
  { path: '/',
    element: <App />,
    children:[ 
      { path: '/', element: <Welcome /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/createProfile', 
        element: isAuthenticated() ? <Navigate to="/login" /> : <CreateProfile />
      },
      { path: '/login', element: <Login/> },
      { path: '/dashboard',
        element: isAuthenticated() ? <Navigate to="/login" /> : <Dashboard />
      },
    ]
  },
  { path: '/profile', 
    element: <Profile />}
])