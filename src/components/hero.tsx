import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import SparklesText from "@/components/ui/sparkles-text";
import BoxReveal from "@/components/ui/box-reveal";
import WordRotate from "@/components/ui/word-rotate";
import ShinyButton from "@/components/ui/shiny-button";
import { DATA } from "@/data/resume";

export default function Hero() {
  return (
    <div className="relative flex w-full h-[500px] items-start justify-center overflow-hidden rounded-lg bg-background p-20">
      <div className="flex items-center justify-center gap-10">
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
        <p>My Photo</p>
      </div>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
    </div>
  );
}
