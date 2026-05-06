"use client";

function Button({ children, onClick }) {
  return <button className="border-t-2 border-b-2 border-text uppercase text-lg tracking-wide w-[180px] h-[61px]">{children}</button>;
}

export default Button;
