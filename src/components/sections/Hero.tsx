import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            transition: "transform 0.5s ease-out"
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px)`,
            transition: "transform 0.5s ease-out",
            animationDelay: "1s"
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Floating badge */}
          <div className="mb-8 flex justify-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Open to opportunities</span>
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            </div>
          </div>

          {/* Avatar */}
          <div className="mb-8 flex justify-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary via-accent to-primary p-1">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-background bg-card">
                <img
                  src="/profile.jpg"
                  alt="Bandaru Sai Siddeswar"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-foreground mb-2">Hey there! I'm</span>
              <span className="gradient-text block">Bandaru Sai Siddeswar</span>
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-3 text-lg md:text-xl font-medium">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
                Full Stack Developer
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20">
                Hackathon Champion
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
                Tech Innovator
              </span>
            </div>

            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Crafting <span className="text-primary font-semibold">scalable web solutions</span> with the MERN stack, 
              turning <span className="text-accent font-semibold">innovative ideas</span> into reality, 
              one line of code at a time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="group text-base"
              >
                Explore My Work
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-base"
              >
                <a href="/Siddeswar_SDE_resume.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">5+</div>
              <div className="text-sm text-muted-foreground mt-1">Awards Won</div>
            </div>
            <div className="text-center border-x border-border">
              <div className="text-3xl md:text-4xl font-bold gradient-text">10+</div>
              <div className="text-sm text-muted-foreground mt-1">Projects Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">2</div>
              <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      </section>
  );
};
