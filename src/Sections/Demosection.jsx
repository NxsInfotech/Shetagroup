import React, { useState, useEffect } from "react";
import banner from "../Assert/Banner02.webp";
import shetafood from "../Assert/instafoodbanner.jpg";
import marble from "../Assert/shetamarble.jpg";
import skyline from "../Assert/skyline.jpg";
import composite from "../Assert/shetaenterprises.jpg";

const Demosection = () => {
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
      {AfroStyles.map((item, idx) => (
        <div key={item.id} className="">
          <img src={item.src} alt={item.alt} className="w-full " />
          <div className="absolute w-[450px] h-full top-0 flex items-center justify-end left-60 animate-fadeUp opacity-15">
            {/* <div className="p-4">
              <h5 className="bg-[#ec1d25] text-white w-28 p-1">{item.h5}</h5>
              <h1 className="text-4xl text-start">{item.h1}</h1>
              <p className="text-lg border-l-4 p-2 text-justify border-l-blue-500 mt-5 ml-10">
                {item.p}
              </p>
            </div> */}
          </div>
        </div>
      ))}
    </>
  );
};

export default Demosection;
