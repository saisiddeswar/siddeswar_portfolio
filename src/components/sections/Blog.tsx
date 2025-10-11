import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
  {
    title: "Building Scalable Applications with MERN Stack",
    intro: "Explore best practices for creating production-ready full-stack applications...",
    date: "Coming Soon",
    category: "Development",
    readTime: "5 min read",
  },
  {
    title: "AI Integration in Modern Web Apps",
    intro: "Learn how to integrate AI capabilities into your web applications seamlessly...",
    date: "Coming Soon",
    category: "AI & ML",
    readTime: "7 min read",
  },
  {
    title: "Winning Strategies for Hackathons",
    intro: "Tips and tricks from a two-time hackathon runner-up to help you succeed...",
    date: "Coming Soon",
    category: "Career",
    readTime: "4 min read",
  },
];

export const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-up">
            Latest <span className="gradient-text">Blog Posts</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card
                key={post.title}
                className="hover-glow animate-fade-up border-border group flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">
                    {post.category}
                  </Badge>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {post.intro}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="group/btn w-full" disabled>
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-8 animate-fade-up">
            More articles coming soon! Stay tuned for insights on web development, AI, and tech innovations.
          </p>
        </div>
      </div>
    </section>
  );
};
