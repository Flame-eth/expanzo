"use client";
import { useState } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Image from "next/image";

config.autoAddCss = false;

export default function Home() {
  const [activeOption, setActiveOption] = useState<
    "All" | "Companies" | "Phones"
  >("All");

  const options = ["All", "Companies", "Phones"];
  return (
    <main className=" flex flex-col  items-center justify-center gap-14 my-40 ">
      <Image src="./logo.svg" alt="logo" width={300} height={200} />

      <div className="flex gap-5 items-center">
        {options.map((option, index) => (
          <h1
            key={index}
            className={`text-xs md:text-base font-sans font-extrabold px-3 md:px-7 py-1 cursor-pointer ${
              option === activeOption
                ? "text-[#00c29d] border-b-2 border-[#00c29d]"
                : " text-black hover:text-[#87bfb2]"
            }`}
            onClick={() => setActiveOption(option as any)}
          >
            {option}
          </h1>
        ))}
      </div>
    </main>
  );
}
