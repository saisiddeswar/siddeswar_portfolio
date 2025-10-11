import { Linkedin, Github, Twitter, Mail, Heart } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:siddeswar@example.com", label: "Email" },
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
            © 2025 Bandaru Sai Siddeswar. Built with <Heart className="h-4 w-4 text-destructive fill-destructive" /> using Lovable.
          </p>
        </div>
      </div>
    </footer>
  );
};
