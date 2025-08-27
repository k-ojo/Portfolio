import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, FileText } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "CMOS analog integrated Circuit Design and Simulation",
      description: "Built a Verilog-based USB 1.1 PHY module, handling low-level signaling and ensuring interoperability with higher protocol layers.",
      tech: ["Vertuoso", "CentOS", "Cadance Design System", "Digital Oscilloscope"],
      github: "https://github.com/k-ojo/usb.git"
      //demo: "https://climate-analysis-demo.vercel.app"
    },
    {
      title: "USB",
      description: "Built a Verilog-based USB 1.1 PHY module, handling low-level signaling and ensuring interoperability with higher protocol layers.",
      tech: ["Verilog", "Quartus", "ModelSim", "Digital Oscilloscope", "Notion"],
      github: "https://github.com/k-ojo/usb.git"
      //demo: "https://climate-analysis-demo.vercel.app"
    },
    {
      title: " Investigation of Encryption and Firewalls using Kathara",
      description: "Investigated encryption algorithms and firewall configurations using Kathara to simulate network environments, enhancing understanding of network security principles.",
      tech: ["Docker", "Kathara", "Linux", "Wireshark"],
      github: "https://github.com/blackdreamer15/simple_shell.git",
      //paper: "https://arxiv.org/abs/2024.12345"
    },
    {
      title: "Cryptographic C Library for Blockchain",
      description: "Developed a C library implementing essential cryptographic functions for blockchain applications, including hashing.",
      tech: ["C", "Valgrind", "GDB"],
      github: "https://github.com/k-ojo/Knust-Computer_Labs/tree/main/blockchain/mylib"
    },
    {
      title: "PilOS: A Simple Real-Time Operating System",
      description: "Designing and implementing a lightweight real-time operating system (RTOS) for embedded systems, featuring task scheduling, inter-task communication, and resource management.",
      tech: ["C", "Valgrind", "GDB", "QEMU", "Assembly"],
      github: "https://github.com/k-ojo/PilOS.git"
    }
  ];

  const publications = [
    {
      title: "Review of Homomorphic Encryption Techniques for Data Privacy in Cloud Computing",
      authors: "Adjei, G.; HLORDJIE J.S.; OWUSU, R.S.",
      venue: "Unpublished, 2024",
      link: "/documents/HE_Review.pdf"
    }
  ];

  const skills = {
    "Programming Languages": ["C/C++", "ARMv7 Assembly", "Python", "Verilog", "MATLAB", "Javascript"],
    "Libraries": ["reg51", "pthreads", "OpenGL", "epoll/poll", "freetos"],
    "Systems & Tools": ["Docker", "Git", "Linux", "Make", "GDB", "Valgrind"],
    "Research Areas": ["Embedded Systems", "Quantum Computing", "Encryption Algorithms", "Optimization", "Operating Systems"]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-light text-gray-900 mb-2">Gideon Adjei</h1>
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
                I am a systems-oriented engineer with a strong foundation in low-level programming, digital design,
                and cryptography. My work spans from building hardware-level modules, such as a Verilog-based USB 1.1
                PHY, to implementing software systems like custom shells, distributed data processors, and real-time
                operating systems for embedded platforms. I am highly proficient in C/C++, Assembly, and Verilog,
                with practical experience in debugging and performance optimization using tools like GDB, Valgrind, and QEMU.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I enjoy working at the intersection of hardware and software, where efficiency, security, and reliability are critical.
                Beyond implementation, I am driven by research in quantum computing, optimization, and advanced system architectures,
                and I thrive in environments that demand deep problem-solving and precision.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-light text-gray-900 mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Mail className="w-4 h-4 mr-3" />
                  <span>gadjei12@st.knust.edu.gh</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-3" />
                  <span>+233 (59) 135-0125</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-3" />
                  <span>Kumasi, Ashanti Region, Ghana</span>
                </div>
              </div>

              <div className="flex space-x-4 mt-6">
                <a href="https://github.com/yourusername" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/yourprofile" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="/documents/cv.pdf" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <FileText className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Selected Academic Projects and Research</h2>
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

        {/* Document Repository */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Document Repository</h2>
          <div className="space-y-4">
            <div className="border-l-2 border-gray-200 pl-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900 mb-1">Curriculum Vitae</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Detailed academic and professional background, including education, projects, and technical skills.
                  </p>
                  <span className="text-gray-500 text-xs">PDF • 0.1MB</span>
                </div>
                <a href="/documents/cv.pdf" className="ml-4 text-gray-600 hover:text-gray-900">
                  <FileText className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="border-l-2 border-gray-200 pl-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900 mb-1">CMOS Analog IC Design</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Comprehensive documentation of the CMOS analog IC design simulation and testing methodology.
                  </p>
                  <span className="text-gray-500 text-xs">PDF • 3MB</span>
                </div>
                <a href="/documents/vlsi_lab.pdf" className="ml-4 text-gray-600 hover:text-gray-900">
                  <FileText className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="border-l-2 border-gray-200 pl-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900 mb-1">Encryption and Firewalls using Kathara</h3>
                  <p className="text-gray-600 text-sm mb-2">
                  Documentation for the Investigation of Encryption and Firewalls using Kathara.
                  </p>
                  <span className="text-gray-500 text-xs">PDF • 1.5MB</span>
                </div>
                <a href="/documents/encryption_and_firewalls.pdf" className="ml-4 text-gray-600 hover:text-gray-900">
                  <FileText className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/*
            <div className="border-l-2 border-gray-200 pl-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900 mb-1">Research Portfolio</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Collection of research summaries, publication drafts, and ongoing work in quantum computing and cryptography.
                  </p>
                  <span className="text-gray-500 text-xs">PDF • 8MB</span>
                </div>
                <a href="/documents/research_portfolio.pdf" className="ml-4 text-gray-600 hover:text-gray-900">
                  <FileText className="w-4 h-4" />
                </a>
              </div>
            </div>
            */}


            <div className="border-l-2 border-gray-200 pl-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900 mb-1">Academic Transcripts</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Official transcripts from KNUST Computer Engineering program with course details and grades.
                  </p>
                  <span className="text-gray-500 text-xs">PDF • 0.5MB</span>
                </div>
                <a href="/documents/transcript.pdf" className="ml-4 text-gray-600 hover:text-gray-900">
                  <FileText className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/*
            <div className="border-l-2 border-gray-200 pl-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900 mb-1">Project Code Samples</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Curated code examples showcasing C/C++, Verilog, and Assembly programming expertise with detailed comments.
                  </p>
                  <span className="text-gray-500 text-xs">PDF • 4MB</span>
                </div>
                <a href="/documents/code_samples.pdf" className="ml-4 text-gray-600 hover:text-gray-900">
                  <FileText className="w-4 h-4" />
                </a>
              </div>
            </div>
            */}
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
            © 2025 Gideon Adjei. Available for PhD research opportunities.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;