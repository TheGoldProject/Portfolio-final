import { cn } from "@/lib/utils";
import { DATA } from "@/data/resume";
import GradualSpacing from "@/components/ui/gradual-spacing";
import Marquee from "@/components/ui/marquee";
import { StarFilledIcon } from "@radix-ui/react-icons";
import MyImg from "/public/me.jpg";
import Image from "next/image";

const thirdRow = DATA.testimonials.slice((DATA.testimonials.length / 3) * 2);

const ReviewCard = ({
  name,
  role,
  company,
  text,
  avatar,
}: {
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-80 cursor-pointer overflow-hidden rounded-xl border p-5",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width={36}
          height={36}
          alt=""
          src={`/clients/${avatar}`}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">
            {role} at {company}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{text}</blockquote>
      <div className="flex gap-1 mt-2">
        <StarFilledIcon color="#f5e510" />
        <StarFilledIcon color="#f5e510" />
        <StarFilledIcon color="#f5e510" />
        <StarFilledIcon color="#f5e510" />
        <StarFilledIcon color="#f5e510" />
      </div>
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
      <div className="flex flex-col w-full items-center justify-center overflow-hidden rounded-lg bg-background h-[300px]">
        <Marquee className="[--duration:20s]">
          {DATA.testimonials.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </div>
  );
}
