import React from "react";
import Image from "next/image";
import banner from "../../public/images/banner.jpg";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto py-10">
      <Image
        className="rounded-2xl"
        src={banner}
        alt="banner image"
        style={{ width: "100%", height: "100%" }}
        priority={true}
      />
    </div>
  );
};

export default Banner;
