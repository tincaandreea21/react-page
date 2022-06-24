import React, { useState } from "react";
import Sidebar from "../Sidebar/sidebar";
import "./projects.css";
import rps from "../../assets/img/r-p-s.png";
import bmi from "../../assets/img/bmi.png";
import layout from "../../assets/img/layout-img.png";
import BtnSlider from "./btnSlide";

const Projects = (props) => {
  const { title } = props;
  const slides = [
    {
      src: rps,
      title: "Rock Paper Scissors Game",
      text: "A simple Computer vs Player game using a random option.",
      list: ["Javascript", "HTML", "CSS"],
      link: "https://jsfiddle.net/Andreea_Tinca/zg9jdh5v/2/",
    },
    {
      src: bmi,
      title: "Body Mass Index Calculator",
      text: "It calculates the BMI using the standard formula and displays the results and the status, according to the international standard. ",
      list: ["Javascript", "HTML", "CSS"],
      link: "https://jsfiddle.net/Andreea_Tinca/zg9jdh5v/1/",
    },

    {
      src: layout,
      title: "Layout design",
      text: "A single page application displaying CSS layout techniques",
      list: ["HTML", "CSS"],
      link: "https://jsfiddle.net/Andreea_Tinca/zg9jdh5v/",
    },
  ];
  const [slideIndex, setSlideIndex] = useState(1);
  const nextSlide = () => {
    if (slideIndex !== slides.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === slides.length) {
      setSlideIndex(1);
    }
  };
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(slides.length);
    }
  };
  const moveDot = (index) => {
    setSlideIndex(index);
  };
  return (
    <div className="div-projects">
      <Sidebar />
      <main className="main-projects">
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
        <div className="container-slider">
          <div className="container-item">
            {slides.map((slideItem, index) => {
              if (slideIndex === index + 1) {
                return (
                  <>
                    <div className="container-img">
                      <img className="img-item" src={slideItem.src}></img>

                      <div className="overlay">
                        <a
                          className="overlay-text"
                          href={slideItem.link}
                          target="_blank"
                        >
                          VIEW LIVE
                        </a>
                      </div>
                    </div>
                    <div className="container-text">
                      <p className="title-p">{slideItem.title}</p>
                      <p className="text-paragraph">{slideItem.text}</p>
                      <ul>
                        {slideItem.list.map((listItem, index) => {
                          return <li key={index}>{listItem}</li>;
                        })}
                      </ul>
                    </div>
                  </>
                );
              }
            })}
          </div>
          <div className="container-dots">
            {Array.from({ length: 3 }).map((item, index) => (
              <div
                onClick={() => moveDot(index + 1)}
                className={slideIndex === index + 1 ? "dot dot-active" : "dot"}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
      </main>
    </div>
  );
};
export default Projects;
