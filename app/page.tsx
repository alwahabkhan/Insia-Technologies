import Link from "next/link";
import Image from "next/image";
import TechnologyCarousel from "./components/TechnologyCarousel";

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
                  src="/main logo.jpeg"
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
      <section id="home" className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Transforming Ideas Into
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Solutions
              </span>
          </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Leading IT services provider specializing in cutting-edge web development, mobile apps, SaaS platforms, IoT solutions, and AI technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started
              </Link>
              <Link
                href="#services"
                className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-semibold text-lg border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 transition-all"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                      <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Technologies & Tools
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We work with cutting-edge technologies to deliver exceptional solutions
            </p>
          </div>

          {/* Logo Carousel */}
          <TechnologyCarousel logos={technologyLogos} />

          {/* Technology Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend Technologies */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🎨</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Vue.js", "Angular", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "SASS"].map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend Technologies */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">⚙️</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Python", "Django", "Flask", "Express.js", "PHP", "Laravel", "Java", "Spring Boot", "C#", ".NET"].map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Mobile Development */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">📱</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Mobile</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["React Native", "Flutter", "Swift", "Kotlin", "iOS", "Android", "Xamarin", "Ionic"].map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">☁️</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Cloud & DevOps</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Jenkins", "GitLab CI", "GitHub Actions", "Terraform", "Ansible"].map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🗄️</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Databases</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase", "Supabase", "DynamoDB", "Elasticsearch"].map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* AI & ML */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🤖</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">AI & ML</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["TensorFlow", "PyTorch", "OpenAI API", "LangChain", "Hugging Face", "Scikit-learn", "Pandas", "NumPy", "ChatGPT", "Claude"].map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* IoT & Hardware */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🔌</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">IoT & Hardware</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Arduino", "Raspberry Pi", "MQTT", "ESP32", "Node-RED", "Zigbee", "LoRaWAN", "Modbus"].map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Others */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🛠️</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Tools & Others</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Git", "GitHub", "GitLab", "Jira", "Figma", "Postman", "VS Code", "Webpack", "Vite", "NPM"].map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* APIs & Integration */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🔗</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">APIs & Integration</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["REST APIs", "GraphQL", "WebSocket", "gRPC", "Stripe", "PayPal", "Twilio", "SendGrid", "Auth0"].map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                About Insia Technologies
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                We are a forward-thinking IT services company dedicated to delivering innovative technology solutions that drive business growth and digital transformation.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                Our team of experienced developers, designers, and AI specialists work collaboratively to create cutting-edge solutions across web, mobile, cloud, IoT, and artificial intelligence domains.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                With a focus on quality, innovation, and client satisfaction, we help businesses leverage the power of modern technology to achieve their goals.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">100+</div>
                  <div className="text-gray-600 dark:text-gray-400">Projects Delivered</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">50+</div>
                  <div className="text-gray-600 dark:text-gray-400">Happy Clients</div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                {[
                  "Expert team with years of experience",
                  "Cutting-edge technology stack",
                  "Agile development methodology",
                  "24/7 support and maintenance",
                  "Competitive pricing",
                  "On-time project delivery"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Ready to start your project? Let's discuss how we can help you achieve your goals.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Insia Technologies
              </h3>
              <p className="text-gray-400">
                Transforming ideas into digital solutions with cutting-edge technology.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#services" className="hover:text-white transition-colors">Web Development</Link></li>
                <li><Link href="#services" className="hover:text-white transition-colors">Mobile Apps</Link></li>
                <li><Link href="#services" className="hover:text-white transition-colors">SaaS Projects</Link></li>
                <li><Link href="#services" className="hover:text-white transition-colors">IoT Solutions</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#services" className="hover:text-white transition-colors">Our Services</Link></li>
                <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@insiatech.com</li>
                <li>Phone: +1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Insia Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
