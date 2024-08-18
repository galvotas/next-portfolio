import { AboutMe } from "./modules/AboutMe";
import { Contact } from "./modules/Contact";
import { Experience } from "./modules/Experience";
import { Hero } from "./modules/Hero";
import { Skills } from "./modules/Skills";
import { Work } from "./modules/Work";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      <Work />
      <Contact />
    </main>
  );
}
