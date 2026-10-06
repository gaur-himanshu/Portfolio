export const personalDetails = {
  name: "Himanshu Gaur",
  title: "Full Stack & Service Platforms Engineer",
  experienceYears: "3+ Years Experience",
  tagline: "Building scalable .NET microservices, real-time data platforms, and cross-platform mobile applications.",
  summary: "Full Stack Software Engineer with 3+ years of experience digitalizing heavy industrial plant operations, building microservices, and deploying scalable web and mobile solutions. Hands-on experience leading international on-site deployments in Germany, Luxembourg, and the Philippines.",
  contact: {
    location: "Delhi, India",
    phone: "+91 88996 99847",
    email: "gaur.himanshu0407@gmail.com",
    github: "https://github.com/gaur-himanshu",
    linkedin: "https://www.linkedin.com/in/himanshu-gaur-20a235209/",
  },
  stats: [
    { label: "Years Experience", value: "3+" },
    { label: "On-Site Deployments", value: "3 Countries", detail: "Germany, Luxembourg, Philippines" },
    { label: "Plant Downtime Cut", value: "20%", detail: "Enterprise CMMS platform impact" },
    { label: "Data Entry Automated", value: "40%", detail: "EAFXpert platform data capture" },
  ]
};

export const skillsData = [
  {
    category: "Languages",
    iconName: "Code2",
    skills: ["C# (.NET Core)", "Python", "JavaScript (ES6+)", "TypeScript", "SQL", "HTML5/CSS3"]
  },
  {
    category: "Backend & Microservices",
    iconName: "Server",
    skills: ["ASP.NET Core Web API", "Entity Framework Core", "REST APIs", "Asynchronous Worker Services", "System Integration"]
  },
  {
    category: "Frontend & Mobile",
    iconName: "Layout",
    skills: ["React.js", "React Native", "Grafana Scene Plugin SDK", "Redux", "Context API"]
  },
  {
    category: "Databases & Telemetry",
    iconName: "Database",
    skills: ["PostgreSQL", "MS SQL Server", "InfluxDB (Time-Series)", "MongoDB", "Prediktor Edge (OPC)"]
  },
  {
    category: "DevOps & Cloud",
    iconName: "Cloud",
    skills: ["Docker", "GitHub Actions (CI/CD)", "Azure AD (OAuth2)", "Linux Servers", "Git"]
  },
  {
    category: "AI & Developer Tools",
    iconName: "Cpu",
    skills: ["GitHub Copilot", "LLM Prompt Engineering", "Unit Testing (xUnit)"]
  }
];

export const experienceData = [
  {
    company: "SMS India Pvt. Ltd. (SMS Group)",
    location: "Gurugram, India",
    role: "Full Stack Software Engineer & Lead",
    duration: "Aug 2023 – Present",
    type: "Full-Time",
    highlights: [
      "Led technical design of enterprise CMMS using .NET Core, React.js, and React Native, reducing estimated plant downtime by 20%.",
      "Built cross-platform React Native mobile app for field technicians with photo verification and offline task sync.",
      "Automated Level 1 data capture (EAFXpert platform), cutting manual data entry time by 40%.",
      "Developed custom signed Grafana Scene Plugins for operational delay tracking in live production dashboards.",
      "Engineered background mail-parsing services (Package Pulse) using .NET/Python and OAuth2 Azure AD authentication.",
      "Executed international on-site software integration, commissioning, and training in Germany, Luxembourg, and the Philippines."
    ]
  }
];

export const projectsData = [
  {
    id: "cmms",
    title: "Computerized Maintenance Management System (CMMS)",
    subtitle: "Enterprise Industrial Maintenance & Asset Synchronization",
    description: "Architected and engineered a full-scale industrial maintenance platform. Empowers plant engineers and technicians with automated preventive maintenance workflows, asset dispatch, and real-time equipment condition monitoring.",
    impact: "Reduced estimated plant downtime by 20% across active heavy manufacturing facilities.",
    techStack: [".NET Core", "React.js", "React Native", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/gaur-himanshu/cmms-platform",
    liveDemoUrl: "#",
    badge: "Enterprise Platform"
  },
  {
    id: "eafxpert",
    title: "EAFXpert & Time Optimizer",
    subtitle: "Real-Time Telemetry & Production Delay Tracking",
    description: "Industrial Level 1 & Level 2 data platform integrating OPC servers with time-series databases. Includes signed custom Grafana Scene Plugins for delay analytics and heat cycle bottleneck detection.",
    impact: "Automated manual data logging, achieving a 40% reduction in technician data entry effort.",
    techStack: ["C#", "InfluxDB", "Grafana Scene Plugin SDK", "OPC Servers", "ASP.NET Core"],
    githubUrl: "https://github.com/gaur-himanshu/eafxpert-optimizer",
    liveDemoUrl: "#",
    badge: "Industrial IoT"
  },
  {
    id: "package-pulse",
    title: "Package Pulse",
    subtitle: "Automated Mail Parsing & Invoice Tracking System",
    description: "High-throughput asynchronous background worker service integrated with Microsoft Azure AD OAuth2. Automatically ingests logistics emails, extracts purchase orders and invoices, and renders real-time tracking metrics.",
    impact: "Eliminated manual invoice reconciliation errors and accelerated order tracking response.",
    techStack: [".NET Core", "Python", "React.js", "Azure AD OAuth2", "PostgreSQL"],
    githubUrl: "https://github.com/gaur-himanshu/package-pulse",
    liveDemoUrl: "#",
    badge: "Microservices"
  }
];

export const educationData = {
  degree: "B.Tech in Computer Science & Engineering",
  year: "2023",
  grade: "8.63 CPI",
  highlights: [
    "Specialized in Software Engineering, Database Systems, and Distributed Applications.",
    "Graduated with High Distinction (8.63 CPI)."
  ],
  awards: [
    {
      title: "Certificate of Merit (SMS Group)",
      issuer: "SMS Group",
      description: "Awarded for outstanding software execution, technical excellence, and successful international project deployments in industrial digitalization."
    }
  ]
};
