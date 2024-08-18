import React from "react";
import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      src="/logo.png"
      alt="logo"
      width={40}
      height={40}
      className="rounded"
    />
  );
};
