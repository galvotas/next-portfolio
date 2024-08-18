import React from "react";

export const Section = ({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => {
  return (
    <section id={id} className={`py-8 md:py-16 ${className}`}>
      {children}
    </section>
  );
};
