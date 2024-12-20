import Image from "next/image";
import Hero from "@/components/hero"
import Experiences from "@/components/experiences";
import Education from "@/components/education";
import Certifications from "@/components/certifications";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
     <Hero />
     <Experiences />
     <Education />
     <Certifications />
    </div> 
  );
}
