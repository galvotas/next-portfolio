import { Container } from "@/components/Container";
import React from "react";

export const Footer = () => {
  return (
    <footer className="py-4 bg-neutral-100">
      <Container>
        <p className="text-xs font-semibold text-neutral-800 text-center">
          &copy; {new Date().getFullYear()} Stachy Codes. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};
