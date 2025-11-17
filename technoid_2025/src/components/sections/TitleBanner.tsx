interface TitleBannerProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function TitleBanner({ title, subtitle, className }: TitleBannerProps) {
  return (
    <section 
      className={`min-h-[40vh] flex flex-col items-center justify-center relative text-center px-4 ${className}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_at_center,rgba(0,0,0,0.4),transparent_80%)]"></div>
      <div className="z-10">
        <h1 className="text-5xl md:text-7xl font-orbitron font-black text-white glitch-text">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-neon-cyan font-mono mt-4 animate-pulse">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
