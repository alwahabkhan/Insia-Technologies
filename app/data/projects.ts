export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  fullDescription: string; 
  technologies: string[];
  images: string[];
  liveUrl: string;
  githubUrl: string;
  company: string;
  role: string;
  timeline: {
    startDate: string;
    endDate: string;
    duration: string;
  };
  responsibilities: string[];
  achievements: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "nexkey",
    title: "Nexkey – Smart IoT Lock Management System",
    description:
      "A complete IoT-based smart lock management system that allows users to lock and unlock doors through both mobile applications and a web portal with advanced business logic for secure access control.",
    fullDescription:
      "NexKey is a comprehensive IoT-based smart lock management system (US-Based Project) that enables users to control smart locks through mobile applications and web portals. The system features advanced business logic including automatic unlocking during business hours, blackout periods for restricted access, and multi-level access control (Owner, Admin, User). The platform includes grouping functionality for managing locks via groups with role-based permissions, an internal portal for key sharing and customer management, and a user web portal with analytics and personalized lock control features.",
    technologies: [
      "React.js",
      "Material UI",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "Parse Server",
      "Java SpringBoot",
      "MongoDB",
      "Heroku",
      "AWS EC2",
    ],
    images: ["/Nexkey PIcture.png", "/nexkey picture 2.png", "/nexkey picture 3.png"],
    liveUrl: "https://portal.nexkey.com/",
    githubUrl: "#",
    company: "US-Based Project",
    role: "Backend Developer (Primary) / Frontend Developer",
    timeline: {
      startDate: "June 2024",
      endDate: "December 2025",
      duration: "18 months",
    },
    responsibilities: [
      "Developed and optimized REST APIs using Node.js, Express, and Parse Server",
      "Created multiple cron jobs for automated tasks and system maintenance",
      "Designed backend architecture, logic flow, and system structures",
      "Worked on Java Spring Boot grouping service, handling authorization and business logic",
      "Debugging, fixing issues, and improving system reliability",
      "Built the Analytics Dashboard using React and Material UI",
      "Designed and developed the Broadcast feature (complete UI/UX + integration)",
      "Managed and improved the User Web Portal functionality",
      "Worked with Redux Toolkit for global state management",
      "Implemented IoT-based smart lock control (unlock/lock devices via mobile or web)",
      "Developed business hours automation (locks automatically stay unlocked during business hours)",
      "Implemented blackout functionality (no access allowed during blackout; only Admins and Owners can override)",
      "Created access level management system (Owner, Admin, User roles)",
      "Developed grouping functionality for managing locks via groups with role assignments",
      "Built internal portal features: share key ownership, manage customers, download reports, view all locks",
      "Developed user web portal: view lock activity, access personalized analytics, manage individual customers and locks, add/remove business hours and blackouts, lock/unlock controls",
    ],
    achievements: [
      "Gained strong experience in IoT systems and smart lock management",
      "Developed scalable backend architecture for cloud deployment",
      "Successfully integrated multiple services (Parse Server, Spring Boot, Express)",
      "Implemented complex business logic for access control and security",
      "Built comprehensive analytics dashboard for user insights",
      "Deployed frontend on Heroku and backend on AWS EC2",
      "Developed business-critical functionalities for production use",
      "Enhanced system reliability through debugging and optimization",
    ],
  },
  {
    id: "2",
    slug: "eliya-reality-residential",
    title: "Eliya Reality – Residential Portal",
    description:
      "A web-based platform that streamlines buying and selling of residential properties, with role-based access for Admin, Agent, Seller, and Buyer—supporting property listings, inquiries, mortgage estimates, and full admin oversight.",
    fullDescription:
      "The Residential Portal is a web-based platform designed to streamline the process of buying and selling residential properties. It facilitates seamless interactions between buyers, sellers, and agents while providing admins with comprehensive oversight and analytics. The platform supports multiple roles: Admin (full system monitoring and management), Agent (intermediary between buyers and sellers), Seller (list properties via dashboard), and Buyer (browse and search properties, submit inquiries, calculate mortgage estimates). The frontend uses Next.js for server-side rendering and responsive UI; the backend uses Node.js with Express.js for APIs, authentication, and role-based access control; and MySQL stores users, properties, messages, analytics, and blog content. Key features include form validation for buyer inquiries, property search with filtering, real-time analytics for admin, and secure authentication and session management.",
    technologies: ["Next.js", "Node.js", "Express.js", "MySQL"],
    images: ["/Eliya1.jpeg", "/Eliya2.jpeg", "/Eliya3.jpeg"],
    liveUrl: "#",
    githubUrl: "#",
    company: "Eliya Reality",
    role: "Full Stack Developer",
    timeline: {
      startDate: "2023",
      endDate: "2024",
      duration: "1 year",
    },
    responsibilities: [
      "Built frontend with Next.js for server-side rendering, responsive UI, and efficient routing",
      "Developed backend with Node.js and Express.js for API endpoints, authentication, and role-based access control",
      "Designed and implemented MySQL database for users, properties, messages, analytics, and blog content",
      "Implemented distinct user roles (Admin, Agent, Seller, Buyer) with tailored dashboards and permissions",
      "Built buyer features: detailed inquiry form (name, phone, email, budget, property type), property search and filter by city, mortgage calculator",
      "Built seller features: property listing upload and management via dedicated dashboard",
      "Built agent features: review buyer inquiries, contact buyers, bridge communication between buyers and sellers",
      "Built admin features: platform-wide monitoring, blog and project uploads, analytics and insights, message management, detailed listings and user data",
      "Implemented form validation for buyer inquiries and secure authentication with session management",
      "Delivered real-time analytics for admin monitoring and property search with filtering options",
    ],
    achievements: [
      "Provided a structured and secure environment for property transactions",
      "Enabled buyers to find properties, sellers to list them, and agents to facilitate deals efficiently",
      "Empowered admins to oversee operations, manage content, and use analytics for business decisions",
      "Implemented role-based access and functional dashboards for all user types",
      "Integrated mortgage calculator and property search with filtering for better buyer experience",
    ],
  },
  {
    id: "3",
    slug: "giga-mall",
    title: "Giga Mall Web Application",
    description:
      "A full-featured web application for Giga Mall delivering a seamless digital experience for visitors, brands, and management with centralized mall information and role-based admin system.",
    fullDescription:
      "Giga Mall Web Application is a comprehensive full-stack platform designed to centralize mall information, improve customer navigation, and streamline content management. The platform features comprehensive stores and dine listings with detailed information, dynamic events and offers management sections, and a dedicated area for showcasing new brands and upcoming projects. It includes an interactive internal mall map with floor-based store listings and in-mall navigation support, an entertainment and services section, and a smart parking system with automated parking module displaying available slots and reservations. The application features a powerful admin portal with role-based access control including Store Owner, Admin, and Super Owner levels for managing all content including stores, dine outlets, events, and offers.",
    technologies: [
      "Next.js",
      "Material UI",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Hostinger KVM8",
    ],
    images: ["/giga 1.png", "/giga 2.png", "/giga 3.png"],
    liveUrl: "https://the-giga-mall-web.vercel.app/",
    githubUrl: "https://github.com/Giga-Group/The-Giga-Mall-Web",
    company: "Giga Mall",
    role: "Full Stack Developer",
    timeline: {
      startDate: "January 2024",
      endDate: "Present",
      duration: "Ongoing",
    },
    responsibilities: [
      "Developed full-featured web application using Next.js for frontend",
      "Implemented Material UI (MUI) for consistent and modern user interface",
      "Built scalable backend architecture using NestJS",
      "Designed and implemented PostgreSQL database with Prisma ORM",
      "Created comprehensive stores and dine listings with detailed information",
      "Developed dynamic events and offers management system",
      "Built dedicated section for showcasing new brands and upcoming projects",
      "Implemented interactive internal mall map with floor-based store listings",
      "Developed in-mall navigation support system",
      "Created entertainment and services section for centralized information",
      "Built smart parking system with automated parking module",
      "Implemented parking slot availability and reservation features",
      "Developed powerful admin portal with role-based access control",
      "Created multiple access levels: Store Owner, Admin, and Super Owner",
      "Implemented content management for stores, dine outlets, events, and offers",
      "Deployed application on Hostinger KVM8 Server",
      "Ensured scalable, high-performance, and user-friendly platform design",
    ],
    achievements: [
      "Created centralized system for mall information and operations management",
      "Improved customer navigation inside the mall with interactive map",
      "Enhanced customer engagement through comprehensive store and event listings",
      "Streamlined content management with role-based admin system",
      "Developed scalable architecture for high-performance platform",
      "Successfully implemented smart parking system with real-time availability",
      "Created user-friendly interface for seamless digital experience",
      "Built comprehensive platform supporting visitors, brands, and management",
    ],
  },
  {
    id: "4",
    slug: "smartfolio",
    title: "SmartFolio",
    description:
      "An AI-Powered Web Application with AI-generated cover letters, customizable resume builder, and portfolio generator features.",
    fullDescription:
      "SmartFolio is an innovative AI-powered web application that revolutionizes job application processes. The platform features an AI-generated cover letter system with an interactive questionnaire that collects user information to create personalized cover letters. It includes resume and job description matching that analyzes compatibility before generating cover letters, ensuring relevance and quality through conditional generation. The application also offers a customizable resume builder with multiple templates and multilingual support, allowing users to translate resumes into different languages. Additionally, it includes a portfolio generator for showcasing projects with detailed descriptions and shareable links. The application implements robust security with Http-only cookies for authentication, protected routes for sensitive operations, and comprehensive error handling throughout.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "AI/ML",
      "Material UI",
      "JWT",
      "MERN Stack",
    ],
    images: ["/Smartfolio 1.png", "/Smartfolio 2.png", "/Smartfolio 3.png"],
    liveUrl: "#",
    githubUrl: "https://github.com/alwahabkhan/smartfolio-mern",
    company: "Personal Project",
    role: "Full Stack Developer",
    timeline: {
      startDate: "October 2023",
      endDate: "May 2024",
      duration: "8 months",
    },
    responsibilities: [
      "Developed AI-powered cover letter generation system with interactive questionnaire",
      "Implemented resume and job description matching algorithm for compatibility analysis",
      "Created conditional generation logic to ensure cover letter relevance and quality",
      "Built customizable resume builder with multiple template options",
      "Implemented multilingual support for resume translation",
      "Developed portfolio generator with project showcase and shareable links",
      "Implemented secure authentication using Http-only cookies generated server-side",
      "Created protected routes for sensitive operations (shipping, payment methods)",
      "Designed and developed robust error handling throughout the application",
      "Built RESTful APIs using Node.js and Express",
      "Designed MongoDB database schemas for user data, resumes, and portfolios",
      "Developed frontend components using React and Material UI",
      "Implemented secure session management and authentication flow",
    ],
    achievements: [
      "Successfully integrated AI/ML capabilities for intelligent cover letter generation",
      "Developed advanced matching algorithm for resume-job description compatibility",
      "Created multilingual resume translation feature for broader reach",
      "Implemented comprehensive security measures with Http-only cookies",
      "Built user-friendly interface with multiple customizable templates",
      "Developed shareable portfolio links for easy access and sharing",
      "Created robust error handling system for enhanced user experience",
      "Successfully deployed full-stack MERN application",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
