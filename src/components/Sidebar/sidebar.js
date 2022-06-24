import React from "react";
import "./sidebar.css";
import facebook from "../../assets/img/facebook-img.svg";
import instagram from "../../assets/img/instagram-img.svg";
import twitter from "../../assets/img/twitter-img.svg";
import linkedin from "../../assets/img/linkedin-img.svg";
import github from "../../assets/img/github-img.svg";
import portrait from "../../assets/img/portrait.jpg";
import { NavLink } from "react-router-dom";

const Sidebar = (props) => {
  const { title } = props;

  return (
    <aside>
      <div className="div-portrait-img">
        <img className="portrait-img" src={portrait} alt="portrait" />
        <p>Andreea Tinca</p>{" "}
      </div>

      <ul>
        <li>
          <NavLink
            exact="true"
            activeclassname="active"
            to="/react-page/home"
            className="navigation-link"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            exact="true"
            activeclassname="active"
            to="/react-page/about"
            className="navigation-link"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            exact="true"
            activeclassname="active"
            to="/react-page/projects"
            className="navigation-link"
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            exact="true"
            activeclassname="active"
            to="/react-page/contact"
            className="navigation-link"
          >
            Contact
          </NavLink>
        </li>
      </ul>

      <a
        href="https://www.facebook.com/andreea.tinca"
        target="_blank"
        className="logo-a"
      >
        <img className="logo" src={facebook} alt="logo" />
      </a>
      <a
        href="https://www.instagram.com/tincaandreea21/"
        target="_blank"
        className="logo-a"
      >
        <img className="logo" src={instagram} alt="logo" />
      </a>
      <a
        href="https://twitter.com/AndreeaTinca95"
        target="_blank"
        className="logo-a"
      >
        <img className="logo" src={twitter} alt="logo" />
      </a>
      <a
        href="https://www.linkedin.com/in/andreea-tinca-774880107/"
        target="_blank"
        className="logo-a"
      >
        <img className="logo" src={linkedin} alt="logo" />
      </a>
      <a
        href="https://github.com/tincaandreea21"
        target="_blank"
        className="logo-a"
      >
        <img className="logo" src={github} alt="logo" />
      </a>
    </aside>
  );
};
export default Sidebar;
