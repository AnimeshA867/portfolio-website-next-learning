"use client";
import React from "react";
import Image from "next/image";
import Button from "./Button";
import { TypeAnimation } from "react-type-animation";
const HeroSection = () => {
  let btnClick = () => {
    console.log("Hey there delilah");
  };

  return (
    <div>
      <section className="min-h-screen min-w-screen flex justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 ">
          <div className="col-span-7 place-self-center">
            <h1 className="text-white text-5xl lg:text-7xl font-bold  lg:text-left  text-center">
              <span className="text-transparent text bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-500">
                Hello, I'm {""}
              </span>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Animesh Acharya",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "A Web Developer",
                  1000,
                  "A Student",
                  1000,
                ]}
                wrapper="span"
                speed={10}
                repeat={Infinity}
                className="text-white text-4xl lg:text-7xl font-bold  lg:text-left  text-center"
              />
            </h1>
            <p className="text-[#8d98a0] mt-4 text-xl lg:text-3xl text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            </p>
            <div className="py-4 grid grid-cols-1 lg:grid-cols-6 gap-4">
              <Button
                className="btn bg-gradient-to-br from-blue-400 via-purple-500 to-red-500 text-white text-lg text-center my-auto capitalize px-6 py-3 rounded-full mr-4"
                link=""
                text="Hire me"
              />
              <Button
                className="btn btn-outline uppercase px-6 py-3 rounded-full"
                link="/"
                text="Download CV"
              />
            </div>
          </div>
          <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-slate-300/20 w-[250px] h-[250px] lg:h-[400px] lg:w-[400px] relative">
              <Image
                src="/images/hero-image.png"
                alt="hero-image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                height={300}
                width={500}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
