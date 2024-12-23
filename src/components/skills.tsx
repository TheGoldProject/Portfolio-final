import { cn } from "@/lib/utils";
// import { DATA } from "@/data/resume";
import GradualSpacing from "@/components/ui/gradual-spacing";
import Marquee from "@/components/ui/marquee";
import { Star, StarIcon, Stars } from "lucide-react";
import IconCloud from "@/components/ui/icon-cloud";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import Meteors from "@/components/ui/meteors";
import BlurFade from "@/components/ui/blur-fade";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";

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

const DATA: { skills: Skills } = {
  skills: {
    Languages: ["JavaScript", "TypeScript", "Solidity", "Rust", "Python"],
    Blockchain: [
      "OpenZeppelin",
      "Ethereum",
      "Solana",
      "Web3",
      "Ethers",
      "Bitcoin",
      "BNB",
      "Polygon",
    ],
    Frontend: ["React", "Next", "Vue", "HTML5", "CSS3", "TailwindCSS", "Sass"],
    Backend: ["Node", "Express", "GraphQL", "Auth0"],
    Database: ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
    Tools: ["Git", "Docker", "AWS", "Github"],
  },
};
export default function Skills() {
  return (
    <div id="skill" className="relative bg-background pt-40 overflow-hidden">
      <div className="flex flex-col items-center">
        <BlurFade delay={0.25} inView>
          <div className="flex flex-col items-center pt-2">
            <AnimatedGradientText>
              <span
                className={cn(
                  `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-5xl`
                )}
              >
                SKILLS
              </span>
            </AnimatedGradientText>

            <span className="font-display text-3xl font-bold text-black dark:text-white md:text-5xl md:leading-[5rem]">
              Expertised in cutting-edge technologies
            </span>
          </div>
        </BlurFade>
        <div className="flex justify-start gap-10">
          <div className="flex flex-col items-start gap-5 w-full">
            <div className="flex flex-wrap gap-10 max-w-[800px]">
              {Object.keys(DATA.skills).map((category: string, i: number) => {
                return (
                  <div
                    key={i}
                    className="flex flex-col items-start gap-3 uppercase"
                  >
                    <span className="text-xl pb-1 border-b border-neutral-300">
                      {category}
                    </span>
                    <div className="flex flex-wrap gap-10">
                      {DATA.skills[category].map((item, j) => (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            {/* <span
                              key={j}
                              className="border border-neutral-700 rounded-2xl bg-neutral-900/80 text-sm py-1 px-2"
                            >
                              {item}
                            </span> */}

                            <Image
                              src={`/skills/${item}.svg`}
                              width={50}
                              height={50}
                              alt={item}
                              className="hover:cursor-pointer"
                            />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{item}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* <div className="max-w-md">
            <IconCloud iconSlugs={slugs} />
          </div> */}
        </div>
      </div>

      <Meteors number={30} />
    </div>
  );
}
