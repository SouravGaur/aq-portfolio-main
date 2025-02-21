import { useState } from "react";

import NavbarMain from "./components/NavbarMain";
import HeroMain from "./components/heroSection/HeroMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import SubHeroSection from "./components/heroSection/SubHeroSection";
import AboutMe from "./components/aboutme/AboutMe";
import Helper from "./components/Helper";
import SkillMain from "./components/skills/SkillMain";
import SubSkills from "./components/skills/SubSkills";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import ContactMeMain from "./components/contactmeSection/ContactMeMain";
import FooterMain from "./components/footer/FooterMain";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="font-body">
      <NavbarMain></NavbarMain>
      <HeroMain></HeroMain>
      <HeroGradient></HeroGradient>
      <SubHeroSection></SubHeroSection>
      <AboutMe></AboutMe>

      <SkillMain></SkillMain>
      <SubSkills></SubSkills>
      <ExperienceMain></ExperienceMain>
      <ProjectsMain></ProjectsMain>
      <ContactMeMain></ContactMeMain>
      <FooterMain></FooterMain>
      <Helper></Helper>
    </main>
  );
}

export default App;
