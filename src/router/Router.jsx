import { createBrowserRouter } from "react-router-dom";
import Main_layout from "../layout/Main_layout";
import Home from "../pages/home/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main_layout />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  },
]);

export default router;