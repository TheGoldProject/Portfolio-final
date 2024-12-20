import { cn } from "@/lib/utils";
import { DATA } from "@/data/resume";
import GradualSpacing from "@/components/ui/gradual-spacing";
import Marquee from "@/components/ui/marquee";
import { Star, StarIcon, Stars } from "lucide-react";
import IconCloud from "@/components/ui/icon-cloud";
import { createHistogram } from "perf_hooks";

const slugs = [
  "typescript",
  "javascript",
  "solidity",
  "rust",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "amazonaws",
  "postgresql",
  "firebase",
  "vercel",
  "cypress",
  "docker",
  "git",
  "github",
  "solana",
  "ethereum",
  "bitcoin",
  "visualstudiocode",
];

type Skills = {
  [category: string]: string[];
};

export default function Skills() {
  return (
    <div className="relative bg-background mt-20">
      <div className="flex flex-col items-center gap-10">
        <GradualSpacing
          className="font-display text-3xl font-bold -tracking-widest  text-black dark:text-white md:text-5xl md:leading-[5rem]"
          text="Expertised in cutting-edge technologies"
        />
        <div className="flex items-center justify-center gap-10">
          <div className="flex flex-col items-start gap-5 w-[600px]">
            <div className="flex flex-col gap-2">
              {Object.keys(DATA.skills).map((category: string, i: number) => {
                return (
                  <div key={i} className="flex flex-col gap-1">
                    <span className="text-lg">{category}:</span>
                    <div className="flex flex-wrap gap-2">
                      {DATA.skills[category].map((item: string, j: number) => (
                        <span
                          key={j}
                          className="border border-neutral-700 rounded-2xl bg-neutral-900/80 text-sm py-1 px-2"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="max-w-md">
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </div>
    </div>
  );
}
