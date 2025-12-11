import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import NewsSection from "@/components/home/NewsSection";
import ContactSection from "@/components/home/ContactSection";

const Index = () => {
  const [fontSize, setFontSize] = useState(16);
  const [isDark, setIsDark] = useState(false);
  const [visitorCount] = useState(124567); // Simulated visitor count

  // Apply font size to document
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  // Apply theme
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <>
      <Helmet>
        <title>GFRF - Gujarat Forestry Research Foundation | Government of Gujarat</title>
        <meta
          name="description"
          content="Gujarat Forestry Research Foundation (GFRF) is a government organization dedicated to forest conservation, research, and sustainable management in Gujarat, India."
        />
        <meta
          name="keywords"
          content="GFRF, Gujarat Forestry, Forest Research, Gujarat Forest Department, Conservation, Wildlife, Gujarat Government"
        />
        <link rel="canonical" href="https://gfrf.gujarat.gov.in" />
        <meta property="og:title" content="GFRF - Gujarat Forestry Research Foundation" />
        <meta
          property="og:description"
          content="Dedicated to forest conservation and sustainable management in Gujarat, India."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header
          fontSize={fontSize}
          setFontSize={setFontSize}
          isDark={isDark}
          toggleTheme={toggleTheme}
        />

        <main id="main-content" className="flex-1">
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <NewsSection />
          <ContactSection />
        </main>

        <Footer visitorCount={visitorCount} />
      </div>
    </>
  );
};

export default Index;
