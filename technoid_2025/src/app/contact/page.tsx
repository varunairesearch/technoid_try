import { TitleBanner } from "@/components/sections/TitleBanner";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <TitleBanner title="CONTACT_NODE" subtitle="Establishing Secure Link..." />
      
      <section className="max-w-4xl mx-auto py-20 px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Mail className="w-8 h-8 text-neon-cyan" />
              <div>
                <h3 className="text-xl font-orbitron text-white">Email_Link</h3>
                <p className="text-gray-400">techxclub@sxcjpr.edu.in</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-8 h-8 text-neon-cyan" />
              <div>
                <h3 className="text-xl font-orbitron text-white">Voice_Link</h3>
                <p className="text-gray-400">+91 123 456 7890</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-8 h-8 text-neon-cyan" />
              <div>
                <h3 className="text-xl font-orbitron text-white">Coordinates</h3>
                <p className="text-gray-400">St. Xavier's College, Jaipur</p>
              </div>
            </div>
          </div>

          {/* Contact Form Stub */}
          <div className="border border-neon-pink/50 p-8 bg-cyber-gray/50">
            <h2 className="text-3xl font-orbitron text-neon-pink mb-6">Send Transmission</h2>
            <p className="text-gray-400">Contact form functionality coming soon.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
