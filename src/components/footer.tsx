import { DATA } from "@/data/resume";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center bg-background mt-20 border-t border-zinc-800 py-10">
      <div className="flex gap-10">
        {DATA.footerLinks.map((link) => (
          <Link href={link.href} key={link.label}>
            <Tooltip>
              <TooltipTrigger>
                <link.icon />
              </TooltipTrigger>
              <TooltipContent>
                <p>{link.label}</p>
              </TooltipContent>
            </Tooltip>
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-2 text-sm text-zinc-500 mt-5">
        <span>&copy; {new Date().getFullYear()} Built with ❤️,</span>
        <div className="flex items-center gap-1">
          <Image
            src="/skills/Next.svg"
            width={16}
            height={16}
            alt="Next.js"
            className="hover:cursor-pointer dark:invert"
          />,
          <Image
            src="/skills/TypeScript.svg"
            width={16}
            height={16}
            alt="Typescript"
            className="hover:cursor-pointer"
          />,
          <Image
            src="/skills/TailwindCSS.svg"
            width={16}
            height={16}
            alt="TailwindCSS"
            className="hover:cursor-pointer"
          />
        </div>
        by Alphaweb3Savvy.
      </div>
    </div>
  );
}
