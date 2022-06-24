import React from "react";
import "./contact-page.css";
import Sidebar from "../Sidebar/sidebar";
import facebook from "../../assets/img/facebook-img.svg";
import instagram from "../../assets/img/instagram-img.svg";
import twitter from "../../assets/img/twitter-img.svg";
import linkedin from "../../assets/img/linkedin-img.svg";
import github from "../../assets/img/github-img.svg";

const Contact = (props) => {
  const { title } = props;
  return (
    <div className="div-contact-page">
      <Sidebar></Sidebar>
      <main>
        <div className="div-input">
          <p className="p-subtitle">Get in touch with me</p>
          <form>
            {/* <label for="first-name">Name:</label> */}
            <input
              type="text"
              id="name"
              name="first-name"
              placeholder="Your name"
              required
              minLength="2"
            />
            {/* <label for="subject">Subject:</label> */}
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              required
              minLength="2"
            />
            {/* <label for="email-address">Email address:</label> */}
            <input
              type="email"
              name="email-address"
              placeholder="Email address"
              minLength="6"
              required
            />
            {/* <label for="message">Message:</label> */}
            <textarea
              name="message"
              maxLength="200"
              placeholder="Write your message"
            ></textarea>

            <input type="submit" value="Submit >>" id="submit" />
          </form>
        </div>
        <div className="div-text">
          <p className="p-subtitle">Email me at</p>
          <a href="mailto:tincaandreea21@yahoo.com">tincaandreea21@yahoo.com</a>

          <div className="contact-div">
            <p className="p-subtitle">Or you can find me here</p>
            <div className="div-logo">
              <a
                href="https://www.facebook.com/andreea.tinca"
                target="_blank"
                className="logo-a"
              >
                <img className="logo-contact-page" src={facebook} alt="logo" />
              </a>

              <a
                href="https://www.instagram.com/tincaandreea21/"
                target="_blank"
                className="logo-a"
              >
                <img className="logo-contact-page" src={instagram} alt="logo" />
              </a>
              <a
                href="https://twitter.com/AndreeaTinca95"
                target="_blank"
                className="logo-a"
              >
                <img className="logo-contact-page" src={twitter} alt="logo" />
              </a>
              <a
                href="https://www.linkedin.com/in/andreea-tinca-774880107/"
                target="_blank"
                className="logo-a"
              >
                <img className="logo-contact-page" src={linkedin} alt="logo" />
              </a>
              <a
                href="https://github.com/tincaandreea21"
                target="_blank"
                className="logo-a"
              >
                <img className="logo-contact-page" src={github} alt="logo" />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
