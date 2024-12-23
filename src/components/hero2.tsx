import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import SparklesText from "@/components/ui/sparkles-text";
import { RainbowButton } from "@/components/ui/rainbow-button";
import BoxReveal from "@/components/ui/box-reveal";
import WordRotate from "@/components/ui/word-rotate";
import ShinyButton from "@/components/ui/shiny-button";
import { DATA } from "@/data/resume";
import BlurFade from "@/components/ui/blur-fade";

export default function Hero() {
  return (
    <div className="flex flex-col">
      <div className="relative flex w-full h-[800px] items-center justify-center overflow-hidden rounded-lg bg-background p-20">
        <div id="name" className="flex flex-col">
            <SparklesText text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`} />
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
            <p className="max-w-[500px] md:text-xl">{DATA.description}</p>
          <div className="flex gap-5 mt-5">
            {/* <BlurFade delay={0.25} inView>
              <RainbowButton>Resume</RainbowButton>
              </BlurFade> */}
              <RainbowButton>Resume</RainbowButton>
          </div>
        </div>
      </div>
    </div>
  );
}
