import React from "react";
import "./btnSlide.css";
import arrowLeft from "../../assets/img/arrow-left-solid.svg";
import arrowRight from "../../assets/img/arrow-right-solid.svg";

const BtnSlider = ({ direction, moveSlide }) => {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? " next" : " prev"}
    >
      <img
        className="arrow-img"
        src={direction === "next" ? arrowRight : arrowLeft}
        alt="arrow"
      ></img>
    </button>
  );
};

export default BtnSlider;
