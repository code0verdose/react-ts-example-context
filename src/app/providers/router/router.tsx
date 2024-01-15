import { Home } from "../../../pages/Home";
import { Favorites } from "../../../pages/Favorites";
import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "../../../pages/NotFound";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
