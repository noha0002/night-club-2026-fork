"use client";
import Image from "next/image";

const Event = ({ Title, Img }) => {
  return (
    <div className="items-center ">
      <div className="relative h-[200px] w-full lg:h-100 lg:w-150">
        <Image src={Img} alt="" fill className="object-cover" />
      </div>
    </div>
  );
};

export default Event;
