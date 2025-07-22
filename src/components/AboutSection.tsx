import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Twitter, Instagram, Linkedin, Users, Trophy, Target } from "lucide-react";
import player1 from "@/assets/player1.jpg";

const AboutSection = () => {
  const team = [
    {
      name: "Marcus 'CEO' Thompson",
      role: "Founder & CEO",
      image: player1,
      bio: "Former professional player turned visionary leader. Marcus founded Fame Esports with the mission to create opportunities for upcoming talent in the competitive gaming scene.",
      socials: {
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Sarah 'Coach' Martinez",
      role: "Team Manager & Coach",
      image: player1,
      bio: "Strategic mastermind with 8+ years in esports management. Sarah brings professional structure and winning strategies to our competitive teams.",
      socials: {
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Fame Esports</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded on the belief that every player deserves a chance to shine, we're building the future of competitive gaming.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="gaming-card p-8 mb-16 text-center">
          <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            To discover, develop, and showcase exceptional gaming talent while building a community that celebrates 
            competitive excellence, sportsmanship, and the unifying power of esports. We believe in turning underdogs 
            into champions and dreams into reality.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="gaming-card p-6 text-center">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h4 className="text-xl font-bold mb-3">Team First</h4>
            <p className="text-muted-foreground">Individual skill means nothing without teamwork and unity.</p>
          </div>
          <div className="gaming-card p-6 text-center">
            <Trophy className="w-12 h-12 text-accent mx-auto mb-4" />
            <h4 className="text-xl font-bold mb-3">Excellence</h4>
            <p className="text-muted-foreground">We strive for perfection in every match, every play, every moment.</p>
          </div>
          <div className="gaming-card p-6 text-center">
            <Target className="w-12 h-12 text-gaming-yellow mx-auto mb-4" />
            <h4 className="text-xl font-bold mb-3">Growth</h4>
            <p className="text-muted-foreground">Continuous improvement is the path to legendary status.</p>
          </div>
        </div>

        {/* Leadership Team */}
        <div>
          <h3 className="text-3xl font-bold mb-12 text-center">
            <span className="gradient-text">Leadership Team</span>
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="gaming-card">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-48 md:h-40 object-cover rounded-lg"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="text-2xl font-bold mb-2 gradient-text">{member.name}</h4>
                      <p className="text-primary font-semibold mb-4">{member.role}</p>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{member.bio}</p>
                      <div className="flex gap-3">
                        <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                          <Twitter className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                          <Instagram className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="border-gaming-purple text-gaming-purple hover:bg-gaming-purple hover:text-background">
                          <Linkedin className="w-4 h-4" />
                        </Button>
                      </div>
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

export default AboutSection;