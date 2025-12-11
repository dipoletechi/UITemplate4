import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "GFRF Launches New Wildlife Conservation Initiative",
      date: "2024-12-10",
      category: "Conservation",
      excerpt:
        "A comprehensive program to protect endangered species in Gujarat's forest reserves.",
    },
    {
      id: 2,
      title: "Tree Plantation Drive 2024: Over 1 Million Saplings Planted",
      date: "2024-12-05",
      category: "Events",
      excerpt:
        "Annual plantation drive achieves record numbers with community participation.",
    },
    {
      id: 3,
      title: "New Research Center Inaugurated in Dang District",
      date: "2024-11-28",
      category: "Announcement",
      excerpt:
        "State-of-the-art facility to boost forestry research in tribal areas.",
    },
  ];

  const events = [
    {
      id: 1,
      title: "Forest Conservation Workshop",
      date: "2024-12-20",
      location: "GFRF Headquarters, Gandhinagar",
    },
    {
      id: 2,
      title: "Wildlife Photography Exhibition",
      date: "2024-12-25",
      location: "Science City, Ahmedabad",
    },
    {
      id: 3,
      title: "Annual Forest Officers Meet",
      date: "2025-01-05",
      location: "Forest Training Center, Rajpipla",
    },
  ];

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <section id="news" className="py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            News & Events
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4" />
          <p className="text-lg text-muted-foreground">
            Stay updated with the latest news and upcoming events from GFRF.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Latest News */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full" />
              Latest News
            </h3>
            <div className="space-y-4">
              {news.map((item) => (
                <Card key={item.id} className="bg-card border-border hover:shadow-md transition-shadow">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {item.category}
                          </Badge>
                          <span className="text-sm text-muted-foreground flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {formatDate(item.date)}
                          </span>
                        </div>
                        <h4 className="font-semibold text-foreground mb-1 hover:text-primary cursor-pointer transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {item.excerpt}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Button variant="outline" className="w-full mt-4">
                View All News
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-accent rounded-full" />
              Upcoming Events
            </h3>
            <div className="space-y-4">
              {events.map((event) => (
                <Card key={event.id} className="bg-card border-border hover:border-primary transition-colors">
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center justify-center w-14 h-14 bg-primary text-primary-foreground rounded-lg text-center flex-shrink-0">
                        <span className="text-lg font-bold leading-none">
                          {new Date(event.date).getDate()}
                        </span>
                        <span className="text-xs uppercase">
                          {new Date(event.date).toLocaleDateString("en-US", {
                            month: "short",
                          })}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm mb-1">
                          {event.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {event.location}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Button variant="outline" className="w-full mt-4">
                View Calendar
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
