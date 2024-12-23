"use client";
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
// import Link from "next/link";
import { Mail, SquareArrowOutUpRight } from "lucide-react";
import { Link, useTransitionRouter } from "next-view-transitions";
import { slideInOut } from "@/lib/transition-animations";
import TextReveal from "@/components/ui/text-reveal";
import Lottie from "lottie-react";
import animationData from "../../public/lottie/3.json";

export default function Hero() {
  const router = useTransitionRouter();
  return (
    <div className="flex flex-col">
      <div className="relative flex w-full min-h-screen items-center justify-center overflow-hidden rounded-lg bg-background p-20">
        <div className="flex items-center justify-center gap-36 z-10">
          <div className="flex flex-col">
            <BlurFade delay={0.25} inView>
              <SparklesText text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`} />
            </BlurFade>
            <BlurFade delay={0.5} inView>
              <div className="flex items-center gap-3 text-4xl font-bold text-black dark:text-neutral-200 border-t-4 border-neutral-800 dark:border-neutral-200 mb-3 ">
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
              <p className="max-w-[500px] md:text-2xl text-neutral-800 dark:text-neutral-400">
                {DATA.description}
              </p>
            </BlurFade>
            <div className="flex gap-5 mt-10">
              <BlurFade delay={1} inView>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    router.push(`#contact`, {
                      onTransitionReady: slideInOut,
                    });
                  }}
                >
                  <RainbowButton>
                    Let's Talk <Mail className="ml-2 w-5" />
                  </RainbowButton>
                </a>
              </BlurFade>
              <BlurFade delay={1} inView>
                <Link href={DATA.links.resume} target="_blank">
                  <RainbowButton>
                    Resume
                    <SquareArrowOutUpRight className="ml-2 w-5" />
                  </RainbowButton>
                </Link>
              </BlurFade>
            </div>
          </div>
          <BlurFade delay={0.25} inView>
            {/* <Image
              src={DATA.avatarUrl}
              width={300}
              height={300}
              className="rounded-full"
              alt="me"
            /> */}
            <Lottie
              animationData={animationData} // Use animationData prop
              loop={true}
              style={{ height: "500px", width: "500px" }}
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
      {/* <BlurFade delay={2} inView>
        <VelocityScroll
          text="I am always ready to make your project success."
          default_velocity={3}
          className="font-display text-center text-6xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
        />
      </BlurFade> */}
      <div className="z-10 flex min-h-64 items-center justify-center border-y border-neutral-50 dark:border-neutral-800/80 bg-white dark:bg-black">
        <TextReveal text="Magic UI will change the way you design.Magic UI will change the way you design.Magic UI will change the way you design.Magic UI will change the way you design.Magic UI will change the way you design.Magic UI will change the way you design.z" />
      </div>
    </div>
  );
}
