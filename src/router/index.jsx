import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Welcome from "../pages/Welcome/Welcome";

export const router = createBrowserRouter([
  { path: '/',
    element: <App />,
    children:[ 
      {path: '/', element: <Welcome /> },
    ]
  }
])