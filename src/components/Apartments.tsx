import React from "react";
import Image from "next/image";
import Card1 from "@/img/card-1.jpg";
import Card2 from "@/img/card-2.jpg";
import Card3 from "@/img/cat-3.jpg";
import Card4 from "@/img/card-4.jpg";
import Card5 from "@/img/card-5.jpg";

const Apartments = () => {
  return (
    <div className="mt-16 mb-16">
      <div className="text-center font-Poppins flex flex-col items-center">
        <div className="flex flex-col items-center">
          <h2 className="md:text-4xl text-2xl font-medium">
            Explore Apartment Types
          </h2>
          <span className="bg-primary w-24 h-1 mt-2"></span>
        </div>
        <p className="mt-2 font-medium text-lg">
          Explore all the different types of apartments so you can choose the
          best option for you
        </p>
      </div>
      {/* Grid */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-5 mt-16 px-6">
        <div className="xl:col-span-3 lg:col-span-2 md:col-span-3 shadow-md rounded-xl relative font-Poppins group overflow-hidden ">
          <Image
            src={Card2}
            alt=""
            className="rounded-xl group-hover:scale-110  duration-300 h-full w-full"
          />
          <div className="absolute bottom-8 left-5 text-white">
            <h1 className="text-2xl">Town Home</h1>
            <p>20 Properties</p>
          </div>
        </div>
        <div className="lg:col-span-1 md:col-span-2 shadow-md rounded-xl font-Poppins relative overflow-hidden group object-fill">
          <Image
            src={Card1}
            alt=""
            className="rounded-lg group-hover:scale-110  duration-300 w-full h-full"
          />
          <div className="absolute bottom-8 left-5 text-white">
            <h1 className="text-2xl">Houses</h1>
            <p>20 Properties</p>
          </div>
        </div>
        <div className="shadow-md rounded-xl overflow-hidden relative group font-Poppins">
          <Image
            src={Card4}
            alt=""
            className="rounded-xl group-hover:scale-110 duration-300 w-full h-full"
          />
          <div className="absolute bottom-8 left-5 text-white">
            <h1 className="text-2xl">Studio</h1>
            <p>12 Properties</p>
          </div>
        </div>
        <div className="lg:col-span-3 md:col-span-2 shadow-md rounded-xl relative group overflow-hidden">
          <Image
            src={Card5}
            alt=""
            className="rounded-xl group-hover:scale-110 duration-300 w-full h-full"
          />
          <div className="absolute bottom-8 left-5 text-white">
            <h1 className="text-2xl">Apartments</h1>
            <p>19 Properties</p>
          </div>
        </div>
        <div className="shadow-md rounded-xl relative group overflow-hidden">
          <Image
            src={Card3}
            alt=""
            className="rounded-xl group-hover:scale-110 duration-300 w-full"
          />
          <div className="absolute bottom-8 left-5 text-white">
            <h1 className="text-2xl">Offices</h1>
            <p>20 Properties</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apartments;
