/**
 * Traducciones de los datos de tecnologías, que viven en español en
 * src/data/*-data.ts. Las páginas en inglés leen de aquí.
 */
import type { Locale } from "./ui";

/** Nombres de categoría en inglés (solo los que cambian respecto al español). */
export const techNamesEn: Record<string, string> = {
  desktop: "Desktop Development",
  git: "Version Control",
  iot: "Internet of Things (IoT)",
  mobile: "Mobile Development",
  sql: "Databases",
  tools: "Tools & Productivity",
};

/** Descripción de cada categoría en inglés, por id. */
export const techDescriptionsEn: Record<string, string> = {
  backend:
    "Specialist in building server-side logic, designing scalable architectures and managing critical business processes.",
  desktop:
    "Native high-performance applications, rich user interfaces and software with direct access to operating system resources.",
  devops:
    "Deployment automation, container management and cloud environment configuration for fast, stable development cycles.",
  frontend:
    "Modern, responsive and highly interactive user interfaces, focused on user experience and performance.",
  git: "Professional source code management, team collaboration and change control with distributed systems and cloud platforms.",
  iot: "Embedded systems and connectivity solutions that integrate hardware with cloud services and real-time data analysis.",
  mobile:
    "Native and cross-platform mobile application design and development focused on performance, smoothness and efficient cloud usage.",
  python: "Versatile language I use for robust web development, data analysis and artificial intelligence solutions.",
  sql: "Design and administration of relational and non-relational database management systems to guarantee data integrity and availability.",
  tools: "Software and development environments I use daily to keep my workflow efficient, organized and professional.",
};

/** Las 72 etiquetas cortas de "type" del stack, en inglés. */
export const stackTypesEn: Record<string, string> = {
  "Almacenamiento Local": "Local Storage",
  Automatización: "Automation",
  "BaaS / Cloud": "BaaS / Cloud",
  "Cache & Message Broker": "Cache & Message Broker",
  "CI/CD": "CI/CD",
  "Ciencia de datos": "Data Science",
  "Cloud Computing": "Cloud Computing",
  "CMS Headless": "Headless CMS",
  Contenerización: "Containerization",
  "Control de Versiones": "Version Control",
  "Editor de Código": "Code Editor",
  "Entorno de Ejecución": "Runtime Environment",
  "Entorno IoT": "IoT Environment",
  "Framework de Estilos": "Styling Framework",
  "Framework Enterprise": "Enterprise Framework",
  "Framework Estático": "Static Framework",
  "Framework Frontend": "Frontend Framework",
  "Framework Fullstack": "Full-Stack Framework",
  "Framework Java": "Java Framework",
  "Framework Node": "Node Framework",
  "Framework PHP": "PHP Framework",
  "Framework Python": "Python Framework",
  "Framework UI": "UI Framework",
  "Gestor de DB": "Database Manager",
  "Herramientas UI/Hooks": "UI / Hook Tools",
  "IA (Dataset)": "AI (Dataset)",
  "IA (Detección)": "AI (Detection)",
  "IA (Visión)": "AI (Vision)",
  IDE: "IDE",
  "IDE Pro": "Pro IDE",
  "Lenguaje de Estilos": "Styling Language",
  "Lenguaje de Estructura": "Markup Language",
  "Lenguaje de programacion": "Programming Language",
  "Lenguaje de Programación": "Programming Language",
  "Lenguaje Principal": "Primary Language",
  "Lenguaje UI": "UI Language",
  "Librería Frontend": "Frontend Library",
  "Low-Code / No-Code": "Low-Code / No-Code",
  "Low-code Programming": "Low-code Programming",
  Metodología: "Methodology",
  "Microcontroladores Wi-Fi": "Wi-Fi Microcontrollers",
  "Motor de Versiones": "Version Control Tool",
  Multiplataforma: "Cross-platform",
  "Nativo (Android)": "Native (Android)",
  "NoSQL (Documental)": "NoSQL (Document)",
  ORM: "ORM",
  Orquestación: "Orchestration",
  "Plataforma Cloud": "Cloud Platform",
  "Plataforma DevOps": "DevOps Platform",
  "Plataforma Enterprise": "Enterprise Platform",
  Productividad: "Productivity",
  "Protocolo de Mensajería": "Messaging Protocol",
  "SBC (Hardware)": "SBC (Hardware)",
  Scripting: "Scripting",
  "Seguridad / Auth": "Security / Auth",
  "Shell / CLI": "Shell / CLI",
  "SQL (Enterprise)": "SQL (Enterprise)",
  "SQL (Ligero)": "SQL (Lite)",
  "SQL (Relacional)": "SQL (Relational)",
  "Superset de JS": "JS Superset",
  "Testing de APIs": "API Testing",
  "Time Series DB": "Time Series DB",
  "UI Framework": "UI Framework",
  "UI Library": "UI Library",
  "UI Library (Python)": "UI Library (Python)",
  "UI Toolkit": "UI Toolkit",
  Videojuegos: "Game Development",
  Virtualización: "Virtualization",
  "Web (API)": "Web (API)",
  "Web (Framework)": "Web (Framework)",
  "Web (Fullstack)": "Web (Full-Stack)",
  "Web Server / Proxy": "Web Server / Proxy",
};

export const techName = (id: string, name: string, locale: Locale) =>
  locale === "en" ? (techNamesEn[id] ?? name) : name;

export const techDescription = (id: string, description: string | undefined, locale: Locale) =>
  locale === "en" ? (techDescriptionsEn[id] ?? description) : description;

export const stackType = (type: string, locale: Locale) =>
  locale === "en" ? (stackTypesEn[type] ?? type) : type;
