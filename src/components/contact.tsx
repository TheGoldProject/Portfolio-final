"use client";

import React, { forwardRef, useRef, useState } from "react";
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
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import { Icons } from "@/components/icons";
import BlurFade from "@/components/ui/blur-fade";
import { DATA } from "@/data/resume";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "./ui/textarea";
import { AnimatedSubscribeButton } from "@/components/ui/animated-subscribe-button";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

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

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSend = async () => {
    if (!formData.email || !formData.name || !formData.message) {
      alert("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    try {
      await emailjs.send(
        "My Gmail", // Replace with your EmailJS service ID
        "template_snexjqb", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "IZ4V5Y3fyRMgK2YKr" // Replace with your EmailJS public key
      );
      alert("Message sent successfully!");
      setFormData({ email: "", name: "", message: "" }); // Clear form
    } catch (err) {
      console.error("Failed to send message:", err);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center relative bg-background pt-40"
    >
      <AnimatedGradientText>
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-3xl`
          )}
        >
          CONTACT
        </span>
      </AnimatedGradientText>
      <BlurFade
        delay={0.25}
        inView
        className="mt-10 text-5xl font-bold  text-black dark:text-white"
      >
        Get in touch
      </BlurFade>
      <div className="flex items-center gap-20 mt-5">
        <div className="flex flex-col gap-4 w-2/3">
          <div className="flex gap-2">
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="h-12 text-lg"
            />
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="h-12 text-lg"
            />
          </div>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message"
            rows={8}
            className="h-40 text-lg"
          />
          <Button onClick={handleSend} disabled={isLoading}>
            {isLoading ? "Sending..." : "Send"}
          </Button>
        </div>
        <BlurFade
          delay={1}
          inView
          className="text-5xl font-bold  text-black dark:text-white"
        >
          <div
            className="relative flex w-[600px] items-center justify-center overflow-hidden rounded-lg bg-background p-10"
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
                  <Image
                    src="/avatar/me.png"
                    alt="me"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
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
          </div>
        </BlurFade>
      </div>
    </div>
  );
}
