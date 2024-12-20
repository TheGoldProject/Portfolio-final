"use client";

import React, { forwardRef, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import LetterPullup from "@/components/ui/letter-pullup";
import {
  SiDiscord,
  SiTelegram,
  SiLinkedin,
  SiGmail,
  SiWhatsapp,
} from "@icons-pack/react-simple-icons";
import { Icons } from "@/components/icons";
import MyImg from "/public/me.jpg"

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col items-center justify-center relative bg-background mt-20">
      <LetterPullup words={"Contact Me"} delay={0.05} />
      <div className='flex items-center gap-20'>
        <div className="flex flex-col w-[500px]">
          <span>Linkedin: </span>
          <span>Linkedin: </span>
          <span>Linkedin: </span>
          <span>Linkedin: </span>
          <span>Linkedin: </span>
        </div>
      <div
        className="relative flex w-[500px] items-center justify-center overflow-hidden rounded-lg bg-background p-10 md:shadow-xl"
        ref={containerRef}
      >
        <div className="flex size-full flex-col max-w-lg max-h-[200px] items-stretch justify-between gap-10">
          <div className="flex flex-row items-center justify-between">
            <div className="flex items-center">
              <Circle ref={div1Ref}>
                <SiLinkedin size={40} color="#0A66C2" />
              </Circle>
            </div>
            <Circle ref={div5Ref}>
              <SiTelegram size={40} color="#26A5E4" />
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div2Ref}>
              <SiDiscord size={40} color="#5865F2" />
            </Circle>
            <Circle ref={div4Ref} className="size-16 p-0">
              <Image src={MyImg} alt="me" width={50} height={50} className="rounded-full" />
            </Circle>
            <Circle ref={div6Ref}>
              <SiGmail size={40} color="#EA4335" />
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
          <Circle ref={div7Ref}>
              <SiWhatsapp size={40} color="#25D366" />
            </Circle>
            <Circle ref={div3Ref}>
              <SiLinkedin size={40} color="#0A66C2" />
            </Circle>
            
          </div>
        </div>

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div4Ref}
          curvature={-75}
          endYOffset={-10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div4Ref}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div4Ref}
          curvature={75}
          endYOffset={10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div5Ref}
          toRef={div4Ref}
          curvature={-75}
          endYOffset={-10}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div6Ref}
          toRef={div4Ref}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div7Ref}
          toRef={div4Ref}
          curvature={75}
          endYOffset={10}
          reverse
        />
      </div></div>
    </div>
  );
}
