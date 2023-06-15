import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import LoginForm from "../componets/LoginForm/LoginForm";

export const router = createBrowserRouter([
  { path: '/', element: <App /> },
  {path: '/', element: <LoginForm/>}
])