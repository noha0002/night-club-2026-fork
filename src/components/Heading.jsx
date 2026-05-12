import Image from "next/image";

const Heading = ({ children }) => {
  return (
    <div className="relative flex items-center justify-center h-20 md:h-[272px] md:max-w-[1920px]">
      <Image src="/footerbg.jpg" alt="Footer Background" fill className="absolute w-full h-full object-cover -z-10" />

      <div>
        <h1 className="uppercase text-3xl font-medium tracking-widest text-center md:text-[38px]">{children}</h1>

        <span className="mx-auto w-[100px] h-0.5 block [background:var(--linear-gradient)] md:w-[240px]"></span>
      </div>
    </div>
  );
};

export default Heading;
