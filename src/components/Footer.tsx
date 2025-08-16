import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, Github, Linkedin, Heart, ExternalLink } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Zainab Fatima, PhD</h3>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Computer Science & Engineering Educator with 8+ years of experience in higher education, 
              specializing in AI, Machine Learning, and Computer Vision. Currently advancing research 
              in Deep Learning Domain Adaptation at Kennesaw State University.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
              <span>IEEE Senior Member ID: 101294431</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('about')} 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('experience')} 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('education')} 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Education
              </button>
              <button 
                onClick={() => scrollToSection('publications')} 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Publications
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Projects
              </button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a 
                href="mailto:zainab.ned@cloud.neduet.edu.pk" 
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                Academic Email
              </a>
              <a 
                href="tel:+16784989204" 
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                <Phone className="h-4 w-4" />
                +1 678-498-9204
              </a>
              <div className="flex items-center gap-3 pt-2">
                <Button variant="ghost" size="sm" className="p-0 h-auto text-primary-foreground/80 hover:text-primary-foreground" asChild>
                  <a href="https://github.com/zainabfatima" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="p-0 h-auto text-primary-foreground/80 hover:text-primary-foreground" asChild>
                  <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="p-0 h-auto text-primary-foreground/80 hover:text-primary-foreground" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Zainab Fatima. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-sm text-primary-foreground/60">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-400 fill-current" />
            <span>for academic excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;