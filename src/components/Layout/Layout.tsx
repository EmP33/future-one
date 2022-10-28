import React from "react";
import Header from "../Header/Header";
import { Wrapper } from "./Layout.styles";

interface IProps {
  children: JSX.Element;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <main>{children}</main>
    </Wrapper>
  );
};

export default Layout;
