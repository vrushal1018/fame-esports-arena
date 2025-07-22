import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, Calendar } from "lucide-react";
import achievement1 from "@/assets/achievement1.jpg";

const AchievementsSection = () => {
  const achievements = [
    {
      event: "Summer Gaming Championship 2024",
      placement: "2nd Place",
      date: "July 2024",
      prize: "$5,000",
      image: achievement1,
      type: "Major",
      description: "Outstanding performance against top-tier teams in a 64-team tournament.",
    },
    {
      event: "Regional Qualifiers Spring",
      placement: "1st Place",
      date: "March 2024",
      prize: "$2,500",
      image: achievement1,
      type: "Regional",
      description: "Dominated the regional scene to secure qualification for major events.",
    },
    {
      event: "Underdog Clash Tournament",
      placement: "3rd Place",
      date: "January 2024",
      prize: "$1,200",
      image: achievement1,
      type: "Community",
      description: "Exceptional teamwork led to podium finish in community tournament.",
    },
    {
      event: "Winter Esports League",
      placement: "2nd Place",
      date: "December 2023",
      prize: "$3,000",
      image: achievement1,
      type: "League",
      description: "Consistent performance throughout the season earned silver medal.",
    },
    {
      event: "Rookie Rising Stars Cup",
      placement: "1st Place",
      date: "October 2023",
      prize: "$800",
      image: achievement1,
      type: "Rookie",
      description: "First major victory that put Fame Esports on the competitive map.",
    },
    {
      event: "Local Gaming Festival",
      placement: "1st Place",
      date: "August 2023",
      prize: "$500",
      image: achievement1,
      type: "Local",
      description: "Humble beginnings at local tournament showcased team potential.",
    },
  ];

  const getPlacementIcon = (placement) => {
    if (placement.includes("1st")) return <Trophy className="w-5 h-5 text-gaming-yellow" />;
    if (placement.includes("2nd")) return <Medal className="w-5 h-5 text-muted-foreground" />;
    if (placement.includes("3rd")) return <Award className="w-5 h-5 text-orange-400" />;
    return <Award className="w-5 h-5 text-primary" />;
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "Major": return "bg-primary text-primary-foreground";
      case "Regional": return "bg-accent text-accent-foreground";
      case "League": return "bg-gaming-purple text-background";
      case "Community": return "bg-gaming-green text-background";
      case "Rookie": return "bg-gaming-yellow text-background";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <section id="achievements" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From humble beginnings to championship podiums - every victory tells our story of determination and growth.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="gaming-card p-6 text-center">
            <Trophy className="w-8 h-8 text-gaming-yellow mx-auto mb-2" />
            <div className="text-2xl font-bold text-gaming-yellow">3</div>
            <div className="text-sm text-muted-foreground">First Places</div>
          </div>
          <div className="gaming-card p-6 text-center">
            <Medal className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
            <div className="text-2xl font-bold text-muted-foreground">2</div>
            <div className="text-sm text-muted-foreground">Second Places</div>
          </div>
          <div className="gaming-card p-6 text-center">
            <Award className="w-8 h-8 text-orange-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-orange-400">1</div>
            <div className="text-sm text-muted-foreground">Third Places</div>
          </div>
          <div className="gaming-card p-6 text-center">
            <div className="text-primary text-2xl font-bold mb-2">$13K+</div>
            <div className="text-sm text-muted-foreground">Prize Money</div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="gaming-card group hover:scale-105 transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={achievement.image}
                    alt={achievement.event}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className={getTypeColor(achievement.type)}>
                      {achievement.type}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-full p-2">
                    {getPlacementIcon(achievement.placement)}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {achievement.event}
                  </h3>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-primary font-semibold">{achievement.placement}</span>
                    <span className="text-accent font-semibold">{achievement.prize}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {achievement.description}
                  </p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    {achievement.date}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;