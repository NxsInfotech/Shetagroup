import React, { useState, useEffect } from "react";
import Slider from "react-slick"; // Ensure you have installed react-slick and slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "../Assert/Banner02.webp";
import shetafood from "../Assert/instafoodbanner.jpg";
import marble from "../Assert/shetamarble.jpg";
import skyline from "../Assert/skyline.jpg";
import composite from "../Assert/shetaenterprises.jpg";

const Section = () => {
  const [nav1, setNav1] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slider1, setSlider1] = useState(null);

  useEffect(() => {
    setNav1(slider1);
  }, [slider1]);

  const settings = {
    lazyLoad: "ondemand",
    asNavFor: nav1,
    focusOnSelect: true,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    arrows: false,
  };

  const AfroStyles = [
    {
      id: 1,
      src: banner,
      alt: "Style 1",
      h5: "Sheta Group",
      h1: "Four Pillars of Innovation",
      p: "Instafood is a ready to cook Indian cuisine brand offering a variety of over 25+ Indian varieties.",
    },
    {
      id: 2,
      src: shetafood,
      alt: "Style 2",
      h5: "Insta Food",
      h1: "Four Pillars",
      p: "Instafood is a ready to cook Indian cuisine brand offering a variety of over 25+ Indian varieties.",
    },
    {
      id: 3,
      src: marble,
      alt: "Style 3",
      h5: "Sheta Group",
      h1: "Four Pillars of Innovation",
      p: "",
    },
    {
      id: 4,
      src: skyline,
      alt: "Style 4",
      h5: "Sheta Group",
      h1: "Four Pillars of Innovation",
      p: "",
    },
    {
      id: 5,
      src: composite,
      alt: "Style 5",
      h5: "Sheta Group",
      h1: "Four Pillars of Innovation",
      p: "",
    },
  ];

  return (
    <>
      <Slider {...settings} ref={(slider) => setSlider1(slider)}>
        {AfroStyles.map((item, idx) => (
          <div
            key={item.id}
            className={`relative  ${
              currentSlide === idx ? "animate-scaleSlow " : ""
            }`}
          >
            <img
              src={item.src}
              alt={item.alt}
              className={`w-full transition duration-500 ease-in-out ${
                currentSlide === idx ? "scale-110" : "scale-100"
              }`}
            />
            <div className="absolute w-[450px] h-full top-0 flex items-center justify-end left-60 animate-fadeUp opacity-15">
              <div className="p-4">
                <h5 className="bg-[#ec1d25] text-white w-28 p-1">{item.h5}</h5>
                <h1 className="text-4xl text-start">{item.h1}</h1>
                <p className="text-lg border-l-4 p-2 text-justify border-l-blue-500 mt-5 ml-10">
                  {item.p}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="thumb-wrapper flex justify-center mt-4  h-auto border border-green-600">
        {AfroStyles.map((item, idx) => (
          <div
            key={item.id}
            className={`cursor-pointer mx-2 ${
              currentSlide === idx ? "border-2 border-blue-500" : ""
            }`}
            onClick={() => slider1?.slickGoTo(idx)}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-16 h-16 object-cover"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Section;
