import React from "react";
import { Container } from "../Container";
import { Logo } from "../Logo";
import { Links } from "./Links";

export const NavigationDesktop = () => {
  return (
    <Container className="py-4 hidden md:block">
      <div className="flex justify-between items-center">
        <Logo />

        <Links />
      </div>
    </Container>
  );
};
