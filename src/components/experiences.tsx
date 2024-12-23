"use client";
import { cn } from "@/lib/utils";
import { DATA } from "@/data/resume";
import { useTheme } from "next-themes";
import GradualSpacing from "@/components/ui/gradual-spacing";
import Marquee from "@/components/ui/marquee";
import { Star, StarIcon, Stars } from "lucide-react";
import AnimatedCircularProgressBar from "@/components/ui/animated-circular-progress-bar";
import NumberTicker from "@/components/ui/number-ticker";
import { MagicCard } from "@/components/ui/magic-card";
import Image from "next/image";
import MyImg from "/public/avatar/me.jpg";
import ShineBorder from "@/components/ui/shine-border";

export default function Experiences() {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col items-center justify-center relative bg-background mt-20">
      <GradualSpacing
        className="font-display text-3xl font-bold -tracking-widest  text-black dark:text-white md:text-5xl md:leading-[5rem]"
        text="Work Experience"
      />
      <div className={"flex flex-col gap-10 w-1/2"}>
        {DATA.work.map((item, i) => (
          <MagicCard
            key={i}
            className="p-6 cursor-pointer flex-col justify-center shadow-2xl "
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
          >
            <div className="flex justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src={MyImg}
                  width={60}
                  height={60}
                  alt="me"
                  className="rounded-full"
                />
                <div className="flex flex-col">
                  <span className="text-[24px]">Gempad</span>
                  <span className="text-sm">Senior Fullstack Engineer</span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[16px]">2012.5.6 - 2015.4.6</span>
                <span className="text-sm">Remote</span>
              </div>
            </div>
            <div className="mt-5">{item.description}</div>
          </MagicCard>
        ))}
      </div>
    </div>
  );
}
