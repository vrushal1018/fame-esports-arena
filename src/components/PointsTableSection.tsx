import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Trophy, TrendingUp, TrendingDown, Minus, RefreshCw } from "lucide-react";

const PointsTableSection = () => {
  const leagueStandings = [
    { rank: 1, team: "Elite Gaming", played: 12, won: 10, lost: 2, points: 30, change: "up" },
    { rank: 2, team: "Fame Esports", played: 12, won: 9, lost: 3, points: 27, change: "up" },
    { rank: 3, team: "Apex Legends", played: 12, won: 8, lost: 4, points: 24, change: "same" },
    { rank: 4, team: "Thunder Bolts", played: 12, won: 7, lost: 5, points: 21, change: "down" },
    { rank: 5, team: "Digital Dynamos", played: 12, won: 6, lost: 6, points: 18, change: "up" },
    { rank: 6, team: "Cyber Knights", played: 12, won: 5, lost: 7, points: 15, change: "down" },
    { rank: 7, team: "Phoenix Rising", played: 12, won: 4, lost: 8, points: 12, change: "down" },
    { rank: 8, team: "Storm Breakers", played: 12, won: 3, lost: 9, points: 9, change: "same" },
  ];

  const recentMatches = [
    { date: "Nov 20", opponent: "Elite Gaming", result: "W", score: "16-12", map: "Dust2" },
    { date: "Nov 17", opponent: "Thunder Bolts", result: "W", score: "16-8", map: "Mirage" },
    { date: "Nov 14", opponent: "Apex Legends", result: "L", score: "14-16", map: "Inferno" },
    { date: "Nov 11", opponent: "Digital Dynamos", result: "W", score: "16-10", map: "Cache" },
    { date: "Nov 8", opponent: "Cyber Knights", result: "W", score: "16-6", map: "Overpass" },
  ];

  const getTrendIcon = (change) => {
    switch (change) {
      case "up": return <TrendingUp className="w-4 h-4 text-gaming-green" />;
      case "down": return <TrendingDown className="w-4 h-4 text-destructive" />;
      default: return <Minus className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getRankBadgeColor = (rank) => {
    if (rank === 1) return "bg-gaming-yellow text-background";
    if (rank === 2) return "bg-primary text-primary-foreground";
    if (rank === 3) return "bg-accent text-accent-foreground";
    return "bg-secondary text-secondary-foreground";
  };

  return (
    <section id="points" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Points Table</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Current league standings and recent match results for Fame Esports.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* League Standings */}
          <div className="lg:col-span-2">
            <Card className="gaming-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-2xl font-bold gradient-text">
                  League Standings
                </CardTitle>
                <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Refresh
                </Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-border">
                      <TableHead className="text-primary">Rank</TableHead>
                      <TableHead className="text-primary">Team</TableHead>
                      <TableHead className="text-center text-primary">P</TableHead>
                      <TableHead className="text-center text-primary">W</TableHead>
                      <TableHead className="text-center text-primary">L</TableHead>
                      <TableHead className="text-center text-primary">Pts</TableHead>
                      <TableHead className="text-center text-primary">Change</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {leagueStandings.map((team) => (
                      <TableRow 
                        key={team.rank} 
                        className={`border-border hover:bg-secondary/50 transition-colors ${
                          team.team === "Fame Esports" ? "bg-primary/10 border-primary/30" : ""
                        }`}
                      >
                        <TableCell>
                          <Badge className={getRankBadgeColor(team.rank)}>
                            {team.rank}
                          </Badge>
                        </TableCell>
                        <TableCell className="font-semibold">
                          {team.team === "Fame Esports" ? (
                            <span className="text-primary font-bold">{team.team}</span>
                          ) : (
                            team.team
                          )}
                        </TableCell>
                        <TableCell className="text-center">{team.played}</TableCell>
                        <TableCell className="text-center text-gaming-green font-medium">
                          {team.won}
                        </TableCell>
                        <TableCell className="text-center text-destructive font-medium">
                          {team.lost}
                        </TableCell>
                        <TableCell className="text-center font-bold text-accent">
                          {team.points}
                        </TableCell>
                        <TableCell className="text-center">
                          {getTrendIcon(team.change)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* Recent Matches & Stats */}
          <div className="space-y-6">
            {/* Team Stats */}
            <Card className="gaming-card">
              <CardHeader>
                <CardTitle className="text-xl font-bold gradient-text flex items-center">
                  <Trophy className="w-5 h-5 mr-2" />
                  Team Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Current Rank</span>
                  <Badge className="bg-primary text-primary-foreground text-lg px-3 py-1">
                    #2
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Win Rate</span>
                  <span className="text-gaming-green font-bold text-lg">75%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total Points</span>
                  <span className="text-accent font-bold text-lg">27</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Form (Last 5)</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-gaming-green rounded-full"></div>
                    <div className="w-3 h-3 bg-gaming-green rounded-full"></div>
                    <div className="w-3 h-3 bg-destructive rounded-full"></div>
                    <div className="w-3 h-3 bg-gaming-green rounded-full"></div>
                    <div className="w-3 h-3 bg-gaming-green rounded-full"></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Matches */}
            <Card className="gaming-card">
              <CardHeader>
                <CardTitle className="text-xl font-bold gradient-text">
                  Recent Matches
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentMatches.map((match, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                    >
                      <div>
                        <div className="font-semibold text-sm">{match.opponent}</div>
                        <div className="text-xs text-muted-foreground">{match.date} • {match.map}</div>
                      </div>
                      <div className="text-right">
                        <Badge 
                          className={`${
                            match.result === "W" 
                              ? "bg-gaming-green text-background" 
                              : "bg-destructive text-destructive-foreground"
                          } mb-1`}
                        >
                          {match.result}
                        </Badge>
                        <div className="text-xs font-mono">{match.score}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PointsTableSection;