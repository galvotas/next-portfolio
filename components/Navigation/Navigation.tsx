"use client";

import React, { useEffect } from "react";
import { Container } from "../Container";
import { Logo } from "../Logo";
import { CgClose } from "react-icons/cg";
import { CiMenuBurger } from "react-icons/ci";
import { Links } from "./Links";

export const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <Container className="py-2 md:hidden">
      <header className="flex justify-between items-center">
        <Logo />

        <button onClick={toggleMenu}>
          {isOpen ? <CgClose size="24" /> : <CiMenuBurger size="24" />}
        </button>
      </header>

      {isOpen && (
        <nav className="flex justify-center absolute w-full h-[calc(100%-48px)] left-0 bg-white z-10 pt-10">
          <Links isVertical onClick={closeMenu} />
        </nav>
      )}
    </Container>
  );
};
