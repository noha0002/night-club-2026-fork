"use client";

function ButtonHero({ children, onClick, ButtonText, style }) {
  return (
    <button
      onClick={onClick}
      style={style}
      className="border-2 border-text uppercase text-small tracking-wide w-[140px] h-[47px] cursor-pointer "
    >
      {children}
      {ButtonText}
    </button>
  );
}

export default ButtonHero;
