"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Stucco",
    image: "/stucco.jpg",
    link: "/services"
  },
  {
    title: "Hardie Siding",
    image: "/hardie.jpg",
    link: "/services"
  },
  {
    title: "Exterior Painting",
    image: "/painting.jpg",
    link: "/services"
  },
  {
    title: "Stone",
    image: "/stone.jpg",
    link: "/services"
  }
];

const ServicesGrid = () => {
  return (
    <div id="services" className="max-w-6xl mx-auto px-4 pt-20 pb-5">
      <h2 className="text-4xl font-bold text-center mb-15">Services Provided by Swift</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <Link
            href={service.link}
            key={index}
            className="group relative block w-[300px] h-[300px] overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src={service.image}
              alt={service.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-white text-2xl font-semibold text-center">
                {service.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
