import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import player1 from "@/assets/player1.jpg";
import player2 from "@/assets/player2.jpg";
import player3 from "@/assets/player3.jpg";
import player4 from "@/assets/player4.jpg";

const TeamSection = () => {
  const mainRoster = [
    {
      name: "Alex 'Phantom' Chen",
      role: "IGL / Entry Fragger",
      age: 22,
      image: player1,
      description: "Team captain with exceptional leadership and aggressive playstyle.",
    },
    {
      name: "Jordan 'Sniper' Davis",
      role: "AWPer / Support",
      age: 20,
      image: player2,
      description: "Precision shooter with game-changing clutch potential.",
    },
    {
      name: "Mike 'Flash' Rodriguez",
      role: "Rifler / Entry",
      age: 21,
      image: player3,
      description: "Lightning-fast reflexes and incredible game sense.",
    },
    {
      name: "Sam 'Anchor' Kim",
      role: "Support / Lurker",
      age: 23,
      image: player4,
      description: "Strategic mastermind who controls map rotations.",
    },
  ];

  const substitutes = [
    {
      name: "Chris 'Backup' Wilson",
      role: "Flex Player",
      age: 19,
      image: player1,
      description: "Versatile player ready to fill any role needed.",
    },
    {
      name: "Tyler 'Reserve' Brown",
      role: "Support",
      age: 20,
      image: player2,
      description: "Solid fundamentals and strong team communication.",
    },
  ];

  const PlayerCard = ({ player, isSubstitute = false }) => (
    <Card className="gaming-card group hover:scale-105 transition-transform duration-300">
      <CardContent className="p-6">
        <div className="relative mb-4">
          <img
            src={player.image}
            alt={player.name}
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="absolute top-3 right-3">
            <Badge variant={isSubstitute ? "secondary" : "default"} className="bg-primary text-primary-foreground">
              {isSubstitute ? "SUB" : "MAIN"}
            </Badge>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2 gradient-text">{player.name}</h3>
        <Badge variant="outline" className="mb-3 border-accent text-accent">
          {player.role}
        </Badge>
        <p className="text-muted-foreground text-sm mb-3">{player.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Age: {player.age}</span>
          <div className="w-3 h-3 bg-gaming-green rounded-full animate-pulse-glow"></div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="team" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the skilled players who make Fame Esports a force to be reckoned with in competitive gaming.
          </p>
        </div>

        {/* Main Roster */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="text-primary">Main Roster</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainRoster.map((player, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <PlayerCard player={player} />
              </div>
            ))}
          </div>
        </div>

        {/* Substitutes */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="text-accent">Substitutes</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {substitutes.map((player, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${(index + 4) * 0.1}s` }}>
                <PlayerCard player={player} isSubstitute={true} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;