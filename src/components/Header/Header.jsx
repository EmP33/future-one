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
        <div className="header-logo" data-aos="fade-down">
          <span>Future one</span>
        </div>
        <nav>
          <ul>
            <li data-aos="fade-down" data-aos-delay={100}>
              <Link to="/" className="active">
                Overview
              </Link>
            </li>
            <li data-aos="fade-down" data-aos-delay={200}>
              <Link to="/">About</Link>
            </li>
            <li data-aos="fade-down" data-aos-delay={300}>
              <Link to="/">Resources</Link>
            </li>
            <li data-aos="fade-down" data-aos-delay={400}>
              <Link to="/">Network</Link>
            </li>
            <li data-aos="fade-down" data-aos-delay={500}>
              <Link to="/">Cloud</Link>
            </li>
            <li data-aos="fade-down" data-aos-delay={600}>
              <Link to="/">Download</Link>
            </li>
            <li data-aos="fade-down" data-aos-delay={700}>
              <Link to="/">Contact</Link>
            </li>
          </ul>
          <PrimaryButton to="/" data-aos="fade-left" data-aos-delay={1000}>
            Contact Us
          </PrimaryButton>
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
