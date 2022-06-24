import React from "react";
import "./about.css";
import Sidebar from "../Sidebar/sidebar";
const About = (props) => {
  const { title } = props;
  return (
    <div className="div-about">
      <Sidebar />
      <main className="main-about">
        <div>
          <h3>About me</h3>
          <p className="text-p">
            Hello again! Thanks for checking my page!! 🤗 I recently finished a
            Web Development (javaScript) course from The Informal School of IT,
            Cluj-Napoca.
          </p>
          <p className="text-p">
            Other than coding, I spend most of my free time playing Hollow
            Knight or any other video games. 🤓 I've also been trying to read
            more so feel free to reach out to me with any book recommendations!
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;
