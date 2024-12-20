import { cn } from "@/lib/utils";
import { DATA } from "@/data/resume";
import GradualSpacing from "@/components/ui/gradual-spacing";
import Marquee from "@/components/ui/marquee";
import { Star, StarIcon, Stars } from "lucide-react";
import AnimatedCircularProgressBar from "@/components/ui/animated-circular-progress-bar";
import NumberTicker from "@/components/ui/number-ticker";
import MyImg from "/public/me.jpg";
import Image from "next/image";

export default function Education() {
  return (
    <div className="flex flex-col items-center justify-center relative bg-background mt-20">
      <GradualSpacing
        className="font-display text-3xl font-bold -tracking-widest  text-black dark:text-white md:text-5xl md:leading-[5rem]"
        text="Education"
      />
      <div className={"flex flex-col gap-10 w-1/2"}>
        {DATA.education.map((item, i) => (
          <div key={i}>
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
                  <span className="text-[24px]">{item.school}</span>
                  <span className="text-sm">{item.degree}</span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[16px]">2012.5.6 - 2015.4.6</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
