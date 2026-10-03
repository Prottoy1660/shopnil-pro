import { slugify } from "@/utils/slugify";

// Case Studies - Using existing portfolio items that have detailed case studies
export const caseStudies = [
  {
    id: 0,
    imageSrc: "/assets/images/latest-portfolio/TD/td.png",
    width: 1939,
    height: 1572,
    title: "Account Activity Services Parity",
    description: "How a 12-step balance check became 2 clicks, and helped unblock a platform migration for TD Business Central.",
    tags: ["Figma", "UI/UX", "Fintech"],
    slug: "account-activity-services-parity"
  },
  {
    id: 1,
    imageSrc: "/assets/images/latest-portfolio/Expense insight.png",
    width: 1939,
    height: 1572,
    title: "Expense insight",
    description: "A cutting-edge expense management tool that helps users track and manage their expenses efficiently.",
    tags: ["Figma", "UI/UX", "Mobile App"],
    slug: "expense-insight"
  },  
  {
    id: 2,
    imageSrc: "/assets/images/latest-portfolio/dynacare.png",
    width: 1939,
    height: 1572,
    title: "Dynacare LIS",
    description: "Led UX design for Dynacare’s lab application, digitizing manual workflows, cutting paper use, and reducing procedural turnaround times—streamlining documentation and improving efficiency across clinical testing environments.",
    tags: ["Figma", "UI/UX", "Healthcare"],
    slug: "dynacare-lis"
  },
  {
    id: 3,
    imageSrc: "/assets/images/latest-portfolio/ax_cp.png",
    width: 1939,
    height: 1572,
    title: "Augmedix Inc.",
    description: "At Augmedix, I co-designed real-time medical documentation tools, reducing physicians’ administrative work by 2–3 hours daily, boosting productivity, and supporting scalable healthcare delivery through innovative front-end design.",
    tags: ["Figma", "UI/UX", "Healthcare"],
    slug: "augmedix-inc"
  },
  {
    id: 4,
    imageSrc: "/assets/images/latest-portfolio/BMO AI.jpg",
    width: 1939,
    height: 1572,
    title: "Al-Powered Fraud Detection Tool",
    description: "Designed AI-powered fraud detection tools at BMO, reducing investigation time by 40% and preventing $2.5M+ in potential losses, while simplifying complex workflows for banking and insurance teams.",
    tags: ["Figma", "UI/UX", "Fintech"],
    slug: "al-powered-fraud-detection-tool-bmo"
  },
    {
    id: 5,
    imageSrc: "/assets/images/latest-portfolio/finicky_cover.png",
    width: 1939,
    height: 1572,
    title: "Finicky Foodie",
    description: "A food recipe app, Finicky Foodie, is dedicated to the urban working professionals who live a busy life and are short of time for preparing their meals. They often need to cook a meal to have both lunch and dinner because they wouldn't have time to cook twice a day.",
    tags: ["Figma", "UI/UX", "Mobile App"],
    slug: "finicky-foodie"
  },
  {
    id: 6,
    imageSrc: "/assets/images/latest-portfolio/awaj.png",
    width: 1920,
    height: 1572,
    title: "Awaj Foundation",
    description: "The most satisfying aspect of the Awaj Foundation project was contributing to the rights of underprivileged workers. This website was presented to them as an educational tool to create awareness, as well as to raise funds and increase the minimum pay.",
    tags: ["Figma", "UI/UX", "Non-profit"],
    slug: "awaj-foundation"
  }

].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

// Website Projects - Live websites that can be visited
export const websiteProjects = [
  {
    id: 1,
    imageSrc: "/assets/images/latest-portfolio/novartis.png",
    width: 1920,
    height: 1572,
    title: "Novartis",
    description: "",
    tags: [""],
    liveUrl: "https://www.novartis.com"
  },
  {
    id: 2,
    imageSrc: "/assets/images/latest-portfolio/ax_cp.png",
    width: 1939,
    height: 1572,
    title: "Augmedix Inc.",
    description: "Medical documentation platform for healthcare professionals.",
    tags: ["Healthcare", "SaaS", "Documentation"],
    liveUrl: "https://www.augmedix.com"
  },
  {
    id: 3,
    imageSrc: "/assets/images/latest-portfolio/new.png",
    width: 1939,
    height: 1572,
    title: "New Asia Group",
    description: "",
    tags: [""],
    liveUrl: "https://newasiabd.com"
  },
  {
    id: 4,
    imageSrc: "/assets/images/latest-portfolio/khiyo.png",
    width: 1939,
    height: 1572,
    title: "Khiyo",
    description: "",
    tags: [""],
    liveUrl: "https://www.khiyo.com"
  },
  {
    id: 5,
    imageSrc: "/assets/images/latest-portfolio/Dhaka Lit Fest.png",
    width: 1939,
    height: 1572,
    title: "Dhaka Lit Fest",
    description: "",
    tags: [""],
    liveUrl: "https://www.dhakalitfest.com"
  },
  {
    id: 6,
    imageSrc: "/assets/images/latest-portfolio/BookCentric.png",
    width: 1939,
    height: 1572,
    title: "BookCentric",
    description: "",
    tags: [""],
    liveUrl: "https://bookcentricbd.com"
  }
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

// Fun Projects - Experimental and creative projects
export const funProjects = [
  {
    id: 1,
    imageSrc: "/assets/images/latest-portfolio/SOM.png",
    width: 550,
    height: 396,
    title: "Search of Mystery",
    description: "",
    tags: ["YouTube", "Mystery", "Design", "Content Creation"],
    liveUrl: "https://searchofmystery.com",
    slug: "search-of-mystery",
  },
  {
    id: 2,
    imageSrc: "/assets/images/latest-portfolio/ilmaan.png",
    width: 550,
    height: 396,
    title: "Ilmaan Academy",
    description: "",
    tags: ["YouTube", "Mystery", "Design", "Content Creation"],
    liveUrl: "https://www.ilmaan.academy",
    

  }
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});