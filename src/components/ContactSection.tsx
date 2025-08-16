import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Calendar } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="section-header text-center">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Let's collaborate on innovative research, discuss academic opportunities, or explore 
            potential partnerships in computer science and engineering education.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6 fade-in">
            <Card className="professional-card hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start p-0 h-auto" asChild>
                  <a href="mailto:zainab.ned@cloud.neduet.edu.pk" className="block">
                    <div className="text-left">
                      <div className="font-medium">Academic</div>
                      <div className="text-sm text-muted-foreground">zainab.ned@cloud.neduet.edu.pk</div>
                    </div>
                  </a>
                </Button>
                <Button variant="ghost" className="w-full justify-start p-0 h-auto" asChild>
                  <a href="mailto:zainab.ned@gmail.com" className="block">
                    <div className="text-left">
                      <div className="font-medium">Personal</div>
                      <div className="text-sm text-muted-foreground">zainab.ned@gmail.com</div>
                    </div>
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="professional-card hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full justify-start p-0 h-auto" asChild>
                  <a href="tel:+16784989204">
                    <div className="text-left">
                      <div className="font-medium">+1 678-498-9204</div>
                      <div className="text-sm text-muted-foreground">US Number</div>
                    </div>
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="professional-card hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground">
                  <div className="font-medium text-foreground">Current Position</div>
                  <div className="text-sm">Kennesaw State University</div>
                  <div className="text-sm">Department of Robotics and Mechatronics Engineering</div>
                  <div className="text-sm">Georgia, USA</div>
                </div>
              </CardContent>
            </Card>

            <Card className="professional-card hover-lift">
              <CardHeader>
                <CardTitle>Professional Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start hover-lift" asChild>
                  <a href="https://github.com/zainabfatima" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub Profile
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start hover-lift" asChild>
                  <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer">
                    <Calendar className="h-4 w-4 mr-2" />
                    Google Scholar
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start hover-lift" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn Profile
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 fade-in-delay">
            <Card className="professional-card">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <p className="text-muted-foreground">
                  Whether you're interested in research collaboration, academic opportunities, or have questions about my work, 
                  I'd love to hear from you.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Research collaboration, Academic opportunity, etc." />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please share details about your inquiry, research interests, or how we might collaborate..."
                      className="min-h-[120px]" 
                    />
                  </div>
                  
                  <Button className="w-full hero-gradient hero-text hover-lift" size="lg">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Research Collaboration Areas */}
            <Card className="professional-card mt-6">
              <CardHeader>
                <CardTitle>Research Collaboration Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Current Research Areas</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Deep Learning Domain Adaptation</li>
                      <li>• Computer Vision Applications</li>
                      <li>• Robotics and Automation</li>
                      <li>• Industrial Object Detection</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Collaboration Interests</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Joint Research Publications</li>
                      <li>• Grant Proposal Development</li>
                      <li>• Industry-Academic Partnerships</li>
                      <li>• Student Exchange Programs</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;