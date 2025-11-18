"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center relative px-4">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Video Background (add video to public/video/teaser.mp4) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10 opacity-20"
      >
        <source src="/video/teaser.mp4" type="video/mp4" />
      </video>

      <div className="z-10 text-center space-y-6">
        <div className="inline-block px-4 py-1 border border-neon-cyan/50 rounded-full bg-neon-cyan/10 text-neon-cyan text-sm font-mono mb-4 animate-pulse">
          Hewloooo
        </div>

        <h1 className="text-6xl md:text-9xl font-black font-orbitron tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-pink drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]">
          TECHNOID
        </h1>
        
        <p className="text-xl md:text-3xl font-rajdhani text-gray-400 tracking-[0.3em] uppercase">
          THE <span className="text-neon-yellow">NEON</span> ASCENT
        </p>

        <div className="pt-10">
          <Button asChild size="lg">
            <Link href="/events">
              Initialize Protocol
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
