import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="bg-[#f8f8f8] w-full flex flex-col md:flex-row justify-around items-center h-[300px]">
      <Link href="/">
      <Image src="./logo.svg" alt="logo" width={200} height={200} />
      </Link>

      <div className="flex gap-5 items-center">
        <Link href="/contact">
        <h1 className="footer__link">
          Contact
        </h1>
        </Link>
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
