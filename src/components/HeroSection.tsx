import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="about" className="pt-24 pb-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Info */}
          <div className="space-y-6 fade-in">
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
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Accomplished educator with 8+ years of higher education experience in 
                <span className="text-primary font-semibold"> Computer Information Systems, Data Science, Machine Learning, and Computer Vision</span>. 
                Currently a Visiting Research Scholar at Kennesaw State University, focusing on Deep Learning Domain Adaptation.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
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