import React, { useState, useEffect } from "react";
import Slider from "react-slick"; // Ensure you have installed react-slick and slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "../Assert/Banner02.webp";
import shetafood from "../Assert/instafoodbanner.jpg";

const Section = () => {
  const [nav1, setNav1] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slider1, setSlider1] = useState(null);

  useEffect(() => {
    setNav1(slider1);
  }, [slider1]);

  const settings = {
    onReInit: () => setCurrentSlide(slider1?.innerSlider.state.currentSlide),
    lazyLoad: true,
    asNavFor: nav1,
    focusOnSelect: true,
  };

  const AfroStyles = [
    {
      id: 1,
      src: banner,
      alt: "Style 1",
      h5: "Sheta Group",
      h1: "Four Pillars of Innovation",
      p: "Instafood is an ready to cook indian cuisine brand offering a variety of over 25+ indian varieties.",
    },
    {
      id: 2,
      src: shetafood,
      alt: "Style 2",
      h5: "Insta Food",
      h1: "Four Pillars  ",
      p: "Instafood is an ready to cook indian cuisine brand offering a variety of over 25+ indian varieties.",
    },
    {
      id: 3,
      src: banner,
      alt: "Style 3",
      h5: "Sheta Group",
      h1: "Four Pillars of Innovation",
      p: "",
    },
    {
      id: 4,
      src: banner,
      alt: "Style 4",
      h5: "Sheta Group",
      h1: "Four Pillars of Innovation",
      p: "",
    },
  ];

  return (
    <>
      <Slider {...settings} ref={(slider) => setSlider1(slider)}>
        {AfroStyles.map((item) => (
          <div key={item.id} className="relative ">
            <img src={item.src} alt={item.alt} className="w-full " />
            <div className="absolute  w-[450px] h-full top-0 flex items-center justify-end left-60 animate-fadeUp">
              <div className="p-4">
                <h5 className=" bg-[#ec1d25] text-white w-28 p-1 ">
                  {item.h5}
                </h5>

                <h1 className="text-4xl text-start">{item.h1}</h1>
                <p className="text-lg border-l-4 p-2 text-justify  border-l-blue-500  mt-5 ml-10">
                  {item.p}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="thumb-wrapper">
        {AfroStyles.map((item, idx) => (
          <div
            key={item.id}
            className={currentSlide === idx ? "active" : null}
            onClick={() => {
              slider1?.slickGoTo(idx);
            }}
          >
            <img src={item.src} alt={item.alt} />
            {currentSlide}
          </div>
        ))}
      </div>
    </>
  );
};

export default Section;
