"use client";

import { Dock, DockIcon } from "@/components/ui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { Link, useTransitionRouter } from "next-view-transitions";
import { slideInOut } from "@/lib/transition-animations";

export default function Navbar() {
  const router = useTransitionRouter();

  return (
    <div className="fixed inset-x-0 top-0 z-30 mx-auto mt-2 flex origin-top h-full max-h-14">
      {/* <div className="fixed top-0 inset-x-0 h-24 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div> */}
      <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-neutral-900 backdrop-blur-lg [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] ">
        {DATA.navbar.map((item) => (
          // <Link
          //   key={item.label}
          //   href={item.href}
          //   aria-label={item.label}
          //   className={cn(
          //     buttonVariants({ variant: "ghost", size: "sm" }),
          //     "text-sm"
          //   )}
          // >
          //   <div>{item.label}</div>
          // </Link>
          <a
            key={item.label}
            onClick={(e) => {
              e.preventDefault();
              router.push(`${item.href}`, {
                // Optional custom transition
                onTransitionReady: slideInOut,
              });
            }}
            className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "text-sm")}
            href={item.href}
            aria-label={item.label}
          >
            {item.label}
          </a>
        ))}
        <Separator orientation="vertical" className="h-full" />
        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    aria-label={social.name}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-10 rounded-full"
                    )}
                    target="_blank"
                  >
                    <social.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        <Separator orientation="vertical" className="h-full py-2" />
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </div>
  );
}
