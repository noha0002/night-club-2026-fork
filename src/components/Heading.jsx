import Image from "next/image";

const Heading = ({ children }) => {
  return (
    <div className="relative bg-background-tertiary flex items-center justify-center h-20 md:h-68">
      <Image src="/assets/bg/footerbg.jpg" alt="Footer Background" fill className="absolute w-full h-full object-cover -z-10" />

      <div>
        <h1 className="uppercase text-3xl font-medium tracking-widest text-center md:text-[38px]">{children}</h1>

        <span className="mx-auto w-25 h-0.5 block mt-2 [background:var(--linear-gradient)] md:w-60 md:mt-4"></span>
      </div>
    </div>
  );
};

export default Heading;
