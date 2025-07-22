import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Users, Calendar, Clock, ExternalLink, Tv } from "lucide-react";

const LiveSection = () => {
  const isLive = false; // Toggle this to show live/offline state
  
  const nextMatch = {
    opponent: "Elite Gaming",
    date: "December 1, 2024",
    time: "3:00 PM EST",
    tournament: "Championship Finals 2024",
    map: "TBD",
    streamUrl: "https://youtube.com/watch?v=dQw4w9WgXcQ"
  };

  const streamStats = {
    viewers: "2.1K",
    followers: "15.3K",
    totalViews: "125K"
  };

  return (
    <section id="live" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Live Performance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch Fame Esports compete live or catch up on upcoming matches.
          </p>
        </div>

        {isLive ? (
          /* Live Stream Section */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="gaming-card">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <CardTitle className="text-2xl font-bold text-red-500">
                      LIVE NOW
                    </CardTitle>
                  </div>
                  <Badge className="bg-red-500 text-white animate-pulse-glow">
                    STREAMING
                  </Badge>
                </CardHeader>
                <CardContent>
                  {/* Embedded Stream Placeholder */}
                  <div className="aspect-video bg-background rounded-lg border border-border flex items-center justify-center mb-4">
                    <div className="text-center">
                      <Play className="w-16 h-16 text-primary mx-auto mb-4" />
                      <p className="text-lg font-semibold">Live Stream</p>
                      <p className="text-muted-foreground">Fame Esports vs Elite Gaming</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="btn-gaming flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Watch on YouTube
                    </Button>
                    <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground flex-1">
                      <Tv className="w-4 h-4 mr-2" />
                      Watch on Twitch
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              {/* Live Stats */}
              <Card className="gaming-card">
                <CardHeader>
                  <CardTitle className="text-xl font-bold gradient-text">
                    Stream Stats
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Live Viewers</span>
                    <span className="text-red-500 font-bold text-lg animate-pulse">{streamStats.viewers}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Followers</span>
                    <span className="text-primary font-bold">{streamStats.followers}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Total Views</span>
                    <span className="text-accent font-bold">{streamStats.totalViews}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Match Info */}
              <Card className="gaming-card">
                <CardHeader>
                  <CardTitle className="text-xl font-bold gradient-text">
                    Current Match
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-center">
                    <p className="text-lg font-bold">Fame Esports</p>
                    <p className="text-sm text-muted-foreground">vs</p>
                    <p className="text-lg font-bold">Elite Gaming</p>
                  </div>
                  <div className="text-center text-sm text-muted-foreground">
                    <p>{nextMatch.tournament}</p>
                    <p>Map: {nextMatch.map}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          /* Offline State */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="gaming-card">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Tv className="w-10 h-10 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">No Live Stream</h3>
                <p className="text-muted-foreground mb-6">
                  We're currently offline, but don't worry! Our next match is coming up soon.
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Followers:</strong> {streamStats.followers}</p>
                  <p><strong>Total Views:</strong> {streamStats.totalViews}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="gaming-card">
              <CardHeader>
                <CardTitle className="text-xl font-bold gradient-text flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Next Match
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-secondary/30 rounded-lg">
                  <p className="text-lg font-bold mb-2">Fame Esports</p>
                  <p className="text-sm text-accent font-semibold mb-2">VS</p>
                  <p className="text-lg font-bold">{nextMatch.opponent}</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-3 text-primary" />
                    <span>{nextMatch.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-3 text-accent" />
                    <span>{nextMatch.time}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-3 text-gaming-purple" />
                    <span>{nextMatch.tournament}</span>
                  </div>
                </div>

                <Button className="w-full btn-gaming">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Set Reminder
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Stream Platforms */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="gradient-text">Follow Our Streams</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <Play className="w-5 h-5 mr-2" />
              YouTube
            </Button>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
              <Tv className="w-5 h-5 mr-2" />
              Twitch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveSection;