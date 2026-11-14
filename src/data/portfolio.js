/**
 * Centralized Portfolio Data Configuration
 * Ameenul Lumin Fathima M. | Software Developer
 * 
 * Edit this file to update any portfolio content across the website.
 */

export const personalInfo = {
  name: "Ameenul Lumin Fathima M.",
  title: "Software Developer | MCA Student | Java & Full-Stack Development",
  subtitle: "Software Developer | MCA Student | Java & Full-Stack Development",
  greeting: "Hello, I'm",
  headline: "Software Developer | MCA Student | Java & Full-Stack Development",
  primaryRole: "Software Developer",
  supportingInterests: ["Cybersecurity", "Artificial Intelligence", "Computer Vision"],
  availability: "Open to software development opportunities & technical roles",
  
  rotatingTitles: [
    "Software Developer",
    "Java Developer",
    "Full-Stack Developer",
    "MCA Postgraduate Student"
  ],
  
  introduction: 
    "I am a Software Developer and MCA student with a strong focus on Java development and modern full-stack web technologies. I enjoy building practical, reliable applications and solving complex problems with clean, scalable code. Alongside core software engineering, I actively explore cybersecurity, artificial intelligence, and computer vision as supporting technical interests.",
  
  aboutMe: [
    "I am a Software Developer currently pursuing my Master of Computer Applications (MCA) at Presidency University, having earned my Bachelor of Computer Applications (BCA) from Vijayanagara Sri Krishnadevaraya University (VSKU). My academic education has built a solid foundation in data structures, algorithms, database systems, and object-oriented architecture.",
    "My primary development focus centers on Java and full-stack web development. I am passionate about writing clean, maintainable code, developing modular services, and building responsive user interfaces with modern frameworks and reliable backend systems.",
    "Through hands-on projects—such as building incident response workflows with Generative AI in SentinelAI-X, engineering community distribution systems in ResQMeal, and analyzing intrusion detection algorithms—I continually turn theoretical concepts into practical software solutions.",
    "My career goal is to contribute effectively to an innovative engineering team, building scalable systems that solve real-world problems while continually growing as a professional software engineer."
  ],

  profileImage: "/images/profile.jpg",
  profileImageFallback: "/images/profile.jpeg",
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
    status: "Currently pursuing",
    isCurrent: true,
    highlight: "Advanced Software Engineering & Applied Computing",
    description:
      "Deepening core competencies in enterprise Java design, scalable full-stack web architectures, secure system design, machine learning, and emerging AI technologies.",
  },
  {
    id: "bca",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Vijayanagara Sri Krishnadevaraya University (VSKU)",
    status: "Completed",
    isCurrent: false,
    highlight: "Foundational Computer Science & Software Development",
    description:
      "Established foundational knowledge in data structures, algorithms, relational database management systems (RDBMS), object-oriented programming, and web development fundamentals.",
  }
];

export const projectList = [
  {
    id: "sentinelai-x",
    title: "SentinelAI-X",
    category: "Generative AI | Cybersecurity",
    status: "In Progress",
    description:
      "A cybersecurity incident response platform designed to help analyze security incidents and support incident investigation using Generative AI.",
    technologies: ["Java", "Python", "FastAPI", "Google Gemini API"],
    keyFeatures: [
      "Security incident telemetry analysis",
      "AI-assisted incident triage & investigation",
      "Contextual threat and vulnerability explanations",
      "Automated incident remediation suggestions",
    ],
    repository: "https://github.com/luminfathima-spec/SentinelAI-X",
    liveDemo: null, // Displayed only when verified link exists
    featured: true,
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
      "MERN-based food rescue platform connecting food donors, receivers and delivery partners to reduce food wastage and improve food distribution.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    keyFeatures: [
      "Role-based authentication & permissions",
      "Real-time food donation listings & claims",
      "Receiver food requests & status tracking",
      "Delivery partner logistics & distribution workflows",
      "Smart geolocation-aware food matching",
    ],
    repository: null,
    liveDemo: null,
    featured: true,
    overview:
      "ResQMeal is a social impact web application connecting surplus food providers (restaurants, caterers, supermarkets) with local shelters, NGOs, and verified volunteer delivery partners in real time.",
    problemStatement:
      "Massive quantities of wholesome surplus food are discarded daily due to fragmented logistics, lack of communication channels between donors and local shelters, and absence of verified transport coordination.",
    solution:
      "An end-to-end MERN web architecture featuring distinct authenticated portals for donors, receivers, and delivery volunteers, complete with automated matching algorithms and donation dispatch tracking.",
  },
  {
    id: "real-world-nids",
    title: "Real-World NIDS",
    subtitle: "Network Intrusion Detection System",
    category: "Cybersecurity | Machine Learning",
    status: "Academic Project",
    description:
      "A machine-learning-based network intrusion detection project designed to classify suspicious network activity and generate alerts.",
    technologies: ["Python", "Scikit-learn", "Random Forest", "Decision Tree", "NSL-KDD dataset"],
    keyFeatures: [
      "Network traffic anomaly preprocessing",
      "Multi-class cyberattack classification",
      "Ensemble learning with Random Forest & Decision Tree",
      "Structured security alerts & JSON event logging",
    ],
    repository: null,
    liveDemo: null,
    featured: true,
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
      "Dynamic product catalog & categorization",
      "Shopping cart management & checkout flow",
      "Structured relational database schema",
      "Order status handling & administration",
    ],
    repository: null,
    liveDemo: null,
    featured: false,
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
    status: "Proposed",
    description:
      "Proposed Generative AI-based border surveillance concept involving computer vision and Gemini models.",
    technologies: ["Python", "Google Gemini", "Computer Vision"],
    keyFeatures: [
      "Intelligent border surveillance concept",
      "Edge computer vision anomaly detection",
      "Gemini multimodal scene description",
      "Human-in-the-loop decision support workflows",
    ],
    repository: null,
    liveDemo: null,
    featured: false,
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
      { name: "Java", level: "Core Language", tag: "Backend & Systems", description: "Object-oriented architectures, multithreading, collections, and enterprise applications." },
      { name: "Python", level: "Language", tag: "AI & Scripting", description: "Applied machine learning, data processing, backend scripting, and FastAPI services." },
      { name: "JavaScript", level: "Language", tag: "Web & Full-Stack", description: "Modern ES6+ syntax, asynchronous programming, DOM manipulation, and dynamic web apps." },
      { name: "PHP", level: "Language", tag: "Web Services", description: "Server-side rendering, relational database integrations, and dynamic web applications." },
      { name: "SQL", level: "Query Language", tag: "Data Management", description: "Complex relational queries, indexing, joins, aggregations, and schema design." },
    ]
  },
  {
    title: "Frontend Development",
    iconName: "Layout",
    skills: [
      { name: "HTML", level: "Semantic Markup", tag: "Structure", description: "Modern semantic HTML5 documents, accessibility (a11y), and web structure standards." },
      { name: "CSS", level: "Modern Styling", tag: "Presentation", description: "Responsive layouts, Flexbox, CSS Grid, keyframe animations, and custom scrollbars." },
      { name: "React.js", level: "Component Library", tag: "UI Framework", description: "Functional components, custom hooks, reactive state workflows, and SPA architectures." },
      { name: "Tailwind CSS", level: "Utility Framework", tag: "Design System", description: "Rapid utility-first styling, design system tokens, responsive variants, and dark/light modes." },
    ]
  },
  {
    title: "Backend Development",
    iconName: "Server",
    skills: [
      { name: "Node.js", level: "Runtime", tag: "JavaScript Server", description: "High-performance event-driven server runtimes and npm module management." },
      { name: "Express.js", level: "Web Framework", tag: "REST APIs", description: "RESTful API routing, middleware pipelines, error handling, and JSON payloads." },
      { name: "FastAPI", level: "API Framework", tag: "Python Microservices", description: "Modern, high-performance asynchronous Python microservices with OpenAPI generation." },
      { name: "Java Backend Development", level: "Enterprise", tag: "OOP & Services", description: "Modular service architecture, object modeling, and server-side business logic." },
    ]
  },
  {
    title: "Databases",
    iconName: "Database",
    skills: [
      { name: "MongoDB", level: "NoSQL Document DB", tag: "Document Store", description: "BSON document schemas, aggregation pipelines, and high-velocity NoSQL storage." },
      { name: "MySQL", level: "Relational RDBMS", tag: "Structured Data", description: "ACID transactions, foreign key relational schemas, and query optimization." },
      { name: "PostgreSQL", level: "Object-Relational", tag: "ACID Compliant", description: "Robust relational data integrity, advanced indexing, and enterprise scalability." },
    ]
  },
  {
    title: "AI & Cybersecurity",
    iconName: "BrainCircuit",
    skills: [
      { name: "Generative AI", level: "Emerging Tech", tag: "LLMs & Multimodal", description: "Leveraging large language models, structured generation, and multimodal reasoning." },
      { name: "RAG", level: "Architecture", tag: "Knowledge Retrieval", description: "Retrieval-Augmented Generation architectures combining vector context with LLMs." },
      { name: "Computer Vision", level: "Discipline", tag: "Image Processing", description: "Image analysis pipelines, object detection concepts, and automated visual triage." },
      { name: "Scikit-learn", level: "ML Library", tag: "Predictive Models", description: "Feature engineering, classification (Random Forest, Decision Tree), and model evaluation." },
      { name: "Cybersecurity", level: "Specialization", tag: "Threat Analysis & Defense", description: "Network intrusion detection, threat vector identification, and incident response workflows." },
    ]
  },
  {
    title: "Developer Tools",
    iconName: "Wrench",
    skills: [
      { name: "Git", level: "Version Control", tag: "Distributed VCS", description: "Branching strategies, commit hygiene, merge resolution, and distributed versioning." },
      { name: "GitHub", level: "Collaboration", tag: "Code Hosting & CI", description: "Remote repository hosting, issue tracking, project collaboration, and CI deployments." },
      { name: "VS Code", level: "IDE", tag: "Development", description: "Modern developer workflow customization, debugging, extensions, and workspace tooling." },
      { name: "IntelliJ IDEA", level: "Java IDE", tag: "Enterprise Dev", description: "Enterprise Java code analysis, refactoring, build tooling, and test debugging." },
      { name: "Antigravity IDE", level: "AI Agentic IDE", tag: "Agentic Workflows", description: "Agentic development environments, prompt engineering, and intelligent assistants." },
    ]
  }
];

export const certificateCategories = [
  "All",
  "AI & Generative AI",
  "Academic Learning",
  "Professional Learning",
  "Events & Participation"
];

export const certificationList = [
  {
    id: "cert-gemini-rich-docs",
    title: "Inspect Rich Documents with Gemini Multimodality and Multimodal RAG",
    issuer: "Google Cloud",
    category: "AI & Generative AI",
    badgeText: "Skill Badge · Intermediate",
    file: "/certificates/gemini/gemini-badge-2.png",
    format: "image",
    details: "Machine Learning & AI · Issued by Google Cloud",
    description:
      "Hands-on expertise in analyzing rich documents, extracting multimodal data, and implementing Retrieval-Augmented Generation (RAG) pipelines using Google Gemini models.",
  },
  {
    id: "cert-gemini-prompt-design",
    title: "Prompt Design in Vertex AI",
    issuer: "Google Cloud",
    category: "AI & Generative AI",
    badgeText: "Skill Badge · Introductory",
    file: "/certificates/gemini/gemini-badge-1.png",
    format: "image",
    details: "Machine Learning & AI · Issued by Google Cloud",
    description:
      "Practical mastery of prompt engineering principles, multimodal prompting, and model parameter tuning using Vertex AI and Gemini foundation models.",
  },
  {
    id: "cert-nptel-km",
    title: "Knowledge Management",
    issuer: "NPTEL (IIT Kharagpur)",
    category: "Academic Learning",
    badgeText: "Elite Online Certification",
    file: "/certificates/nptel-knowledge-management.pdf",
    format: "pdf",
    details: "Score: 65% (Elite) · Jul-Sep 2026 · Roll: NPTEL26MG101S352201646",
    description:
      "8-week certified course funded by the Ministry of Education (MoE), Govt. of India and conducted by Indian Institute of Technology Kharagpur, completed with an Elite score.",
  },
  {
    id: "cert-digital-101",
    title: "Digital 101 Journey",
    issuer: "FutureSkills Prime (NASSCOM & MeitY)",
    category: "Professional Learning",
    badgeText: "FS Prime Certificate",
    file: "/certificates/digital-101-fs-prime.pdf",
    format: "pdf",
    details: "Date of Issue: 15/12/2022 · Certificate ID: FSP/2022/12/390657",
    description:
      "Professional skilling initiative by MeitY and NASSCOM IT-ITeS Sector Skills Council covering foundational digital competencies and emerging technology paradigms.",
  },
  {
    id: "cert-ekathva-2025",
    title: "EKATHVA TECH-FEST 2k25",
    issuer: "Department of MCA, Kishkinda University",
    category: "Events & Participation",
    badgeText: "Participation Certificate",
    file: "/certificates/ekathva-tech-fest-2k25.pdf",
    format: "pdf",
    details: "Event Date: 28th March 2025 · Department of MCA",
    description:
      "Certificate of Participation in the technical symposium EKATHVA TECH-FEST 2k25 conducted by the Department of Master of Computer Applications at Kishkinda University.",
  }
];
