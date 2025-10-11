import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Annasamarpan",
    description: "A food donation platform connecting NGOs, institutes, and donors to reduce food waste and help those in need.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    demo: "#",
    github: "#",
  },
  {
    title: "TitleSafe",
    description: "Smart title verification system ensuring legal transparency using AI and blockchain technology.",
    tech: ["Next.js", "Python", "TensorFlow", "PostgreSQL"],
    demo: "#",
    github: "#",
  },
  {
    title: "VitaTrack",
    description: "Comprehensive health tracking and analytics web application with real-time data visualization.",
    tech: ["React", "Firebase", "Chart.js", "TailwindCSS"],
    demo: "#",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-up">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="hover-glow animate-fade-up border-border group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="default" size="sm" asChild className="flex-1">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
