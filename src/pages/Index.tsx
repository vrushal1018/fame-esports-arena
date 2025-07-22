import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TeamSection from "@/components/TeamSection";
import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import EventsSection from "@/components/EventsSection";
import PointsTableSection from "@/components/PointsTableSection";
import LiveSection from "@/components/LiveSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TeamSection />
      <AboutSection />
      <AchievementsSection />
      <EventsSection />
      <PointsTableSection />
      <LiveSection />
      <Footer />
    </div>
  );
};

export default Index;
