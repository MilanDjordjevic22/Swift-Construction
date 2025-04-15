"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const services = [
  "Siding",
  "E.I.F.S",
  "Stucco",
  "Decks",
  "Painting",
  "Parging",
  "Stone"
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  // Auto-slide (optional)
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // change every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 md:h-80 lg:h-[400px] overflow-hidden">
      {/* Background image */}
      <Image
        src="/your-image.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={80}
        className="z-0"
      />

      {/* Overlay: Arrows + Text Grouped */}
    <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="flex items-center gap-6">
            {/* Left Arrow */}
            <button
            onClick={prevSlide}
            className="text-white bg-black/60 rounded-full p-2 hover:bg-black/70"
            aria-label="Previous Slide"
            >
            <ChevronLeft size={30} />
            </button>

            {/* Overlay Text */}
            <div className="bg-black/60 text-white text-xl md:text-3xl w-[500px] py-[120px] rounded-md text-center">
            {services[current]}
            </div>

            {/* Right Arrow */}
            <button
            onClick={nextSlide}
            className="text-white bg-black/60 rounded-full p-2 hover:bg-black/70"
            aria-label="Next Slide"
            >
            <ChevronRight size={30} />
            </button>
        </div>
    </div>

      {/* Circle indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {services.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
