import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeRoutes from "./routes/HomeRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import AuthRoutes from "./routes/AuthRoutes";

const App = () => {
  const router = createBrowserRouter([
    HomeRoutes(),
    AdminRoutes(),
    AuthRoutes(),
  ]);

  return <RouterProvider router={router} />;
};

export default App;
