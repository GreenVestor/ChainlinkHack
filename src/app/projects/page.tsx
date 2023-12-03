import React from "react";
import Image from "next/image";
import Link from "next/link";
import solar from "../../../public/homePosts/solar.jpg";
import greentech from "../../../public/homePosts/greentech.jpg";

const Projects = () => {
  return (
    <>
      <div className="w-full h-fit bg-green-800 pb-9">
        <div className="grid place-items-center pb-10 text-3xl text-emerald-200 uppercase">
          <p>Projects</p>
        </div>
        <div className="container mx-auto px-4 pt-12 pb-4 bg-white rounded-2xl">
          <div className="pb-8 flex flex-row rounded-lg">
            <Image className="max-w-md max-h-md pl-8" src={solar} alt="" />
            <div className="bg-green-800 px-8 mr-8 pt-8 text-white">
              <p className="text-2xl pb-4">Solar Harvest Energy Park</p>
              <p className="pb-4">
                At Solar Harvest Energy Park, we're dedicated to revolutionizing
                energy generation and combine climate change through renewable
                technologies
              </p>
              <p className="pb-4">Total Investment Needed: 250,000 Naira</p>
              <Link
                className="text-black bg-emerald-300 p-1.5 rounded-md"
                href="#"
              >
                View Project
              </Link>
            </div>
          </div>
          <div className="pb-8 flex flex-row rounded-lg">
            <Image className="max-w-md max-h-md pl-8" src={greentech} alt="" />
            <div className="bg-green-800 px-8 mr-8 pt-8 text-white">
              <p className="text-2xl pb-4">Green Tech Urban Farm Initiative</p>
              <p className="pb-4">
                Our Project is dedicated to creating technologically advanced
                vertical farms that produce fresh, nutritious products while
                minimizing environmental effects
              </p>
              <p className="pb-4">Total Investment Needed: 1,250,000 Naira</p>
              <Link
                className="text-black bg-emerald-300 p-1.5 rounded-md"
                href="#"
              >
                View Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
