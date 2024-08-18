import React from "react";
import { Section } from "../../../components/Section";
import { Container } from "../../../components/Container";
import { SocialMediaLink } from "../components/SocialMediaLink";

export const Contact = () => {
  return (
    <Section id="contact" className="bg-neutral-950 text-white">
      <Container className="max-w-lg text-center">
        <h2 className="text-green-500 mb-4">Contact me</h2>
        <p className="mb-8">
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>

        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <SocialMediaLink src="/mail.png" hasBackground />
            <a href="mailto:stachycode@gmail.com">
              <h4>stachycode@gmail.com</h4>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <SocialMediaLink src="/telephone.png" hasBackground />
            <a href="tel:37061352332">
              <h4>+37061352332</h4>
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
};
