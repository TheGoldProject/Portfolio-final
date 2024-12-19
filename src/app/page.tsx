import Image from "next/image";
import MarqueeDemo from "@/components/demo";
import Hero from "@/components/hero"
import Testimonial from "@/components/testimonial";
import Skills from "@/components/skills";
import Achievements from "@/components/achievements";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
     <Hero />
     <Testimonial /> 
     <Skills />
     <Achievements />
     <Projects />
    </div>
  );
}
