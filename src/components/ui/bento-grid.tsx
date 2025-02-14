import { ReactNode } from "react";
import { ArrowRightIcon, StarIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
type BentoGridProps = {
  children: ReactNode;
  className?: string;
};

type BentoCardProps = {
  title: string;
  className: string;
  image: string;
  video: string;
  shortDescription: string;
  href: string;
};

const BentoGrid = ({ children, className }: BentoGridProps) => {
  return (
    <div className={cn("grid w-full auto-rows-[22rem] grid-cols-3 gap-4", className)}>
      {children}
    </div>
  );
};

const BentoCard = ({
  title,
  className,
  image,
  video,
  shortDescription,
  href,
}: BentoCardProps) => (
  <div
    key={title}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
  >
    {/* <div>{background}</div> */}
    <Image src={image} alt={title} fill className="absolute inset-0 object-cover" />
    {/* <video src={video} autoPlay muted loop className="absolute inset-0 w-full h-full object-fill" /> */}
    <div className="absolute inset-x-0 bottom-0 pointer-events-none z-10 dark:bg-black/90 bg-white/50 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 translate-y-10 group-hover:translate-y-0">
      <StarIcon className="h-12 w-12 origin-left transform-gpu text-neutral-700 dark:text-neutral-300 transition-all duration-300 ease-in-out group-hover:scale-75" />
      <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">{title}</h3>
      <p className="max-w-lg text-neutral-400">{shortDescription}</p>
      <div
        className={cn(
          "pointer-events-none flex w-full translate-y-10 transform-gpu flex-row items-center opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 "
        )}
      >
        <Button
          variant="outline"
          asChild
          size="sm"
          className="pointer-events-auto bg-transparent border-white mt-4"
        >
          <Link href={href} target="_blank">
            Open
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };
