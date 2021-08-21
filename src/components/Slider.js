import React, { useState } from "react";
import "./Slider.css";
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";

export default function Slider() {
  const [SlideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (SlideIndex !== dataSlider.length) {
      setSlideIndex(SlideIndex + 1);
    } else if (SlideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };
  const prevSlide = () => {
    if (SlideIndex !== 1) {
      setSlideIndex(SlideIndex - 1);
    } else if (SlideIndex === dataSlider.length) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => setSlideIndex(index);

  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={SlideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img
              src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`}
              alt="random images"
            />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction="next" />
      <BtnSlider moveSlide={prevSlide} direction="prev" />

      <div className="container-dots">
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={SlideIndex === index + 1 ? "dot active" : "dot"}
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );
}
