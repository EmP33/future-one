import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, FooterBlockWrapper } from "./Footer.styles";
// Icons
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineMedium,
  AiFillGithub,
} from "react-icons/ai";

interface IData {
  title: string;
  links: string[];
}

const data: IData[] = [
  {
    title: "Products",
    links: ["Tiramisu chocolate", "Pastry tart", "Pllipop brownie"],
  },
  {
    title: "Collaboration",
    links: ["Tiramisu chocolate", "Pastry tart", "Pllipop brownie"],
  },
];

const FooterBlock: React.FC<{ block: IData }> = ({
  block: { title, links },
}) => (
  <FooterBlockWrapper>
    <h3>{title}</h3>
    <ul>
      {links.map((link) => (
        <li key={link}>
          <Link to="/">{link}</Link>
        </li>
      ))}
    </ul>
  </FooterBlockWrapper>
);

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-wrapper">
        <div className="footer-content">
          {data.map((block) => (
            <FooterBlock key={block.title} block={block} />
          ))}
          <div className="socials">
            <a href="https://www.facebook.com/">
              <AiFillFacebook />
            </a>
            <a href="https://twitter.com/">
              <AiOutlineTwitter />
            </a>
            <a href="https://www.linkedin.com/">
              <AiFillLinkedin />
            </a>
            <a href="https://medium.com/">
              <AiOutlineMedium />
            </a>
            <a href="https://github.com/">
              <AiFillGithub />
            </a>
          </div>
        </div>
        <div className="copyright">
          <span>
            &copy; 2003 - 2022 Carrot cake sweet pie Sp. z o.o. All rights
            reserved.
          </span>
          <Link to="/">Legal</Link>
          <Link to="/">Privacy policy</Link>
          <Link to="/">Proud to be Open Source</Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
