import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, ExternalLink, Calendar, TrendingUp } from "lucide-react";

const publications = [
  {
    title: "Advancing Industrial Object Detection Through Domain Adaptation",
    authors: "Fatima, Z., Zardari, S., & Tanveer, M. H.",
    journal: "Actuators",
    year: 2024,
    volume: "13(12), 513",
    impactFactor: 2.4,
    type: "Journal Article",
    status: "Published",
    description: "A comprehensive study on improving industrial object detection systems through advanced domain adaptation techniques."
  },
  {
    title: "3D Outdoor Object Detection in Quadrupedal Robots",
    authors: "Tanveer, M.H.; Fatima, Z.; et al.",
    journal: "Actuators",
    year: 2024,
    volume: "13, 422",
    impactFactor: 2.4,
    type: "Journal Article",
    status: "Published",
    description: "Novel approaches to 3D object detection for autonomous quadrupedal robotic systems in outdoor environments."
  },
  {
    title: "Production Plant and Warehouse Automation with IoT & Industry 5.0",
    authors: "Fatima, Z., Tanveer, M.H., et al.",
    journal: "Applied Sciences",
    year: 2022,
    volume: "12, 2053",
    impactFactor: 2.5,
    type: "Journal Article",
    status: "Published",
    description: "Integration of IoT technologies and Industry 5.0 principles for advanced production plant and warehouse automation."
  },
  {
    title: "Performance Comparison of Object Detection Models for Road Sign Detection",
    authors: "Fatima, Z., et al.",
    journal: "IJACSA",
    year: 2024,
    type: "Journal Article",
    status: "Published",
    description: "Comparative analysis of various object detection models specifically optimized for road sign detection applications."
  }
];

const researchInterests = [
  "Computer Information Systems & Software Engineering",
  "Machine Learning & AI Applications",
  "Data Science & Big Data Analytics", 
  "Computer Vision & Image Processing",
  "Educational Technologies & Industry-Academic Partnerships"
];

const PublicationsSection = () => {
  return (
    <section id="publications" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="section-header text-center">Publications & Research</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge research contributions in computer science, machine learning, and automation 
            with 25+ publications in peer-reviewed journals and conferences.
          </p>
        </div>

        {/* Publication Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 fade-in">
          <Card className="professional-card hover-lift text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Total Publications</div>
            </CardContent>
          </Card>
          <Card className="professional-card hover-lift text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-accent mb-2">5</div>
              <div className="text-sm text-muted-foreground">Under Review</div>
            </CardContent>
          </Card>
          <Card className="professional-card hover-lift text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-success mb-2">2.4+</div>
              <div className="text-sm text-muted-foreground">Avg Impact Factor</div>
            </CardContent>
          </Card>
        </div>

        {/* Selected Publications */}
        <div className="mb-12 fade-in-delay">
          <h3 className="text-2xl font-bold text-foreground mb-6">Selected Publications</h3>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Card key={index} className="professional-card hover-lift">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-2">
                        <BookOpen className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <CardTitle className="text-lg text-foreground leading-tight">
                            {pub.title}
                          </CardTitle>
                          <p className="text-muted-foreground mt-1">{pub.authors}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        {pub.type}
                      </Badge>
                      <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                        {pub.status}
                      </Badge>
                      {pub.impactFactor && (
                        <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          IF: {pub.impactFactor}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="font-medium text-primary">{pub.journal}</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{pub.year}</span>
                      </div>
                      {pub.volume && <span>{pub.volume}</span>}
                    </div>
                    <p className="text-muted-foreground">{pub.description}</p>
                    <Button variant="outline" size="sm" className="hover-lift">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Publication
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Research Interests */}
        <div className="fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Research Interests</h3>
          <Card className="professional-card">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-4">
                {researchInterests.map((interest, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                    <span className="text-muted-foreground">{interest}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;