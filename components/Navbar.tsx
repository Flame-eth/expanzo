// import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="w-full py-5 px-7 flex justify-between bg-lightGreen items-center ">
      <div className="flex gap-7 items-center">
        <FontAwesomeIcon icon={faBars} className="text-[25px] text-white" />
        <Link href="/">
          <h1 className="">Dashboard</h1>
        </Link>
        <Link href="/contact">
          <h1 className="">Contact</h1>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
