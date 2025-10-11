import { ExternalLink, Github, Sparkles, Users, Target, Activity, Heart, Shield, Zap, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

const projects = [
  {
    title: "Annasamarpan",
    description: "A food donation platform connecting NGOs, institutes, and donors to reduce food waste and help those in need.",
    impact: "Helped 500+ families",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    demo: "https://anna-samarpan.vercel.app/",
    github: "https://github.com/saisiddeswar/AnnaSamarpan",
    color: "from-purple-500/20 to-pink-500/20",
    icon: Heart,
    stats: "500+ Meals Served",
    gradient: "bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-rose-500/10",
  },
  {
    title: "TitleSafe",
    description: "Smart title verification system ensuring legal transparency using AI and blockchain technology.",
    impact: "99.2% accuracy rate",
    tech: ["Next.js", "Python", "TensorFlow", "PostgreSQL"],
    demo: "https://term-paperfrontend.vercel.app/",
    github: "https://github.com/saisiddeswar/TitleSafe",
    color: "from-blue-500/20 to-cyan-500/20",
    icon: Shield,
    stats: "99.2% Accuracy",
    gradient: "bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-teal-500/10",
  },
  {
    title: "Health Tracker",
    description: "Comprehensive health tracking and analytics web application with real-time data visualization.",
    impact: "1000+ active users",
    tech: ["React", "Firebase", "Chart.js", "TailwindCSS"],
    demo: "https://health-umber-seven.vercel.app/",
    github: "https://github.com/saisiddeswar/Health",
    color: "from-green-500/20 to-emerald-500/20",
    icon: Activity,
    stats: "1K+ Active Users",
    gradient: "bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-lime-500/10",
  },
];

export const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>
      
      {/* Floating Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-20 animate-fade-up">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-2xl bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <Sparkles className="h-5 w-5 text-primary animate-pulse" />
              <span className="text-base font-semibold text-primary">Featured Work</span>
              <Zap className="h-5 w-5 text-primary animate-pulse delay-300" />
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
              Creative <span className="gradient-text bg-gradient-to-r from-purple-400 to-pink-400">Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Where innovation meets impact - Building digital experiences that make a difference
            </p>
          </div>

          {/* Enhanced Projects Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {projects.map((project, index) => {
              const ProjectIcon = project.icon;
              const isHovered = hoveredIndex === index;
              const isActive = activeProject === index;

              return (
                <div
                  key={project.title}
                  className="group relative animate-fade-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setActiveProject(activeProject === index ? null : index)}
                >
                  {/* Enhanced Glow Effect - Disabled on mobile */}
                  <div className={`hidden md:block absolute -inset-4 bg-gradient-to-r ${project.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-700`} />
                  
                  {/* Floating Elements - Disabled on mobile */}
                  <div className="hidden md:block absolute inset-0 rounded-3xl overflow-hidden">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-3 h-3 bg-gradient-to-r ${project.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000`}
                        style={{
                          top: `${15 + i * 15}%`,
                          left: `${5 + i * 20}%`,
                          animation: `float 4s ease-in-out ${i * 0.8}s infinite`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Main Card */}
                  <div className={`relative h-full bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden transition-all duration-300 md:duration-500 md:group-hover:border-primary/30 md:group-hover:-translate-y-3 md:group-hover:shadow-2xl ${
                    isActive ? 'ring-2 ring-primary/50' : ''
                  }`}>
                    
                    {/* Header Section */}
                    <div className={`p-4 sm:p-6 md:p-8 ${project.gradient} border-b border-border/30 transition-all duration-500`}>
                      <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-4 sm:mb-6">
                        <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                          <div className={`p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-gradient-to-br ${project.color.replace('/20', '')} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg flex-shrink-0`}>
                            <ProjectIcon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:text-primary transition-colors duration-300 truncate">
                              {project.title}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="w-1 h-1 bg-current rounded-full opacity-50" />
                              <span className="text-xs sm:text-sm text-muted-foreground font-medium">{project.stats}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex gap-2 flex-shrink-0">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 md:hover:scale-110 md:hover:rotate-12 hover:shadow-lg hover:shadow-primary/50 cursor-pointer"
                            aria-label="View GitHub Repository"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 md:hover:scale-110 md:hover:-rotate-12 hover:shadow-lg hover:shadow-accent/50 cursor-pointer"
                            aria-label="View Live Demo"
                          >
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        </div>
                      </div>

                      {/* Impact Badge */}
                      <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl bg-background/80 backdrop-blur-sm border border-border/30 group-hover:border-primary/50 transition-all duration-300">
                        <Target className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                        <span className="text-xs sm:text-sm font-semibold text-primary">{project.impact}</span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-4 sm:p-6 md:p-8">
                      <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base md:text-lg">
                        {project.description}
                      </p>

                      {/* Tech Stack with Enhanced Animation */}
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                          <span className="text-xs sm:text-sm font-semibold text-foreground">Tech Stack</span>
                        </div>
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={tech}
                              className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-lg sm:rounded-xl bg-background/80 backdrop-blur-sm border border-border/50 text-foreground transition-all duration-500 hover:border-primary hover:bg-primary/10 md:hover:scale-105 hover:shadow-lg"
                              style={{
                                transitionDelay: isHovered ? `${techIndex * 80}ms` : '0ms',
                                transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Animated Footer */}
                    <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6">
                      <div className={`h-1 bg-gradient-to-r ${project.color.replace('/20', '')} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left shadow-lg`} />
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Enhanced Call to Action */}
          <div className="text-center mt-16 animate-fade-up">
            <div className="inline-flex flex-col sm:flex-row items-center gap-6 px-8 py-6 rounded-3xl bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-500">
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-primary" />
                <span className="text-lg font-semibold text-foreground">
                  Interested in collaboration?
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
                <span className="text-sm text-muted-foreground font-medium">
                  Let's build something amazing together
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          33% { 
            transform: translateY(-10px) rotate(120deg) scale(1.1);
          }
          66% { 
            transform: translateY(5px) rotate(240deg) scale(0.9);
          }
        }
      `}</style>
    </section>
  );
};