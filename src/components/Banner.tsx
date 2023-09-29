import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bgSlideone from "@/img/bg-img.jpg";
import bgSlidetwo from "@/img/bg-img-3.jpg";
import bgSlidethree from "@/img/property-img-1.jpg";
import BannerTab from "./BannerTab";

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    fade: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        <div className="relative">
          <Image
            src={bgSlidetwo}
            alt=""
            className="h-[55vh] w-full object-cover"
          />
          {/* <div className="flex justify-center items-center w-full">
            <div className="absolute top-0">
              <p>We have more than 18 years of experience</p>
            </div>
          </div> */}
          <BannerTab
            size="10 Marla"
            name="Home in Coral Gables"
            type="For Sale"
            price={2165000}
          />
        </div>
        <div>
          <Image
            src={bgSlidethree}
            alt=""
            className="h-[55vh] w-full object-cover"
          />
          <BannerTab
            size="01 Kanal"
            name="Villa on Grand Avenue"
            type="For Sale"
            price={3528000}
          />
        </div>
        <div>
          <Image
            src={bgSlideone}
            alt=""
            className="h-[55vh] w-full object-cover"
          />
          <BannerTab
            size="07 Marla"
            name="Awesome Family House"
            type="For Sale"
            price={1560000}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
