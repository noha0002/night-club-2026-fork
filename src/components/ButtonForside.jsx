"use client";
function ButtonForside({ children, onClick, ButtonText }) {
  return (
    <button
      onClick={onClick}
      className="border-2 border-text uppercase text-small tracking-wide w-[50px] h-[47px]"
    >
      {children}
      {ButtonText}
    </button>
  );
}
export default ButtonForside;
