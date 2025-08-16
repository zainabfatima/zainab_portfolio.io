import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Calendar, Code, Zap } from "lucide-react";

// Import project images
import whatsappAnalyzer from "@/assets/whatsapp-analyzer.jpg";
import personalAssistant from "@/assets/personal-assistant.jpg";
import voiceAssistant from "@/assets/voice-assistant.jpg";
import golfAnalyzer from "@/assets/golf-analyzer.jpg";
import signLanguage from "@/assets/sign-language.jpg";
import accidentDashboard from "@/assets/accident-dashboard.jpg";
import roboNavigator from "@/assets/robo-navigator.jpg";
import roadDetection from "@/assets/road-detection.jpg";
import roboticGripper from "@/assets/robotic-gripper.jpg";
import smartBilling from "@/assets/smart-billing.jpg";

const githubProjects = [
  {
    name: "WhatsApp Chat Analyzer",
    description: "A Python-based tool to analyze and visualize WhatsApp chat data from exported .txt files. It helps understand conversations through statistics, activity trends, and emoji usage.",
    tech: ["Python", "Data Analysis", "Visualization"],
    lastUpdated: "3 days ago",
    category: "Data Science",
    image: whatsappAnalyzer
  },
  {
    name: "Personal Data Assistant",
    description: "A personalized AI assistant that reads, understands, and answers questions about documents using LLMs, combining LangChain, OpenAI GPT models, and advanced NLP.",
    tech: ["Python", "LangChain", "OpenAI", "NLP"],
    lastUpdated: "4 days ago",
    category: "AI/ML",
    image: personalAssistant
  },
  {
    name: "Multi-lingual Voice Assistant",
    description: "AI-powered application supporting multiple languages, transcribing voice using OpenAI Whisper and processing requests with advanced language models.",
    tech: ["Python", "OpenAI Whisper", "Speech Recognition"],
    lastUpdated: "1 week ago",
    category: "AI/ML",
    image: voiceAssistant
  },
  {
    name: "AI Golf Swing Analyzer",
    description: "Uses Google's Mediapipe to estimate human body keypoints from golf swing videos and calculates movement angles for performance analysis.",
    tech: ["Python", "Mediapipe", "Computer Vision"],
    lastUpdated: "1 week ago",
    category: "Computer Vision",
    image: golfAnalyzer
  },
  {
    name: "Language Recognizer",
    description: "Deep neural network model that recognizes three sign language gestures: 'hello', 'thanks', and 'iloveu' using advanced computer vision techniques.",
    tech: ["Python", "Deep Learning", "Computer Vision"],
    lastUpdated: "1 week ago",
    category: "Deep Learning",
    image: signLanguage
  },
  {
    name: "AccidentInsight - US EDA Dashboard",
    description: "Comprehensive Exploratory Data Analysis on over 2.8 million US accident records with interactive dashboard and insights.",
    tech: ["Python", "Pandas", "Data Visualization"],
    lastUpdated: "2 weeks ago",
    category: "Data Science",
    image: accidentDashboard
  }
];

const featuredProjects = [
  {
    name: "IntelliLift RoboNavigator",
    period: "In Progress",
    description: "A robotics project integrating a robotic arm on a mobile platform to autonomously detect, navigate, and manipulate objects based on natural language commands using 6D pose estimation.",
    tech: ["ROS", "Gazebo", "ArUco Markers", "6D Pose Estimation", "LLMs"],
    status: "In Progress",
    type: "Research Project",
    image: roboNavigator
  },
  {
    name: "Road Object Detection and Tracking with DeepSORT and YOLOv8",
    period: "Jul 2024 - Aug 2024",
    description: "Enhanced road safety and traffic management system using YOLOv7 and DeepSORT for accurate object detection and tracking on the BDD100K dataset.",
    tech: ["YOLOv7", "DeepSORT", "Computer Vision", "BDD100K"],
    status: "Completed",
    type: "Academic Project",
    image: roadDetection
  },
  {
    name: "Optimal Robotic Arm Gripper (FYP)",
    period: "Aug 2022 - Aug 2023",
    description: "Final Year Design Project improving object grasping in warehouses with autonomous robotic arm using dual monocular cameras for 6D object pose estimation.",
    tech: ["Computer Vision", "Robotics", "6D Pose Estimation", "Kinematic Modeling"],
    status: "Completed",
    type: "Final Year Project",
    image: roboticGripper
  },
  {
    name: "SmartScan Billing Assistant",
    period: "May 2024 - Jul 2024",
    description: "Computer vision-based automated billing system detecting products and calculating totals using camera input, implemented with YOLOv8 for 20+ products.",
    tech: ["YOLOv8", "Computer Vision", "Object Detection", "Real-time Processing"],
    status: "Completed",
    type: "Commercial Project",
    image: smartBilling
  }
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "AI/ML": return "bg-primary text-primary-foreground";
    case "Computer Vision": return "bg-accent text-accent-foreground";
    case "Data Science": return "bg-success text-success-foreground";
    case "Deep Learning": return "bg-warning text-warning-foreground";
    default: return "bg-muted text-muted-foreground";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "In Progress": return "bg-warning/10 text-warning border-warning/20";
    case "Completed": return "bg-success/10 text-success border-success/20";
    default: return "bg-muted/10 text-muted-foreground border-muted/20";
  }
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="section-header text-center">Projects & Development</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative projects spanning AI/ML, computer vision, robotics, and data science, 
            demonstrating practical applications of cutting-edge technologies.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-12 fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-6">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="professional-card hover-lift overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover hover-scale"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-lg text-foreground mb-2">
                        {project.name}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>{project.period}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Badge variant="outline" className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {project.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="hover-lift">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* GitHub Projects */}
        <div className="fade-in-delay">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-foreground">GitHub Projects</h3>
            <Button variant="outline" asChild className="hover-lift">
              <a href="https://github.com/zainabfatima" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                View All on GitHub
              </a>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {githubProjects.map((project, index) => (
              <Card key={index} className="professional-card hover-lift overflow-hidden">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover hover-scale"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <CardTitle className="text-base text-foreground mb-2">
                        {project.name}
                      </CardTitle>
                      <Badge className={getCategoryColor(project.category)} variant="secondary">
                        {project.category}
                      </Badge>
                    </div>
                    <Code className="h-4 w-4 text-primary flex-shrink-0" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 3).map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tech.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      Updated {project.lastUpdated}
                    </span>
                    <Button variant="ghost" size="sm" className="hover-scale">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 fade-in">
          <Card className="professional-card hover-lift text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">GitHub Repositories</div>
            </CardContent>
          </Card>
          <Card className="professional-card hover-lift text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-accent mb-2">10+</div>
              <div className="text-sm text-muted-foreground">AI/ML Projects</div>
            </CardContent>
          </Card>
          <Card className="professional-card hover-lift text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-success mb-2">8+</div>
              <div className="text-sm text-muted-foreground">Computer Vision</div>
            </CardContent>
          </Card>
          <Card className="professional-card hover-lift text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-warning mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Data Science</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;