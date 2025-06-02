
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Design & Modeling Tools",
      skills: [
        { name: "Proteus", level: 90 },
        { name: "Eagle", level: 85 },
        { name: "Vivado", level: 80 },
        { name: "MATLAB", level: 85 },
        { name: "Docker", level: 75 },
        { name: "Kathara", level: 70 },
        { name: "Microsoft Office", level: 95 },
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "C", level: 95 },
        { name: "C++", level: 90 },
        { name: "Python", level: 85 },
        { name: "Verilog", level: 80 },
      ]
    },
    {
      title: "Databases & Statistics",
      skills: [
        { name: "SQLite", level: 80 },
        { name: "PostgreSQL", level: 75 },
      ]
    },
    {
      title: "Development Environment",
      skills: [
        { name: "VS Code", level: 95 },
        { name: "Linux", level: 85 },
        { name: "STM32CubeIDE", level: 80 },
        { name: "WSL", level: 85 },
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-24 pb-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Technical Skills</h1>
            <p className="text-xl text-gray-600">Tools and technologies I work with</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-900">{skill.name}</span>
                        <span className="text-gray-600">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills Section */}
          <div className="mt-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center text-gray-900">Core Competencies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="p-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Performance Optimization</h3>
                    <p className="text-gray-600">Expertise in optimizing digital circuits and algorithms for maximum efficiency</p>
                  </div>
                  
                  <div className="p-6">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🔒</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Cryptography</h3>
                    <p className="text-gray-600">Knowledge in security protocols and cryptographic implementations</p>
                  </div>
                  
                  <div className="p-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Problem Solving</h3>
                    <p className="text-gray-600">Analytical approach to complex engineering challenges</p>
                  </div>
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

export default Skills;
