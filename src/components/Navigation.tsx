import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Mail, Phone, Github, Linkedin, MapPin } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <div className="flex items-center space-x-2">
            <h2 className="text-xl font-bold text-primary">Zainab Fatima</h2>
            <span className="text-sm text-muted-foreground">PhD, IEEE Senior Member</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('experience')} className="nav-link">Experience</button>
            <button onClick={() => scrollToSection('education')} className="nav-link">Education</button>
            <button onClick={() => scrollToSection('publications')} className="nav-link">Publications</button>
            <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          </nav>

          {/* Contact Links */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="ghost" size="sm" asChild>
              <a href="mailto:zainab.ned@cloud.neduet.edu.pk" className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="tel:+16784989204" className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com/zainabfatima" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('about')} className="nav-link text-left">About</button>
              <button onClick={() => scrollToSection('experience')} className="nav-link text-left">Experience</button>
              <button onClick={() => scrollToSection('education')} className="nav-link text-left">Education</button>
              <button onClick={() => scrollToSection('publications')} className="nav-link text-left">Publications</button>
              <button onClick={() => scrollToSection('projects')} className="nav-link text-left">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link text-left">Contact</button>
            </div>
            <div className="flex items-center space-x-3 mt-4 pt-4 border-t border-border">
              <Button variant="ghost" size="sm" asChild>
                <a href="mailto:zainab.ned@cloud.neduet.edu.pk">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="tel:+16784989204">
                  <Phone className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://github.com/zainabfatima" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navigation;