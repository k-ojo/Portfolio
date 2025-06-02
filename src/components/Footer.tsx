
import { Github, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Gideon Adjei</h3>
            <p className="text-gray-400">Computer Engineering Graduate | Embedded Systems & Software Developer</p>
          </div>
          
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" asChild className="text-gray-400 hover:text-white">
              <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-gray-400 hover:text-white">
              <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-gray-400 hover:text-white">
              <a href="https://youtube.com/GaviviTeaches" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Gideon Adjei. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
