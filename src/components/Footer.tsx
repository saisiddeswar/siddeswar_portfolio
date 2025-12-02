import { Linkedin, Github, Mail, Heart } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/saisiddeswar/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/saisiddeswar", label: "GitHub" },
  { icon: Mail, href: "mailto:siddeswar0605@gmail.com", label: "Email" },
];

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all hover-glow"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          
          <p className="text-center text-muted-foreground flex items-center gap-2">
            © 2025 Bandaru Sai Siddeswar. Built with <Heart className="h-4 w-4 text-destructive fill-destructive" /> and passion.
          </p>
        </div>
      </div>
    </footer>
  );
};
