export type NavItem = {
  href: string;
  label: string;
};

export type ProjectStatus =
  | "Live"
  | "In Progress"
  | "Prototype"
  | "Completed"
  | "Hackathon";

export type IdentityPanelData = {
  title: string;
  summary: string;
  highlights: string[];
  accent: "tech" | "creative";
};

export type ContactLink = {
  label: string;
  href: string;
  description: string;
  ctaLabel: string;
};

export type ProjectTone = "tech" | "creative" | "warm";

export type ProjectRecord = {
  slug: string;
  title: string;
  summary: string;
  overview: string;
  category: string;
  group: string;
  status: ProjectStatus;
  tags: string[];
  callout?: string;
  calloutUrl?: string;
  problemIntro?: string;
  problemPoints: string[];
  approachPoints: string[];
  stack: string[];
  tradeoffs: string[];
  lessons: string[];
  demoUrl?: string;
  websiteUrl?: string;
  githubUrl?: string;
  imagePaths: string[];
};

export const siteMeta = {
  title: "Jonathan Hop | Senior Full Stack Engineer",
  description:
    "Senior Full Stack Engineer building distributed systems, APIs, full-stack products, and practical AI systems.",
};

export const navigationItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "mailto:yithril@gmail.com", label: "Contact" },
];

export const resumePdfHref = "/docs/jonathan_hop_resume_latest.pdf";

export const heroContent = {
  eyebrow: "Senior Full Stack Engineer",
  title: "I build software systems with practical AI.",
  description:
    "Senior Full Stack Engineer building distributed systems, APIs, and full-stack products, using AI where it adds real value.",
  primaryCta: { href: "/projects", label: "View My Work" },
  secondaryCta: { href: "https://youtu.be/l4RLcElCnRo", label: "Watch Demo" },
};

export const heroChips = ["Java", "C# / .NET", "Next.js", "TypeScript", "AI Systems", "Distributed Systems"];

export const identityPanels: IdentityPanelData[] = [
  {
    title: "AI Systems Engineer",
    summary: "I ship systems that solve problems",
    highlights: [
      "End-to-end development across backend and frontend",
      "Focus on design and architecture, not just coding",
      "Software at scale for real world use",
    ],
    accent: "tech",
  },
  {
    title: "Educator & Creator",
    summary: "Former teacher helping developers improve faster.",
    highlights: [
      "Taught 250+ students across 16 coding bootcamps.",
      "Creator work: Sunday Go Lessons, So You Want to Play Go (4-book series), Journey to the Middle Kingdom.",
      "Students now working as engineers and senior engineers.",
    ],
    accent: "creative",
  },
];

export const identityBridge = {
  title: "Clear systems, practical applications, and real-world results.",
  body: "That teaching background shapes how I build: clear systems, practical applications, and real-world results.",
  supporting:
    "I build products that are practical, scalable, and understandable. I combine engineering, teaching, and applied AI.",
};

export const techStackGroups = [
  {
    title: "Backend",
    description: "Scalable services, APIs, and platform work across enterprise and product environments.",
    items: ["C# / .NET (ASP.NET, .NET Core, Blazor)", "Java (Spring Boot, Spring Data, Hibernate)", "Node.js", "Python (FastAPI)"],
  },
  {
    title: "Frontend",
    description: "Modern UI work across product applications, education platforms, and internal tools.",
    items: ["React", "Next.js", "Angular", "Blazor"],
  },
  {
    title: "Data & Systems",
    description: "Data-intensive systems, infrastructure-aware delivery, and distributed application design.",
    items: ["SQL (PostgreSQL, SQL Server, MySQL)", "Redis", "ETL pipelines", "Microservices", "Distributed systems"],
  },
  {
    title: "AI",
    description: "Practical AI systems designed to work alongside real products and deterministic logic.",
    items: ["Agentic AI", "RAG (Retrieval Augmented Generation)", "Vector databases", "LangGraph", "Prompt engineering"],
  },
];

export const allProjects: ProjectRecord[] = [
  {
    slug: "coding-your-career",
    title: "Coding Your Career",
    summary:
      "AI-powered learning platform with a custom LMS, AI teaching assistant, and automated content generation.",
    overview:
      "Full-stack education platform designed to teach real-world software development. Includes a custom-built LMS, structured course content, and AI-assisted learning features for feedback, grading, and content generation.",
    category: "Education Platform / AI System",
    group: "Education Platforms",
    status: "Live",
    tags: ["Next.js", "Supabase", "AI assistant"],
    callout: "Custom LMS with AI teaching and grading workflows.",
    problemIntro:
      "Learning to code is often unstructured, slow to get feedback, and dependent on instructors for grading and support.",
    problemPoints: [
      "Learning paths are often unstructured.",
      "Students wait too long for useful feedback.",
      "High-quality course content is time-intensive to maintain.",
    ],
    approachPoints: [
      "Built a custom LMS to structure courses, lessons, and learning paths.",
      "Integrated AI as a teaching assistant to answer questions, provide feedback, and evaluate student responses.",
      "Implemented AI-assisted grading for projects, scoring, and feedback.",
      "Used AI to generate presentations, handouts, code examples, and course materials.",
      "Focused on combining structured learning and AI assistance, not just chat.",
    ],
    stack: ["Next.js", "Supabase (Postgres, Auth, RPC)", "TypeScript", "AI APIs (LLMs, prompt workflows)"],
    tradeoffs: [
      "Balancing AI flexibility with structured curriculum requirements.",
      "Ensuring AI feedback is useful and not generic.",
      "Avoiding over-reliance on AI vs real learning.",
      "Managing content generation quality.",
    ],
    lessons: [
      "AI works best as a teaching assistant, not a replacement for structure.",
      "Strong curriculum design still matters more than AI alone.",
      "Combining LMS and AI creates a much better learning experience than either alone.",
    ],
    websiteUrl: "https://www.codingyourcareer.com",
    imagePaths: [
      "/img/coding_your_career/thumbnail.png",
      "/img/coding_your_career/lms_main.png",
      "/img/coding_your_career/lms_2.png",
      "/img/coding_your_career/lms_3.png",
      "/img/coding_your_career/lms_4.png",
      "/img/coding_your_career/courses.png",
      "/img/coding_your_career/ai_teaching_assistant.png",
      "/img/coding_your_career/ai_feedback.png",
      "/img/coding_your_career/getting_feedback.png",
      "/img/coding_your_career/ansewring_questions.png",
      "/img/coding_your_career/code_along.png",
    ],
  },
  {
    slug: "sunday-go-lessons",
    title: "Sunday Go Lessons",
    summary:
      "Go learning platform combining structured lessons, problem training, and AI-powered game analysis using KataGo.",
    overview:
      "Full-stack platform for learning the game of Go, combining traditional teaching methods with AI-powered analysis and interactive training tools.",
    category: "Education Platform / Domain-Specific AI",
    group: "Education Platforms",
    status: "In Progress",
    tags: ["Next.js", "KataGo", "Teaching tools"],
    callout: "Structured teaching plus AI-powered game analysis.",
    problemIntro:
      "Go is difficult to learn because feedback is limited, analysis is complex, and strong players are required to review games.",
    problemPoints: [
      "Feedback is limited.",
      "Analysis is complex.",
      "Most tools either focus only on AI or lack structured teaching.",
    ],
    approachPoints: [
      "Built a full learning platform with lessons, problem training, and a lecture system.",
      "Integrated KataGo for game reviews and position evaluation.",
      "Developed lecture tooling to record and present lessons directly in the platform.",
      "Combined structured teaching, AI insights, and interactive practice.",
    ],
    stack: ["Next.js", "Supabase", "KataGo (AI engine)", "TypeScript"],
    tradeoffs: [
      "Translating AI output into human-understandable teaching.",
      "Balancing complexity vs beginner accessibility.",
      "Integrating AI analysis without overwhelming users.",
    ],
    lessons: [
      "AI alone doesn’t teach — structure plus explanation does.",
      "Domain expertise is critical when applying AI.",
      "Teaching tools need to simplify, not just analyze.",
    ],
    websiteUrl: "https://www.sundaygolessons.com",
    imagePaths: [
      "/img/sunday_go_lessons/thumbnail.png",
      "/img/sunday_go_lessons/all4.png",
      "/img/sunday_go_lessons/game_review_1.png",
      "/img/sunday_go_lessons/game_review_2.png",
      "/img/sunday_go_lessons/game_review_3.png",
      "/img/sunday_go_lessons/coming_soon_1.png",
      "/img/sunday_go_lessons/coming_soon_2.png",
      "/img/sunday_go_lessons/coming_soon_3.png",
      "/img/sunday_go_lessons/coming_soon_4.png",
      "/img/sunday_go_lessons/coming_soon_5.png",
      "/img/sunday_go_lessons/coming_soon_8.png",
      "/img/sunday_go_lessons/coming_soon_11.png",
    ],
  },
  {
    slug: "workflow-iq",
    title: "Workflow IQ",
    summary:
      "Agent-based workflow system using DAG architecture to safely constrain and orchestrate AI agents.",
    overview:
      "System designed to make AI agents useful in real workflows while maintaining control, safety, and predictable behavior through structured inputs, outputs, and execution paths.",
    category: "AI System / Agent Platform",
    group: "AI Systems",
    status: "Prototype",
    tags: ["Agentic AI", "DAG orchestration", "Supabase"],
    callout: "2nd place at Tetrate buildathon.",
    calloutUrl: "https://tetrate.io/blog/workflowiq-buildathon-runner-up",
    problemIntro:
      "AI agents are powerful but risky when they have too much access, too little structure, or unclear boundaries.",
    problemPoints: [
      "Too much access leads to unsafe behavior.",
      "Too little structure leads to unreliable output.",
      "Agents are difficult to integrate into real systems without constraints.",
    ],
    approachPoints: [
      "Built a DAG-based workflow system where nodes represent steps in execution.",
      "Used conditional paths to control flow.",
      "Constrained agents with strict input and output contracts.",
      "Defined allowed actions per agent to make them usable in real applications without giving them full system access.",
    ],
    stack: ["Next.js", "Supabase", "TypeScript", "AI APIs"],
    tradeoffs: [
      "Designing constraints without limiting usefulness.",
      "Balancing flexibility vs safety.",
      "Defining clear boundaries for agent behavior.",
    ],
    lessons: [
      "Unconstrained agents are not production-ready.",
      "Structure and contracts are essential.",
      "DAG-based orchestration is a strong model for AI workflows.",
    ],
    demoUrl: "https://youtu.be/l4RLcElCnRo",
    websiteUrl: "https://www.workflow-iq.ai/",
    imagePaths: [
      "/img/workflow_iq/thumbnail.png",
      "/img/workflow_iq/website_screenshot1.png",
      "/img/workflow_iq/website_screenshot2.png",
      "/img/workflow_iq/website_screenshot3.png",
      "/img/workflow_iq/website_screenshot4.png",
      "/img/workflow_iq/website_screenshot5.png",
    ],
  },
  {
    slug: "journey-to-the-middle-kingdom",
    title: "Journey to the Middle Kingdom",
    summary:
      "A time-travel adventure comic inspired by Chinese mythology. Action, humor, culture, and meaningful life lessons for curious young readers and families.",
    overview:
      "Creative storytelling project focused on building and publishing an original comic world with a dedicated site, serialized issues, and a clear entry point for readers discovering the story for the first time.",
    category: "Creative Project / Storytelling",
    group: "Creative & Educational Work",
    status: "Live",
    tags: ["Original comic", "World-building", "Serialized storytelling"],
    callout: "Long-term storytelling project with its own world, tone, and visual identity.",
    problemIntro:
      "Long-form creative projects still need structure: consistent world-building, sustainable pacing, and a presentation that makes it easy for readers to enter the story.",
    problemPoints: [
      "Long-form story projects can sprawl without a clear publishing rhythm.",
      "World-building has to stay coherent across characters, arcs, and tone.",
      "A reader-facing site needs to invite discovery without overwhelming new visitors.",
    ],
    approachPoints: [
      "Built the project as a serialized comic with planned arcs, lore, and a consistent creative direction.",
      "Created a dedicated website to present issues, setting, and project identity in one place.",
      "Focused on readability, pacing, and onboarding so the world feels approachable to new readers.",
      "Treated the project as a long-term creative system rather than a one-off release.",
    ],
    stack: ["Original comic writing", "World-building", "Serialized storytelling", "Website publishing"],
    tradeoffs: [
      "Balancing scope with a sustainable release pace.",
      "Keeping the world rich without overloading the reader too early.",
      "Maintaining consistency across narrative voice, presentation, and long-term direction.",
    ],
    lessons: [
      "Creative work benefits from systems thinking just as much as technical work does.",
      "Reader onboarding matters as much as the story itself.",
      "Long-term projects stay healthy when pacing and consistency are designed intentionally.",
    ],
    websiteUrl: "https://jmkcomic.com",
    imagePaths: [
      "/img/jmk/thumbnail.jpg",
      "/img/jmk/issue1.jpg",
      "/img/jmk/issue2.jpg",
      "/img/jmk/issue3.jpg",
      "/img/jmk/issue4.jpg",
      "/img/jmk/wallpaper 13.jpg",
    ],
  },
  {
    slug: "play-go-books",
    title: "So You Want to Play Go?",
    summary:
      "Four-book series teaching beginners how to play Go through structured lessons and progressive difficulty.",
    overview:
      "A structured teaching system built as a multi-book series for players who are completely new to Go. Each book is designed to progress the reader from knowing nothing about the game to thinking clearly about strategy, without overwhelming them with complexity.",
    category: "Creative Project / Instructional Book Series",
    group: "Creative & Educational Work",
    status: "Live",
    tags: ["Book series", "Go", "Structured teaching"],
    callout: "Four-book progression from beginner to independent player.",
    problemIntro:
      "Most Go learning resources either assume too much prior knowledge or present concepts in isolation without a clear beginner-to-intermediate path.",
    problemPoints: [
      "Go is notoriously difficult to learn without structured guidance.",
      "Most books target intermediate players and skip critical foundational concepts.",
      "No consistent progression exists to take a total beginner to independent play.",
    ],
    approachPoints: [
      "Designed a four-book series that builds on itself — each volume progressing the reader's understanding before introducing the next layer.",
      "Focused on clarity over completeness: teach what matters first, layer depth later.",
      "Used teaching experience from 250+ bootcamp students to structure explanations that actually stick.",
      "Kept the tone friendly and the examples practical to lower the barrier for new players.",
    ],
    stack: ["Instructional design", "Progressive curriculum", "Go teaching methodology"],
    tradeoffs: [
      "Deciding how much theory to introduce before practical play.",
      "Keeping each volume focused without sacrificing completeness.",
      "Writing for an audience with zero prior knowledge of abstract strategy games.",
    ],
    lessons: [
      "Teaching Go and teaching code share the same core challenge: building mental models before introducing complexity.",
      "Structured progression outperforms comprehensive reference material for beginners.",
      "Writing a curriculum forces you to understand something at a much deeper level than just knowing it.",
    ],
    imagePaths: [
      "/img/so_you_want_to_play_go/thumbnail.png",
      "/img/so_you_want_to_play_go/sywtpg_level1.jpg",
      "/img/so_you_want_to_play_go/sywtpg_level2.jpg",
      "/img/so_you_want_to_play_go/sywtpg_level3.jpg",
      "/img/so_you_want_to_play_go/sywtpg_level4.jpg",
    ],
  },
  {
    slug: "drive-thru-ai",
    title: "Drive-Thru AI",
    summary: "Conversational AI system simulating a fully automated drive-thru ordering experience.",
    overview:
      "End-to-end conversational AI system where the model acts as a drive-thru order taker, handling real-world, messy user input and maintaining context across a full ordering session.",
    category: "Applied AI System / Conversational AI",
    group: "Applied AI Tools",
    status: "Completed",
    tags: ["Conversational AI", "State management", "Prompt orchestration"],
    callout: "Capstone focused on real-world conversational messiness.",
    problemIntro:
      "Real-world conversations are noisy, non-linear, and full of interruptions and corrections.",
    problemPoints: [
      "Most AI demos assume clean input.",
      "Most AI demos assume linear conversations.",
      "Most AI demos assume ideal user behavior, which doesn’t reflect real usage.",
    ],
    approachPoints: [
      "Designed a conversational system that maintains context across multiple turns.",
      "Handled interruptions and order changes.",
      "Filtered out irrelevant or extraneous conversation.",
      "Simulated real-world interaction patterns such as changing orders mid-sentence and adding or removing items dynamically.",
      "Focused on robustness, adaptability, and realistic conversational flow.",
    ],
    stack: ["Next.js", "Supabase", "TypeScript", "AI APIs (LLMs, prompt orchestration)"],
    tradeoffs: [
      "Managing conversational state across multiple turns.",
      "Preventing the AI from drifting or losing context.",
      "Handling ambiguous or incomplete input.",
      "Designing prompts that are flexible but controlled.",
    ],
    lessons: [
      "Real-world conversational systems require state management, not just prompts.",
      "AI must handle messy input, not idealized input.",
      "Robustness matters more than clever responses.",
    ],
    demoUrl: "https://youtu.be/hu0y7TixbXo",
    githubUrl: "https://github.com/yithril/AI_DriveThru_IK",
    imagePaths: [
      "/img/drive_thru/thumbnail.png",
      "/img/drive_thru/menu_with_stuff.png",
      "/img/drive_thru/screenshot.png",
    ],
  },
  {
    slug: "legal-document-analyzer",
    title: "Legal Document Analyzer",
    summary:
      "AI-powered legal analysis system built to scale to millions of documents using Elasticsearch.",
    overview:
      "System designed for legal discovery workflows, combining large-scale document indexing with AI-driven summarization, categorization, and structured information extraction.",
    category: "Applied AI System / Data + AI Platform",
    group: "Applied AI Tools",
    status: "Completed",
    tags: ["Elasticsearch", "Entity extraction", "AI summaries"],
    callout: "Search infrastructure paired with structured AI outputs.",
    problemIntro:
      "Legal discovery involves massive volumes of documents, unstructured text, and difficulty identifying key relationships and timelines.",
    problemPoints: [
      "Traditional approaches are time-consuming.",
      "Traditional approaches are manual.",
      "Traditional approaches are difficult to scale.",
    ],
    approachPoints: [
      "Used Elasticsearch to index and query large document sets and support scaling to millions of records.",
      "Applied AI to summarize documents, categorize content, and extract key entities.",
      "Built structured outputs such as a timeline of events and a person and entity relationship map.",
      "Focused on turning unstructured data into usable, structured insights.",
    ],
    stack: ["Next.js", "Supabase", "Elasticsearch", "TypeScript", "AI APIs (LLMs, embeddings)"],
    tradeoffs: [
      "Scaling search and retrieval across large datasets.",
      "Ensuring AI summaries are accurate and useful.",
      "Extracting structured data from inconsistent text.",
      "Balancing performance vs depth of analysis.",
    ],
    lessons: [
      "AI is most valuable when paired with strong search infrastructure.",
      "Structured outputs such as timelines and relationships are more useful than raw summaries.",
      "Combining search and AI enables scalable analysis systems.",
    ],
    githubUrl: "https://github.com/yithril/LegalAnalyzer_AI",
    imagePaths: [
      "/img/legal_analyzer/thumbnail.png",
      "/img/legal_analyzer/ai_evidence_gathering.png",
      "/img/legal_analyzer/ai_evidence_part2.png",
      "/img/legal_analyzer/ai_evidence_3.png",
      "/img/legal_analyzer/document_viewer.png",
      "/img/legal_analyzer/keyword_search.png",
      "/img/legal_analyzer/timeline.png",
      "/img/legal_analyzer/personages.png",
      "/img/legal_analyzer/ai_summary.png",
    ],
  },
  {
    slug: "michigan-travel-ai",
    title: "Michigan Travel AI (Hidden Gems)",
    summary:
      "AI-powered travel recommendation system using RAG and web-scraped data to surface lesser-known destinations in Michigan.",
    overview:
      "Hackathon project designed to promote tourism to lesser-known locations by aggregating and analyzing data from sources like Yelp and Reddit, then using AI to generate personalized travel recommendations.",
    category: "Applied AI System / RAG / Recommendation Engine",
    group: "Hackathon / Experiments",
    status: "Hackathon",
    tags: ["RAG", "Web scraping", "Recommendations"],
    callout: "Michigan DevFest AI Hackathon project.",
    problemIntro:
      "Most travel platforms focus on popular destinations, surface the same recommendations repeatedly, and ignore local or lesser-known places.",
    problemPoints: [
      "This limits tourism diversity.",
      "This reduces discovery of hidden gems.",
    ],
    approachPoints: [
      "Collected data from Yelp, Reddit, and public web content.",
      "Built a RAG pipeline that indexed scraped data and retrieved relevant context based on queries.",
      "Used AI to generate recommendations, summarize locations, and provide contextual suggestions.",
      "Focused on surfacing unique, lesser-known, locally relevant destinations.",
    ],
    stack: ["Next.js", "Supabase", "Web scraping pipelines", "RAG architecture", "Vector embeddings", "AI APIs"],
    tradeoffs: [
      "Cleaning and normalizing inconsistent scraped data.",
      "Ensuring relevance and quality of recommendations.",
      "Avoiding generic or repetitive AI responses.",
      "Time constraints of hackathon development.",
    ],
    lessons: [
      "RAG is effective for grounding AI in real-world data.",
      "Data quality has a major impact on output quality.",
      "Even simple pipelines can produce useful discovery tools.",
      "Hackathons are great for rapidly testing applied AI ideas.",
    ],
    githubUrl: "https://github.com/yithril/MichiganTravel_Hop_Durocher",
    imagePaths: [
      "/img/ai_travel/thumbnail.png",
      "/img/ai_travel/hidden_gems2.png",
      "/img/ai_travel/hidden_gems3.png",
      "/img/ai_travel/hidden_gems4.png",
      "/img/ai_travel/hidden_gems5.png",
    ],
  },
];

export const featuredProjects = allProjects.filter((project) =>
  ["coding-your-career", "sunday-go-lessons", "workflow-iq", "drive-thru-ai", "legal-document-analyzer"].includes(
    project.slug,
  ),
);

export const creativeProjects = allProjects.filter((project) =>
  ["journey-to-the-middle-kingdom", "play-go-books"].includes(project.slug),
);

export const technicalProjects = allProjects.filter(
  (project) => project.group !== "Creative & Educational Work",
);

export const projectCategories = [
  "All",
  "Education Platforms",
  "AI Systems",
  "Applied AI Tools",
  "Creative & Educational Work",
  "Hackathon / Experiments",
];

export const resumeHighlights = [
  { value: "8+ years", label: "in fintech, banking, and enterprise systems" },
  { value: "750,000+ / day", label: "financial transactions processed in a distributed ETL pipeline" },
  { value: "380,000+ users", label: "served through a Zelle mobile banking integration" },
  { value: "250+ students", label: "trained across 16 coding bootcamps" },
];

export const resumeSummary =
  "Senior Full Stack Engineer with 8+ years of experience designing and delivering scalable systems in the banking, credit union, and fintech domains. Deep expertise in Java 11+, Spring Boot, microservices, and distributed systems, as well as .NET Core and C#, with a strong background in cloud-native architecture (AWS/Azure). Proven technical leader who architected a 750K+ daily transaction ETL pipeline, integrated real-time payment platforms (Zelle), and mentored 200+ engineers in enterprise Java standards.";

export const selectedAchievements = [
  "Built a distributed ETL pipeline processing 750,000+ financial transactions daily.",
  "Integrated Zelle into a mobile banking platform serving 380,000+ users.",
  "Delivered enterprise training in Java, SQL, and AI to 200+ employees across multiple organizations.",
  "Taught 250+ students across 16 coding bootcamps, with many progressing into engineering roles.",
  "Increased automated test coverage to 80%+ in legacy systems at Rocket Mortgage.",
  "Designed and deployed full-stack systems across fintech, manufacturing, and enterprise environments.",
  "Mentored developers and collaborated across engineering, product, and external vendor teams.",
];

export const engineeringTimeline = [
  {
    title: "Senior Software Engineer · Pluralsight",
    period: "Apr 2023 — Present",
    body: "Designed full-stack Java 11 and Spring Boot REST APIs, built CI/CD workflows, and delivered Java, SQL, and Agentic AI training to employees at Discover and CVENT.",
    tags: ["Java", "Spring Boot", "Docker", "SQL"],
  },
  {
    title: "Senior Software Engineer · Infinicept",
    period: "Aug 2022 — Apr 2023",
    body: "Designed and deployed a distributed ETL pipeline processing 750,000+ daily financial transactions, while mentoring developers and coordinating with product owners and vendors.",
    tags: [".NET", "C#", "SQL", "Azure", "JavaScript", "TypeScript"],
  },
  {
    title: "Senior Software Engineer · Michigan First Credit Union",
    period: "Apr 2020 — Aug 2022",
    body: "Led the rebuild of an internal customer service platform in Blazor, integrated Zelle for 380,000+ mobile banking users, and improved scale with Redis and Plaid integrations.",
    tags: [".NET", "C#", "Blazor", "SQL", "Redis", "JavaScript", "TypeScript"],
  },
  {
    title: "Full Stack Engineer · Android Industries",
    period: "May 2019 — Apr 2020",
    body: "Built internal workflow, safety, reporting, and ticketing applications that reduced factory downtime and improved operational visibility.",
    tags: [".NET", "C#", "SQL", "JavaScript", "MVC"],
  },
  {
    title: "Software Engineer · Rocket Mortgage",
    period: "Oct 2018 — May 2019",
    body: "Refactored legacy MVC applications, increased automated test coverage to 80%+, and built internal tools with ASP.NET, SQL, and Angular.",
    tags: [".NET", "C#", "Angular", "SQL", "AWS"],
  },
  {
    title: "Junior Engineer · Process Automation Solutions",
    period: "Feb 2017 — Oct 2018",
    body: "Built internal software to streamline company operations, including tools to track employee utilization, deliver business intelligence via Google Charts, and manage project workflows.",
    tags: ["C#", ".NET", "Visual Basic", "SQL", "AngularJS"],
  },
];

export const educationEntries = [
  { degree: "M.A., Japan Studies", institution: "University of Michigan" },
  { degree: "B.A., Asian Studies", institution: "University of Michigan" },
];

export const certifications = [
  { name: "Agentic AI", issuer: "Interview Kickstart", year: "2025" },
];

export const instructionTimeline = [
  {
    title: "Coding Bootcamp Instructor · Grand Circus",
    period: "Jan 2022 — Dec 2024",
    body: "Trained 50+ students in full-stack development across C#, JavaScript, SQL, React, TypeScript, and Angular, preparing them for junior developer roles. Contributed to curriculum development and lab design to keep course content contemporary.",
    tags: ["C#", "JavaScript", "TypeScript", "SQL", "MongoDB", "Angular", "React"],
  },
  {
    title: "TA, Web Development Boot Camp · Michigan State University",
    period: "Aug 2020 — Sep 2021",
    body: "Guided 30+ students through hands-on labs in HTML, CSS, React, SQL, and GraphQL across two full-stack bootcamp cohorts. Built sample applications using PostgreSQL and Angular and supported students in mastering core concepts.",
    tags: ["MongoDB", "Node.js", "React", "SQL"],
  },
];

export const philosophyCards = [
  {
    title: "Practical AI over hype",
    body: "AI is not magic — it’s a tool for turning messy human input into structured, usable systems.",
  },
  {
    title: "Reliable systems still matter",
    body: "The real challenge isn’t generating text. It’s designing systems where AI works alongside deterministic logic, data pipelines, and real product constraints.",
  },
  {
    title: "Build for real applications",
    body: "I focus on building practical AI systems that integrate into real applications.",
  },
];

export const aboutIntro =
  "I'm a Senior Full Stack Engineer with a background in education. Before tech, I was a high school history and math teacher. In 2017 I went all-in on software engineering and haven't looked back — building distributed systems, full-stack applications, and more recently, practical AI products.";

export const aboutIdentityLine = [
  "Teacher",
  "Self-Taught Developer",
  "Senior Engineer",
  "Educator + AI Builder",
];

export const aboutHighlights = [
  { value: "250+", label: "Students taught" },
  { value: "16", label: "Coding bootcamps" },
  { value: "8+", label: "Years in production" },
  { value: "200+", label: "Enterprise employees trained" },
];

export type AboutChapter = {
  label: string;
  title: string;
  body: string;
  image?: string;
  caption?: string;
};

export const aboutChapters: AboutChapter[] = [
  {
    label: "CHAPTER 01",
    title: "Teaching abroad",
    body: "I started my teaching career at a kindergarten in Suji, South Korea, just outside Seoul. Living and working abroad shaped how I communicate — breaking down complex ideas, reading a room, adapting on the fly. I carried that into every engineering role I've had since.",
    image: "/img/about_me/kindergarten_class.jpg",
    caption: "Teaching in Suji, South Korea",
  },
  {
    label: "CHAPTER 02",
    title: "Going all-in on software",
    body: "I had an early interest in programming — BASIC as a kid, a multiplayer game as a teenager. But the real shift came in 2017. I taught myself, got serious fast, and started building real systems as quickly as I could. What was always a side interest became a full career.",
    image: "/img/about_me/going_all_in.jpg",
    caption: "Going all-in on software",
  },
  {
    label: "CHAPTER 03",
    title: "Building systems, teaching developers",
    body: "I've spent the last several years building distributed systems across manufacturing, fintech, and enterprise software — and in parallel, teaching others to do the same. Since 2020 I've helped 250+ students break into tech through coding bootcamps and enterprise training. Many of them are now engineers and senior engineers.",
    image: "/img/about_me/zoom_teaching.jpg",
    caption: "Teaching developers remotely",
  },
  {
    label: "CHAPTER 04",
    title: "World traveler",
    body: "I've lived in South Korea and China and traveled to places like Egypt, Norway, and Singapore. Being in different environments and cultures has given me a broader perspective.",
    image: "/img/about_me/sphinx_photo.jpg",
    caption: "At the Sphinx, Egypt",
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jonathanhop/",
    description: "Professional profile, background, and current work.",
    ctaLabel: "Open LinkedIn",
  },
  {
    label: "Email",
    href: "mailto:yithril@gmail.com",
    description: "Direct contact for opportunities, consulting, or collaboration.",
    ctaLabel: "Send email",
  },
  {
    label: "Resume PDF",
    href: resumePdfHref,
    description: "Download the latest resume as a PDF.",
    ctaLabel: "Download resume",
  },
  {
    label: "Projects",
    href: "/projects",
    description: "Browse systems, platforms, and applied AI work.",
    ctaLabel: "View projects",
  },
];

export const footerLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jonathanhop/" },
  { label: "GitHub", href: "https://github.com/yithril" },
  { label: "Resume PDF", href: resumePdfHref },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "mailto:yithril@gmail.com" },
];

export const footerText = "Senior Full-Stack Engineer";

export function getProjectBySlug(slug: string) {
  return allProjects.find((project) => project.slug === slug);
}

export function getProjectTone(project: Pick<ProjectRecord, "group">): ProjectTone {
  if (project.group === "Education Platforms" || project.group === "Creative & Educational Work") {
    return "creative";
  }

  if (project.group === "Applied AI Tools" || project.group === "Hackathon / Experiments") {
    return "warm";
  }

  return "tech";
}
