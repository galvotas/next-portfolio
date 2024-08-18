import Link from "next/link";
import React from "react";
import { Button } from "../Button";

interface LinksProps {
  onClick?: () => void;
  isVertical?: boolean;
}

export const Links: React.FC<LinksProps> = ({ onClick, isVertical }) => {
  return (
    <ul
      className={`flex ${
        isVertical ? "flex-col space-y-4" : "flex-row space-x-4"
      } items-center text-center`}
    >
      {links.map((link) => (
        <li key={link.name}>
          <Link href={link.href} onClick={onClick}>
            {link.name}
          </Link>
        </li>
      ))}

      <li>
        <Button onClick={onClick} />
      </li>
    </ul>
  );
};

const links = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Work",
    href: "#work",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];
