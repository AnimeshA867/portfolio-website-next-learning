import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 place-self-center lg:justify-evenly grid-">
        <div className="grid lg:col-span-5 place-items-center rounded-lg ">
          <Image
            src="/images/about-image.png"
            height={400}
            width={400}
            alt="About image"
            objectFit="fit"
          />
        </div>
        <div className="grid lg:col-span-7"></div>
      </div>
    </section>
  );
};

export default About;
