import { Code2, Database, Wrench, Sparkles, Zap, Layers } from "lucide-react";
import { useState } from "react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    color: "from-purple-500 to-pink-500",
    bgGlow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]",
    skills: ["React", "Next.js", "Vite.js", "TailwindCSS", "TypeScript", "JavaScript"],
  },
  {
    title: "Backend",
    icon: Database,
    color: "from-blue-500 to-cyan-500",
    bgGlow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]",
    skills: ["Node.js", "Express", "Bun", "TypeScript", "RESTful APIs", "GraphQL"],
  },
  {
    title: "Database",
    icon: Layers,
    color: "from-green-500 to-emerald-500",
    bgGlow: "group-hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]",
    skills: ["MongoDB", "PostgreSQL", "Firebase", "MySQL", "Redis"],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    color: "from-orange-500 to-red-500",
    bgGlow: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]",
    skills: ["Git", "GitHub", "Docker", "Vercel", "GitHub Actions", "Postman"],
  },
  {
    title: "AI & ML",
    icon: Sparkles,
    color: "from-violet-500 to-purple-500",
    bgGlow: "group-hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]",
    skills: ["Machine Learning", "Python", "TensorFlow", "CNNs", "AI Integration"],
  },
];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Tech Arsenal</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Crafting solutions with cutting-edge technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`group relative animate-fade-up transition-all duration-500 ${activeCategory === index ? 'scale-105' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setActiveCategory(index)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${category.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-75 transition-all duration-500 ${category.bgGlow}`} />
                
                <div className="relative h-full bg-card border border-border rounded-2xl p-8 transition-all duration-500 group-hover:border-transparent">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} group-hover:scale-110 transition-transform duration-500`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>

                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill}
                        className="flex items-center gap-3 group/skill"
                        style={{
                          transitionDelay: activeCategory === index ? `${skillIndex * 50}ms` : '0ms',
                        }}
                      >
                        <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${category.color} transition-all duration-300 group-hover/skill:w-3`} />
                        <span className="text-sm font-medium text-muted-foreground group-hover/skill:text-foreground transition-colors duration-300">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className={`mt-6 h-1 bg-gradient-to-r ${category.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
