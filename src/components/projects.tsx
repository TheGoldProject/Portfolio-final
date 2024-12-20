import { cn } from "@/lib/utils";
import { DATA } from "@/data/resume";
import { StarIcon, HeartIcon } from "@radix-ui/react-icons";
import GradualSpacing from "@/components/ui/gradual-spacing";
import Marquee from "@/components/ui/marquee";
import { Star, Stars } from "lucide-react";
import AnimatedCircularProgressBar from "@/components/ui/animated-circular-progress-bar";
import NumberTicker from "@/components/ui/number-ticker";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Image from "next/image";
import MyImg from "/public/projects/Gempad.png";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
const features = [
  {
    Icon: StarIcon,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1 h-[400px]",
    background: (
      <Image
        src={MyImg}
        alt="me"
        className="absolute overflow-hidden !blur-[0px]"
      />
    ),
  },
  {
    Icon: HeartIcon,
    name: "Notifications",
    description: "Get notified when something happens.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: <Image src={MyImg} alt="me" className="absolute !blur-[0px]" />,
  },
  {
    Icon: HeartIcon,
    name: "Integrations",
    description: "Supports 100+ integrations and counting.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: <img className="absolute right-2 top-4 opacity-60" />,
  },
  {
    Icon: StarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center relative gap-10 bg-background mt-20">
      <GradualSpacing
        className="font-display text-3xl font-bold -tracking-widest  text-black dark:text-white md:text-5xl md:leading-[5rem]"
        text="Featured Projects"
      />
      <BentoGrid className="lg:grid-rows-2 w-1/2">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
      <InteractiveHoverButton text="Browse All Projects" className="w-72" />
    </div>
  );
}
