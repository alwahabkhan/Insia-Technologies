"use client";

import { motion } from "motion/react";
import TechnologyCarousel from "./TechnologyCarousel";

export type TechnologyLogo = { name: string; path: string };

type TechCategory = {
  icon: string;
  title: string;
  techs: string[];
  badgeClass: string;
};

const easeSmooth = [0.25, 0.46, 0.45, 0.94] as const;

const rowVariants = {
  hidden: { opacity: 0, y: 56 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeSmooth,
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeSmooth },
  },
};

const headerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeSmooth },
  },
};

const carouselVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeSmooth },
  },
};

const ROW_SIZE = 3;

const CATEGORIES: TechCategory[] = [
  {
    icon: "🎨",
    title: "Frontend",
    techs: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "SASS"],
    badgeClass: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
  },
  {
    icon: "⚙️",
    title: "Backend",
    techs: ["Node.js", "Python", "Django", "Flask", "Express.js", "PHP", "Laravel", "Java", "Spring Boot", "C#", ".NET"],
    badgeClass: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
  },
  {
    icon: "📱",
    title: "Mobile",
    techs: ["React Native", "Flutter", "Swift", "Kotlin", "iOS", "Android", "Xamarin", "Ionic"],
    badgeClass: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    techs: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Jenkins", "GitLab CI", "GitHub Actions", "Terraform", "Ansible"],
    badgeClass: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300",
  },
  {
    icon: "🗄️",
    title: "Databases",
    techs: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase", "Supabase", "DynamoDB", "Elasticsearch"],
    badgeClass: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300",
  },
  {
    icon: "🤖",
    title: "AI & ML",
    techs: ["TensorFlow", "PyTorch", "OpenAI API", "LangChain", "Hugging Face", "Scikit-learn", "Pandas", "NumPy", "ChatGPT", "Claude"],
    badgeClass: "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300",
  },
  {
    icon: "🔌",
    title: "IoT & Hardware",
    techs: ["Arduino", "Raspberry Pi", "MQTT", "ESP32", "Node-RED", "Zigbee", "LoRaWAN", "Modbus"],
    badgeClass: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300",
  },
  {
    icon: "🛠️",
    title: "Tools & Others",
    techs: ["Git", "GitHub", "GitLab", "Jira", "Figma", "Postman", "VS Code", "Webpack", "Vite", "NPM"],
    badgeClass: "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300",
  },
  {
    icon: "🔗",
    title: "APIs & Integration",
    techs: ["REST APIs", "GraphQL", "WebSocket", "gRPC", "Stripe", "PayPal", "Twilio", "SendGrid", "Auth0"],
    badgeClass: "bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300",
  },
];

function CategoryCard({
  category,
  variants,
}: {
  category: TechCategory;
  variants: typeof cardVariants;
}) {
  return (
    <motion.div
      variants={variants}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-3">{category.icon}</span>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {category.title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.techs.map((tech, idx) => (
          <span
            key={idx}
            className={`px-3 py-1 rounded-full text-sm font-medium ${category.badgeClass}`}
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function TechnologiesSection({
  logos,
}: {
  logos: TechnologyLogo[];
}) {
  const rows: TechCategory[][] = [];
  for (let i = 0; i < CATEGORIES.length; i += ROW_SIZE) {
    rows.push(CATEGORIES.slice(i, i + ROW_SIZE));
  }

  return (
    <section
      id="technologies"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
              },
            },
            hidden: {},
          }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            variants={headerItem}
          >
            Technologies & Tools
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            variants={headerItem}
          >
            We work with cutting-edge technologies to deliver exceptional
            solutions
          </motion.p>
        </motion.div>

        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={carouselVariants}
        >
          <TechnologyCarousel logos={logos} />
        </motion.div>

        <div className="flex flex-col gap-8">
          {rows.map((rowCategories, rowIndex) => (
            <motion.div
              key={rowIndex}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {rowCategories.map((category, index) => (
                <CategoryCard
                  key={`${rowIndex}-${index}`}
                  category={category}
                  variants={cardVariants}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
