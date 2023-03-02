import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute element={Home} />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Home />,
  },
]);


export default router