import { cn } from "@/lib/utils";
import { DATA } from "@/data/resume";
import { StarIcon, HeartIcon } from "@radix-ui/react-icons";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Image from "next/image";
import MyImg from "/public/projects/gempad.png";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import BlurFade from "@/components/ui/blur-fade";
import Link from "next/link";
const features = [
  {
    Icon: StarIcon,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1 h-[400px]",
    background: <Image src={MyImg} alt="me" className="absolute overflow-hidden !blur-[0px]" />,
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
    background: <Image src={MyImg} alt="me" className="absolute !blur-[0px]" />,
  },
  {
    Icon: StarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: <Image src={MyImg} alt="me" className="absolute !blur-[0px]" />,
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center relative bg-background pt-40">
      <BlurFade
        className="font-display text-3xl font-bold  text-black dark:text-white md:text-5xl md:leading-[5rem]"
        delay={0.25}
        inView
      >
        Featured Projects
      </BlurFade>
      <BlurFade className="text-center text-neutral-900 dark:text-neutral-500" delay={0.25} inView>
        I've worked on a variety of projects, from simple websites to complex <br />
        web applications. Here are a few of my favorites.
      </BlurFade>
      <BentoGrid className="my-10 lg:grid-rows-2 w-1/2">
        {DATA.projects.slice(0, 4).map((project, index) => (
          <BentoCard key={index} {...project} />
        ))}
      </BentoGrid>
      <Link href="/project">
        <InteractiveHoverButton text="Browse All Projects" className="w-72" />
      </Link>
    </div>
  );
}
