
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-in">
            <div className="relative w-40 h-40 mx-auto mb-8">
              <img
                src="/placeholder.svg"
                alt="Gideon Adjei"
                className="w-full h-full rounded-full object-cover"
              />

            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Gideon Adjei
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              Computer Engineering Graduate | Embedded Systems & Software Developer
            </p>

            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Passionate about leveraging technology to solve real-world problems.
              Skilled in embedded systems, digital design, and cryptography.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                <Link to="/projects">View Projects</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
                <a href="/cv.pdf" download>Download CV</a>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-gray-400" />
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What I Do</h2>
            <p className="text-xl text-gray-600">Transforming ideas into innovative technical solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Embedded Systems</h3>
                <p className="text-gray-600">
                  Designing and implementing custom ALUs, digital circuits, and embedded solutions
                  with focus on performance optimization.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Software Development</h3>
                <p className="text-gray-600">
                  Building robust applications using C, C++, Python, and modern development tools
                  for various platforms and systems.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Teaching & Mentoring</h3>
                <p className="text-gray-600">
                  Sharing knowledge through YouTube tutorials and university teaching assistance,
                  helping students excel in programming and engineering.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
