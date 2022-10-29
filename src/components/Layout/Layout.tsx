import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

interface IProps {
  children: JSX.Element;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
