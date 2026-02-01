
import { Project, SkillCategory, ExperienceItem } from './types';

export const PERSONAL_INFO = {
  name: "Suguna M",
  role: "Full Stack PHP Developer",
  location: "India",
  tagline: "Building responsive, scalable, and user-friendly web applications",
  email: "sugunamariyappan18@gmail.commmmmm", // Replace with actual
  github: "https://github.com/Sugunamariyappan18",
  linkedin: "https://www.linkedin.com/in/suguna-m-6713bb26a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
};

export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React js", "Bootstrap 5", "Tailwind CSS", "jQuery"]
  },
  {
    title: "Backend",
    skills: ["PHP", "MySQL", "RESTful APIs", "AJAX", "JSON"]
  },
  {
    title: "Tools & Others",
    skills: ["Git", "GitHub", "EmailJS", "SEO Optimization", "Payment Gateway Integration"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "E-commerce Website",
    description: "A comprehensive online shopping platform featuring user authentication, product catalogs, shopping cart, and secure checkout integration.",
    tech: ["PHP", "MySQL", "Bootstrap", "Razorpay"],
    image: "https://picsum.photos/seed/ecommerce/800/600",
    githubUrl: "#",
    liveUrl: "https://www.valluvamproducts.com/"
  },
  {
    id: "2",
    title: "In-House Company Project",
    description: "An automated platform for job seekers to apply for positions and for employers to manage candidates seamlessly.",
    tech: ["PHP", "MySQL", "AJAX", "jQuery"],
    image: "https://picsum.photos/seed/jobportal/800/600",
    githubUrl: "#",
    liveUrl: "https://www.igoagritechfarms.com/"
  },
  {
    id: "3",
    title: "miniproject-js",
    description: "A robust CRUD application designed for inventory tracking, featuring real-time search and analytics dashboard.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    image: "https://picsum.photos/seed/product/800/600",
    githubUrl: "https://sugunamariyappan18.github.io/Miniproject_js/",
    liveUrl: "#"
  },
  {
    id: "4",
    title: "In-House Company Project-IGO Nursery Project",
    description: "System to manage user subscriptions and automate newsletters using EmailJS and PHP back-end triggers.",
    tech: ["PHP", "EmailJS", "jQuery"],
    image: "https://picsum.photos/seed/automation/800/600",
    githubUrl: "#",
    liveUrl: "https://igo-nursery.vercel.app/"
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp1",
    role: "Full Stack Developer",
    company: "IGO Agritechfarms",
    period: "2025 - Present",
    description: [
      "Developed and maintained dynamic web applications using PHP and MySQL.",
      "Integrated secure payment gateways ensuring seamless transaction flows.",
      "Optimized website performance and implemented SEO best practices.",
      "Collaborated with cross-functional teams to deliver high-quality code."
    ]
  },
  {
    id: "exp2",
    role: "Executive",
    company: "Hitachi Payments Pvt.Ltd",
    period: "2023 - 2025",
    description: [
      "Provided ATM backend support by monitoring transactions",
      "troubleshooting issues, and coordinating with field teams to",
      "ensure smooth operations and minimal downtime while delivering",
      "timely technical support to clients and internal teams."
    ]
  }
];
