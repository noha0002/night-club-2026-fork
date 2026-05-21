"use client";

function Button({ children, onClick }) {
  return (
    <div className="m-12 flex justify-center">
      <button onClick={onClick} className="border-t-2 border-b-2 border-white uppercase text-lg tracking-wide w-[180px] h-[61px] text-white bg-transparent">
        {children}
        <h1>Read more</h1>
      </button>
    </div>
  );
}

export default Button;
