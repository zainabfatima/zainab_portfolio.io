import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

const education = [
  {
    degree: "Visiting Research Scholar",
    institution: "Kennesaw State University",
    location: "Georgia, USA",
    department: "Department of Robotics and Mechatronics Engineering",
    period: "Current",
    status: "In Progress",
    focus: "Deep Learning Domain Adaptation for computer vision, robotics, and automation",
    type: "Research",
    highlights: [
      "Advanced research in Deep Learning Domain Adaptation",
      "Focus on computer vision applications",
      "Robotics and automation systems research"
    ]
  },
  {
    degree: "Master of Engineering",
    institution: "NED University of Engineering & Technology",
    location: "Pakistan",
    department: "Computer Architecture & System Design",
    period: "2014–2017",
    gpa: "3.87 (U.S. Equivalent)",
    type: "Graduate",
    highlights: [
      "Specialized in Computer Architecture & System Design",
      "Strong focus on advanced computing systems",
      "Research-oriented curriculum with practical applications"
    ]
  },
  {
    degree: "Bachelor of Engineering",
    institution: "NED University of Engineering & Technology",
    location: "Pakistan",
    department: "Computer Information & Systems Engineering",
    period: "2010–2014",
    gpa: "3.7",
    type: "Undergraduate",
    highlights: [
      "Comprehensive foundation in Computer Information Systems",
      "Systems Engineering principles and applications",
      "Strong academic performance with practical project experience"
    ]
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "Research": return "bg-primary text-primary-foreground";
    case "Graduate": return "bg-accent text-accent-foreground";
    case "Undergraduate": return "bg-success text-success-foreground";
    default: return "bg-muted text-muted-foreground";
  }
};

const EducationSection = () => {
  return (
    <section id="education" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="section-header text-center">Education</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A strong academic foundation built through rigorous study and research at leading institutions, 
            spanning from undergraduate studies to advanced research positions.
          </p>
        </div>

        <div className="space-y-6 fade-in-delay">
          {education.map((edu, index) => (
            <Card key={index} className="professional-card hover-lift">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <CardTitle className="text-xl text-foreground">{edu.degree}</CardTitle>
                      <Badge className={getTypeColor(edu.type)}>{edu.type}</Badge>
                      {edu.status && (
                        <Badge variant="outline" className="bg-warning/10 text-warning border-warning/20">
                          {edu.status}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="space-y-1 text-muted-foreground">
                      <h3 className="font-semibold text-foreground text-lg">{edu.institution}</h3>
                      <p className="text-primary font-medium">{edu.department}</p>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                      {edu.gpa && (
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4" />
                          <span>GPA: {edu.gpa}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                {edu.focus && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Research Focus:</h4>
                    <p className="text-muted-foreground">{edu.focus}</p>
                  </div>
                )}
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Key Areas:</h4>
                  <ul className="space-y-1">
                    {edu.highlights.map((highlight, idx) => (
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

        {/* Professional Development */}
        <div className="mt-12 fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Professional Development & Service</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="professional-card hover-lift">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  IEEE Senior Member
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">ID: 101294431</p>
                <p className="text-sm text-muted-foreground">
                  Recognition for significant contributions to the field of engineering and technology
                </p>
              </CardContent>
            </Card>

            <Card className="professional-card hover-lift">
              <CardHeader>
                <CardTitle className="text-lg">Academic Service</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Peer Reviewer: Scientific Reports (Springer Nature)</li>
                  <li>• Peer Reviewer: Security and Privacy (Wiley)</li>
                  <li>• IEEE Conference Program Committee Member</li>
                  <li>• Academic Quality Assurance Committee Member</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;