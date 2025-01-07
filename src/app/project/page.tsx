import Image from "next/image";
import Hero from "@/components/hero2";
import Experiences from "@/components/experiences";
import Education from "@/components/education";
import Certifications from "@/components/certifications";
import Projects from "@/components/projects";
import ShineBorder from "@/components/ui/shine-border";

export default function Project() {
  return (
    <div className="min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      {/* <Hero /> */}
      <Projects />
      <ShineBorder
        className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Shine Border
        </span>
      </ShineBorder>
    </div>
  );
}
