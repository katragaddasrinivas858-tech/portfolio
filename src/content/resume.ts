// Single source of truth for every factual claim on the site.
// Every field traces to references/Srinivas_Katragadda_Resume_finallllll.pdf or PRODUCT.md.
// No invented metrics, testimonials, or media.

export const person = {
  name: "K. Srinivas Karthik",
  role: "AI & ML Engineering Student",
  location: "Visakhapatnam, Andhra Pradesh",
  email: "katragaddasrinivas858@gmail.com",
  github: "https://github.com/katragaddasrinivas858-tech",
  githubLabel: "github.com/katragaddasrinivas858-tech",
  linkedin: "https://www.linkedin.com/in/srinivaskatragaddak",
  linkedinLabel: "linkedin.com/in/srinivaskatragaddak",
};

export const areasOfInterest = [
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "Artificial Intelligence",
  "Quantum Computing (Foundations)",
  "Data Science",
];

export const education = [
  {
    program: "B.Tech — Computer Science & Engineering (AI & ML)",
    institution: "GITAM University, Visakhapatnam",
    period: "2025 – 2029",
    detail: "CGPA: 9.9 / 10.0 · Full Merit Scholarship",
    notes: [
      "Relevant Coursework: Programming in C, Python, Data Structures & Algorithms (basics), Basics of Agentic AI",
    ],
  },
  {
    program: "Class XII — AP Board",
    institution: "",
    period: "2025",
    detail: "Percentage: 96.7%",
    notes: [],
  },
  {
    program: "Class X — CBSE",
    institution: "",
    period: "2023",
    detail: "Percentage: 84%",
    notes: [],
  },
];

export type RoleEntry = {
  slug: string;
  title: string;
  org: string;
  period: string;
  bullets: RoleBullet[];
  track: "builder" | "operator";
};

export type RoleBullet = {
  /** Short card title — always written explicitly, never derived from splitting the detail text. */
  headline: string;
  detail: string;
};

export const roles: RoleEntry[] = [
  {
    slug: "inframiq",
    title: "Full Stack Developer Intern",
    org: "Inframiq Solutions Pvt. Ltd. (Remote)",
    period: "Jul 2026 – Present",
    track: "builder",
    bullets: [
      {
        headline: "Co-building a product end-to-end",
        detail:
          "Co-building a product end-to-end as one of two developers, owning implementation across the frontend, backend, and database layers from initial architecture onward.",
      },
      {
        headline: "Supporting the pitching phase",
        detail: "Currently supporting the team through the product's pitching phase ahead of public launch.",
      },
    ],
  },
  {
    slug: "mdc",
    title: "Head of Operations",
    org: "Meta Developer Communities (MDC), GITAM Visakhapatnam",
    period: "Jul 2026 – Present",
    track: "operator",
    bullets: [
      {
        headline: "Leads operations across seven domains",
        detail:
          "Lead operations for a student tech community spanning seven domains — Competitive Programming, WebArcs, DataVerse, Design, Photography, Content, and PR — under the Directorate of Student Life.",
      },
      {
        headline: "Ran the AY 26–27 recruitment cycle",
        detail: "Ran the AY 26–27 recruitment cycle, coordinating candidate communications across WhatsApp and email.",
      },
      {
        headline: "Built cross-domain onboarding automation",
        detail:
          "Built a Google Apps Script automation for new-member onboarding across all seven domains, generating Letters of Selection and routing welcome emails and WhatsApp group placement by domain.",
      },
      {
        headline: "Maintains operational infrastructure",
        detail: "Maintain operational infrastructure including Apps Script certificate pipelines and Notion-based ops boards.",
      },
      {
        headline: "Drives Meta Code Quest",
        detail:
          "Drive content and infrastructure for Meta Code Quest, a 10-chapter monthly coding hackathon series — producing event reports, social announcements, and certificate automation for each chapter.",
      },
      {
        headline: "Produced content for Feature Forge",
        detail:
          "Produced promotional and operational content for the Feature Forge ML workshop (~139 attendees), including a promotional reel and certificate mailer.",
      },
    ],
  },
];

export type ProjectEntry = {
  slug: string;
  name: string;
  stack: string[];
  summary: string;
  bullets: string[];
  award?: string;
};

export const projects: ProjectEntry[] = [
  {
    slug: "vision-guided-robotic-arm",
    name: "Vision-Guided Robotic Arm",
    stack: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "PyTorch",
      "YOLOv8",
      "Stable-Baselines3",
      "Gymnasium",
      "MATLAB Simulink/Simscape",
    ],
    summary:
      "Hand-gesture-controlled robotic arm for the Robotics Club, led on the ML/computer-vision side.",
    bullets: [
      "Led the ML/Computer Vision side of a hand-gesture-controlled robotic arm for the Robotics Club, iterating the design from a 5-finger anthropomorphic hand to a 2-finger parallel gripper for reliability.",
      "Built a real-time hand-tracking pipeline in OpenCV and MediaPipe with a scale-invariant, zero-calibration angle-based aperture calculation and an EMA smoothing filter to stabilize gripper commands.",
      "Designed a simulation-first control architecture bridging Python (perception/RL) and MATLAB Simulink/Simscape (physics) over TCP sockets using a custom JSON protocol, and optimized video capture with a threaded CameraThread implementation for improved real-time FPS on an RTX 4070 laptop GPU.",
    ],
  },
  {
    slug: "iot-smart-humidifier",
    name: "IoT Smart Humidifier",
    stack: ["ESP32", "DHT11", "WiFiManager", "Blynk IoT", "ArduinoOTA", "C++"],
    summary:
      "ESP32-based automated humidifier with modular firmware and a water-level safety interlock — 3rd place at GITAM Tech Exhibition 2025.",
    award: "3rd Place — GITAM Tech Exhibition 2025 (200+ competing teams)",
    bullets: [
      "Engineered an ESP32-based automated humidifier with a modular firmware split across four concerns — wifi_manager, sensor_manager, humidifier_control, and ota_update — orchestrated from main.cpp.",
      "Built humidifier_control logic that reads real-time DHT11 humidity/temperature data and drives a relay-controlled mister actuator on threshold-based rules, gated by a float/water-level sensor as a safety interlock against dry-running.",
      "Integrated the Blynk IoT platform for remote control and live telemetry, mapping device state across virtual pins V0–V7 to a mobile dashboard.",
      "Implemented WiFiManager-based captive-portal provisioning and ArduinoOTA firmware updates, eliminating manual reconfiguration and physical reflashing in the field.",
      "Awarded 3rd Place at GITAM Tech Exhibition 2025, competing against 200+ teams.",
    ],
  },
  {
    slug: "codelearn",
    name: "CodeLearn — Online Coding Platform",
    stack: ["MongoDB", "Node.js", "Render"],
    summary:
      "Full-stack coding platform with an in-browser execution engine and teacher/student dashboards.",
    bullets: [
      "Developed a full-stack coding platform featuring an in-browser code execution engine for multiple programming languages.",
      "Built separate teacher and student dashboards with performance tracking, submission history, and progress analytics.",
      "Deployed on Render with MongoDB Atlas backend; onboarded 15–20 active users in initial release.",
    ],
  },
  {
    slug: "physics-lab-simulator",
    name: "Physics Lab Simulator with AI Chatbot",
    stack: ["Python", "Gemini API"],
    summary:
      "Interactive physics-experiment simulator with a Gemini-powered contextual chatbot.",
    bullets: [
      "Created an interactive simulation platform for physics experiments, enabling hands-on learning without physical lab access.",
      "Integrated Google Gemini API as a contextual chatbot to answer student queries in real time within the simulator.",
    ],
  },
];

export const skills = [
  { group: "Languages", items: ["Python", "C", "HTML", "Java (Learning)"] },
  { group: "Computer Vision", items: ["OpenCV", "MediaPipe"] },
  {
    group: "ML / AI Frameworks",
    items: ["PyTorch", "YOLOv8", "Stable-Baselines3", "Gymnasium"],
  },
  {
    group: "AI / Tools",
    items: ["Gemini API", "Agentic AI", "GitHub Copilot", "Claude AI", "Google Colab"],
  },
  { group: "CS Fundamentals", items: ["Data Structures & Algorithms (basics)"] },
  { group: "IoT / Hardware", items: ["ESP32", "Arduino", "DHT11", "Blynk IoT"] },
  { group: "Simulation", items: ["MATLAB", "Simulink", "Simscape"] },
  { group: "Database", items: ["MongoDB Atlas"] },
  { group: "Automation & Ops", items: ["Google Apps Script", "Notion"] },
  { group: "Dev Tools", items: ["VS Code", "Git", "GitHub", "Render"] },
];

export const achievements = [
  "3rd Place — GITAM Tech Exhibition 2025 (200+ competing teams)",
  "Full Merit Scholarship — GITAM University, awarded for academic excellence at admission",
  "SGPA 10.0 / 10.0 — Semester 1, B.Tech CSE (AI & ML)",
  "SIH 2025 (Smart India Hackathon) — Participant",
  "Class Representative — CSE (AI & ML) batch, GITAM University",
];

export const courses = [
  { name: "Agentic AI Workshop", org: "GITAM University", period: "2025" },
  { name: "Java & Data Structures", org: "Self Study", period: "In Progress" },
];

// Instrument-readout stats — every value traces to a fact above.
export type Reading = {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  detail: string;
};

export const builderReadings: Reading[] = [
  { label: "CGPA", value: 9.9, suffix: "/10.0", decimals: 1, detail: "B.Tech CSE (AI & ML), GITAM University" },
  { label: "Semester 1 SGPA", value: 10.0, suffix: "/10.0", decimals: 1, detail: "First-semester result" },
  { label: "Projects shipped", value: 4, detail: "Robotics, IoT, full-stack, simulation" },
  { label: "Teams in the field", value: 200, suffix: "+", detail: "GITAM Tech Exhibition 2025 — placed 3rd" },
];

export const operatorReadings: Reading[] = [
  { label: "Domains led", value: 7, detail: "Competitive Programming, WebArcs, DataVerse, Design, Photography, Content, PR" },
  { label: "Hackathon chapters run", value: 10, detail: "Meta Code Quest monthly series" },
  { label: "Workshop attendees reached", value: 139, prefix: "~", detail: "Feature Forge ML workshop" },
  { label: "CodeLearn users onboarded", value: 20, prefix: "15–", detail: "Initial release cohort" },
];
