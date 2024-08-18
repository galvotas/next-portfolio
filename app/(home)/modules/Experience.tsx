import React from "react";
import { Section } from "../../../components/Section";
import { Container } from "../../../components/Container";
import Image from "next/image";

export const Experience = () => {
  return (
    <Section id="experience" className="bg-neutral-950 ">
      <Container className="lg:max-w-6xl">
        <div className="mb-8 text-center text-white">
          <h2 className="text-green-500 mb-4">Experiences</h2>
          <p>Here is a quick summary of my most recent experiences</p>
        </div>

        {experiences.map((exp) => (
          <div
            key={exp.title}
            className="grid grid-cols-1 md:grid-cols-[30%_50%_20%] items-center bg-white rounded-lg shadow md:gap-12 gap-6 border-8 border-green-500 md:mb-8 mb-4 p-4"
          >
            <div className="flex items-center justify-start md:justify-center">
              <Image
                src={exp.image}
                alt="experience"
                sizes="100vw"
                width={0}
                height={0}
                className="w-full rounded max-h-32"
              />
            </div>

            <div>
              <h4 className="mb-4">{exp.title}</h4>
              <ol className="md:list-disc space-y-1">
                {exp.bulletList.map((bullet) => (
                  <li key={bullet}>
                    <p className="text-lg">{bullet}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <p className="text-lg text-neutral-500">{exp.date}</p>
            </div>
          </div>
        ))}
      </Container>
    </Section>
  );
};

const experiences = [
  {
    image: "/yt.png",
    title: "Youtube Creator",
    bulletList: [
      "Educating people about programming through creating production level projects.",
      "Creating shorts about programming news, tips and tricks.",
      "Making courses about modern tech.",
    ],
    date: "2024 - present",
  },

  {
    image: "/kilo.jpeg",
    title: "Frontend Engineer",
    bulletList: [
      "Building new products and maintaining them.",
      "Creating internal tools.",
      "Crafting custom solutions.",
      "Taking care of A/B testing and analytics implementation.",
    ],
    date: "2021 - 2024",
  },
];
