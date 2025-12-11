import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";
import heroImage from "@/assets/hero-forest.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[500px] md:min-h-[600px] flex items-center">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground text-sm font-semibold rounded-full mb-4">
            Government of Gujarat
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-card mb-4 leading-tight">
            Protecting Gujarat's Forests for Future Generations
          </h1>
          <p className="text-lg md:text-xl text-card/90 mb-8 leading-relaxed">
            The Gujarat Forestry Research Foundation is committed to scientific research, conservation, and sustainable forest management across the state.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <FileText className="mr-2 h-5 w-5" />
              Submit Grievance
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-card text-card hover:bg-card hover:text-foreground"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
