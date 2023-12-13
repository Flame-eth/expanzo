"use client";
import { useEffect, useState } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Image from "next/image";
import { motion } from "framer-motion";

config.autoAddCss = false;

export default function Home() {
  const [activeOption, setActiveOption] = useState<
    "All" | "Companies" | "Phones"
  >("All");
  const [loading, setLoading] = useState<boolean>(true);

  const options = ["All", "Companies", "Phones"];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black/5">
        <motion.div
          animate={{ scale: [null, 1, 1.2, 1] }}
          transition={{ duration: 0.7, repeat: Infinity }}
          exit={{ opacity: 0 }}
        >
          <Image src="./logo.svg" alt="logo" width={80} height={30} />
        </motion.div>
      </div>
    );
  }

  return (
    <main className=" flex flex-col  items-center justify-center gap-14 my-32 ">
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
