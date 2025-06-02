
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Teaching Assistant",
      company: "Kwame Nkrumah University of Science and Technology",
      location: "Kumasi, Ghana",
      duration: "Oct 2024 – Present",
      type: "Academic",
      responsibilities: [
        "Supervised C Programming, Problem Solving, and Data Structures & Algorithms labs",
        "Tracked student attendance using iClicker system for enhanced engagement",
        "Organized comprehensive tutorials improving student performance by over 60%",
        "Provided one-on-one mentoring to students struggling with programming concepts",
        "Collaborated with faculty to develop improved lab exercises and assessments"
      ],
      skills: ["C Programming", "Data Structures", "Algorithms", "Teaching", "Mentoring"]
    },
    {
      title: "Content Creator",
      company: "GaviviTeaches (YouTube Channel)",
      location: "Remote",
      duration: "Jan 2023 – Present",
      type: "Content Creation",
      responsibilities: [
        "Created educational programming tutorials reaching hundreds of students",
        "Developed comprehensive course materials for computer engineering topics",
        "Engaged with community through comments and live Q&A sessions",
        "Researched and explained complex technical concepts in accessible ways",
        "Built a following of aspiring engineers and programming enthusiasts"
      ],
      skills: ["Content Creation", "Video Production", "Technical Writing", "Community Building"]
    },
    {
      title: "Research Assistant",
      company: "KNUST Computer Engineering Department",
      location: "Kumasi, Ghana",
      duration: "Mar 2024 – Sep 2024",
      type: "Research",
      responsibilities: [
        "Conducted research on digital circuit optimization techniques",
        "Developed and tested novel ALU architectures for improved performance",
        "Analyzed performance metrics and documented findings",
        "Collaborated with faculty on embedded systems research projects",
        "Presented research findings at departmental seminars"
      ],
      skills: ["Research", "Digital Design", "Verilog", "Performance Analysis", "Technical Documentation"]
    }
  ];

  const achievements = [
    {
      title: "Academic Excellence",
      description: "Maintained a 3.82 GPA throughout Computer Engineering program",
      year: "2024"
    },
    {
      title: "Performance Improvement",
      description: "Achieved 60%+ improvement in student tutorial performance as Teaching Assistant",
      year: "2024"
    },
    {
      title: "Technical Innovation",
      description: "Developed ALU architecture with 80% performance improvement in multiplication",
      year: "2024"
    },
    {
      title: "Community Impact",
      description: "Built educational YouTube channel helping hundreds of programming students",
      year: "2023-2024"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-24 pb-20 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Experience</h1>
            <p className="text-xl text-gray-600">My professional journey and accomplishments</p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8 mb-20">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                      <CardTitle className="text-2xl text-gray-900">{exp.title}</CardTitle>
                      <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                      <p className="text-gray-600">{exp.location}</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-blue-100 text-blue-800 mb-2">{exp.type}</Badge>
                      <p className="text-gray-600 font-medium">{exp.duration}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities & Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="text-gray-700 flex items-start">
                          <span className="text-blue-600 mr-3 mt-1">•</span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Skills Developed:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="bg-gray-50">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Achievements Section */}
          <div>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {achievement.year.slice(-2)}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                        <p className="text-gray-700">{achievement.description}</p>
                        <p className="text-sm text-gray-500 mt-2">{achievement.year}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Experience;
