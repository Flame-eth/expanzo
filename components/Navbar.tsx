import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars, faPen } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function Navbar() {
  return (
    <div className="w-full py-3 px-7 flex justify-between bg-lightGreen items-center ">
      <div className="flex gap-7 items-center">
        <FontAwesomeIcon icon={faBars} className="text-[25px] text-[#87bfb2]" />
        <Link href="/">
          <h1 className="uppercase font-base font-bold text-white ">
            Dashboard
          </h1>
        </Link>
        <Link href="/contact">
          <h1 className="uppercase font-base font-bold text-white ">Contact</h1>
        </Link>
      </div>
      <div className="flex gap-7 items-center">
        <div className="flex gap-3  items-center ">
          <FontAwesomeIcon
            icon={faUser}
            className="text-[15px] text-[#87bfb2] border rounded-full p-2 bg-[#00c29d]"
          />
          <h1 className="uppercase font-base font-medium text-[#87bfb2] ">
            Login
          </h1>
        </div>
        <div className="flex gap-3  items-center ">
          <FontAwesomeIcon
            icon={faPen}
            className="text-[15px] text-[#87bfb2] border rounded-full p-2 bg-[#00c29d]"
          />
          <h1 className="uppercase font-base font-medium text-[#87bfb2] ">
            Registration
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
