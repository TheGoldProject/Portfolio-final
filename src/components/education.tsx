import { cn } from "@/lib/utils";
import SectionContainer from "@/components/section-container";
import { DATA } from "@/data/resume";
import GradualSpacing from "@/components/ui/gradual-spacing";
import Image from "next/image";

export default function Education() {
  return (
    <SectionContainer id="education">
      <GradualSpacing
        className="font-display text-3xl font-bold -tracking-widest  text-black dark:text-white md:text-5xl md:leading-[5rem]"
        text="Education"
      />
      <div className={"flex flex-col gap-10 w-1/2"}>
        {DATA.education.map((item, i) => (
          <div key={i}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src={item.logoUrl}
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
                <span className="text-base text-muted-foreground">
                  {item.start} - {item.end}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
