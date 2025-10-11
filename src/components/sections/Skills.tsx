import { Code2, Database, Wrench, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "Next.js", "Vite.js", "TailwindCSS", "TypeScript", "JavaScript"],
  },
  {
    title: "Backend",
    icon: Database,
    skills: ["Node.js", "Express", "Bun", "TypeScript", "RESTful APIs", "GraphQL"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "Firebase", "MySQL", "Redis"],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    skills: ["Git", "GitHub", "Docker", "Vercel", "GitHub Actions", "Postman"],
  },
  {
    title: "Other Technologies",
    icon: Sparkles,
    skills: ["Machine Learning", "Python", "TensorFlow", "CNNs", "AI Integration"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-up">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={category.title}
                className="hover-glow animate-fade-up border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm font-medium transition-all hover:bg-primary hover:text-primary-foreground"
                      >
                        {skill}
                      </span>
                    ))}
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
