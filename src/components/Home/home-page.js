import React, { useState, useEffect } from "react";
import "./home-page.css";
import Sidebar from "../Sidebar/sidebar";
import file from "../../assets/img/file.svg";

const Home = (props) => {
  const { title } = props;
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="container">
      <Sidebar></Sidebar>
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="div-home">
          <main>
            <div className="main-div-home">
              <h1>Hello, I'm Andreea</h1>
              <p>
                Aspiring
                <span className="highlight"> Front-End Web Developer</span>
              </p>
              <button className="btn-cv">
                <a
                  href="https://drive.google.com/file/d/19027IQc5L9c5PDMAa7kcTxxpUI4RHEVA/view?usp=sharing"
                  target="_blank"
                >
                  View CV <img src={file} className="file-logo" alt="logo" />
                </a>
              </button>
            </div>
          </main>
        </div>
      )}
    </div>
  );
};

export default Home;
