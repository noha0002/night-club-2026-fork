const EvenTekst = ({ Title, RedTekst, Content }) => {
  return (
    <div className="font-bold lg:text-center lg:font-normal ">
      <h2 className="text-2xl">{Title}</h2>
      <br />
      <h3 className="text-lg text-[#FF2A70]">{RedTekst}</h3>
      <br />
      <p className="text-base">{Content}</p>
    </div>
  );
};
export default EvenTekst;
