import { Trophy, Award, Star, Sparkles, Medal } from "lucide-react";

const achievements = [
  {
    title: "1st Place - Hackathon 4.0",
    organization: "NRI College, Vijayawada",
    icon: Trophy,
    color: "from-yellow-500 to-orange-500",
    rank: "🥇 Winner",
  },
  {
    title: "1st Place - Technical Paper Presentation",
    organization: "Technizen 2024",
    icon: Award,
    color: "from-yellow-500 to-orange-500",
    rank: "🥇 Winner",
  },
  {
    title: "3rd Place - Techno Fiesta 2024",
    organization: "R.V.R & J.C College, Guntur",
    icon: Medal,
    color: "from-amber-500 to-yellow-600",
    rank: "🥉 3rd Place",
  },
  {
    title: "3rd Place - Web Development Competition",
    organization: "R.V.R & J.C College, Guntur",
    icon: Star,
    color: "from-amber-500 to-yellow-600",
    rank: "🥉 3rd Place",
  },
  {
    title: "Runner-Up - TECHTREK 2k25",
    organization: "VR Siddhartha College",
    icon: Sparkles,
    color: "from-gray-400 to-gray-600",
    rank: "🥈 Runner-Up",
  },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Trophy className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Honors & Recognition</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">Achievements</span> & Awards
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Recognition for innovation, technical excellence, and competitive spirit
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={achievement.title}
                  className="group relative animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${achievement.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-75 transition-all duration-500`} />
                  
                  <div className="relative h-full bg-card border border-border rounded-2xl p-6 transition-all duration-300 group-hover:border-transparent">
                    {/* Rank badge */}
                    <div className="absolute top-6 right-6 text-2xl transform group-hover:scale-110 transition-transform duration-300">
                      {achievement.rank.split(' ')[0]}
                    </div>

                    {/* Icon */}
                    <div className={`mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br ${achievement.color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold mb-2 pr-8 leading-tight group-hover:text-primary transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-3">
                      {achievement.organization}
                    </p>

                    {/* Bottom accent */}
                    <div className={`mt-4 h-1 bg-gradient-to-r ${achievement.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Summary stats */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <div className="text-center p-6 rounded-2xl bg-card border border-border">
              <div className="text-4xl font-bold gradient-text mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Total Awards</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card border border-border">
              <div className="text-4xl font-bold gradient-text mb-2">2</div>
              <div className="text-sm text-muted-foreground">First Places</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card border border-border">
              <div className="text-4xl font-bold gradient-text mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Competitions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
