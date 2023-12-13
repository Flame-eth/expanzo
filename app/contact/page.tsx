import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function page() {
  return (
    <main className="flex flex-col  items-center justify-center gap-14 my-40 ">
      <h1 className="font-sans text-2xl text-black font-extrabold leading-10 tracking-wide text-center">
        Contact
      </h1>
      <div className="flex gap-14  items-center md:items-start  md:justify-evenly w-full flex-col md:flex-row">
        <div className="flex flex-col gap-7 ">
          <p className="flex gap-2 items-center text-black text-base font-medium">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-[25px] text-lightGreen"
            />
            Headquarters
          </p>
          <p className="text-black text-base font-medium">
            DHO s.r.o <br /> Bořivojova 878/35 <br /> 130 00 Prague 3
          </p>
        </div>

        <div className="flex flex-col gap-7">
          <p className="flex gap-2 items-center text-black text-base font-medium">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-[25px] text-lightGreen"
            />
            Email
          </p>
          <p className="text-black text-base font-medium">info@expanzo.com</p>
        </div>
      </div>
    </main>
  );
}

export default page;
