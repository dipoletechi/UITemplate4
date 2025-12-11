import { useState, useEffect } from "react";
import { Menu, X, Search, Moon, Sun, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import gfrfLogo from "@/assets/gfrf-logo.png";

interface HeaderProps {
  fontSize: number;
  setFontSize: (size: number) => void;
  isDark: boolean;
  toggleTheme: () => void;
}

const Header = ({ fontSize, setFontSize, isDark, toggleTheme }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "News", href: "#news" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      {/* Top accessibility bar */}
      <div className="bg-primary">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-primary-foreground">
            <a href="#main-content" className="underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-accent">
              Skip to main content
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-primary-foreground hidden sm:inline">Font Size:</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => setFontSize(Math.max(12, fontSize - 2))}
              aria-label="Decrease font size"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => setFontSize(Math.min(24, fontSize + 2))}
              aria-label="Increase font size"
            >
              <Plus className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 text-primary-foreground hover:bg-primary-foreground/10"
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and title */}
            <div className="flex items-center gap-4">
              <img
                src={gfrfLogo}
                alt="GFRF Logo"
                className="h-16 w-16 object-contain"
              />
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-foreground">
                  Gujarat Forestry Research Foundation
                </h1>
                <p className="text-sm text-muted-foreground">
                  Government of Gujarat, India
                </p>
              </div>
            </div>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center gap-6" role="navigation" aria-label="Main navigation">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden border-t border-border" role="navigation" aria-label="Mobile navigation">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary hover:bg-muted font-medium py-2 px-4 rounded transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
