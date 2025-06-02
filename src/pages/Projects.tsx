import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Youtube } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Custom ALU",
      duration: "July 2024 – Sep 2024",
      description: "Designed an ALU module with enhanced multiplication and addition using Verilog.",
      highlights: [
        "Used carry look-ahead adder to boost speed by 68%",
        "Implemented carry-save multiplier increasing performance by 80%",
        "Optimized for FPGA implementation with reduced resource utilization"
      ],
      technologies: ["Verilog", "Vivado", "FPGA", "Digital Design"],
      githubUrl: "#",
      category: "Digital Design"
    },
    {
      title: "Embedded Security System",
      duration: "Mar 2024 – June 2024",
      description: "Developed a comprehensive security system using STM32 microcontroller with cryptographic features.",
      highlights: [
        "Implemented AES encryption for secure data transmission",
        "Integrated multiple sensors for environmental monitoring",
        "Designed custom PCB for optimal component placement"
      ],
      technologies: ["C", "STM32", "Eagle", "Cryptography"],
      githubUrl: "#",
      category: "Embedded Systems"
    },
    {
      title: "Network Simulation Platform",
      duration: "Jan 2024 – Apr 2024",
      description: "Built a comprehensive network simulation environment for testing routing protocols.",
      highlights: [
        "Simulated complex network topologies with Kathara",
        "Implemented custom routing algorithms",
        "Analyzed network performance under various conditions"
      ],
      technologies: ["Python", "Kathara", "Docker", "Networking"],
      githubUrl: "https://github.com/k-ojo/knust-sns_labs.git",
      category: "Software Development"
    },
    {
      title: "Custom Linux Shell",
      duration: "Mar 2024 – Apr 2024",
      description: "Developed a custom shell in C for Linux, enabling users to execute system commands and manage processes.",
      highlights: [
        "Executed standard Linux commands (e.g., ls, pwd)",
        "Implemented input/output redirection (>, <)",
        "Supported command piping (|) and background processes (&)",
        "Built a basic command prompt with custom parsing"
      ],
      technologies: ["C", "Linux", "System Programming", "GCC"],
      githubUrl: "https://github.com/blackdreamer15/simple_shell.git",
      category: "System Programming"
    },
    {
      title: "Online Banking Platform",
      duration: "Feb 2024 – May 2024",
      description: "Built a full-stack online banking system with a TypeScript-based frontend and a Python FastAPI backend, supporting user authentication, balance tracking, and secure transactions.",
      highlights: [
        "Developed a responsive and user-friendly frontend with TypeScript and React",
        "Implemented secure backend APIs using FastAPI for account management and transactions",
        "Enabled user login, dashboard with balance and transaction history, and bank transfers",
        "Integrated MongoDB for persistent data storage and Google Drive for document uploads"
      ],
      technologies: ["TypeScript", "React", "FastAPI", "MongoDB", "Google Drive API", "Tailwind CSS"],
      githubUrl: "https://github.com/k-ojo/eBank.git",
      category: "Full-Stack Development"
    }


  ];

  const categories = ["All", "Digital Design", "Embedded Systems", "Software Development"];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-24 pb-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Projects</h1>
            <p className="text-xl text-gray-600">A showcase of my technical work and innovations</p>
          </div>

          {/* Project Categories Filter */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant="outline"
                  className="px-4 py-2 cursor-pointer hover:bg-blue-100 transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 h-full">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                  <p className="text-sm text-gray-500">{project.duration}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-gray-700">{project.description}</p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="text-gray-700 text-sm flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button asChild className="bg-gray-900 hover:bg-gray-800">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* YouTube Section */}
          <div className="mt-20">
            <Card className="bg-gradient-to-r from-red-50 to-pink-50">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-gray-900">YouTube Channel</CardTitle>
                <p className="text-gray-600">Educational content and programming tutorials</p>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-xl font-semibold mb-4">GaviviTeaches</h3>
                  <p className="text-gray-700 mb-6">
                    Join me on my YouTube channel where I share programming tutorials, engineering concepts,
                    and insights from my academic and professional journey. Perfect for students and anyone
                    interested in computer engineering and programming.
                  </p>
                  <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                    <a href="https://youtube.com/GaviviTeaches" target="_blank" rel="noopener noreferrer">
                      <Youtube className="w-5 h-5 mr-2" />
                      Visit Channel
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
