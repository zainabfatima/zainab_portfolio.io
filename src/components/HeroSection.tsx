import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Download, ExternalLink } from "lucide-react";
import profileImage from "@/assets/zainab-profile.jpg";

const HeroSection = () => {
  return (
    <section id="about" className="pt-24 pb-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Profile Info */}
          <div className="lg:col-span-2 space-y-6 fade-in">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-sm">IEEE Senior Member</Badge>
                <Badge variant="outline" className="text-sm">PhD Computer Science</Badge>
                <Badge variant="outline" className="text-sm">Visiting Research Scholar</Badge>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Zainab Fatima
                <span className="block text-3xl lg:text-4xl text-primary font-semibold mt-2">
                  Computer Science & Engineering Educator
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                Accomplished educator with 8+ years of higher education experience in 
                <span className="text-primary font-semibold"> Computer Information Systems, Data Science, Machine Learning, and Computer Vision</span>. 
                Currently a Visiting Research Scholar at Kennesaw State University, focusing on Deep Learning Domain Adaptation.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 678-498-9204</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>zainab.ned@cloud.neduet.edu.pk</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Kennesaw State University, Georgia, USA</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="hero-gradient hero-text hover-lift">
                <Mail className="h-4 w-4 mr-2" />
                Contact Me
              </Button>
              <Button variant="outline" size="lg" className="hover-lift">
                <Download className="h-4 w-4 mr-2" />
                Download CV
              </Button>
              <Button variant="ghost" size="lg" asChild className="hover-lift">
                <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Google Scholar
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:col-span-1 flex justify-center fade-in-delay">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-large hover-lift">
                <img 
                  src={profileImage} 
                  alt="Zainab Fatima - Computer Science Educator and Researcher"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 hero-gradient rounded-2xl flex items-center justify-center shadow-medium">
                <span className="text-2xl font-bold text-primary-foreground">PhD</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 fade-in-delay">
          <div className="text-center professional-card hover-lift">
            <div className="text-3xl font-bold text-primary">8+</div>
            <div className="text-sm text-muted-foreground">Years Teaching</div>
          </div>
          <div className="text-center professional-card hover-lift">
            <div className="text-3xl font-bold text-primary">25+</div>
            <div className="text-sm text-muted-foreground">Publications</div>
          </div>
          <div className="text-center professional-card hover-lift">
            <div className="text-3xl font-bold text-primary">13+</div>
            <div className="text-sm text-muted-foreground">Capstone Projects</div>
          </div>
          <div className="text-center professional-card hover-lift">
            <div className="text-3xl font-bold text-primary">IEEE</div>
            <div className="text-sm text-muted-foreground">Senior Member</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;