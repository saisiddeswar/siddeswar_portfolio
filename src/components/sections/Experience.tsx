import { Briefcase, Building2, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Web Development Intern",
    company: "RJNEST (Incubation Center)",
    period: "2024",
    description: "Developed and maintained web applications using MERN stack. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    color: "from-purple-500 to-pink-500",
  },
  {
    role: "Software Testing Intern",
    company: "NIT Warangal",
    period: "2023",
    description: "Performed comprehensive testing of web applications. Identified and documented bugs, ensuring software quality and reliability.",
    tech: ["Selenium", "Jest", "Testing Frameworks", "QA"],
    color: "from-blue-500 to-cyan-500",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Briefcase className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Professional Journey</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hands-on experience building real-world solutions
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.role}
                  className="relative animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-8 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                  <div className="md:ml-20 group">
                    <div className="relative">
                      {/* Glow effect */}
                      <div className={`absolute -inset-1 bg-gradient-to-r ${exp.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-75 transition-all duration-500`} />
                      
                      <div className="relative bg-card border border-border rounded-2xl p-8 transition-all duration-300 group-hover:border-transparent">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <div className={`p-2 rounded-lg bg-gradient-to-br ${exp.color}`}>
                                <Building2 className="h-5 w-5 text-white" />
                              </div>
                              <h3 className="text-2xl font-bold">{exp.role}</h3>
                            </div>
                            <p className="text-lg font-semibold text-foreground/80 flex items-center gap-2">
                              <Building2 className="h-4 w-4 text-muted-foreground" />
                              {exp.company}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium text-primary">{exp.period}</span>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech) => (
                            <span
                              key={tech}
                              className={`px-4 py-2 bg-gradient-to-r ${exp.color} bg-opacity-10 rounded-lg text-sm font-medium border border-transparent group-hover:border-primary/20 transition-all duration-300`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
