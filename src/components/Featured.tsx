import React from "react";
import Slider from "react-slick";
import ListImg from "@/img/listing-1.jpg";
import ListImg2 from "@/img/listing-2.jpg";
import ListImg3 from "@/img/listing-3.jpg";
import Image from "next/image";
import { BiBed } from "react-icons/bi";
import { PiBathtubDuotone } from "react-icons/pi";
import { SlSizeFullscreen } from "react-icons/sl";

const Featured = () => {
  const featureddata = [
    {
      id: 1,
      img: <Image src={ListImg} alt="" className="rounded-b-xl w-full" />,
      name: "Studio Bay View",
      bedroom: <BiBed className="text-gray-500" />,
      bedroomqunatity: "1",
      bathroomquantity: "1",
      bathroom: <PiBathtubDuotone className="text-gray-500" />,
      sizeicon: <SlSizeFullscreen className="text-gray-500 text-sm" />,
      size: "4400 sq ft",
      price: "1560000 PKR",
    },
    {
      id: 2,
      img: <Image src={ListImg2} alt="" className="rounded-xl w-full" />,
      name: "Studio Bay Compton",
      bedroom: <BiBed className="text-gray-500" />,
      bedroomqunatity: "4",
      bathroomquantity: "3",
      bathroom: <PiBathtubDuotone className="text-gray-500" />,
      sizeicon: <SlSizeFullscreen className="text-gray-500 text-sm" />,
      size: "5200 sq ft",
      price: "35280000 PKR",
    },
    {
      id: 3,
      img: <Image src={ListImg3} alt="" className="rounded-xl w-full" />,
      name: "Awesome Family House",
      bedroom: <BiBed className="text-gray-500" />,
      bedroomqunatity: "1",
      bathroomquantity: "1",
      bathroom: <PiBathtubDuotone className="text-gray-500" />,
      sizeicon: <SlSizeFullscreen className="text-gray-500 text-sm" />,
      size: "1200 sq ft",
      price: "450000 PKR",
    },
    {
      id: 4,
      img: <Image src={ListImg2} alt="" className="rounded-xl w-full" />,
      name: "Contemporary Studio",
      bedroom: <BiBed className="text-gray-500" />,
      bedroomqunatity: "1",
      bathroomquantity: "1",
      bathroom: <PiBathtubDuotone className="text-gray-500 " />,
      sizeicon: <SlSizeFullscreen className="text-gray-500 text-sm" />,
      size: "1300 sq ft",
      price: "8940000 PKR",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="overflow-hidden px-6 pt-16 pb-10 bg-[#f0f4f7]">
      <div className="">
        <div className="text-center font-Poppins flex flex-col items-center">
          <div className="flex flex-col items-center">
            <h2 className="md:text-4xl text-2xl font-medium">
              Discover Our Featured Listings
            </h2>
            <span className="bg-primary w-24 h-1 mt-2"></span>
          </div>
          <p className="mt-2 font-medium text-lg">
            These featured listings contain exclusive real estate opportunities
            within the city
          </p>
        </div>
        <Slider {...settings} className="mt-16">
          {featureddata.map((items) => (
            <div key={items.id} className="md:p-4 p-2">
              <div className="relative font-Poppins">
                <div>{items.img}</div>
                <div className="bg-white md:p-5 p-3 absolute bottom-0 w-full flex flex-col pt-4 rounded-b-[10px] shadow-lg">
                  <h1 className="">{items.name}</h1>
                  <div>
                    <ul className="mt-1 flex justify-between md:flex-row  flex-col">
                      <div className="flex gap-3">
                        <li className="flex items-center gap-1">
                          {items.bedroom}
                          <p className="text-sm">{items.bedroomqunatity}</p>
                        </li>
                        <li className="flex items-center gap-1">
                          {items.bathroom}
                          <p className="text-sm">{items.bathroomquantity}</p>
                        </li>
                        <li className="flex items-center gap-2">
                          {items.sizeicon}
                          <p className="text-sm">{items.size}</p>
                        </li>
                      </div>
                      <h1 className="md:mt-0 mt-2">{items.price}</h1>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Featured;
