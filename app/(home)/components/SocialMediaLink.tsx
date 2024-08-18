import Image from "next/image";
import React from "react";

export const SocialMediaLink = ({
  src,
  hasBackground = false,
}: {
  src: string;
  hasBackground?: boolean;
}) => {
  return (
    <a
      href=""
      target="_blank"
      className={hasBackground ? "bg-green-500 p-2 rounded" : ""}
    >
      <Image src={src} alt="social media icon" width={24} height={24} />
    </a>
  );
};
