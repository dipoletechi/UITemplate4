import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileSearch, MessageSquare, BookOpen, Download, ClipboardCheck, HelpCircle } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "Grievance Redressal",
      description: "Submit and track your grievances online with our efficient management system.",
      link: "#grievance",
    },
    {
      icon: FileSearch,
      title: "RTI Services",
      description: "Request information under the Right to Information Act 2005.",
      link: "#rti",
    },
    {
      icon: Download,
      title: "Downloads",
      description: "Access acts, rules, notifications, and circulars related to forest department.",
      link: "#downloads",
    },
    {
      icon: BookOpen,
      title: "Publications",
      description: "Research papers, reports, and publications from GFRF.",
      link: "#publications",
    },
    {
      icon: ClipboardCheck,
      title: "Online Permits",
      description: "Apply for forest-related permits and clearances online.",
      link: "#permits",
    },
    {
      icon: HelpCircle,
      title: "FAQs",
      description: "Find answers to frequently asked questions about our services.",
      link: "#faqs",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Access various services and resources provided by the Gujarat Forestry Research Foundation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.link}
              className="group focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
            >
              <Card className="h-full bg-card border-border hover:border-primary hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-lg group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
