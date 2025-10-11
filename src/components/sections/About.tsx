import { GraduationCap, Trophy, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const skills = [
  "React", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL",
  "TypeScript", "Python", "Firebase", "Docker", "TailwindCSS", "Git"
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-up">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="animate-fade-up">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a passionate Full Stack Developer currently pursuing B.Tech in Computer Science 
                at RVRJC College. With a strong foundation in the MERN stack and a drive for innovation, 
                I specialize in building scalable, user-centric web applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a two-time Runner-up in national-level hackathons, I thrive on solving complex 
                problems and bringing creative ideas to life. My expertise spans backend development, 
                AI integration, and cloud technologies.
              </p>
            </div>

            <div className="space-y-6 animate-fade-up">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-card hover-glow">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Education</h3>
                  <p className="text-sm text-muted-foreground">B.Tech in Computer Science</p>
                  <p className="text-sm text-muted-foreground">RVRJC College</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-card hover-glow">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Achievements</h3>
                  <p className="text-sm text-muted-foreground">2x Runner-up in National Hackathons</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-card hover-glow">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Specialization</h3>
                  <p className="text-sm text-muted-foreground">MERN Stack, AI Integration, DevOps</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-up">
            <h3 className="text-2xl font-semibold mb-6 text-center">Tech Stack</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium hover-glow cursor-default"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
