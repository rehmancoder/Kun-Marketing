import React from "react";
import Navbar from "@/components/Navbar";
import "../app/globals.css";
import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import Apartments from "@/components/Apartments";

const Page = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Featured />
      <Apartments />
    </div>
  );
};

export default Page;
