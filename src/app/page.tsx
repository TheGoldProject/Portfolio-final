import Hero from "@/components/hero"
import Testimonial from "@/components/testimonial";
import Skills from "@/components/skills";
import Achievements from "@/components/achievements";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
     <Hero />
     <Skills />
     <Achievements />
     <Projects />
     <Contact />
     <Testimonial /> 

    </div> 
  );
}
