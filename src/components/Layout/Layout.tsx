import React from "react";
import Header from "../Header/Header";

interface IProps {
  children: JSX.Element;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
