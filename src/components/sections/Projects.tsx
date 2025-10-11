import { ExternalLink, Github, Sparkles } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Annasamarpan",
    description: "A food donation platform connecting NGOs, institutes, and donors to reduce food waste and help those in need.",
    impact: "Helped 500+ families",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    demo: "#",
    github: "#",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "TitleSafe",
    description: "Smart title verification system ensuring legal transparency using AI and blockchain technology.",
    impact: "99.2% accuracy rate",
    tech: ["Next.js", "Python", "TensorFlow", "PostgreSQL"],
    demo: "#",
    github: "#",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "VitaTrack",
    description: "Comprehensive health tracking and analytics web application with real-time data visualization.",
    impact: "1000+ active users",
    tech: ["React", "Firebase", "Chart.js", "TailwindCSS"],
    demo: "#",
    github: "#",
    color: "from-green-500/20 to-emerald-500/20",
  },
];

export const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 bg-muted/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Featured Work</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Creative <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Transforming ideas into impactful digital experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative animate-fade-up"
                style={{ animationDelay: `${index * 0.15}s` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative h-full bg-card border border-border rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-primary/50 group-hover:-translate-y-2">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex gap-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </div>

                    <div className="mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 inline-block">
                      <span className="text-xs font-semibold text-primary">{project.impact}</span>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium rounded-lg bg-secondary/50 text-secondary-foreground border border-border transition-all duration-300 hover:border-primary hover:bg-primary/10"
                          style={{
                            transitionDelay: hoveredIndex === index ? `${techIndex * 50}ms` : '0ms',
                            transform: hoveredIndex === index ? 'translateY(-2px)' : 'translateY(0)',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
