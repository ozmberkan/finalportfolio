import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeRoutes from "./routes/HomeRoutes";
import AdminRoutes from "./routes/AdminRoutes";

const App = () => {
  const router = createBrowserRouter([HomeRoutes(), AdminRoutes()]);

  return <RouterProvider router={router} />;
};

export default App;
