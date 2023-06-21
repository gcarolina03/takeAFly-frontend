import { createBrowserRouter, Navigate } from "react-router-dom";

import App from "../App";
import Welcome from "../pages/Welcome/Welcome";
import SignUp from "../pages/SignUp/SignUp";
import CreateProfile from "../pages/CreateProfile/CreateProfile";
import Login from "../pages/Login/Login";
import Dashboard from '../pages/Dashboard/Dashboard'
import UserProfile from "../pages/UserProfile/UserProfile";
import CreateTravel from "../pages/CreateTravel/CreateTravel";
import JoinTravel from "../pages/JoinTravel/JoinTravel";
import DestinationProfile from "../pages/DestinationProfile/DestinationProfile";
import Test from "../pages/test";
import SelectDestination from "../pages/SelectDestination/SelectDestination";
import TravelCreated from "../pages/TravelCreated/TravelCreated";
import MyTravels from "../pages/MyTravels/MyTravels";
import TravelResume from "../pages/TravelResume/TravelResume";

const isAuthenticated = () => (!localStorage.getItem('token'))
console.log(isAuthenticated())

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Welcome /> },
      { path: "/signup", element: <SignUp /> },
      {
        path: "/createProfile",
        element: isAuthenticated() ? (
          <Navigate to="/login" />
        ) : (
          <CreateProfile />
        ),
      },
      { path: "/login", element: <Login /> },
      {
        path: "/dashboard",
        element: isAuthenticated() ? <Navigate to="/login" /> : <Dashboard />,
      },
      { path: "/createTravel", element: <CreateTravel /> },
      { path: "/selectDestination/:travel", element: <SelectDestination /> },
      { path: "/joinTravel", element: <JoinTravel /> },
      {
        path: "/destinationProfile/:id/:travelId",
        element: <DestinationProfile />,
      },
      { path: "/profile", element: <UserProfile /> },
      { path: "/myTravels", element: <MyTravels /> },
      { path: "/travelCreated", element: <TravelCreated /> },
      {
        path: "/travelResume/:id",
        element: <TravelResume />,
      },
    ],
  },
  { path: "/test", element: <Test /> },
]);