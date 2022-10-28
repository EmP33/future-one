import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Wrapper } from "./Header.styles";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../../Global.styles";
// Icons
import { FiMenu } from "react-icons/fi";
import ResponsiveMenu from "./ResponsiveMenu";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <>
      <Wrapper>
        <div className="header-logo">
          <span>Future one</span>
        </div>
        <nav>
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
          <PrimaryButton to="/">Contact Us</PrimaryButton>
        </nav>
        <button onClick={toggleShowMenu}>
          <FiMenu />
        </button>
      </Wrapper>
      {ReactDOM.createPortal(
        <ResponsiveMenu showMenu={showMenu} toggleShowMenu={toggleShowMenu} />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default Header;
