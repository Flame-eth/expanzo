"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars, faPen } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

function Navbar() {
  const pathname = usePathname();

  return (
    <div className="w-full px-10 flex justify-between bg-lightGreen items-center h-20 ">
      <div className="flex gap-7 items-center">
        <FontAwesomeIcon
          icon={faBars}
          className="text-[25px] text-[#87bfb2] cursor-pointer"
        />
        <Link href="/">
          <h1 className="uppercase text-xs md:text-base font-bold text-white ">
            Dashboard
          </h1>
        </Link>
        <Link href="/contact">
          <h1 className="uppercase text-xs md:text-base font-bold text-white ">
            Contact
          </h1>
        </Link>
      </div>
      {pathname !== "/" && (
        <Image
          src="/logo-no-bg.svg"
          width={80}
          height={20}
          alt="logo"
          className="hidden sm:block"
        />
      )}
      <div className="hidden md:flex gap-7 items-center">
        <div className="flex gap-3  items-center cursor-pointer ">
          <FontAwesomeIcon
            icon={faUser}
            className="text-[15px] text-[#d3dad8] border rounded-full p-2 bg-[#00c29d]"
          />
          <h1 className="uppercase text-xs md:text-base font-medium text-[#d3dad8] ">
            Login
          </h1>
        </div>
        <div className="flex gap-3  items-center cursor-pointer ">
          <FontAwesomeIcon
            icon={faPen}
            className="text-[15px] text-[#d3dad8] border rounded-full p-2 bg-[#00c29d]"
          />
          <h1 className="uppercase text-xs md:text-base font-medium text-[#d3dad8] ">
            Registration
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
