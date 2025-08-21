import { slugify } from "@/utils/slugify";

// Case Studies - Using existing portfolio items that have detailed case studies
export const caseStudies = [
    {
    id: 1,
    imageSrc: "/assets/images/latest-portfolio/BMO AI.jpg",
    width: 1939,
    height: 1572,
    title: "Al-Powered Fraud Detection Tool",
    description: "Designed AI-powered fraud detection tools at BMO, reducing investigation time by 40% and preventing $2.5M+ in potential losses, while simplifying complex workflows for banking and insurance teams.",
    tags: ["Figma", "UI/UX", "Fintech"],
    slug: "al-powered-fraud-detection-tool-bmo"
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
    imageSrc: "/assets/images/latest-portfolio/Bank of Montreal.png",
    width: 1939,
    height: 1572,
    title: "Financial Advisor Tool",
    description: "To transform the digital platform used by financial advisors and institutional clients to manage, invest, and report on retirement mutual funds, aiming to improve advisor efficiency, enhance client service capabilities.",
    tags: ["Figma", "UI/UX", "Fintech"],
    slug: "bank-of-montreal"
  },
  {
    id: 5,
    imageSrc: "/assets/images/latest-portfolio/awaj.png",
    width: 1920,
    height: 1572,
    title: "Awaj Foundation",
    description: "The most satisfying aspect of the Awaj Foundation project was contributing to the rights of underprivileged workers. This website was presented to them as an educational tool to create awareness, as well as to raise funds and increase the minimum pay.",
    tags: ["Figma", "UI/UX", "Non-profit"],
    slug: "awaj-foundation"
  },
  {
    id: 6,
    imageSrc: "/assets/images/latest-portfolio/finicky_cover.png",
    width: 1939,
    height: 1572,
    title: "Finicky Foodie",
    description: "A food recipe app, Finicky Foodie, is dedicated to the urban working professionals who live a busy life and are short of time for preparing their meals. They often need to cook a meal to have both lunch and dinner because they wouldn't have time to cook twice a day.",
    tags: ["Figma", "UI/UX", "Mobile App"],
    slug: "finicky-foodie"
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
    title: "Augmedix",
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
    // Detailed content for the project page
    detailedContent: {
      about: "Welcome to 'Search of Mystery' - my YouTube channel where I explore the fascinating world of mysteries, share design insights, and create engaging content that keeps viewers coming back for more. This channel is my creative outlet where I combine storytelling, design analysis, and mystery exploration to create unique and compelling videos.",
      
      howItWorks: "Each video on Search of Mystery is carefully crafted to take viewers on a journey. I research intriguing mysteries, analyze design elements in various contexts, and present information in an engaging, visually appealing way. The channel combines documentary-style storytelling with modern design aesthetics to create an immersive viewing experience.",
      
      features: [
        "Mystery exploration and investigation videos",
        "Design analysis and creative insights",
        "High-quality visual storytelling",
        "Engaging community discussions",
        "Regular upload schedule with consistent content",
        "Interactive elements and viewer engagement"
      ],
      
      technicalDetails: "The channel is produced using professional video editing software, high-quality recording equipment, and custom graphics created with design tools. I use advanced editing techniques, color grading, and sound design to create cinematic-quality content that stands out in the YouTube landscape.",
      
      whatILearned: "Running Search of Mystery has taught me invaluable lessons about content creation, audience engagement, and storytelling. I've learned how to research complex topics, present information clearly, and build a community around shared interests. The channel has also improved my video production skills and understanding of what makes content truly engaging.",
      
      challenges: "The biggest challenges have been maintaining consistent upload schedules while ensuring quality, researching complex mysteries thoroughly, and balancing entertainment with accuracy. I've also had to learn video production techniques and develop my own unique style that sets the channel apart from others in the genre.",
      
      futurePlans: "I plan to expand the channel with more diverse content, including collaborations with other creators, live streams for community engagement, and potentially branching into podcast format. I also want to create more interactive content and develop merchandise that reflects the channel's unique aesthetic and community spirit."
    }
  }
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});