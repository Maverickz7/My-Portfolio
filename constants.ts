import { ExperienceItem, SkillItem, CaseStudy, DashboardItem } from './types';

export const SOCIAL_LINKS = {
  email: "devanshkumar04@gmail.com.com", // Placeholder based on instructions
  linkedin: "https://www.linkedin.com/in/devansh-kumar-01335619b/" // Placeholder
};

export const HERO_CONTENT = {
  name: "Devansh Kumar",
  role: "Product-oriented Professional | Product Discovery · Strategy · UX-aware Execution",
  bio: "A customer-obsessed, insights-driven professional with experience across consumer research, category analysis, digital adoption, GTM execution, and iterative product improvements. Strong ability to identify user pain points, validate insights, build product hypotheses, run experiments, and work cross-functionally with marketing, operations, sales, and design teams."
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "tata-steel",
    company: "TATA Steel",
    role: "Managr Sales",
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
  "Jira (Expert)",
  "Canva",
  "Miro",
  "Python (Basic)"
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "shovel-pmf",
    title: "Agrico Shovel Product Refresh",
    summary: "Achieving Product-Market Fit in a traditional agricultural category.",
    tags: ["Product Discovery", "PMF", "GTM"],
    problem: "The existing shovel line was losing market share due to outdated ergonomic designs and stiff competition from local players.",
    approach: "Conducted field visits to understand farmer pain points. Iterated on handle grip and weight distribution based on direct feedback.",
    outcome: "Launched a refreshed lineup that saw a significant uplift in regional sales and positive sentiment in dealer networks.",
    images: [
      "https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c18?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1625246333195-5840b65c0846?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "veet-digital",
    title: "Veet Digital Positioning Strategy",
    summary: "Optimizing content strategy through search behavior analysis.",
    tags: ["Digital Strategy", "Content", "Data Analysis"],
    problem: "Veet needed to increase engagement with younger demographics who were shifting to digital-first discovery.",
    approach: "Analyzed search query data to identify content gaps. Developed a 'content brief' focusing on educational and empowering narratives.",
    outcome: "Delivered a comprehensive digital playbook adopted by the brand team for Q3/Q4 campaigns.",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "tinplate-market",
    title: "Tinplate Market Opportunity",
    summary: "B2B market sizing and branding study.",
    tags: ["Market Research", "B2B", "Strategy"],
    problem: "The Tinplate Company needed to understand the shifting landscape of sustainable packaging and identify new B2B segments.",
    approach: "Mapped the total addressable market (TAM) and conducted interviews with key packaging buyers.",
    outcome: "Identified 3 high-potential segments and recommended a sustainability-focused branding pivot.",
    images: [
      "https://images.unsplash.com/photo-1530982011887-3cf112a44306?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "ux-accessibility",
    title: "UX Accessibility Study",
    summary: "Evaluating digital inclusivity for diverse user groups.",
    tags: ["UX Research", "Accessibility", "Audit"],
    problem: "Digital platforms often neglect users with visual or motor impairments, limiting reach and usability.",
    approach: "Conducted an audit using WCAG guidelines and simulated user journeys for visually impaired users.",
    outcome: "Proposed a set of high-impact UI changes to improve contrast, navigation, and screen reader compatibility.",
    images: [
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop"
    ]
  }
];

export const PRODUCT_DASHBOARD: DashboardItem[] = [
  {
    id: "db-discovery",
    area: "Product Discovery",
    application: "Mapped the 'Job to be Done' for farmers using Tata Agrico tools to drive the product refresh initiative."
  },
  {
    id: "db-design",
    area: "Product Design",
    application: "Translated complex market data into clear visual communication designs for the Tinplate branding study."
  },
  {
    id: "db-research",
    area: "User Research",
    application: "Conducted accessibility audits and user interviews to uncover friction points in digital interfaces."
  },
  {
    id: "db-improvement",
    area: "Product Improvement",
    application: "Iterated on the shovel product line specifications based on real-world durability feedback from the field."
  },
  {
    id: "db-strategy",
    area: "Product Strategy",
    application: "Formulated the 'digital-first' positioning for Veet to capture the Gen-Z demographic efficiently."
  },
  {
    id: "db-roadmap",
    area: "Product Roadmap",
    application: "Planned the phased rollout of new agricultural SKUs, balancing supply chain constraints with seasonal demand."
  }
];