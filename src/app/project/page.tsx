import Image from "next/image";
import Hero from "@/components/hero2";
import Experiences from "@/components/experiences";
import Education from "@/components/education";
import Certifications from "@/components/certifications";
import Projects from "@/components/projects";
import ShineBorder from "@/components/ui/shine-border";
import BlurFade from "@/components/ui/blur-fade";
import { DATA } from "@/data/resume";

export default function Project() {
  return (
    <div className="min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <div className="w-1/2 mx-auto pt-40">
        <BlurFade
          className="font-display text-center text-3xl font-bold  text-black dark:text-white md:text-5xl md:leading-[5rem]"
          delay={0.25}
          inView
        >
          Projects What I've Done
        </BlurFade>
        <BlurFade
          className="text-center text-neutral-900 dark:text-neutral-500"
          delay={0.25}
          inView
        >
          I've worked on a variety of projects, from simple websites to complex{" "}
          <br />
          web applications. Here are a few of my favorites.
        </BlurFade>

        <div className="flex flex-col gap-5 mt-10">
          {DATA.projects.map((project: any, i: number) => (
            <ShineBorder
              key={i}
              className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
              <div className="flex gap-5 w-full">
                <div className="w-1/2 h-[300px] relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 flex-1 mt-5">
                  <h1 className="text-2xl font-bold">{project.title}</h1>
                  <p className="text-lg text-gray-500">{project.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((technology: any, j: number) => (
                      <p key={j} className="text-sm text-gray-500 rounded-3xl border px-2 py-1 border-zinc-600 shadow-2xl">
                        {technology}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </ShineBorder>
          ))}
        </div>
      </div>
    </div>
  );
}
