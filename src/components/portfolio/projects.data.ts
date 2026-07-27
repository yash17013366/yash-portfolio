export type ProjectSection = "overview" | "features" | "tech" | "github";

export interface Project {
  id: string;
  index: string;
  name: string;
  tagline: string;
  overview: string;
  features: string[];
  tech: string[];
  github: string;
  imageFolder: string;
  liveDemo?: string;
}

export const projects: Project[] = [
  {
    id: "uncluttered",
    index: "01",
    name: "UNCLUTTERED",
    tagline: "Award-winning collaborative project management platform.",
    overview:
      "A modern full-stack task management platform built to simplify project collaboration through Kanban workflows, role-based access control, issue tracking, and real-time task organization. Growing teams often struggle with fragmented tools — Uncluttered brings together structured workflows, secure authentication, and collaborative features to streamline project management across teams.",
    features: [
      "Kanban boards with intuitive drag-and-drop workflows",
      "Role-Based Access Control (RBAC) for secure collaboration",
      "Issue tracking, comments, and task management",
      "Recognized as the Best Project by External Jury for innovation and execution",
    ],
    tech: ["React.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
    github: "https://github.com/yash17013366/Uncluttered",
    imageFolder: "uncluttered",
  },

  {
    id: "hotelease",
    index: "02",
    name: "HotelEase",
    tagline: "Modern hotel management made effortless.",
    overview:
      "A full-stack hotel management system that digitizes room bookings, guest records, billing, and daily hotel operations through a clean and intuitive interface. Manual hotel processes lead to booking conflicts and delays — HotelEase centralizes reservations, billing, and guest management into one responsive platform.",
    features: [
      "Room booking and reservation management",
      "Guest records and billing workflows",
      "RESTful backend APIs for hotel operations",
      "Responsive dashboard with efficient state management",
    ],
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "REST APIs"],
    github: "https://github.com/yash17013366/HotelEase",
    imageFolder: "hotelease",
    liveDemo: "https://team-hotel-ease.vercel.app/",
  },

  {
    id: "ai-chatbot",
    index: "03",
    name: "AI-Powered LLM Chatbot",
    tagline: "Intelligent conversations powered by modern LLMs.",
    overview:
      "An AI-powered chatbot built with FastAPI, React, and Google Gemini 2.5 Flash that delivers secure, contextual, multi-turn conversations with persistent chat history and user authentication. Unlike traditional chatbots that lose context, this modular architecture features JWT authentication, persistent MongoDB history, and Gemini-powered responses for accurate, scalable interactions.",
    features: [
      "Multi-turn contextual conversations with Gemini 2.5 Flash",
      "Secure JWT authentication with user-specific chat sessions",
      "Persistent conversation history stored in MongoDB Atlas",
      "Modular FastAPI backend with scalable REST APIs",
    ],
    tech: ["Python", "FastAPI", "React.js", "MongoDB Atlas", "JWT", "Gemini API"],
    github: "https://github.com/yash17013366/ai-llm-bot-gemini-based",
    imageFolder: "ai-llm-chatbot",
  },

  {
    id: "bmw-sales-dashboard",
    index: "04",
    name: "BMW Global Sales Dashboard",
    tagline: "Transforming global sales data into actionable insights.",
    overview:
      "An interactive business intelligence dashboard that visualizes BMW's global sales performance, regional trends, revenue distribution, and key business metrics. Large datasets are transformed into dynamic filters, KPI tracking, and rich visualizations — enabling stakeholders to derive actionable insights in real time.",
    features: [
      "Interactive KPI dashboard with dynamic filtering",
      "Regional and country-wise sales analysis",
      "Revenue, profit, and trend visualizations",
      "Business insights for data-driven decision making",
    ],
    tech: ["Power BI", "Excel", "SQL", "Data Visualization"],
    github: "https://github.com/yash17013366/BMW-Sales-Dashboard-Tableau",
    imageFolder: "bmw-sales-dashboard",
  },
];
