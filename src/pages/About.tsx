
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-24 pb-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About Me</h1>
            <p className="text-xl text-gray-600">Get to know the person behind the code</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1">
              <div className="relative w-64 h-64 mx-auto mb-8">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white text-8xl font-bold">
                  GA
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900">My Journey</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    I'm a Computer Engineering graduate from Kwame Nkrumah University of Science and Technology (KNUST) 
                    with a strong academic record (3.82 GPA). My passion lies in the intersection of hardware and software, 
                    where I can create innovative solutions that bridge the gap between theoretical concepts and real-world applications.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    My journey in technology started with curiosity about how computers work at the fundamental level. 
                    This led me to specialize in embedded systems, digital design, and cryptography, where I've developed 
                    expertise in optimizing performance and creating efficient solutions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900">Education</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-blue-600">Bachelor of Science in Computer Engineering</h3>
                      <p className="text-gray-600">Kwame Nkrumah University of Science and Technology (KNUST)</p>
                      <p className="text-gray-600">GPA: 3.82/4.0</p>
                      <p className="text-gray-600">Kumasi, Ghana</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900">Beyond Technology</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    When I'm not coding or designing circuits, you'll find me creating educational content for my YouTube channel 
                    "GaviviTeaches" where I share programming tutorials and engineering concepts. I believe in the power of 
                    knowledge sharing and enjoy helping others understand complex technical topics.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    I'm particularly passionate about making technology accessible to everyone and bridging the gap between 
                    academic learning and practical application. This drives my work as a teaching assistant and content creator.
                  </p>
                </CardContent>
              </Card>

              <div className="text-center">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a href="/cv.pdf" download>Download Full CV</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
