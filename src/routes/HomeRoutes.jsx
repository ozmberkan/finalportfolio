import Layout from "~/layouts/Layout";
import About from "~/pages/About/About";
import Home from "~/pages/Home/Home";
import Projects from "~/pages/Projects/Projects";
import Resume from "~/pages/Resume/Resume";

const HomeRoutes = () => {
  return {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/projects", element: <Projects /> },
      { path: "/resume", element: <Resume /> },
    ],
  };
};

export default HomeRoutes;
