import React from "react";

import Image from "next/image";
import { SocialMediaLink } from "../components/SocialMediaLink";
import { Section } from "../../../components/Section";
import { Container } from "../../../components/Container";

export const Hero = () => {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_24rem] items-center gap-4 md:gap-12">
          <div className="order-2 md:order-1">
            <h1 className="mb-4 text-green-500">Hi, I am Antanas 👋</h1>
            <p className="text-netural-700 mb-8">
              I am a <b>Frontend engineer</b> with <b>4+ years of experience</b>
              . I enjoy crafting solutions that are <b>meaningful</b> and at the
              same <b>challenging</b>.
              <br />
              <br />I am <b>open for work</b>, so feel free to reach out to me.
            </p>

            <div className="space-y-2 mb-8">
              <div className="flex items-center gap-4">
                <Image
                  src="/location.png"
                  alt="location"
                  width={24}
                  height={24}
                />
                <p>Vilnius, Lithuania</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-green-500"></div>
                <p>Open for work</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <SocialMediaLink src="/linkedin.png" />
              <SocialMediaLink src="/youtube.png" />
              <SocialMediaLink src="/github.png" />
            </div>
          </div>

          <div className="relative md:order-2 order-1">
            <div className="absolute h-full w-full bg-green-500 rounded-lg top-4 left-4 z-[-1] hidden lg:block"></div>
            <Image
              src="/hero.jpeg"
              alt="hero"
              sizes="100vw"
              width={0}
              height={0}
              className="h-auto w-full rounded-lg"
              priority
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};
