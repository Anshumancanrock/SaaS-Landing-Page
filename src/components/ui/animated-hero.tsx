"use client"

import { ArrowRightIcon, ChevronRightSquareIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { cn } from "@/lib/utils";
import { realData } from "@/lib/realData";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";

function Hero() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const shineGradient = mounted && (theme === 'dark' || resolvedTheme === 'dark')
    ? "linear-gradient(120deg, rgba(192,192,192,0.0) 0%, rgba(224,224,224,0.7) 40%, rgba(255,255,255,0.95) 50%, rgba(192,192,192,0.0) 60%)"
    : "linear-gradient(120deg, rgba(50,50,50,0.0) 0%, rgba(80,80,80,0.5) 40%, rgba(130,130,130,0.8) 50%, rgba(50,50,50,0.0) 60%)";

  return (
    <div className="w-full mt-8 px-8 relative">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none z-0"
      />
      <div className="container mx-auto rounded-4xl">
        <div className="flex gap-8 py-12 lg:py-20 items-center justify-center flex-col">
          <div
            className={cn(
              "group rounded-full border border-black/5 text-base dark:text-white text-black transition-all ease-in hover:cursor-pointer bg-neutral-200 dark:border-white/5 dark:bg-neutral-800 min-w-min",
            )}
          >
            <AnimatedShinyText className="inline-flex items-center text-sm max-sm:text-xs max-[375px]:!text-[8px] justify-center px-6 py-1 transition ease-out text-neutral-600 hover:duration-300 dark:text-neutral-400 min-w-min whitespace-nowrap">
              <span>{realData.hero.banner}</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-spektr-cyan-50">{realData.hero.title}</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              {realData.hero.subtitle}
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Link href='https://cal.com/anshumon/30min'>
              <Button
                className={cn(
                  "gap-4 dark:text-black rounded-full bg-black text-white relative px-8 cursor-pointer overflow-hidden shadow-2xl hover:bg-black hover:text-white dark:shadow-black border border-zinc-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-200",
                  "dark:bg-white/90 backdrop-blur-[2px]"
                )}
                variant="outline"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 z-10"
                >
                  <span
                    className="block absolute -left-1/3 -top-1/3 w-2/3 h-[180%] animate-shine"
                    style={{
                      background: shineGradient,
                      filter: "blur(2px)",
                    }}
                  />
                </span>
                <span className="relative flex items-center z-20">
                  {realData.hero.cta} <ChevronRightSquareIcon className="w-4 h-4 ml-2" />
                </span>
                <style jsx global>{`
                @keyframes shine {
                  0% {
                    transform: translateX(-100%) rotate(12deg);
                    opacity: 0.2;
                  }
                  40% {
                    opacity: 0.7;
                  }
                  60% {
                    opacity: 0.9;
                  }
                  100% {
                    transform: translateX(220%) rotate(12deg);
                    opacity: 0.2;
                  }
                }
                .animate-shine {
                  animation: shine 2.8s cubic-bezier(0.4,0,0.2,1) infinite;
                }
              `}</style>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };