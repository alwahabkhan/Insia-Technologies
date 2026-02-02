import Link from "next/link";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import TechnologiesSection from "./components/TechnologiesSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications and websites built with modern technologies. Responsive, fast, and scalable solutions for your business.",
      icon: "🌐",
      features: ["React, Next.js, Vue.js", "Full-stack Development", "E-commerce Solutions", "Progressive Web Apps"]
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android. Delivering seamless user experiences across all devices.",
      icon: "📱",
      features: ["iOS & Android", "React Native, Flutter", "Native Development", "App Store Optimization"]
    },
    {
      title: "SaaS Projects",
      description: "End-to-end Software as a Service solutions. Scalable cloud-based platforms that grow with your business.",
      icon: "☁️",
      features: ["Cloud Architecture", "Multi-tenancy", "Subscription Management", "API Development"]
    },
    {
      title: "IoT Projects",
      description: "Internet of Things solutions connecting devices and systems. Smart solutions for automation and data collection.",
      icon: "🔌",
      features: ["Device Integration", "Sensor Networks", "Real-time Monitoring", "Edge Computing"]
    },
    {
      title: "AI Chatbots",
      description: "Intelligent conversational AI chatbots that enhance customer service and automate interactions 24/7.",
      icon: "🤖",
      features: ["Natural Language Processing", "Multi-platform Integration", "Custom Training", "Analytics & Insights"]
    },
    {
      title: "Cloud Migration & DevOps",
      description: "Seamless cloud migration and DevOps implementation. Accelerate deployment with CI/CD pipelines and infrastructure as code.",
      icon: "⚡",
      features: ["AWS, Azure, GCP Migration", "CI/CD Pipelines", "Containerization (Docker/K8s)", "Infrastructure as Code"]
    },
    {
      title: "AI Agents",
      description: "Autonomous AI agents that can perform complex tasks, make decisions, and interact with systems intelligently.",
      icon: "🚀",
      features: ["Autonomous Agents", "Task Automation", "Decision Making", "System Integration"]
    }
  ];

  const technologyLogos = [
    { name: "React", path: "/React.png" },
    { name: "Next.js", path: "/Next.js.png" },
    { name: "TypeScript", path: "/TypeScript.png" },
    { name: "JavaScript", path: "/JavaScript.png" },
    { name: "Node.js", path: "/Node.js.png" },
    { name: "Express.js", path: "/Express.png" },
    { name: "Java", path: "/Java.png" },
    { name: "MongoDB", path: "/MongoDB.png" },
    { name: "MySQL", path: "/MySQL.png" },
    { name: "PostgreSQL", path: "/PostgresSQL.png" },
    { name: "Nest.js", path: "/Nest.js.png" },
    { name: "Material UI", path: "/Material UI.png" },
    { name: "Tailwind CSS", path: "/Tailwind CSS.png" },
    { name: "HTML5", path: "/HTML5.png" },
    { name: "CSS3", path: "/CSS3.png" },
    { name: "AWS", path: "/AWS.png" },
    { name: "Vercel", path: "/Vercel.png" },
    { name: "Heroku", path: "/Heroku.png" },
    { name: "Firebase", path: "/Firebase.png" },
    { name: "Git", path: "/Git.png" },
    { name: "GitHub", path: "/GitHub.png" },
    { name: "GraphQL", path: "/GraphQL.png" },
    { name: "Jira", path: "/Jira.png" },
    { name: "Postman", path: "/Postman.png" },
    { name: "VS Code", path: "/Visual Studio Code (VS Code).png" },
    { name: "Vite", path: "/Vite.js.png" },
    { name: "NPM", path: "/NPM.png" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex-shrink-0">
              <Link href="#home" className="flex items-center">
        <Image
                  src="/logo2.png"
                  alt="Insia Technologies Logo"
                  width={200}
                  height={80}
                  className="h-16 w-auto object-contain"
          priority
        />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="#home" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-base font-medium transition-colors">
                  Home
                </Link>
                <Link href="#services" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-base font-medium transition-colors">
                  Services
                </Link>
                <Link href="#technologies" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-base font-medium transition-colors">
                  Technologies
                </Link>
                <Link href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-base font-medium transition-colors">
                  About
                </Link>
                <Link href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-base font-medium transition-colors">
                  Contact
                </Link>
              </div>
            </div>
            <div className="md:hidden">
              <button className="text-gray-700 dark:text-gray-300">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection logos={technologyLogos} />

      {/* Services Section */}
      <ServicesSection services={services} />

      {/* Technologies Section */}
      <TechnologiesSection logos={technologyLogos} />

      {/* About Section */}
      <AboutSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
