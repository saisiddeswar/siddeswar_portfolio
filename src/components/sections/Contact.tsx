import { useState } from "react";
import { Mail, Send, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/saisiddeswar/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/saisiddeswar", label: "GitHub" },
  { icon: Mail, href: "mailto:siddeswar0605@gmail.com", label: "Email" },
];

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent! 🎉",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <div className="mb-4 inline-block p-4 rounded-full bg-primary/10 animate-pulse">
              <Send className="h-12 w-12 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's build something amazing together!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <form onSubmit={handleSubmit} className="space-y-4 animate-fade-up">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="min-h-[150px] resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full group">
                Send Message
                <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>

            <div className="flex flex-col justify-center animate-fade-up">
              <h3 className="text-2xl font-semibold mb-6">Connect on Social Media</h3>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out through any of these platforms. I'm always open to discussing 
                new projects, creative ideas, or opportunities.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="outline"
                    size="lg"
                    asChild
                    className="hover-glow group"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <social.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                      <span>{social.label}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
