import React from "react";
import { Wrapper } from "./ResponsiveMenu.styles";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

interface IProps {
  showMenu: boolean;
  toggleShowMenu: () => void;
}

const ResponsiveMenu: React.FC<IProps> = ({ showMenu, toggleShowMenu }) => {
  return (
    <Wrapper showMenu={showMenu}>
      <button onClick={toggleShowMenu}>
        <IoMdClose role="button" />
      </button>
      <ul>
        <li>
          <Link to="/" className="active">
            Overview
          </Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Resources</Link>
        </li>
        <li>
          <Link to="/">Network</Link>
        </li>
        <li>
          <Link to="/">Cloud</Link>
        </li>
        <li>
          <Link to="/">Download</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </Wrapper>
  );
};

export default ResponsiveMenu;
