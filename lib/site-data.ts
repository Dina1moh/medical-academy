import {
  BookOpen,
  ClipboardCheck,
  MonitorPlay,
  Send,
  Stethoscope,
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Learning Method", href: "/learning-method" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const contactInfo = {
  phone: "01096592805",
  email: "M.mohamed0073@nub.edu.eg",
  location: "Beni Suef Egypt",
};

export const whatsappHref = "https://wa.me/201096592805";

export const learningMethods = [
  {
    title: "High quality recorded lectures",
    description: "Structured lessons students can review anytime at their own pace.",
    icon: MonitorPlay,
  },
  {
    title: "Clinical correlations",
    description: "Core anatomy and embryology explained through relevant medical examples.",
    icon: Stethoscope,
  },
  {
    title: "Telegram support",
    description: "A simple support channel for announcements, questions, and guidance.",
    icon: Send,
  },
  {
    title: "Practice exams",
    description: "Focused questions to help students test understanding before exams.",
    icon: ClipboardCheck,
  },
  {
    title: "Dedicated learning platform",
    description: "A clean place for lectures, resources, updates, and course progress.",
    icon: BookOpen,
  },
];

export const faqs = [
  {
    question: "Who is this course for?",
    answer:
      "The course is designed for 1st, 2nd, and 3rd year medical students studying anatomy and embryology.",
  },
  {
    question: "Is the course beginner-friendly?",
    answer:
      "Yes. Topics are explained step by step with simple structure, clinical context, and revision support.",
  },
  {
    question: "Are lectures recorded?",
    answer:
      "Yes. The learning method focuses on high quality recorded lectures that students can replay.",
  },
  {
    question: "How do students get updates?",
    answer:
      "Telegram and WhatsApp placeholders are included now and can be connected to real links later.",
  },
];

export const socialLinks = [
  { label: "LinkedIn", href: "" },
  { label: "Facebook", href: "" },
  { label: "Instagram", href: "" },
  { label: "Telegram", href: "" },
  { label: "Email", href: `mailto:${contactInfo.email}` },
];

export const whyChoose = [
  "Clear explanations for complex anatomical concepts",
  "Exam-oriented structure for medical students",
  "Clinical correlations that connect theory to practice",
  "Organized modules for efficient revision",
];

export const journeySteps = [
  "Start with core concepts",
  "Study each system module",
  "Review clinical correlations",
  "Practice with exam questions",
  "Revise confidently before exams",
];
