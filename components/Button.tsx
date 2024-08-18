import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({ ...rest }) => {
  return (
    <button
      className="bg-neutral-950 text-white rounded py-2 px-4 text-md"
      {...rest}
    >
      <a href="" download="Antanas_CV" className="text-white no-underline">
        Download CV
      </a>
    </button>
  );
};
