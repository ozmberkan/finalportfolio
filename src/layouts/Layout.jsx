import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "~/components/Footer/Footer";
import Header from "~/components/Header/Header";
import Container from "~/containers/Container";


const Layout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Layout;
