import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import SparklesText from "@/components/ui/sparkles-text";
import { RainbowButton } from "@/components/ui/rainbow-button";
import BoxReveal from "@/components/ui/box-reveal";
import WordRotate from "@/components/ui/word-rotate";
import ShinyButton from "@/components/ui/shiny-button";
import { DATA } from "@/data/resume";
import FlickeringGrid from "@/components/ui/flickering-grid";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import BlurFade from "@/components/ui/blur-fade";
import Image from "next/image";
import MyImg from "/public/me.jpg";

export default function Hero() {
  return (
    <div className="flex flex-col">
      <div className="relative flex w-full h-[800px] items-center justify-center overflow-hidden rounded-lg bg-background p-20">
        <div className="flex items-center justify-center gap-20 z-10">
          <div className="flex flex-col">
            <BlurFade delay={0.25} inView>
              <SparklesText text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`} />
            </BlurFade>
            <BlurFade delay={0.5} inView>
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
            </BlurFade>
            <BlurFade delay={0.75} inView>
              <p className="max-w-[500px] md:text-xl">{DATA.description}</p>
            </BlurFade>
            <div className="flex gap-5 mt-5">
              {/* <BlurFade delay={0.25} inView>
              <RainbowButton>Resume</RainbowButton>
              </BlurFade> */}
              <BlurFade delay={1} inView>
                <RainbowButton>Resume</RainbowButton>
              </BlurFade>
            </div>
          </div>
          <BlurFade delay={0.25} inView>
            <Image
              src={MyImg}
              width={300}
              height={300}
              className="rounded-full"
              alt="me"
            />
          </BlurFade>
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
      <VelocityScroll
        text="I am always ready to make your project success."
        default_velocity={3}
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
      />
    </div>
  );
}
