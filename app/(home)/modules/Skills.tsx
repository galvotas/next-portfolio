import React from "react";
import { Section } from "../../../components/Section";
import { Container } from "../../../components/Container";
import Image from "next/image";

export const Skills = () => {
  return (
    <Section id="skills">
      <Container className="lg:max-w-6xl">
        <h2 className="mb-8 md:mb-12 text-center text-green-500">Skills</h2>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center gap-2">
              <Image
                src={skill.imageSrc}
                alt={skill.name}
                width={84}
                height={84}
              />
              <p className="text-bold text-xl text-ntural-700 text-center">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

const skills = [
  {
    imageSrc: "/skills/js.png",
    name: "JavaScript",
  },
  {
    imageSrc: "/skills/ts.png",
    name: "TypeScript",
  },
  {
    imageSrc: "/skills/react.png",
    name: "React",
  },
  {
    imageSrc: "/skills/next.png",
    name: "NextJS",
  },
  {
    imageSrc: "/skills/copilot.png",
    name: "Github Copilot",
  },
  {
    imageSrc: "/skills/chatgpt.png",
    name: "ChatGPT",
  },
];
