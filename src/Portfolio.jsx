import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, FileText } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Machine Learning for Climate Data Analysis",
      description: "Developed a deep learning model to predict climate patterns using satellite data. Achieved 92% accuracy in temperature forecasting.",
      tech: ["Python", "TensorFlow", "Pandas", "NumPy"],
      github: "https://github.com/yourusername/climate-ml",
      demo: "https://climate-analysis-demo.vercel.app"
    },
    {
      title: "Distributed Computing Framework",
      description: "Built a fault-tolerant distributed system for processing large datasets across multiple nodes with automatic load balancing.",
      tech: ["Java", "Apache Kafka", "Docker", "Kubernetes"],
      github: "https://github.com/yourusername/distributed-framework",
      paper: "https://arxiv.org/abs/2024.12345"
    },
    {
      title: "Neural Network Optimization Suite",
      description: "Created optimization algorithms for neural network training, reducing computational time by 35% while maintaining accuracy.",
      tech: ["C++", "CUDA", "PyTorch", "OpenMP"],
      github: "https://github.com/yourusername/nn-optimization"
    }
  ];

  const publications = [
    {
      title: "Efficient Deep Learning Models for Real-Time Climate Prediction",
      authors: "Your Name, Dr. Advisor, Dr. Collaborator",
      venue: "International Conference on Machine Learning (ICML) 2024",
      link: "https://proceedings.mlr.press/v202/yourname24.html"
    },
    {
      title: "Scalable Distributed Systems for Big Data Processing",
      authors: "Your Name, Co-Author Name",
      venue: "IEEE Transactions on Parallel and Distributed Systems, 2024",
      link: "https://ieeexplore.ieee.org/document/10123456"
    }
  ];

  const skills = {
    "Programming Languages": ["Python", "Java", "C++", "JavaScript", "R", "MATLAB"],
    "Machine Learning": ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV"],
    "Systems & Tools": ["Docker", "Kubernetes", "Git", "Linux", "AWS", "GCP"],
    "Research Areas": ["Deep Learning", "Distributed Systems", "Climate Modeling", "Optimization"]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-light text-gray-900 mb-2">Your Full Name</h1>
          <p className="text-lg text-gray-600">BSc. Computer Engineering Graduate, Aspiring PhD Researcher</p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* About Me / Contact */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-light text-gray-900 mb-4">About Me</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                I am a Computer Engineering graduate with a strong foundation in machine learning, distributed systems, 
                and computational research. My work focuses on developing efficient algorithms for large-scale data processing 
                and applying deep learning techniques to solve real-world problems in climate science and optimization.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I am passionate about pursuing doctoral research in machine learning and distributed computing, 
                with particular interest in developing scalable solutions for scientific computing applications.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-light text-gray-900 mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Mail className="w-4 h-4 mr-3" />
                  <span>your.email@university.edu</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-3" />
                  <span>City, State, Country</span>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-6">
                <a href="https://github.com/yourusername" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/yourprofile" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="/cv.pdf" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <FileText className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Selected Projects</h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="border-l-2 border-gray-200 pl-6">
                <h3 className="text-xl font-medium text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.github} className="flex items-center text-blue-600 hover:text-blue-800 text-sm">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                  {project.demo && (
                    <a href={project.demo} className="flex items-center text-blue-600 hover:text-blue-800 text-sm">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </a>
                  )}
                  {project.paper && (
                    <a href={project.paper} className="flex items-center text-blue-600 hover:text-blue-800 text-sm">
                      <FileText className="w-4 h-4 mr-1" />
                      Paper
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Publications & Research</h2>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div key={index} className="border-l-2 border-gray-200 pl-6">
                <h3 className="text-lg font-medium text-gray-900 mb-1">
                  <a href={pub.link} className="hover:text-blue-600 transition-colors">
                    {pub.title}
                  </a>
                </h3>
                <p className="text-gray-600 mb-1">{pub.authors}</p>
                <p className="text-gray-500 italic">{pub.venue}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-light text-gray-900 mb-8">Skills & Research Interests</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-lg font-medium text-gray-900 mb-3">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center">
          <p className="text-gray-600">
            © 2025 Your Full Name. Available for PhD research opportunities.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;