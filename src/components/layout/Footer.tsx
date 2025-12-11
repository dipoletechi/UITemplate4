import { Facebook, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import gfrfLogo from "@/assets/gfrf-logo.png";

interface FooterProps {
  visitorCount: number;
}

const Footer = ({ visitorCount }: FooterProps) => {
  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "News & Events", href: "#news" },
    { label: "Contact", href: "#contact" },
    { label: "Sitemap", href: "#" },
    { label: "FAQs", href: "#" },
  ];

  const governmentLinks = [
    { label: "Government of India", href: "https://india.gov.in" },
    { label: "Gujarat Government", href: "https://gujaratindia.gov.in" },
    { label: "Ministry of Environment", href: "https://moef.gov.in" },
    { label: "Forest Survey of India", href: "https://fsi.nic.in" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={gfrfLogo} alt="GFRF Logo" className="h-12 w-12 object-contain bg-primary-foreground rounded-full p-1" />
              <div>
                <h3 className="font-bold text-lg">GFRF</h3>
                <p className="text-sm opacity-90">Gujarat Forestry Research Foundation</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Dedicated to the conservation and sustainable management of Gujarat's forest resources through research and community engagement.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-primary-foreground/20 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm opacity-90 hover:opacity-100 hover:underline focus:outline-none focus:ring-2 focus:ring-primary-foreground rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Government Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-primary-foreground/20 pb-2">Government Links</h3>
            <ul className="space-y-2">
              {governmentLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm opacity-90 hover:opacity-100 hover:underline focus:outline-none focus:ring-2 focus:ring-primary-foreground rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-primary-foreground/20 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-sm opacity-90">
                  GFRF Office, Forest Department Campus, Gandhinagar, Gujarat - 382010
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+917923232323" className="text-sm opacity-90 hover:underline">
                  +91 79 2323 2323
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@gfrf.gov.in" className="text-sm opacity-90 hover:underline">
                  info@gfrf.gov.in
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-4">
              <a href="#" aria-label="Facebook" className="p-2 bg-primary-foreground/10 rounded hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="p-2 bg-primary-foreground/10 rounded hover:bg-primary-foreground/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="YouTube" className="p-2 bg-primary-foreground/10 rounded hover:bg-primary-foreground/20 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-90">
            <div className="flex items-center gap-4">
              <span>© {new Date().getFullYear()} GFRF. All rights reserved.</span>
              <span className="hidden md:inline">|</span>
              <span>Visitors: {visitorCount.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:underline">Terms of Use</a>
              <span>|</span>
              <a href="#" className="hover:underline">Accessibility</a>
            </div>
          </div>
          <p className="text-center text-xs mt-4 opacity-75">
            Last Updated: {new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
