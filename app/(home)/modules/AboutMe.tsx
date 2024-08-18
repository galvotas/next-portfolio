import React from "react";
import { Section } from "../../../components/Section";
import { Container } from "../../../components/Container";
import Image from "next/image";
import { SocialMediaLink } from "../components/SocialMediaLink";

export const AboutMe = () => {
  return (
    <Section id="about" className="bg-neutral-950 text-white">
      <Container className="lg:max-w-6xl">
        <h2 className="text-center text-green-500 mb-8 md:mb-12">About me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24">
          <div className="relative">
            <div className="absolute w-full h-full top-4 left-4 rounded bg-green-500 z-0 hidden lg:block"></div>
            <Image
              src="/about.jpeg"
              alt="about"
              sizes="100vw"
              width={0}
              height={0}
              className="h-auto w-full rounded-lg relative z-10 border-8 border-white"
            />
          </div>

          <div>
            <h4 className="mb-4">Get some insights into my life</h4>
            <p>
              <b>Programming is a big part of my life for past 4+ years.</b> I
              strongly lean into Frontend engineering, but backend is not new to
              me.
              <br />
              <br />
              While living abroad I learned norwegian language on my own.
              <br />
              <br />
              This helped me realize that I can catch up with new things pretty
              fast.
              <br />
              <br />
              As a result, the next thing I learned was
              <b>Frontend engineering and React</b>.
              <br />
              <br />
              In the picture you can see 201cm of me and
              <b>love of my life</b>.
              <br />
              <br />
              <b>I enjoy crafting my YouTube community</b>, running, playing
              paddel, snowboarding or waking, and just enjoying time together
              with my love.
            </p>

            <div className="flex items-cener justify-start gap-4 mt-8">
              <SocialMediaLink src="/linkedin.png" hasBackground />
              <SocialMediaLink src="/youtube.png" hasBackground />
              <SocialMediaLink src="/github.png" hasBackground />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
