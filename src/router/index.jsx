import { createBrowserRouter, Navigate } from "react-router-dom";

import App from "../App";
import Welcome from "../pages/Welcome/Welcome";

import Dashboard from '../pages/Dashboard/Dashboard'
import Landing from "../pages/Landing/Landing";

import UserProfile from "../pages/UserProfile/UserProfile";
import ShowProfile from "../pages/ShowProfile/ShowProfile";
import MyTravels from "../pages/MyTravels/MyTravels";
import EditProfile from "../pages/EditProfile/EditProfile";

import Travel from "../pages/Travel/Travel";
import CreateTravel from "../pages/CreateTravel/CreateTravel";
import JoinedTravel from "../pages/JoinedTravel/JoinedTravel";
import TravelCreated from "../pages/TravelCreated/TravelCreated";
import TravelResume from "../pages/TravelResume/TravelResume";

import ConstructionPage from "../pages/Construction/Construction";
import Test from "../pages/test";

const isAuthenticated = () => (!localStorage.getItem('token'))

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Welcome /> },
      { path: "/signup", element: <Welcome /> },
      { path: "/createProfile", element: isAuthenticated() ? <Navigate to="/" /> : <Welcome /> },
    ],
  },
  { path: '/dashboard', 
    element: isAuthenticated() ? <Navigate to="/" /> : <Dashboard />,
    children: [
      { path: '/dashboard/', element: <Landing /> },
    ]
  },
  {
    path: '/travel',
    element: isAuthenticated() ? <Navigate to='/' /> : <Travel />,
    children: [
      { path: "/travel/", element: <CreateTravel /> },
      { path: "/travel/resume/:id", element: <TravelResume /> },
      { path: "/travel/created", element: <TravelCreated /> },
      { path: "/travel/joined", element: <JoinedTravel /> },
    ]
  },
  { path: "/profile",
    element: isAuthenticated() ? <Navigate to="/" /> : <UserProfile />,
    children: [
      { path: "/profile/", element: <ShowProfile /> },
      { path: "/profile/travels", element: <MyTravels /> },
      { path: "/profile/edit", element: <EditProfile /> },
    ] 
  },
  { path: "/test", element: <Test /> },
  { path: "/error", element: <ConstructionPage /> },
]);