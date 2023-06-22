import { createBrowserRouter, Navigate } from "react-router-dom";

import App from "../App";
import Welcome from "../pages/Welcome/Welcome";
import SignUp from "../pages/SignUp/SignUp";
import CreateProfile from "../pages/CreateProfile/CreateProfile";
import Login from "../pages/Login/Login";
import Dashboard from '../pages/Dashboard/Dashboard'
import UserProfile from "../pages/UserProfile/UserProfile";
import JoinedTravel from "../pages/JoinedTravel/JoinedTravel";
import Test from "../pages/test";
import CreateTravel from "../pages/CreateTravel/CreateTravel";
import TravelCreated from "../pages/TravelCreated/TravelCreated";
import MyTravels from "../pages/MyTravels/MyTravels";
import TravelResume from "../pages/TravelResume/TravelResume";
import Landing from "../pages/Landing/Landing";
import ShowProfile from "../pages/ShowProfile/ShowProfile";

const isAuthenticated = () => (!localStorage.getItem('token'))

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Welcome /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/createProfile", element: isAuthenticated() ? <Navigate to="/login" /> : <CreateProfile /> },
      { path: "/login", element: <Login /> },
      { path: "/travelResume/:id", element: <TravelResume /> },
      { path: "/travelJoined", element: <JoinedTravel /> },
    ],
  },
  { path: '/dashboard', 
    element: isAuthenticated() ? <Navigate to="/login" /> : <Dashboard />,
    children: [
      { path: '/dashboard/', element: <Landing /> },
      { path: "/dashboard/createTravel", element: <CreateTravel /> },
      { path: "/dashboard/travelCreated", element: <TravelCreated /> },
    ]
  },
  { path: "/profile",
    element: <UserProfile />,
    children: [
      { path: "/profile/", element: <ShowProfile /> },
      { path: "/profile/myTravels", element: <MyTravels /> },
    ] 
  },
  { path: "/test", element: <Test /> },
]);