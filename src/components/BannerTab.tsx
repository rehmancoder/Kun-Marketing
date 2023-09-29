import React from "react";

type Props = {
  size?: string;
  name?: string;
  type?: string;
  price?: number | string;
};

const BannerTab: React.FC<Props> = ({ size, name, type, price }) => {
  return (
    <div className="absolute bg-white h-[140px] rounded-r-xl w-96 bottom-[20px] sm:left-[20px] flex flex-col">
      <div className="flex justify-start">
        <div className="bg-primary w-36 rounded-r-xl shadow-md h-10 -mt-6 flex justify-center items-center">
          <p className="text-white font-Poppins text-xl">{size}</p>
        </div>
      </div>
      <div className="mt-4 px-4">
        <div className="flex flex-col">
          <h1 className="text-2xl font-Poppins">{name}</h1>
          <div className="bg-primary w-[200px] mt-[2px] rounded-full h-[2px]"></div>
        </div>
        <div className="mt-4">
          <p className="text-sm font-Poppins text-primary">
            {type} <span className="text-primary"> *</span>{" "}
          </p>
          <p className="text-xl font-semibold ">
            {price} <span className="font-bold">PKR</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerTab;
