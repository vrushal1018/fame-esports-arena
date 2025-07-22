import { Button } from "@/components/ui/button";
import { Trophy, Users, Target } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 hero-bg" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-slide-up">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Fame Esports</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Rising stars in competitive gaming. We don't just play games, we dominate them.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="gaming-card p-6 text-center">
              <Trophy className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-muted-foreground">Tournaments</div>
            </div>
            <div className="gaming-card p-6 text-center">
              <Users className="w-8 h-8 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-accent">6</div>
              <div className="text-muted-foreground">Players</div>
            </div>
            <div className="gaming-card p-6 text-center">
              <Target className="w-8 h-8 text-gaming-yellow mx-auto mb-2" />
              <div className="text-2xl font-bold text-gaming-yellow">Top 3</div>
              <div className="text-muted-foreground">Rankings</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-gaming">
              <Users className="w-5 h-5 mr-2" />
              Meet Our Team
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Trophy className="w-5 h-5 mr-2" />
              View Achievements
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;