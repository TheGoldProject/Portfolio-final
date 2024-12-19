import { cn } from "@/lib/utils";
import { DATA } from "@/data/resume";
import GradualSpacing from "@/components/ui/gradual-spacing";
import Marquee from "@/components/ui/marquee";
import { Star, StarIcon, Stars } from "lucide-react";

const firstRow = DATA.testimonials.slice(0, DATA.testimonials.length / 3);
const secondRow = DATA.testimonials.slice(
  DATA.testimonials.length / 3,
  (DATA.testimonials.length / 3) * 2
);
const thirdRow = DATA.testimonials.slice((DATA.testimonials.length / 3) * 2);

const ReviewCard = ({
  name,
  role,
  company,
  text,
}: {
  name: string;
  role: string;
  company: string;
  text: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row justify-between gap-2">
        {/* <img className="rounded-full" width="32" height="32" alt="" src={img} /> */}
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{role}</p>
        </div>
        <div className="text-cyan-400">{company}</div>
        {/* <Star /><StarIcon /><Stars /> */}
      </div>
      <blockquote className="mt-2 text-sm line-clamp-3">{text}</blockquote>
    </figure>
  );
};

export default function Testimonial() {
  return (
    <div className="relative bg-background mt-20">
      <GradualSpacing
        className="font-display text-center text-3xl font-bold -tracking-widest  text-black dark:text-white md:text-5xl md:leading-[5rem]"
        text="Hear from my clients"
      />
      <div className="flex flex-col w-full items-center justify-center overflow-hidden rounded-lg bg-background h-[500px]">
        <Marquee className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <Marquee reverse className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <Marquee className="[--duration:20s]">
          {thirdRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </div>
  );
}
