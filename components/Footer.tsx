import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="bg-[#f8f8f8] w-full flex flex-col md:flex-row justify-around items-center h-[300px]">
      <Image src="./logo.svg" alt="logo" width={200} height={200} />

      <div className="flex gap-5 items-center">
        <h1 className="footer__link">
          Contact
        </h1>
        <h1 className="footer__link">
          Phones
        </h1>
        <h1 className="footer__link">
          Top Search
        </h1>
      </div>
    </div>
  );
}

export default Footer;
