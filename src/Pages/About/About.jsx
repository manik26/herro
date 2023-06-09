import React from "react";

const About = () => {
  return (
    <div
      className="hero  w-full h-[500px]"
      style={{
        backgroundImage: `url("https://media.istockphoto.com/id/949190756/photo/various-sport-equipments-on-grass.jpg?b=1&s=612x612&w=0&k=20&c=Si6Ms85w926YDZqaifSA8O3FHFLy4uDUEAcjoqIXnfY=")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-bold">
            Welcome to, <br />{" "}
            <span className="text-yellow-300 text-5xl font-extrabold">
              Our Sports toys{" "}
            </span>{" "}
          </h1>
          <p className="mb-5">
            <small>
              The Marketplace is a place for people and businesses to discover,
              buy and sell items listed on Facebook within their local community
              The Marketplace has it all: football equipment, cricket equipment,
              racquet equipment.
            </small>
          </p>
          <button className="btn btn-active btn-secondary">
            <small>Sports toys Marketplace</small>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
