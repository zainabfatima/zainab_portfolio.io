import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Building } from "lucide-react";

const experiences = [
  {
    title: "Visiting Research Scholar",
    company: "Kennesaw State University",
    location: "Georgia, USA",
    department: "Department of Robotics and Mechatronics Engineering",
    period: "Current",
    type: "Research",
    description: "Research focus: Deep Learning Domain Adaptation for computer vision, robotics, and automation.",
    highlights: [
      "Deep Learning Domain Adaptation research",
      "Computer vision and robotics applications",
      "Automation systems development"
    ]
  },
  {
    title: "Lecturer",
    company: "NED University of Engineering & Technology",
    location: "Pakistan",
    department: "Computer Science Department",
    period: "Nov 2018 – 2024",
    type: "Academic",
    description: "Delivered comprehensive education in Computer Science, Data Science, and Machine Learning with focus on practical applications and industry alignment.",
    highlights: [
      "Delivered face-to-face and hybrid lectures in CS, Database Systems, Data Science, ML, and Computer Vision",
      "Designed OBE-aligned syllabi in compliance with ABET standards",
      "Supervised 13+ capstone projects in software engineering, AI, and database systems",
      "Created practical lab assessments, ML projects, and data science portfolios",
      "Participated in curriculum development and accreditation processes"
    ]
  },
  {
    title: "Research Assistant",
    company: "RCAI Research Lab, NED University",
    location: "Pakistan",
    department: "Research Center for Artificial Intelligence",
    period: "2014 – 2016",
    type: "Research",
    description: "Contributed to cutting-edge research projects while developing technical solutions and conducting training workshops.",
    highlights: [
      "Developed software, database, and network solutions for research projects",
      "Authored technical documentation and contributed to peer-reviewed publications",
      "Conducted training workshops on AI, ML, and embedded systems"
    ]
  },
  {
    title: "Software Developer",
    company: "XPACE Technologies",
    location: "Pakistan",
    department: "Development Team",
    period: "Jan 2014 – Oct 2018",
    type: "Industry",
    description: "Developed responsive web applications with integrated database solutions using modern technologies.",
    highlights: [
      "Developed responsive web applications with database integration",
      "Worked with HTML, CSS, JavaScript, Python, and C# in cross-functional teams",
      "Delivered scalable solutions for various client requirements"
    ]
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "Research": return "bg-primary text-primary-foreground";
    case "Academic": return "bg-accent text-accent-foreground";
    case "Industry": return "bg-success text-success-foreground";
    default: return "bg-muted text-muted-foreground";
  }
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="section-header text-center">Academic & Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive journey through academia, research, and industry, building expertise in 
            computer science education, cutting-edge research, and practical software development.
          </p>
        </div>

        <div className="space-y-8 fade-in-delay">
          {experiences.map((exp, index) => (
            <Card key={index} className="professional-card hover-lift">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-xl text-foreground">{exp.title}</CardTitle>
                      <Badge className={getTypeColor(exp.type)}>{exp.type}</Badge>
                    </div>
                    <div className="space-y-1 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
                {exp.department && (
                  <p className="text-sm text-primary font-medium">{exp.department}</p>
                )}
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Key Contributions:</h4>
                  <ul className="space-y-1">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;