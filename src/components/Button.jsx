"use client";
import { hover, motion } from "framer-motion";

function Button({ children, onClick }) {
  return (
    <motion.button onClick={onClick} className="relative uppercase text-lg font-medium tracking-wide w-45 h-15.25 cursor-pointer hover:text-accent transition-colors duration-300" initial="rest" whileHover="hover" animate="rest">
      <motion.span className="absolute top-0 left-0 h-0.5 bg-text" variants={{ rest: { width: "100%" }, hover: { width: "0%" } }} transition={{ duration: 0.4 }} />

      <motion.span className="absolute top-0 left-0 h-0.5 bg-accent" variants={{ rest: { width: "0%" }, hover: { width: "100%" } }} transition={{ duration: 0.4 }} />

      <motion.span className="absolute bottom-0 right-0 h-0.5 bg-text" variants={{ rest: { width: "100%" }, hover: { width: "0%" } }} transition={{ duration: 0.4 }} />

      <motion.span className="absolute bottom-0 right-0 h-0.5 bg-accent" variants={{ rest: { width: "0%" }, hover: { width: "100%" } }} transition={{ duration: 0.4 }} />

      {children}
    </motion.button>
  );
}

export default Button;
