/**
 * Centralized Portfolio Data Configuration
 * Ameenul Lumin Fathima M. | Software Developer
 * 
 * Edit this file to update any portfolio content across the website.
 */

export const personalInfo = {
  name: "Ameenul Lumin Fathima M.",
  title: "Software Developer",
  subtitle: "MCA Student | Java & Full-Stack Development Enthusiast",
  greeting: "Hello, I'm",
  headline: "Software Developer",
  supportingHeadline: "Turning ideas into practical digital solutions.",
  availability: "Open to learning opportunities and software development opportunities.",
  
  introduction: 
    "I am an MCA student passionate about Java development, full-stack technologies, cybersecurity and emerging AI applications. I enjoy learning, building and solving real-world problems through technology.",
  
  aboutMe: [
    "I am currently pursuing my Master of Computer Applications (MCA) at Presidency University.",
    "My journey in computer applications has helped me develop an interest in programming, application development and emerging technologies.",
    "I enjoy working on practical projects that combine software development with real-world problem-solving.",
    "My areas of interest include Java development, full-stack development, cybersecurity, computer vision and Generative AI.",
    "I believe in continuous learning, experimentation and building useful technology solutions."
  ],

  profileImage: "/images/profile.jpg",
  resumePath: "/resume/resume.pdf",

  contact: {
    email: "luminfathima@gmail.com",
    github: "https://github.com/luminfathima-spec",
    linkedin: "https://linkedin.com/in/lumin-fathima",
  },

  navLinks: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ]
};

export const educationList = [
  {
    id: "mca",
    degree: "Master of Computer Applications (MCA)",
    institution: "Presidency University",
    status: "Currently Pursuing",
    isCurrent: true,
    highlight: "Advanced Computer Applications & Software Engineering",
    description:
      "Deepening expertise in software engineering principles, enterprise Java paradigms, scalable web architectures, modern cybersecurity best practices, and AI applications.",
  },
  {
    id: "bca",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Vijayanagara Sri Krishnadevaraya University (VSKU)",
    status: "Completed",
    isCurrent: false,
    highlight: "Core Computer Science & Web Foundations",
    description:
      "Established core competencies in data structures, relational database management, object-oriented programming, systems analysis, and foundational web design.",
  }
];

export const projectList = [
  {
    id: "sentinelai-x",
    title: "SentinelAI-X",
    category: "Generative AI | Cybersecurity",
    status: "In Progress",
    description:
      "A Generative AI-powered cybersecurity incident response platform designed to help analyze security incidents and provide contextual security insights.",
    technologies: ["Java", "Python", "FastAPI", "Google Gemini API"],
    keyFeatures: [
      "Security incident analysis",
      "AI-assisted incident response",
      "Cybersecurity investigation",
      "Contextual threat explanations",
    ],
    repository: "https://github.com/luminfathima-spec/SentinelAI-X",
    liveDemo: null, // Only displayed when link exists
    featured: true,
    accentColor: "from-purple-500/10 to-indigo-500/10",
    overview:
      "SentinelAI-X is an intelligent cybersecurity investigation assistant that bridges raw security telemetry with contextual Generative AI analysis to streamline incident triaging and response workflows.",
    problemStatement:
      "Modern security analysts are overwhelmed with high-volume alerts and verbose log dumps, making it difficult to rapidly assess attack vectors, evaluate exposure, and implement incident containment strategies.",
    solution:
      "Combines Java and Python microservices powered by FastAPI and Google Gemini API to parse incident indicators, produce natural-language situational assessments, map threats to known security frameworks, and suggest structured remediation steps.",
  },
  {
    id: "resqmeal",
    title: "ResQMeal",
    category: "Full-Stack Web Development",
    status: "In Progress",
    description:
      "A MERN-stack food rescue platform designed to connect food donors, receivers and delivery partners to reduce food wastage and improve food distribution.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    keyFeatures: [
      "Role-based authentication",
      "Food donation management",
      "Receiver food requests",
      "Delivery partner workflows",
      "Smart food matching",
    ],
    repository: null,
    liveDemo: null,
    featured: true,
    accentColor: "from-emerald-500/10 to-teal-500/10",
    overview:
      "ResQMeal is a social impact web application connecting surplus food providers (restaurants, caterers, supermarkets) with local shelters, NGOs, and verified volunteer delivery partners in real time.",
    problemStatement:
      "Massive quantities of wholesome surplus food are discarded daily due to fragmented logistics, lack of communication channels between donors and local shelters, and absence of verified transport coordination.",
    solution:
      "An end-to-end MERN web architecture featuring distinct authenticated portals for donors, receivers, and delivery volunteers, complete with automated matching algorithms and donation dispatch tracking.",
  },
  {
    id: "network-intrusion-detection",
    title: "Real-World Network Intrusion Detection System",
    category: "Cybersecurity | Machine Learning",
    status: "Academic Project",
    description:
      "A machine-learning-based network intrusion detection system designed to identify suspicious network traffic and classify potential cyberattacks.",
    technologies: ["Python", "Scikit-learn", "Random Forest", "Decision Tree", "NSL-KDD dataset"],
    keyFeatures: [
      "Network traffic analysis",
      "Attack classification",
      "Intrusion detection",
      "Security alerts",
      "JSON logging",
    ],
    repository: null,
    liveDemo: null,
    featured: true,
    accentColor: "from-blue-500/10 to-cyan-500/10",
    overview:
      "An applied machine learning system that trains predictive classification algorithms on standardized network telemetry to distinguish benign network activity from malicious intrusion vectors.",
    problemStatement:
      "Traditional rule-based and signature-matching firewalls fail to detect zero-day variants and nuanced traffic anomalies without continuous manual pattern updates.",
    solution:
      "Trained ensemble and tree-based machine learning models (Random Forest, Decision Tree) on the benchmark NSL-KDD dataset with data preprocessing, categorical encoding, and structured JSON output for live security alert generation.",
  },
  {
    id: "luxe-cake",
    title: "Luxe Cake",
    category: "Web Development | E-Commerce",
    status: "Academic Project",
    description:
      "A cake e-commerce website that provides product browsing and online shopping functionality.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    keyFeatures: [
      "Interactive product catalog",
      "Shopping cart management",
      "Relational database structure",
      "Order status handling",
    ],
    repository: null,
    liveDemo: null,
    featured: false,
    accentColor: "from-pink-500/10 to-rose-500/10",
    overview:
      "Luxe Cake is a boutique bakery e-commerce portal built to give local confections a modern digital storefront with user order management and an administrative catalog system.",
    problemStatement:
      "Local bakeries and specialty confectioners often lack straightforward web storefronts to present custom orders, manage inventories, and accept client requests.",
    solution:
      "Developed a lightweight, relational PHP/MySQL architecture handling full CRUD operations for product showcases, customer cart persistence, and order checkout tracking.",
  },
  {
    id: "genai-borderguard",
    title: "GenAI BorderGuard",
    category: "Generative AI | Computer Vision",
    status: "In Development / Proposed",
    description:
      "An intelligent border surveillance concept exploring AI-assisted monitoring, contextual incident analysis and human-assisted security workflows.",
    technologies: ["Python", "Gemini", "Computer Vision"],
    keyFeatures: [
      "Intelligent surveillance concept",
      "Contextual incident reasoning",
      "Human-in-the-loop workflows",
      "Multi-modal threat assessment",
    ],
    repository: null,
    liveDemo: null,
    featured: false,
    accentColor: "from-violet-500/10 to-purple-500/10",
    overview:
      "A conceptual surveillance intelligence architecture pairing continuous visual sensor feeds with multi-modal reasoning models to deliver high-level situational awareness to security personnel.",
    problemStatement:
      "Perimeter monitoring stations require round-the-clock human visual attention, leading to alertness fatigue, false positives, and delay in contextualizing complex perimeter events.",
    solution:
      "Proposes an edge computer vision triage layer coupled with Google Gemini multimodal capabilities to describe scenes in plain language, flag high-priority anomalies, and assist officers with rapid contextual decision support.",
  }
];

export const skillCategories = [
  {
    title: "Programming Languages",
    iconName: "Code2",
    skills: [
      { name: "Java", level: "Core Language", tag: "Backend & Systems" },
      { name: "Python", level: "Language", tag: "AI & Scripting" },
      { name: "JavaScript", level: "Language", tag: "Web & Full-Stack" },
      { name: "PHP", level: "Language", tag: "Web Services" },
      { name: "SQL", level: "Query Language", tag: "Data Management" },
    ]
  },
  {
    title: "Frontend Development",
    iconName: "Layout",
    skills: [
      { name: "HTML", level: "Semantic Markup", tag: "Structure" },
      { name: "CSS", level: "Modern Styling", tag: "Presentation" },
      { name: "React.js", level: "Component Library", tag: "UI Framework" },
      { name: "Tailwind CSS", level: "Utility Framework", tag: "Design System" },
    ]
  },
  {
    title: "Backend Development",
    iconName: "Server",
    skills: [
      { name: "Node.js", level: "Runtime", tag: "JavaScript Server" },
      { name: "Express.js", level: "Web Framework", tag: "REST APIs" },
      { name: "FastAPI", level: "API Framework", tag: "Python Microservices" },
      { name: "Java Backend Development", level: "Enterprise", tag: "OOP & Services" },
    ]
  },
  {
    title: "Databases",
    iconName: "Database",
    skills: [
      { name: "MongoDB", level: "NoSQL Document DB", tag: "Document Store" },
      { name: "MySQL", level: "Relational RDBMS", tag: "Structured Data" },
      { name: "PostgreSQL", level: "Object-Relational", tag: "ACID Compliant" },
    ]
  },
  {
    title: "AI, Machine Learning and Security",
    iconName: "BrainCircuit",
    skills: [
      { name: "Scikit-learn", level: "ML Library", tag: "Predictive Models" },
      { name: "Computer Vision", level: "Discipline", tag: "Image Processing" },
      { name: "Generative AI", level: "Emerging Tech", tag: "LLMs & Multimodal" },
      { name: "Retrieval-Augmented Generation (RAG)", level: "Architecture", tag: "Knowledge Retrieval" },
      { name: "Cybersecurity", level: "Specialization", tag: "Threat Analysis & Defense" },
    ]
  },
  {
    title: "Tools and Platforms",
    iconName: "Wrench",
    skills: [
      { name: "Git", level: "Version Control", tag: "Distributed VCS" },
      { name: "GitHub", level: "Collaboration", tag: "Code Hosting & CI" },
      { name: "Visual Studio Code", level: "IDE", tag: "Development" },
      { name: "IntelliJ IDEA", level: "Java IDE", tag: "Enterprise Dev" },
      { name: "Antigravity IDE", level: "AI Agentic IDE", tag: "Agentic Workflows" },
    ]
  }
];

export const certificationList = [
  {
    id: "cert-java",
    title: "Java Programming Fundamentals",
    issuer: "Infosys Springboard",
    image: "/certificates/java-certificate.png",
    issueDate: null,
    credentialUrl: null,
    badgeText: "Fundamental Certification",
    description:
      "Covers fundamental Java syntax, object-oriented principles, control structures, collection frameworks, and clean code conventions.",
  },
  {
    id: "cert-gemini",
    title: "Inspect Rich Documents with Gemini Multimodality and Multimodal RAG",
    issuer: "Google Cloud Skills Boost",
    image: "/certificates/gemini-certificate.png",
    issueDate: null,
    credentialUrl: null,
    badgeText: "Generative AI & Multimodal RAG",
    description:
      "Hands-on completion in analyzing multimodal documents, extracting structured intelligence with Gemini models, and implementing retrieval-augmented generation pipelines.",
  },
  {
    id: "cert-blockchain",
    title: "The Blockchain Trilemma",
    issuer: "Certified Technical Course",
    image: "/certificates/blockchain-certificate.png",
    issueDate: null,
    credentialUrl: null,
    badgeText: "Decentralized Systems",
    description:
      "Study of the core challenges in decentralized architectures balancing security, decentralization, and scalability across distributed ledger protocols.",
  }
];
