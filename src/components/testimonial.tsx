import { cn } from "@/lib/utils";
import { DATA } from "@/data/resume";
import GradualSpacing from "@/components/ui/gradual-spacing";
import Marquee from "@/components/ui/marquee";
import { StarFilledIcon } from "@radix-ui/react-icons";
import MyImg from "/public/me.jpg";
import Image from "next/image";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import BlurFade from "@/components/ui/blur-fade";

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
    <div className="relative bg-background pt-40">
      <div className="flex flex-col items-center gap-10">
        <AnimatedGradientText>
          <span
            className={cn(
              `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-3xl`
            )}
          >
            TESTIMONIALS
          </span>
        </AnimatedGradientText>
        <BlurFade delay={0.25} inView>
          <span className="font-display text-center text-3xl font-bold  text-black dark:text-white md:text-5xl md:leading-[5rem]">
            Hear from my clients
          </span>
        </BlurFade>
      </div>
      <div className="flex flex-col w-full items-center justify-center overflow-hidden rounded-lg bg-background">
        <Marquee className="[--duration:20s]">
          {DATA.testimonials.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <Marquee reverse className="[--duration:20s]">
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
