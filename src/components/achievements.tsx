import { cn } from "@/lib/utils";
import { DATA } from "@/data/resume";
import GradualSpacing from "@/components/ui/gradual-spacing";
import Marquee from "@/components/ui/marquee";
import { Star, StarIcon, Stars } from "lucide-react";
import AnimatedCircularProgressBar from "@/components/ui/animated-circular-progress-bar";
import NumberTicker from "@/components/ui/number-ticker";

export default function Achievements() {
  return (
    <div className="flex flex-col items-center justify-center relative bg-background mt-20">
      <GradualSpacing
        className="font-display text-3xl font-bold -tracking-widest  text-black dark:text-white md:text-5xl md:leading-[5rem]"
        text="Achievements"
      />
      <div className="flex gap-10 justify-center mt-10">
        <div className="flex flex-col items-center gap-5">
          <NumberTicker className="text-5xl font-bold" value={8} />
          <span className="text-2xl">Large scale Projects</span>
        </div>
        <div className="flex flex-col items-center gap-5">
          <NumberTicker className="text-5xl font-bold" value={23} />
          <span className="text-2xl">Completed Projects</span>
        </div>
        <div className="flex flex-col items-center gap-5">
          <NumberTicker className="text-5xl font-bold" value={5} />
          <span className="text-2xl">Honors & Awards</span>
        </div>
        <div className="flex flex-col items-center gap-5">
          <NumberTicker className="text-5xl font-bold" value={10} />
          <span className="text-2xl">Years of Experience</span>
        </div>
      </div>
    </div>
  );
}
