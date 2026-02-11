import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "./Header/page";
import AboutMe from "./AboutMe/page";
import EducationPage from "./Education/page";
import Skills from "./Skills/page";
import Projects from "./Projects/page";
import Game from "./Game/page";
import Contact from "./Contact/page";
import SectionBlur from "../components/SectionBlur";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Sarkit | Portfolio",
  description: "Modern Developer Portfolio",
};

// layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.className} scroll-smooth`}>
      <body className="bg-black text-white antialiased">
        <Header />
        
        <main className="flex flex-col bg-black">
          {/* Section IDs added here */}
          <div id="home">
            <SectionBlur isHero={true}>
              {children}
            </SectionBlur>
          </div>

          <div id="aboutme">
            <SectionBlur>
              <AboutMe />
            </SectionBlur>
          </div>

          <div id="education">
            <SectionBlur>
              <EducationPage />
            </SectionBlur>
          </div>

          <div id="skills">
            <SectionBlur>
              <Skills />
            </SectionBlur>
          </div>

          <div id="projects">
            <SectionBlur>
              <Projects />
            </SectionBlur>
          </div>

          <div id="game">
            <SectionBlur>
              <Game/>
            </SectionBlur>
          </div>

          <div id="contact">
            <SectionBlur isLast={true}>
              <Contact/>
            </SectionBlur>
          </div>
        </main>
      </body>
    </html>
  );
}