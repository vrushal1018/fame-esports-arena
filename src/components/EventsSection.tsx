import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock, ExternalLink } from "lucide-react";
import achievement1 from "@/assets/achievement1.jpg";

const EventsSection = () => {
  const upcomingEvents = [
    {
      name: "Championship Finals 2024",
      date: "December 15-17, 2024",
      time: "10:00 AM EST",
      format: "LAN",
      location: "Los Angeles, CA",
      participants: "16 Teams",
      prize: "$50,000",
      poster: achievement1,
      status: "Confirmed",
      description: "The biggest tournament of the year featuring top teams from around the world.",
    },
    {
      name: "Winter Showdown",
      date: "January 8-10, 2025",
      time: "2:00 PM EST",
      format: "Online",
      location: "Remote",
      participants: "32 Teams",
      prize: "$15,000",
      poster: achievement1,
      status: "Registered",
      description: "Online tournament to kick off the new competitive season.",
    },
    {
      name: "Regional Qualifiers",
      date: "February 20-22, 2025",
      time: "12:00 PM EST",
      format: "LAN",
      location: "Chicago, IL",
      participants: "24 Teams",
      prize: "$8,000",
      poster: achievement1,
      status: "Pending",
      description: "Qualification tournament for the spring championship series.",
    },
  ];

  const orgHostedEvents = [
    {
      name: "Fame Rising Stars Cup",
      date: "November 30, 2024",
      time: "6:00 PM EST",
      description: "Our signature tournament for upcoming talent in the gaming community.",
      registrationLink: "#",
      poster: achievement1,
      prize: "$2,000",
      spots: "64 Teams",
    },
    {
      name: "Community Gaming Night",
      date: "December 7, 2024",
      time: "8:00 PM EST",
      description: "Weekly community event with fun matches and prize giveaways.",
      registrationLink: "#",
      poster: achievement1,
      prize: "Giveaways",
      spots: "Open",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Confirmed": return "bg-gaming-green text-background";
      case "Registered": return "bg-primary text-primary-foreground";
      case "Pending": return "bg-gaming-yellow text-background";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <section id="events" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Events</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with our upcoming tournaments and community events.
          </p>
        </div>

        {/* Upcoming Tournaments */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">
            <span className="text-primary">Upcoming Tournaments</span>
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="gaming-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={event.poster}
                      alt={event.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className={getStatusColor(event.status)}>
                        {event.status}
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge variant="outline" className="bg-background/90 backdrop-blur-sm">
                        {event.format}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {event.name}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-3 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-3 text-accent" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-3 text-gaming-purple" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-3 text-gaming-yellow" />
                        <span>{event.participants}</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gaming-green">{event.prize}</span>
                      <Button size="sm" className="btn-gaming">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Org-Hosted Events */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-center">
            <span className="text-accent">Fame Esports Hosted Events</span>
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {orgHostedEvents.map((event, index) => (
              <Card key={index} className="gaming-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <img
                        src={event.poster}
                        alt={event.name}
                        className="w-full h-48 md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-xl font-bold group-hover:text-primary transition-colors">
                          {event.name}
                        </h4>
                        <Badge className="bg-accent text-accent-foreground">
                          HOSTED
                        </Badge>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {event.description}
                      </p>

                      <div className="space-y-2 mb-4 text-sm">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-3 text-primary" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-3 text-accent" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span><strong>Prize:</strong> {event.prize}</span>
                          <span><strong>Spots:</strong> {event.spots}</span>
                        </div>
                      </div>

                      <Button className="w-full btn-gaming">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Register Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;