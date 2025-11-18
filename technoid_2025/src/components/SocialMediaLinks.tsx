import { Instagram, Youtube } from "lucide-react"; // Only importing necessary icons

export default function SocialMediaLinks() {
  // We define the style string here as 'linkClass'
  const linkClass = "w-10 h-10 bg-gray-900/50 border border-gray-700 text-gray-400 flex items-center justify-center transition-all hover:border-neon-pink hover:text-neon-pink";
  
  return (
    <div className="flex flex-col gap-4">
      {/* Instagram */}
      <a 
        href="https://www.instagram.com/csdept_sxcj/" 
        className={linkClass} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <Instagram />
      </a>
      
      {/* YouTube */}
      <a 
        href="https://www.youtube.com/@departmentofcomputerscienc9441" 
        className={linkClass} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="YouTube"
      >
        <Youtube />
      </a>
      
      {/* GitHub and LinkedIn links are removed as requested */}
    </div>
  );
}
