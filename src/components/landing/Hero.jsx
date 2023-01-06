import React from "react";
import { useNavigate } from "react-router-dom";
// import hero data
import { heroData } from "./data";

const Hero = () => {
  const { title, subtitle, btnText, image } = heroData;
  const navigate = useNavigate();
  return (
    <section className="lg:h-[700px] py-12">
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col xl:flex-row items-center h-full md:py-24">
          <div className="text-center xl:text-left xl:absolute">
            <h1
              className="h1 xl:max-w-[700px] mb-6 xl:mb-12"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              {title}
            </h1>
            <p
              className="lead xl:max-w-[380px] mb-6 lg:mb-12"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              {subtitle}
            </p>
            <button
              className="btn btn-primary mb-8 xl:mb-0"
              data-aos="fade-down"
              data-aos-delay="600"
              onClick={() => {
                navigate("/products");
              }}
            >
              {btnText}
            </button>
          </div>
          <div
            className="xl:absolute xl:-right-1 xl:bottom-25"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <img src={image} alt="" className="w-[500px] h-[500px]" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
