"use client";

import { AnimatePresence, motion, MotionConfig, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { X } from "lucide-react";

// --- Event Data ---
const posters = [
  // PRE-EVENTS
  {
    id: 1,
    title: "Neon Narratives",
    image: "/images/Neon Narratives.jpg",
    tag: "PRE-EVENT",
    about: "A photography event where participants capture visual stories of technology, light, and life in a cyber-inspired world filled with vibrant colours and futuristic reflections.",
    rules: ["Original photos only", "No excessive editing", "Submit via Google Form"],
    category: "PRE"
  },
  {
    id: 2,
    title: "Reel-o-Tron",
    image: "/images/Reelotron.jpg",
    tag: "PRE-EVENT",
    about: "Short reels (30–60 seconds) on cyberpunk life, AI evolution, or cybersecurity. Judged on storytelling, editing, and innovation.",
    rules: ["30-60 seconds duration", "MP4 format", "Original audio preferred"],
    category: "PRE"
  },
  // MAIN EVENTS
  {
    id: 3,
    title: "Tech Trivia",
    image: "/images/Tech Trivia.jpg",
    tag: "MAIN EVENT",
    about: "A fast-paced tech quiz testing knowledge in AI, cybersecurity, coding, and futuristic trends. Two rounds (MCQ + Buzzer).",
    rules: ["Teams of 2", "No electronic devices", "Buzzer round is final"],
    category: "MAIN"
  },
  {
    id: 4,
    title: "Crafted Canvas",
    image: "/images/Crafted Canvas.jpg",
    tag: "MAIN EVENT",
    about: "An artistic event where participants express cyberpunk ideas through posters on AI takeover, data ethics, and cyber safety.",
    rules: ["Bring your own supplies", "A3 sheets provided", "2 hours duration"],
    category: "MAIN"
  },
  {
    id: 5,
    title: "Neon Velocity",
    image: "/images/Retro Recharged.jpg",
    tag: "MAIN EVENT",
    about: "Inspired by Need for Speed and Road Rash, this event puts participants in the driver’s seat of a neon-drenched city.",
    rules: ["Knockout tournament", "Controllers allowed", "Fair play mandatory"],
    category: "MAIN"
  },
  {
    id: 6,
    title: "CyberMote",
    image: "/images/Cybermote.jpg",
    tag: "MAIN EVENT",
    about: "Teams will use creativity and coordination to bring emojis to life by acting, posing, or forming shapes together.",
    rules: ["Teams of 3-5", "Random emoji assignment", "30 seconds to prepare"],
    category: "MAIN"
  },
  {
    id: 7,
    title: "The Neon Trail",
    image: "/images/Treasure Hunt.jpg",
    tag: "MAIN EVENT",
    about: "A campus-wide QR and code-based hunt. Teams decode virtual clues and locate ‘data shards’ to uncover the AI core.",
    rules: ["Teams of 4", "Use smartphone for QR", "Do not damage property"],
    category: "MAIN"
  },
  {
    id: 8,
    title: "LAN Gaming Arena",
    image: "/images/Lan Gaming.jpg",
    tag: "MAIN EVENT",
    about: "Competitive gaming in a neon-lit arena. Games include Valorant, BGMI and Tekken.",
    rules: ["Bring your own peripherals", "Toxic behavior = DQ", "Standard tournament rules"],
    category: "MAIN"
  },
  {
    id: 9,
    title: "TechnoRebirth",
    image: "/images/Techno Rebirth.jpg",
    tag: "MAIN EVENT",
    about: "Focuses on transforming electronic waste into innovative and sustainable creations.",
    rules: ["E-waste provided", "Safety gloves mandatory", "Judged on creativity"],
    category: "MAIN"
  },
  {
    id: 10,
    title: "Hack-a-Meme",
    image: "/images/Hack-a-meme.jpg",
    tag: "MAIN EVENT",
    about: "Unleash your wit in the AI Meme Battle! Craft memes inspired by cyberpunk and cybersecurity themes.",
    rules: ["AI tools allowed", "No offensive content", "Submit by deadline"],
    category: "MAIN"
  }
];

// --- Main Component ---
export default function EventSection() {
  const [activeAboutCard, setActiveAboutCard] = useState<(typeof posters)[0]>();
  const [activeRuleCard, setActiveRuleCard] = useState<(typeof posters)[0]>();

  // Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveAboutCard(undefined);
        setActiveRuleCard(undefined);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const preEvents = posters.filter(p => p.category === "PRE");
  const mainEvents = posters.filter(p => p.category === "MAIN");

  return (
    <MotionConfig transition={{ type: "spring", stiffness: 300, damping: 30 }}>
      <section className="min-h-screen bg-cyber-black hologram-background py-24 px-4 md:px-8">
        
        {/* --- PRE EVENTS --- */}
        <div className="max-w-7xl mx-auto mb-24">
          <h2 className="text-4xl font-orbitron text-neon-pink mb-12 border-b border-neon-pink/30 pb-4 tracking-widest text-center">
            PRE-EVENTS // UPLOAD_INCOMING
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center">
            {preEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                setActiveAboutCard={setActiveAboutCard}
                setActiveRuleCard={setActiveRuleCard}
              />
            ))}
          </div>
        </div>

        {/* --- MAIN EVENTS --- */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-orbitron text-neon-cyan mb-12 border-b border-neon-cyan/30 pb-4 tracking-widest text-center">
            MAIN EVENT // SYSTEM_ONLINE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
            {mainEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                setActiveAboutCard={setActiveAboutCard}
                setActiveRuleCard={setActiveRuleCard}
              />
            ))}
          </div>
        </div>

        {/* --- MODALS --- */}
        <AnimatePresence>
          {(activeAboutCard || activeRuleCard) && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => {
                  setActiveAboutCard(undefined);
                  setActiveRuleCard(undefined);
                }}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
              />

              {/* Content */}
              <div className="relative w-full max-w-2xl z-10">
                {activeAboutCard && (
                   <ModalContent 
                      data={activeAboutCard} 
                      type="about" 
                      close={() => setActiveAboutCard(undefined)} 
                   />
                )}
                {activeRuleCard && (
                   <ModalContent 
                      data={activeRuleCard} 
                      type="rules" 
                      close={() => setActiveRuleCard(undefined)} 
                   />
                )}
              </div>
            </div>
          )}
        </AnimatePresence>
      </section>
    </MotionConfig>
  );
}

// --- Animation Variants ---
const CardVariant: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

// --- Event Card (Tile) ---
function EventCard({ event, setActiveAboutCard, setActiveRuleCard }: any) {
  return (
    <motion.div
      variants={CardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      layoutId={`card-${event.id}`} // Magic ID for morphing animation
      className="group relative flex flex-col w-full aspect-[2/3] bg-cyber-black border border-neon-cyan/30 overflow-hidden rounded-none hover:border-neon-cyan hover:shadow-[0_0_30px_rgba(0,243,255,0.3)] transition-all duration-500"
    >
      {/* Poster Image */}
      <div className="relative w-full h-full">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60" />
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-cyber-black/90 translate-y-4 group-hover:translate-y-0">
        <motion.h3 
          layoutId={`title-${event.id}`}
          className="text-2xl font-orbitron font-bold text-white mb-2 leading-tight"
        >
          {event.title}
        </motion.h3>
        
        <span className="font-mono text-xs text-neon-yellow mb-6 tracking-widest">
          {event.tag}
        </span>

        <div className="flex gap-3">
          <Button 
            onClick={() => setActiveAboutCard(event)}
            className="flex-1 bg-neon-cyan text-black hover:bg-white font-orbitron font-bold tracking-wider"
          >
            ABOUT
          </Button>
          <Button 
            onClick={() => setActiveRuleCard(event)}
            variant="outline"
            className="flex-1 border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-black font-orbitron font-bold tracking-wider"
          >
            RULES
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

// --- Modal Content ---
function ModalContent({ data, type, close }: any) {
  return (
    <motion.div
      layoutId={`card-${data.id}`} // Morph from card
      className="relative bg-cyber-gray border-2 border-neon-cyan overflow-hidden shadow-[0_0_60px_rgba(0,243,255,0.4)] flex flex-col max-h-[80vh]"
      style={{ borderRadius: 12 }}
    >
      {/* Close Button */}
      <button 
        onClick={close}
        className="absolute top-4 right-4 z-20 p-2 bg-black/60 rounded-full text-white hover:text-neon-pink transition-colors"
      >
        <X size={24} />
      </button>

      {/* Header Image */}
      <div className="relative h-48 w-full flex-shrink-0">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyber-gray" />
        
        {/* Title Overlay */}
        <div className="absolute bottom-4 left-6">
            <motion.h2 
                layoutId={`title-${data.id}`}
                className="text-3xl md:text-4xl font-orbitron font-bold text-white drop-shadow-md"
            >
                {data.title}
            </motion.h2>
            <p className="font-mono text-neon-yellow text-sm mt-1 tracking-widest">
                {type === "about" ? "MISSION_BRIEFING" : "CORE_DIRECTIVES"}
            </p>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
        {type === "about" ? (
          <p className="font-rajdhani text-gray-200 text-xl leading-relaxed">
            {data.about}
          </p>
        ) : (
          <ul className="space-y-4">
            {data.rules.map((rule: string, i: number) => (
              <li key={i} className="flex items-start gap-3 font-rajdhani text-gray-300 text-lg">
                <span className="text-neon-pink mt-1">►</span>
                {rule}
              </li>
            ))}
          </ul>
        )}

        {/* Register Button in Modal */}
        <div className="mt-8 pt-6 border-t border-gray-700">
            <Button className="w-full bg-neon-yellow text-black hover:bg-white font-orbitron text-lg py-6 tracking-widest">
                REGISTER NOW
            </Button>
        </div>
      </div>
    </motion.div>
  );
}
