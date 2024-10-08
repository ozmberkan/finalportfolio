import Layout from "~/layouts/Layout";
import About from "~/pages/About/About";
import Home from "~/pages/Home/Home";
import Projects from "~/pages/Projects/Projects";
import Resume from "~/pages/Resume/Resume";

const AuthRoutes = () => {
  return {
    path: "/",
    element: <Layout/>,
    
  };
};

export default AuthRoutes;
