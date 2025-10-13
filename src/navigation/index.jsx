import { createBrowserRouter } from "react-router-dom";
import userRoutes from "./routes/user.routes";
import homeRoutes from "./routes/home.routes";
import ErrorPage from "../pages/Error/ErrorPage";

const router = createBrowserRouter([
  ...userRoutes,
  ...homeRoutes,
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
