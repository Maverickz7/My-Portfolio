import { ExperienceItem, SkillItem, CaseStudy, DashboardItem } from './types';

export const SOCIAL_LINKS = {
  email: "devanshkumar04@gmail.com", 
  linkedin: "https://www.linkedin.com/in/devansh-kumar-01335619b/" 
};

export const HERO_CONTENT = {
  name: "Devansh Kumar",
  role: "Product-oriented Professional | Product Discovery · Strategy · GTM Execution",
  bio: "A customer-obsessed, insights-driven professional with experience across consumer research, category analysis, digital adoption, GTM execution, and iterative product improvements. Strong ability to identify user pain points, validate insights, build product hypotheses, run experiments, and work cross-functionally with marketing, operations, sales, and design teams."
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "tata-steel",
    company: "TATA Steel",
    role: "Manager Sales",
    date: "May 2024 - Present",
    location: "Chandigarh, India",
    description: [
      "I manage a ₹25 Cr portfolio across northern India, using on-ground insights and competitive benchmarking to improve product-market fit, refresh SKUs, and drive category growth. I’ve delivered a 15% uplift in 60 days by redesigning product attributes (weight, ergonomics, colour finish), improved SKU availability to 95%+, expanded distribution with 25+ new partners, and onboarded 30+ retailers to Tata Aashiyana for digital ordering. My role combines user research, GTM execution, demand analysis, and product communication refinement."
    ]
  },
  {
    id: "reckitt",
    company: "Reckitt",
    role: "Digital Marketing Intern",
    date: "Nov 2023 - Jan 2024",
    location: "Gurgaon, India",
    description: [
      "Improved digital engagement by 20% through insight-led content optimisation and competitive analysis across 15+ FMCG brands. Evaluated messaging gaps, consumer interaction patterns, and visual structure to strengthen campaign performance and brand communication."
    ]
  },
  {
    id: "tata-tinplate",
    company: "TATA Steel",
    role: "Marketing Intern",
    date: "Apr 2023 - Jun 2023",
    location: "New Delhi",
    description: [
      "Identified a ₹x Cr market opportunity through application-based research across packaging categories. Built a Tableau dashboard consolidating competitive intelligence, product parameters, and pricing insights to support GTM planning and customer communication."
    ]
  },
  {
    id: "bsnl",
    company: "BSNL",
    role: "IT Intern",
    date: "Oct 2020 - Nov 2020",
    location: "Mumbai",
    description: [
      "Assisted BSNL’s technical operations team by diagnosing issues across 150+ IT products and improving communication between technicians and supervisors. Led process improvements in inventory and resource planning using Microsoft 365 and Python automations, resulting in a 25% reduction in response time and more efficient PC assembly and LAN management."
    ]
  }
];

export const SKILLS: SkillItem[] = [
  {
    id: "discovery",
    category: "Product Discovery",
    skills: ["Market Sizing", "User Interviews", "Competitive Analysis"],
    description: "Uncovering unmet needs and validating hypotheses before building, as seen in my Tinplate market study.",
    iconName: "Search"
  },
  {
    id: "strategy",
    category: "Product Strategy",
    skills: ["GTM Strategy", "Positioning", "Pricing"],
    description: "Defining how a product wins in the market, demonstrated by the Veet digital positioning project.",
    iconName: "Compass"
  },
  {
    id: "research",
    category: "User Research",
    skills: ["Usability Testing", "Accessibility", "Persona Building"],
    description: "Deep diving into user behaviors and pain points, including UX accessibility studies.",
    iconName: "Users"
  },
  {
    id: "improvement",
    category: "Product Improvement",
    skills: ["Funnel Analysis", "Feedback Loops", "PMF Iteration"],
    description: "Refining existing products to maximize value, exemplified by the Agrico Shovel refresh.",
    iconName: "TrendingUp"
  },
  {
    id: "roadmap",
    category: "Product Roadmap",
    skills: ["Prioritization", "Stakeholder Management", "Resource Planning"],
    description: "Balancing short-term wins with long-term vision to guide product evolution.",
    iconName: "Map"
  },
  {
    id: "design",
    category: "Product Design",
    skills: ["Wireframing", "Requirement Definition", "Communication Design"],
    description: "Translating business requirements into clear, user-centric design specifications.",
    iconName: "PenTool"
  }
];

export const TOOLS = [
  "Tableau", 
  "Power BI", 
  "MS Office (Advanced)", 
  "Adobe Photoshop", 
  "Figma", 
  "Notion",
  "Jira",
  "Canva (Expert)"
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "shovel-pmf",
    title: "Branding Journey - TATA Tinplate",
    summary: "Using customer insights to shape a more meaningful industrial brand identity.",
    tags: ["Brand Naming", "Qualitative Analysis", "Customer Insights"],
    problem: "The division lacked clarity on how customers perceived tinplate as a material.",
    approach: "Led a brand-perception survey and synthesised functional and emotional insights to develop and evaluate brand name options.",
    outcome: "Enabled insight-led brand naming decisions aligned with customer sentiment and heritage cues.",
    images: [
      "https://i.postimg.cc/66kgPy2L/tinplate1.webp",
      "https://i.postimg.cc/59hTr6Yj/tinplate4.webp",
      "https://i.postimg.cc/pVw4Sphf/tinplate2.webp"
    ]
  },
  {
    id: "veet-digital",
    title: "Social Media Brief - Branding Team (Reckitt)",
    summary: "Defining how a mass beauty brand can signal premium value through digital communication.",
    tags: ["Digital Strategy", "Competitve Benchmarking", "Data Analysis"],
    problem: "Veet needed to elevate its digital presence to appear more aspirational in a competitive beauty category.",
    approach: "Benchmarked 12+ beauty and personal-care brands to identify premium content cues across tone, visuals, and storytelling, and translated insights into clear content pillars.",
    outcome: "Delivered a strategic digital content brief to strengthen premium brand perception and digital desirability.",
    images: [
      "https://i.postimg.cc/Bvw2s2Qm/123.jpg",
      "https://i.postimg.cc/Pfg97PpS/veet1.webp",
      "https://i.postimg.cc/QN2wzH9J/veet2.webp"
    ]
  },
  {
    id: "tinplate-market",
    title: "Market Research for Upcoming Downstream Capacity - TATA Steel",
    summary: "Uncovering growth opportunities through market and competitor analysis.",
    tags: ["Market Sizing", "Data Visualization", "Competitive Analysis"],
    problem: "The business sought new growth avenues beyond existing channels and applications.",
    approach: "Analysed untapped channels and use-cases, supported by a Tableau dashboard mapping competitor presence and product performance.",
    outcome: "Identified a ₹2687 Cr market opportunity and informed expansion and GTM strategy discussions.",
    images: [
      "https://i.postimg.cc/8CnLDLPt/12.jpg",
      "https://i.postimg.cc/SQB3PJ22/tsl1.webp",
      "https://i.postimg.cc/dQbpfLk7/tsl2.webp"
    ]
  },
  {
    id: "ux-accessibility",
    title: "Accessibility Audit - eCommerce Platforms",
    summary: "Improving digital commerce experiences for visually impaired users.",
    tags: ["UX Research", "Accessibility", "User Journey Mapping"],
    problem: "Visually impaired users faced friction across key eCommerce journeys.",
    approach: "Mapped end-to-end journeys across discovery, comparison, and checkout to identify systemic accessibility gaps and propose targeted UI/UX improvements.",
    outcome: "Delivered actionable recommendations to improve usability, accessibility, and task completion efficiency.",
    images: [
      "https://i.postimg.cc/J44615R6/ux1.png",
      "https://i.postimg.cc/CLLPFswm/ux2.png",
      "https://i.postimg.cc/NffJgkQd/ux3.png"
    ]
  }
];

export const CERTIFICATIONS = [
  {
    name: "Certified Scrum Product Owner (CSPO)",
    issuer: "Scrum Alliance",
    year: "2023"
  },
  {
    name: "Google Analytics Certification",
    issuer: "Google",
    year: "2022"
  },
  {
    name: "Product Analytics Micro-Certification",
    issuer: "Product School",
    year: "2023"
  }
];

export const HOBBIES = [
  {
    name: "Tech Blogging",
    icon: "BookOpen",
    desc: "Writing about emerging product trends and UX patterns."
  },
  {
    name: "Strategic Gaming",
    icon: "Gamepad2", 
    desc: "Honing strategic thinking through Chess and RTS games."
  },
  {
    name: "Trekking",
    icon: "Mountain",
    desc: "Exploring new paths and disconnecting to recharge."
  },
  {
    name: "Photography",
    icon: "Camera",
    desc: "Capturing user contexts and perspectives through a lens."
  }
];

export const PRODUCT_DASHBOARD: DashboardItem[] = [
  {
    id: "market-growth",
    area: "Market Growth",
    application: "15% Sales Uplift in North India via SKU Refresh"
  },
  {
    id: "digital-channel",
    area: "Digital Channel",
    application: "30+ Retailers Onboarded to Tata Aashiyana"
  },
  {
    id: "sku-efficiency",
    area: "SKU Efficiency",
    application: "95%+ Availability through Demand Planning"
  }
];