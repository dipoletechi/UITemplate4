import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Users, TreePine } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To conduct scientific research for sustainable forest management and biodiversity conservation across Gujarat.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "A Gujarat with thriving forests that support ecological balance, economic prosperity, and community well-being.",
    },
    {
      icon: Users,
      title: "Community Engagement",
      description:
        "Empowering local communities through participatory forest management and livelihood programs.",
    },
    {
      icon: TreePine,
      title: "Conservation",
      description:
        "Protecting endangered species and habitats while promoting sustainable use of forest resources.",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About GFRF
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The Gujarat Forestry Research Foundation (GFRF) is a premier institution 
            dedicated to forest research, conservation, and sustainable development in Gujarat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 text-primary rounded-full mb-4">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
