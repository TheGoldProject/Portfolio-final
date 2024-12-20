import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import SparklesText from "@/components/ui/sparkles-text";
import BoxReveal from "@/components/ui/box-reveal";
import WordRotate from "@/components/ui/word-rotate";
import ShinyButton from "@/components/ui/shiny-button";
import { DATA } from "@/data/resume";
import FlickeringGrid from "@/components/ui/flickering-grid";
import Image from "next/image";
import MyImg from "/public/me.jpg";

export default function Hero() {
  return (
    <div className="relative flex w-full h-[800px] items-center justify-center overflow-hidden rounded-lg bg-background p-20">
      <div className="flex items-center justify-center gap-20 z-10">
        <div className="flex flex-col">
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <SparklesText text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`} />
          </BoxReveal>
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <div className="flex items-center gap-3 text-4xl font-bold text-black dark:text-neutral-200 border-t border-neutral-200 mb-3 ">
              <p>Senior</p>
              <WordRotate
                duration={4000}
                words={[
                  "Web3 Engineer",
                  "Blockchain Engineer",
                  "Full-Stack Developer",
                ]}
              />
            </div>
          </BoxReveal>
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <p className="max-w-[500px] md:text-xl">{DATA.description}</p>
          </BoxReveal>
          <div className="flex gap-5 mt-5">
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <ShinyButton>About Me</ShinyButton>
            </BoxReveal>
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <ShinyButton>Resume</ShinyButton>
            </BoxReveal>
          </div>
        </div>
        <Image src={MyImg} width={300} height={300} className="rounded-full" alt="me" />
      </div>
      <FlickeringGrid
        className="z-0 absolute inset-0 size-full [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
      />
    </div>
  );
}
