import { Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    role: "Web Development Intern",
    company: "RJNEST (Incubation Center)",
    period: "2024",
    description: "Developed and maintained web applications using MERN stack. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    role: "Software Testing Intern",
    company: "NIT Warangal",
    period: "2023",
    description: "Performed comprehensive testing of web applications. Identified and documented bugs, ensuring software quality and reliability.",
    tech: ["Selenium", "Jest", "Testing Frameworks", "QA"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-up">
            Work <span className="gradient-text">Experience</span>
          </h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={exp.role}
                className="hover-glow animate-fade-up border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{exp.role}</CardTitle>
                        <CardDescription className="text-base font-medium text-foreground/80">
                          {exp.company}
                        </CardDescription>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">{exp.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
                      >
                        {tech}
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
