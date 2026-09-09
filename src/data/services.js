import { Code, Smartphone, PenTool, BrainCircuit } from 'lucide-react';

export const services = [
  {
    id: "01",
    title: "Web Development",
    description: "Custom websites and robust web applications engineered for performance and scalability.",
    icon: Code,
    color: "from-pravaah-blue to-pravaah-cyan",
    items: [
      "Business Website",
      "E-Commerce Website",
      "Custom Website",
      "CRM Development",
      "ERP Development",
      "Billing Web Applications",
      "School Management Systems",
      "Business Management Systems",
      "Booking & Appointment Systems",
      "SaaS Platforms",
      "Custom Web Applications",
      "Admin Dashboards",
      "API Integrations"
    ],
    link: "/services/web-development"
  },
  {
    id: "02",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile experiences that engage users and drive growth.",
    icon: Smartphone,
    color: "from-pravaah-purple to-pravaah-magenta",
    items: [
      "Android Applications",
      "Flutter Applications",
      "Business Applications",
      "Booking Applications",
      "Education Applications",
      "Delivery Applications",
      "Custom Mobile Applications",
      "Customer Apps",
      "Service Provider Apps",
      "Admin Applications"
    ],
    link: "/services/mobile-development"
  },
  {
    id: "03",
    title: "UI/UX & Branding",
    description: "Human-centric design solutions that build trust and elevate your brand identity.",
    icon: PenTool,
    color: "from-pravaah-cyan to-pravaah-purple",
    items: [
      "UI/UX Design",
      "Web UI/UX Design",
      "Mobile App UI Design",
      "Logo Design",
      "Brand Identity",
      "Visiting Card Design",
      "Brochure Design",
      "Social Media Branding",
      "Packaging Design",
      "Digital Brand Guidelines"
    ],
    link: "/services/design-branding"
  },
  {
    id: "04",
    title: "AI Solutions",
    description: "Intelligent automation and AI-powered systems to make your business smarter.",
    icon: BrainCircuit,
    color: "from-pravaah-blue via-pravaah-purple to-pravaah-magenta",
    items: [
      "AI Chatbot",
      "AI Customer Support",
      "AI-powered Business Solutions",
      "AI Automation",
      "AI Integration",
      "Intelligent Support Systems"
    ],
    link: "/services/ai-solutions"
  }
];
