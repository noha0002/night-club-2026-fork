"use client";
import Image from "next/image";

const SocialImg = [
  { id: 1, img: "/assets/icon/facebook.svg" },
  { id: 2, img: "/assets/icon/twitter.svg" },
  { id: 3, img: "/assets/icon/instagram.svg" },
];

const Socials = () => {
  return (
    <div className="flex gap-6 justify-center mt-6">
      {SocialImg.map((item) => (
        <div key={item.id} className="relative h-[50px] w-[50px]">
          <Image src={item.img} alt="" fill className="object-cover" />
        </div>
      ))}
    </div>
  );
};

export default Socials;
