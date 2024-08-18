import React from "react";
import { Section } from "../../../components/Section";
import { Container } from "../../../components/Container";
import Image from "next/image";

export const Work = () => {
  return (
    <Section id="work">
      <Container>
        <div className="text-center mb-8">
          <h2 className="text-green-500 mb-4">Work</h2>
          <p>My recent work I am most proud of</p>
        </div>

        <div className="space-y-4 lg:space-y-6">
          {work.map((workItem, i) => {
            const isSecondItem = i === 1;

            return (
              <div
                key={workItem.title}
                className="grid grid-cols-1 md:grid-cols-2 shadow-lg rounded overflow-hidden"
              >
                <div
                  className={`relative bg-neutral-100 ${
                    isSecondItem ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={workItem.image}
                    alt="work image"
                    sizes="100vw"
                    width={0}
                    height={0}
                    className="h-auto w-full"
                  />
                </div>

                <div className="p-4 md:p-12">
                  <h4 className="mb-4">{workItem.title}</h4>
                  <p className="text-neutral-700 max-w-lg mb-4">
                    {workItem.description}
                  </p>

                  <div className="flex flex-wrap gap-4 text-white max-w-lg">
                    {workItem.techUsed.map((tech) => (
                      <div
                        className="px-2 py-1 rounded bg-green-500"
                        key={tech}
                      >
                        <p className="text-sm">{tech}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

const work = [
  {
    image: "/stachy.png",
    title: "Stachy Codes",
    description: (
      <>
        Web Development Agency that crafts performant and unique websites.
        <br />
        <br />
        Using modern technologies and best practices to deliver the best
        possible product.
      </>
    ),
    techUsed: [
      "TypeScript",
      "React",
      "NextJS",
      "i18n",
      "TailwindCSS",
      "Resend",
      "Analytics",
    ],
  },

  {
    image: "/colonbroom.png",
    title: "Colonbroom",
    description: (
      <>
        An international gut health product sales funnel that is built to
        convert.
        <br />
        <br />
        From vanilla JavaScript to modern TypeScript and React, and to GatsbyJS,
        and finally to NextJS.
      </>
    ),
    techUsed: [
      "TypeScript",
      "React",
      "NextJS",
      "i18n",
      "styled-components",
      "Internal API",
      "Jest",
      "Analytics",
      "A/B Testing",
    ],
  },
];
