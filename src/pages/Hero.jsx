import React from "react";
import HeroImg from "/images/more/3.png";
const Hero = () => {
  const heroStyle = {
    backgroundImage: `url(${HeroImg})`,
    backgroundPosition: "center",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <>
      <div className="lg:h-[600px]" style={heroStyle}>
        <div className="lg:text-start text-center justify-center items-center lg:pl-96 space-y-3 py-5">
          <h1 className="text-4xl font-bold">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <small className="text-gray-200 text-2xl">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of <br /> every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </small>
          <br />
          <button className="btn bg-[#E3B577] mt-3 text-2xl hover:bg-white/20 transition">
            Learn More
          </button>
        </div>
      </div>
      <div className="bg-[#ECEAE3]">
        <div className="w-11/12 mx-auto grid lg:grid-cols-4 gap-3 p-4">
        <div >
          <img src="/images/icons/1.png" alt="" />
          <h1 className="text-2xl font-bold">Awesome Aroma</h1>
          <p className="text-[#1B1A1A]">You will definitely be a fan of the design & aroma of your coffee</p>
        </div>
        <div>
          <img src="/images/icons/2.png" alt="" />
          <h1 className=" text-2xl font-bold">High Quality</h1>
          <p>We served the coffee to you maintaining the best quality</p>
        </div>
        <div>
          <img src="/images/icons/3.png" alt="" />
          <h1 className="text-2xl font-bold">Pure Grades</h1>
          <p>The coffee is made of the green coffee beans which you will love</p>
        </div>
        <div>
          <img src="/images/icons/4.png" alt="" />
          <h1 className="text-2xl font-bold">Proper Roasting</h1>
          <p>Your coffee is brewed by first roasting the green coffee beans</p>
        </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
