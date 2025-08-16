import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Brain, Globe, Server, Monitor } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Python", level: 95, description: "Advanced data science, ML, and web development" },
      { name: "C/C++", level: 85, description: "System programming and algorithms" },
      { name: "JavaScript", level: 80, description: "Web development and React applications" },
      { name: "C#", level: 75, description: "Desktop and web applications" },
      { name: "MATLAB", level: 70, description: "Scientific computing and analysis" }
    ]
  },
  {
    title: "Data Science & Machine Learning",
    icon: Brain,
    skills: [
      { name: "PyTorch", level: 90, description: "Deep learning and neural networks" },
      { name: "Scikit-learn", level: 88, description: "Machine learning algorithms" },
      { name: "Pandas & NumPy", level: 92, description: "Data manipulation and analysis" },
      { name: "TensorFlow", level: 80, description: "Deep learning frameworks" },
      { name: "OpenCV", level: 85, description: "Computer vision and image processing" }
    ]
  },
  {
    title: "Database & Systems",
    icon: Database,
    skills: [
      { name: "SQL Server", level: 90, description: "Database design and optimization" },
      { name: "MySQL", level: 85, description: "Relational database management" },
      { name: "Microsoft Access", level: 80, description: "Desktop database applications" },
      { name: "Linux Administration", level: 78, description: "System administration and networking" },
      { name: "Windows Server", level: 82, description: "Server management and configuration" }
    ]
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: [
      { name: "React", level: 85, description: "Modern web application development" },
      { name: "HTML5/CSS3", level: 88, description: "Frontend web technologies" },
      { name: "Django/Flask", level: 80, description: "Python web frameworks" },
      { name: "FastAPI", level: 75, description: "High-performance API development" },
      { name: "ASP.NET", level: 70, description: "Microsoft web development framework" }
    ]
  }
];

const coursesTaught = [
  {
    category: "Core Technology",
    courses: [
      "Database Systems (SQL, Microsoft Access)",
      "Web Development (HTML, CSS, JavaScript)",
      "Computer Networks & Administration",
      "Information Security & Software Engineering",
      "Operating Systems"
    ]
  },
  {
    category: "Data Science & AI",
    courses: [
      "Data Science & Analytics (Python, Pandas, NumPy)",
      "Machine Learning Algorithms",
      "Deep Learning & Computer Vision (OpenCV)",
      "Natural Language Processing",
      "Data Visualization (Power BI)"
    ]
  },
  {
    category: "Programming",
    courses: [
      "Data Structures & Algorithms (C, C++, Python)",
      "Object-Oriented Programming",
      "Python for Data Science",
      "Advanced Programming Concepts"
    ]
  },
  {
    category: "Laboratory Work",
    courses: [
      "Computer Systems Laboratory",
      "Network Configuration Laboratory",
      "Database Design Laboratory",
      "Machine Learning Laboratory",
      "Computer Vision Laboratory"
    ]
  }
];

const SkillsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="section-header text-center">Technical Skills & Teaching</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise in cutting-edge technologies combined with extensive teaching experience 
            across diverse computer science and engineering disciplines.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16 fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Technical Expertise</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="professional-card hover-lift">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <category.icon className="h-6 w-6 text-primary" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                      <p className="text-xs text-muted-foreground">{skill.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Courses Taught */}
        <div className="fade-in-delay">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Courses Taught</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {coursesTaught.map((category, index) => (
              <Card key={index} className="professional-card hover-lift">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.courses.map((course, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-muted-foreground text-sm">{course}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Professional Tools */}
        <div className="mt-12 fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Professional Tools & Software</h3>
          <Card className="professional-card">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Monitor className="h-4 w-4 text-primary" />
                    Development Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Visual Studio", "PyCharm", "Jupyter", "Git", "Docker"].map((tool, idx) => (
                      <Badge key={idx} variant="secondary">{tool}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Server className="h-4 w-4 text-primary" />
                    Database Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["SQL Server Management Studio", "MySQL Workbench", "Power BI", "Excel Advanced"].map((tool, idx) => (
                      <Badge key={idx} variant="secondary">{tool}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Brain className="h-4 w-4 text-primary" />
                    AI/ML Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Anaconda", "Google Colab", "Hugging Face", "Weights & Biases"].map((tool, idx) => (
                      <Badge key={idx} variant="secondary">{tool}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;