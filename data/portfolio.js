import { slugify } from "@/utils/slugify";

// PORTFOLIO PROJECTS CONTROL:
// To control which projects appear in the "All" category on the home page:
// - Set showInAll: true for projects you want to show in "All" (max 4 will be displayed)
// - Set showInAll: false for projects you don't want in "All" (they'll only show in their specific categories)
// - Projects with showInAll: false will still appear on the /works page

export const portfolioItems = [
  {
    id: 6,
    animationOrder: 6,
    imageSrc: "/assets/images/latest-portfolio/awaj.png",
    width: 1920,
    height: 1572,
    title: "Awaj Foundation",
    description: "The most satisfying aspect of the Awaj Foundation project was contributing to the rights of underprivileged workers. This website was presented to them as an educational tool to create awareness, as well as to raise funds and increase the minimum pay.",
    author: "Shopnil Mahamud",
    date: "6 June, 2025",
    tags: ["Figma", "UI/UX", "Non-profit"],
    categories: ["UI/UX Design", "Non-profit", "Web Application"],
    showInAll: false,
    allOrder: 6,
    details: [
      {
        label: "Role: ",
        value: ["UX Research", "Product Design", "Interaction Design", "User Experience Design"]
      },
      {
        label: "Duration: ",
        value: "(10 Weeks)"
      },
      {
        label: "Company: ",
        value: "DESIGNARIUM"
      }
    ],
    figmaUrl: "https://embed.figma.com/design/UvpQFqBHJ19x5crgabAWU9Jz/Awaj?node-id=0-1&embed-host=share",
    liveUrl: "https://awajfoundation.org",
    summary: "",
    sections: [
      {
        title: "Overview",
        content: "Bangladesh has been one of the largest exporters of ReadyMade Garments (RMG) products in the world. The biggest advantage for the manufacturer is primarily the availability of cheap labours. This may sound unbelievable that the minimum monthly wage in Bangladesh is just $17 which in contrast is almost the minimum hourly income in the US. Workers, especially women, are being highly neglected and often exploited by their employers. In order to get their voices heard, they needed a channel to reach the global audience. Success of this project would be measured if these painpoints are minimized by telling their stories to the world.",
      },
      {
        title: "Understanding the painpoints",
        content: [
          "Discrimination of wage towards female workers and ineffectiveness of labour unions",
          "Female workers are not aware of their legal rights",
          "Unsafe workplace conditions has been a major problem but often overlooked",
          "Lack of advocacy and community support",
          "Lack of digital identity to attract International donations, a website was needed to reach global population"
        ],
        image: "/assets/images/latest-portfolio/awaj_process-01.png",
        imagePosition: "after"
      },
      {
        title: "Research data",
        content: "We were extremely lucky to have received some case studies and contents from the client. However, as a UX researcher I had to take some in-person interviews to members of the foundation as well as some female workers regarding their work conditions and overall well-being. Some of the questions asked would include- how familiar they are in using the internet and how a website can contribute in telling their stories? etc.",
      },
      {
        title: "Goal",
        content: "As a whole their stories and case studies needed to be heard, as the word \"Awaj\" means voice in Bangla. They needed this website to represent themselves in the global platform. In order to make an impact, Awaj Foundation depends on global donations and the easiest way for the donors to learn about it would be through an impactful website that will tell stories.",
      },
      {
        title: "Technical challenges",
        content: "**Accessibility and optimization:** The website needs to be highly accessible and optimized without compromising aesthetic values. A website that doesn't cost much data since the internet speed in Bangladesh is still very slow.",
      },
      {
        content: "**Maintenance:** Non-tech savvy users need to be able to update and post new contents on a regular basis, therefore, the admin panel needs to be easy to use for the clients.",
      },
      {
        title: "Branding & UI Design",
        image: "/assets/images/latest-portfolio/awajlogo_revamp.png",
        imagePosition: "before"
      },
      {
        title: "Typography",
        image: "/assets/images/latest-portfolio/typography.jpg",
        imagePosition: "before"
      },
      {
        title: "Atomic design approach",
        image: "/assets/images/latest-portfolio/atomic1.png",
        imagePosition: "before"
      },
      {
        title: "Outcome",
      content: "Although the minimum wage in Bangladesh remains to be $17 a month, the **minimum wage for the RMG workers was increased to $65 a month.** Awaj Foundation was able to **raise a considerable amount of donations** after launching this website that enabled them to stand for the underprivileged female workers."
      },
      {
        title: "Accomplishments",
        content: "Clients were extremely happy with the stellar project delivery under a crunch timeline. The most satisfying aspect of this project was to be able to contribute for the underprivileged workers rights. This website was being presented to them as an educational tool to create awareness as well. I keep this as one of my favourites for the milestones we have achieved together. Besides, I'm grateful to my team for the collaboration.",
        image: "/assets/images/latest-portfolio/awaj_mockup.jpg",
        imagePosition: "after"
      },
      {
        title: "Key learnings",
        content: [
          "**Empathy** brings us more satisfaction than anything else.",
          "**Team work** is important for outstanding results. In this case, I had one more team mate who helped me with WordPress Development.",
          "We finished the entire project within 10 weeks although our estimation was 12 weeks.",
          "**Delivering before deadline** is always better than delaying in launching. Keeping extra time helps.",
          "Adaptive web design is better than responsive web design."
        ],
      },
    ],
    galleryImages: [
      {
        src: "/assets/images/latest-portfolio/1. Dashboard (1).png",
        alt: "Pharma Portal design - Main Image"
      },
      {
        src: "/assets/images/latest-portfolio/1. Dashboard (2).png",
        alt: "Pharma Portal design - Gallery Image 1"
      }
    ]
  },
  {
    id: 3,
    animationOrder: 3,
    imageSrc: "/assets/images/latest-portfolio/ax_cp.png",
    width: 1939,
    height: 1572,
    title: "Augmedix Inc.",
    description: "At Augmedix, I co-designed real-time medical documentation tools, reducing physicians’ administrative work by 2–3 hours daily, boosting productivity, and supporting scalable healthcare delivery through innovative front-end design.",
    author: "Shopnil Mahamud",
    date: "6 June, 2025",
    tags: ["Figma", "UI/UX", "Healthcare"],
    categories: ["UI/UX Design", "Healthcare", "Web Application"],
    showInAll: true,
    allOrder: 3,
    details: [
      {
        label: "Role: ",
        value: ["UX Research", "Product Design", "Interaction Design", "User Experience Design"]
      },
      {
        label: "Duration: ",
        value: "5 years"
      },
      {
        label: "Company: ",
        value: "Augmedix Inc."
      }
    ],
    figmaUrl: "",
    summary: "",
    sections: [
      {
        title: "",
        videoUrl: "https://www.youtube.com/watch?v=z3HQ-92xE64",
        videoPosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Augmedix/Slide1.png",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Augmedix/Slide2.png",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Augmedix/Slide3.png",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Augmedix/Slide4.png",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Augmedix/Slide5.png",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Augmedix/Slide6.png",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Augmedix/Slide7.png",
        imagePosition: "before"
      },
      {
        title: "",
        videoUrl: "https://youtu.be/6IYyAAy2yPY",
        videoPosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Augmedix/Slide8.png",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Augmedix/Slide9.png",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Augmedix/Slide10.png",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Augmedix/Slide11.png",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Augmedix/Slide12.png",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Augmedix/Slide13.png",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Augmedix/Slide14.png",
        imagePosition: "before"
      },
      {
        title: "",
        images: [
          "/assets/images/latest-portfolio/Augmedix/Slide15.png",
          "/assets/images/latest-portfolio/Augmedix/Slide16.png",
          "/assets/images/latest-portfolio/Augmedix/Slide17.png",
          "/assets/images/latest-portfolio/Augmedix/Slide18.png"
        ],
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Augmedix/Slide19.png",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Augmedix/Slide20.png",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Augmedix/Slide21.png",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Augmedix/Slide22.png",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Augmedix/Slide23.png",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Augmedix/Slide24.png",
        imagePosition: "before"
      }
    ]
  },
  {
    id: 2,
    animationOrder: 2,
    imageSrc: "/assets/images/latest-portfolio/dynacare.png",
    width: 1939,
    height: 1572,
    title: "Dynacare LIS",
    description: "Led UX design for Dynacare’s lab application, digitizing manual workflows, cutting paper use, and reducing procedural turnaround times—streamlining documentation and improving efficiency across clinical testing environments.",
    author: "Shopnil Mahamud",
    date: "6 June, 2025",
    tags: ["Figma", "UI/UX", "Healthcare"],
    categories: ["UI/UX Design", "Healthcare", "Web Application"],
    showInAll: true,
    allOrder: 2,
    details: [
      {
        label: "Role: ",
        value: ["UX Research", "Product Design", "Interaction Design", "User Experience Design"]
      },
      {
        label: "Duration: ",
        value: "6 Month"
      },
      {
        label: "Company: ",
        value: "Dynacare"
      }
    ],
    figmaUrl: "https://embed.figma.com/design/fPGy7ZU0xdfaMRfhsoYvcr/CytoConnect?node-id=0-1&embed-host=share",
    liveUrl: "https://www.dynacare.ca",
    summary: "",
    sections: [
      {
        title: "",
        image: "/assets/images/latest-portfolio/Newone (1).jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Newone (2).jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Newone (3).jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Newone (4).jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Newone (5).jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Newone (6).jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Newone (7).jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Newone (8).jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Newone (9).jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Newone (10).jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Newone (11).jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Newone (12).jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Newone (13).jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Newone (14).jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Newone (15).jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Newone (16).jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Newone (17).jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Newone (18).jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Newone (19).jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Newone (20).jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Newone (21).jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Newone (22).jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Newone (23).jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Newone (24).jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Newone (25).jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Newone (26).jpg",
        imagePosition: "before"
      }
    ]
  },
  {
    id: 4,
    animationOrder: 4,
    imageSrc: "/assets/images/latest-portfolio/BMO AI.jpg",
    width: 1939,
    height: 1572,
    title: "Al-Powered Fraud Detection Tool",
    description: "Designed AI-powered fraud detection tools at BMO, reducing investigation time by 40% and preventing $2.5M+ in potential losses, while simplifying complex workflows for banking and insurance teams.",
    author: "Shopnil Mahamud",
    date: "6 June, 2025",
    tags: ["Figma", "UI/UX", "Fintech"],
    categories: ["UI/UX Design", "Fintech", "Web Application"],
    showInAll: true,
    allOrder: 4,
    details: [
      {
        label: "Role: ",
        value: ["UX Research", "Product Design", "Interaction Design", "User Experience Design"]
      },
      {
        label: "Duration: ",
        value: "1 Year"
      },
      {
        label: "Company: ",
        value: "Bank of Montreal"
      }
    ],
    liveUrl: "https://www.bmo.com",
    summary: "",
    sections: [
      {
        title: "",
        image: "/assets/images/latest-portfolio/BMO Fraud Detection_page-0001.jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/BMO Fraud Detection_page-0002.jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/BMO Fraud Detection_page-0003.jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/BMO Fraud Detection_page-0004.jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/BMO Fraud Detection_page-0005.jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/BMO Fraud Detection_page-0006.jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/BMO Fraud Detection_page-0007.jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/BMO Fraud Detection_page-0008.jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/BMO Fraud Detection_page-0009.jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/BMO Fraud Detection_page-0010.jpg",
        imagePosition: "before"
      }
    ]
  },
  {
    id: 7,
    animationOrder: 7,
    imageSrc: "/assets/images/latest-portfolio/Bank of Montreal.png",
    width: 1939,
    height: 1572,
    title: "Financial Advisor Tool",
    description: "To transform the digital platform used by financial advisors and institutional clients to manage, invest, and report on retirement mutual funds, aiming to improve advisor efficiency, enhance client service capabilities.",
    author: "Shopnil Mahamud",
    date: "6 June, 2025",
    tags: ["Figma", "UI/UX", "Hide"],
    categories: ["UI/UX Design", "Hide", "Web Application"],
    showInAll: false,
    allOrder: 7,
    details: [
      {
        label: "Role: ",
        value: ["UX Research", "Product Design", "Interaction Design", "User Experience Design"]
      },
      {
        label: "Duration: ",
        value: "1 years"
      },
      {
        label: "Company: ",
        value: "Bank of Montreal"
      }
    ],
    figmaUrl: "https://embed.figma.com/design/LacZrj6bsNcPUtuEvJZPB6/BMO-Insurance-App?node-id=0-1&embed-host=share",
    summary: "",
    sections: [
      {
        title: "Confidentiality Notice",
        titleFontSize: "font-size-custom-10",
        titleFontWeight: "font-weight-bold",
        content: "**Please Note:** Due to a non-disclosure agreement, details of the project and some visuals cannot be shared in public.",
      },
      {
        title: "Overview",
        titleFontSize: "font-size-custom-10",
        titleFontWeight: "font-weight-bold",
        content: "To transform the digital platform used by financial advisors and institutional clients to manage, invest, and report on retirement mutual funds, aiming to improve advisor efficiency, enhance client service capabilities, and streamline compliance processes, ultimately driving stronger business relationships and fund adoption.",
      },
      {
        title: "The Challenge",
        titleFontSize: "font-size-custom-10",
        titleFontWeight: "font-weight-bold",
        content: "Existing B2B financial platforms often present significant usability hurdles for financial advisors and institutional clients, leading to inefficiencies and potential errors. Our client observed:",
      },
      {
        title: "",
        content: "**Advisor Inefficiency:** Manual processes and a lack of intuitive tools led to advisors spending excessive time on administrative tasks rather than client engagement.",
      },
      {
        title: "",
        content: "**Complex Client Management:** Difficulties in quickly accessing comprehensive client profiles, portfolio performance, and historical data.",
      },
      {
        title: "",
        content: "**Reporting Burdens:** Generating customized client reports and compliance documentation was time-consuming and prone to manual errors.",
      },
      {
        title: "",
        content: "**Limited Fund Insight:** Advisors struggled to quickly find relevant fund information and understand complex fund structures for client recommendations.",
      },
      {
        title: "",
        content: "**Onboarding Friction:** High effort required to onboard new institutional clients or set up new retirement plans.",
      },
      {
        title: "",
        content: "The core challenge was to design a robust yet intuitive platform that empowers financial professionals to efficiently manage their clients' retirement portfolios, provide superior service, and navigate complex regulations with ease.",
      },
      {
        title: "My Role",
        titleFontSize: "font-size-custom-10",
        titleFontWeight: "font-weight-bold",
        content: "As a UX Designer and Researcher on this project, I was responsible for:",
      },
      {

        title: "",
        contentFontSize: "font-size-sm",        // 14px
        contentFontWeight: "font-weight-normal",
        content: [
          {
            mainPoint: "****",
            noIcon: true,
            subPoints: [
              "Conducting extensive user research with financial advisors, relationship managers, and institutional administrators to understand their workflows, pain points, and critical needs.",
              "Translating complex business requirements and research insights into actionable design strategies.",
              "Developing detailed user personas, B2B-specific user journeys, and a comprehensive information architecture.",
              "Creating wireframes, interactive prototypes, and detailed mockups for various platform modules.",
              "Designing the user interface (UI), ensuring professional aesthetics, alignment with brand guidelines, and strict adherence to accessibility and security standards.",
              "Planning and facilitating expert reviews and usability testing sessions with financial professionals.",
              "Iterating on designs based on qualitative feedback, quantitative data, and technical feasibility.",
              "Collaborating closely with product managers, compliance officers, development teams, and business stakeholders."
            ]
          }
        ]
      },
      {
        title: "Discovery & Research",
        titleFontSize: "font-size-custom-10", // Add this
        titleFontWeight: "font-weight-bold",
        content: "Our discovery phase was paramount to understanding the intricate needs of financial professionals and the regulatory landscape they operate within.",
      },
      {
        content: [
          {
            mainPoint: "**1. Stakeholder Interviews & Contextual Inquiry**",
            subPoints: [
              "**Methodology:** Conducted 15 in-depth interviews with various stakeholders including financial advisors, branch managers, compliance officers, and IT support staff. Performed contextual inquiries by shadowing advisors in their daily tasks to observe workflows and identify bottlenecks firsthand."
            ]
          }
        ]
      },
      {
        content: [
          {
            mainPoint: "**Key Insights:**",
            subPoints: [
              "**Time Sensitivity:** Advisors prioritize tools that save time, especially for repetitive tasks like report generation and client lookups.",
              "**Data Aggregation:** A single, comprehensive view of client information (holdings, history, communications) was critical.",
              "**Customization & Flexibility:** Need for customizable dashboards and reports to cater to diverse client needs and internal reporting requirements.",
              "**Regulatory Compliance:** Tools must explicitly support compliance checks and audit trails without adding unnecessary friction.",
              "**Training & Onboarding:** While sophisticated, the platform needed to be intuitive enough to reduce training overhead for new users."
            ]
          }
        ]
      },
      {
        title: "",
        content: [
          {
            mainPoint: "**2. Competitive & Industry Analysis**",
            subPoints: [
              "**Methodology:** Analyzed leading B2B financial software, advisor workstations, CRM platforms, and compliance management tools. Reviewed industry best practices for financial data visualization and security.",
              "**Key Findings:** Identified superior approaches for portfolio analytics, client relationship management dashboards, and efficient data entry. Noted common frustrations with legacy systems, such as outdated interfaces and disjointed workflows."
            ]
          }
        ]
      },
      {
        title: "3. Persona Development",
      },
      {
        content: "Based on our B2B research, we developed three primary user personas, reflecting the diverse roles and needs within the financial institution:"
      },
      {
        title: "",
        contentFontSize: "font-size-sm",        // 14px
        contentFontWeight: "font-weight-normal",
        content: [
          {
            mainPoint: "****",
            noIcon: true,
            subPoints: [
              "**The Client Relationship Manager (Michael, 45):** Focuses on client engagement, needs quick access to client data, portfolio performance, and communication tools.",
              "**The Investment Strategist (Jessica, 38):**  Deep dives into fund performance, asset allocation, and market trends; requires robust analytical tools.",
              "**The Operations Administrator (Chris, 52):**  Manages client onboarding, data entry, and compliance reporting; needs efficient bulk actions and clear audit trails."
            ]
          }
        ]
      },
      {
        titleFontSize: "font-size-custom-10", // Add this
        titleFontWeight: "font-weight-bold",
        title: "Information Architecture & User Flows",
      },
      {
        title: "1. Information Architecture (IA)",
      },
      {
        content: "Based on our B2B research, we developed three primary user personas, reflecting the diverse roles and needs within the financial institution:"
      },
      {
        title: "",
        contentFontSize: "font-size-sm",        // 14px
        contentFontWeight: "font-weight-normal",
        content: [
          {
            mainPoint: "****",
            noIcon: true,
            subPoints: [
              "**Dashboard:** Personalized overview for advisors (client alerts, upcoming tasks, performance snapshots).",
              "**Clients:** Centralized hub for managing individual and institutional clients (profiles, portfolios, interactions).",
              "**Portfolios:** Tools for comprehensive portfolio analysis, allocation adjustments, and rebalancing across multiple clients.",
              "**Funds:** Detailed fund research, comparison, and selection tools with advanced filters.",
              "**Reporting:** Customizable report generation for clients, compliance, and internal analysis.",
              "**Administration/Compliance:** Tools for user management, audit trails, and regulatory adherence."
            ]
          }
        ]
      },
      {
        title: "2. User Flows",
      },
      {
        content: "Detailed user flows were mapped out for critical B2B tasks, ensuring efficiency and accuracy:"
      },
      {
        title: "",
        contentFontSize: "font-size-sm",        // 14px
        contentFontWeight: "font-weight-normal",
        content: [
          {
            mainPoint: "****",
            noIcon: true,
            subPoints: [
              "Onboarding a new institutional client and setting up multiple associated accounts.",
              "Conducting a comprehensive portfolio review and proposing adjustments.",
              "Generating a customized quarterly performance report for a client.",
              "Performing a compliance check on a client's fund allocations.",
              "Bulk updating client contact information or fund preferences."
            ]
          }
        ]
      },
      {
        title: "",
        content: "This focused on reducing clicks, minimizing data entry, and providing clear paths for complex operations."
      },
      {
        titleFontSize: "font-size-custom-10", // Add this
        titleFontWeight: "font-weight-bold",
        title: "Design & Ideation",
        content: "Our design process blended strategic thinking with meticulous detail, progressing through various fidelities with continuous stakeholder engagement."
      },
      {
        content: [
          {
            mainPoint: "**1. Sketches & Wireframes**",
            subPoints: [
              "Initial whiteboard sessions and rapid sketching explored various dashboard layouts, complex data tables, and reporting module structures.",
              "Low-fidelity wireframes, created in tools like Balsamiq or Miro, defined the functional layout, content hierarchy, and interaction patterns for key advisor workflows. These were used for early validation with internal teams.",
            ]
          }
        ]
      },
      {
        content: [
          {
            mainPoint: "**2. Prototyping**",
            subPoints: [
              "High-fidelity, interactive prototypes were developed using Figma, simulating the full platform experience. This allowed stakeholders to navigate complex scenarios, provide realistic feedback on interactions, and visualize the impact of design decisions on their workflows for both desktop and tablet views."
            ]
          }
        ]
      },
      {
        content: [
          {
            mainPoint: "**3. Visual Design (UI, Branding, Accessibility & Data Density)**",
            subPoints: [
              "**Professional & Functional UI:** The visual design prioritized functionality, clarity, and a professional aesthetic consistent with the bank's enterprise brand. We employed a sophisticated color palette, clear typography (Inter for readability), and judicious use of iconography to aid navigation.",
              "**Advanced Data Visualization:** Developed custom data visualizations for portfolio performance, asset allocation, and risk metrics, allowing advisors to quickly interpret complex financial information and explain it to clients.",
              "**Efficient Data Entry & Management:** Designed forms and tables for efficient data input, bulk actions, and easy editing, minimizing manual effort.",
              "**Microinteractions & Feedback:** Incorporated subtle animations, progress indicators, and clear feedback messages to guide users through complex processes and confirm actions.",
              "**Accessibility & Responsiveness:** Designed for compliance with WCAG 2.1 (AA standard), ensuring high contrast, keyboard navigation, and screen reader compatibility. The platform was built with a responsive design approach, optimizing for large desktop monitors and professional-grade tablets.",
            ]
          }
        ]
      },
      {
        title: "Low-Fidelity",
        images: [
           "/assets/images/latest-portfolio/BMO-01.png",
        ],
        imagePosition: "after"
      },
      {
        title: "",
        images: [
           "/assets/images/latest-portfolio/BMO-02.png",
        ],
        imagePosition: "after"
      },
      {
        title: "",
        images: [
           "/assets/images/latest-portfolio/BMO-03.png",
        ],
        imagePosition: "after"
      },
      {
        title: "Mid-Fidelity",
        images: [
           "/assets/images/latest-portfolio/BMO-04.png",
        ],
        imagePosition: "after"
      },
      {
        title: "High-Fidelity",
        images: [
           "/assets/images/latest-portfolio/BMO-05.png",
        ],
        imagePosition: "after"
      },
      {
        titleFontSize: "font-size-custom-10", // Add this
        titleFontWeight: "font-weight-bold",
        title: "Usability Testing & Iteration",
        content: "Usability testing with actual financial professionals was crucial for validating our solutions against real-world use cases."
      },
      {
        content: [
          {
            mainPoint: "**1. Methodology**",
            subPoints: [
              "**Round 1 (Mid-Fidelity Prototypes):** Conducted remote moderated usability tests with 10 financial advisors and operations staff from different branches. Tasks included client search, portfolio analysis, and basic report generation.",
              "**Round 2 (High-Fidelity Prototypes):** Conducted in-person moderated tests with 8 new participants, focusing on complex tasks like bulk updates, detailed fund comparisons, and compliance reporting."
            ]
          }
        ]
      },
      {
        content: [
          {
            mainPoint: "**2. Key Findings & Iterations**",
            subPoints: [
              "**Initial Discovery:** Advisors found it challenging to compare multiple funds side-by-side for client recommendations.",
              "**Iteration:** Implemented a robust Fund Comparison tool that allowed users to select, compare, and visualize key metrics (performance, fees, risk) for up to five funds simultaneously."
            ]
          }
        ]
      },
      {
        content: [
          {
            mainPoint: "****",
            noIcon: true,
            subPoints: [
              "**Initial Discovery:** Generating a custom client report involved too many steps and options.",
              "**Iteration:** Introduced a Smart Report Builder with pre-defined templates, drag-and-drop sections, and real-time preview, significantly reducing the time to create customized reports."
            ]
          }
        ]
      },
      {
        content: [
          {
            mainPoint: "****",
            noIcon: true,
            subPoints: [
              "**Initial Discovery:** Navigating between different client-specific data (e.g., portfolio, communication log, documents) was disjointed.",
              "**Iteration:** Created a comprehensive Client 360 View dashboard, consolidating all relevant client information into a single, scrollable interface with clear tab navigation for quick access to specific modules."
            ]
          }
        ]
      },
      {
        content: [
          {
            mainPoint: "****",
            noIcon: true,
            subPoints: [
              "**Initial Discovery:** Understanding the implications of regulatory changes on client portfolios was difficult.",
              "**Iteration:** Developed a Compliance Heatmap feature that visually highlighted potential compliance issues within client portfolios, offering direct links to relevant regulations and recommended actions."
            ]
          }
        ]
      },
      {
        titleFontSize: "font-size-custom-10", // Add this
        titleFontWeight: "font-weight-bold",
        title: "Results & Impact",
        content: "The redesigned B2B retirement mutual funds platform delivered significant value to the financial institution and its advisors:"
      },
      {
        content: [
          {
            mainPoint: "****",
            noIcon: true,
            subPoints: [
              "**20% increase in advisor efficiency** for client management and reporting tasks.",
              "**10% reduction in manual errors** related to data entry and compliance documentation.",
              "**Increased advisor satisfaction** and adoption rates due to improved usability and streamlined workflows.",
              "**Enhanced capacity for client service,** allowing advisors to dedicate more time to relationship building and strategic advice.",
              "**Streamlined onboarding** of new institutional clients, reducing initial setup time."
            ]
          }
        ]
      },
      {
        titleFontSize: "font-size-custom-10", // Add this
        titleFontWeight: "font-weight-bold",
        title: "Lessons Learned & Future Considerations",
      },
      {
        content: [
          {
            mainPoint: "****",
            noIcon: true,
            subPoints: [
              "**Complexity as a Feature:** In B2B, complexity is often a necessity. The challenge is not to eliminate it, but to manage it through intuitive design, progressive disclosure, and smart defaults.",
              "**Integration is Key:** B2B platforms rarely stand alone. Anticipating and designing for seamless integration with other internal systems (CRM, accounting, compliance) is critical.",
              "**Workflow-Centric Design:** Understanding the precise, often rigid, workflows of professional users is paramount. Design must support and enhance these existing processes, not disrupt them."
            ]
          }
        ]
      },
      {
        title: "",
        content: "Future considerations include integrating AI-powered client insights and predictive analytics, expanding API capabilities for seamless data exchange with third-party tools, and building a more robust in-platform learning and support system for advisors."
      },
      {
        title: "Conclusion",
        titleFontSize: "font-size-custom-10", // Add this
        titleFontWeight: "font-weight-bold",
        content: "This project demonstrates how a deep understanding of B2B user needs, combined with rigorous UX design methodologies, can transform a complex financial platform into an indispensable tool. By empowering financial advisors with an intuitive, efficient, and compliant solution, we not only improved their daily operations but also directly contributed to the bank's ability to offer superior client service and achieve its strategic business objectives in the retirement mutual funds sector."
      },
    ],
  },
  {
    id: 5,
    animationOrder: 5,
        imageSrc: "/assets/images/latest-portfolio/finicky_cover.png",
        width: 1939,
        height: 1572,
        title: "Finicky Foodie",
        description: "A food recipe app, Finicky Foodie, is dedicated to the urban working professionals who live a busy life and are short of time for preparing their meals. They often need to cook a meal to have both lunch and dinner because they wouldn't have time to cook twice a day.",
        author: "Shopnil Mahamud",
        date: "6 June, 2025",
        tags: ["Figma", "UI/UX", "Mobile App"],
        categories: ["UI/UX Design", "Mobile App", "Web Application"],
        showInAll: false,
        allOrder: 5,
        details: [
          {
            label: "Role: ",
            value: ["UX Research", "Product Design", "Interaction Design", "User Experience Design"]
          },
          {
            label: "Duration: ",
            value: "2 Weeks"
          },
          {
            label: "Company: ",
            value: "Finicky Foodie"
          }
        ],
        figmaUrl: "",
        liveUrl: "",
        summary: "",
        sections: [
          {
            title: "Overview",
            content: "A food recipe app, Finicky foodie is dedicated to the urban working professionals who lives a busy life and short of time for preparing their meals. They often need to cook a meal for having both lunch and dinner because they wouldn't have time to cook twice a day. This app gives them the option to cook in higher quantity without compromising quality taste if they chose multiple meal quantity option. Finicky foodie is designed to be quick and easy to use and each feature is developed keeping 'time' factor in mind. We understand the value of time for our users, thus we try to save it as much as possible by keeping our application easy and faster to use. All the features serves the purpose in mind for our busy users."
          },
          {
            title: "Pain points",
            content: "At the age of 21st century, time is the biggest challenge in our daily lives. We are racing against time to get things done as quickly as possible especially in the western countries. Finding time to perform culinary art is scarce. However, we cannot live without food. And when we are hungry, we crave for something delicious as well. Ordering food from outside may be an option but it's not the best practice to order from restaurants because they may be tasty but sometimes unhealthy and expensive. Besides, one cannot order everyday. We value healthy and clean eating as well as saving time and money. One may also not have all the ingredients required for preparing a certain dish and often wants to exclude certain ingredients. Many available apps are complex and confusing and are not focused on saving time, rather about referring recipes they feel one may like."
          },
          {
            title: "Solution",
            content: "Finicky foodie will give you the option to include and exclude ingredients and will only show recipes which are quick and easy to prepare. You can also determine the quantity required as well as avoiding quickly perishable ingredients. A quick and healthy meal can be cooked watching a one minute video instruction. One can also keep their favourite list in order to get back to those recipes later. App experience is easy, simple and fast if you're a Finicky Foodie. If you're using the application for the first time, it will only ask for your inputs which are absolutely necessary. We wish you a fun and interactive experience."
          },
          {
            title: "Approach",
            content: "There are several different approaches to resolve a problem, our app approach is to put our users before everything else. User empathy research is at the core of Finicky Foodie. We have also considered our competitors through a competitive analysis which evaluates the services others are providing, so that we can provide something new as well as more interactive, fun and easier experience. We have a target user, who are busy professionals with little time to spend for preparing their meals, so our app is user centric towards that niche."
          },
          {
            title: "",
            image: "/assets/images/latest-portfolio/Web/1.jpg",
            imagePosition: "before"
          },
          {
            title: "",
            image: "/assets/images/latest-portfolio/Web/2.jpg",
            imagePosition: "before"
          },
          {
            title: "",
            image: "/assets/images/latest-portfolio/Web/3.jpg",
            imagePosition: "before"
          },
          {
            title: "",
            image: "/assets/images/latest-portfolio/Web/4.jpg",
            imagePosition: "before"
          },
          {
            title: "",
            image: "/assets/images/latest-portfolio/Web/5.jpg",
            imagePosition: "before"
          },
          {
            title: "",
            image: "/assets/images/latest-portfolio/Web/6.jpg",
            imagePosition: "before"
          },
          {
            title: "",
            image: "/assets/images/latest-portfolio/Web/7.jpg",
            imagePosition: "before"
          },
          {
            title: "",
            image: "/assets/images/latest-portfolio/Web/8.jpg",
            imagePosition: "before"
          },
          {
            title: "",
            image: "/assets/images/latest-portfolio/Web/9.jpg",
            imagePosition: "before"
          },
          {
            title: "",
            image: "/assets/images/latest-portfolio/Web/10.jpg",
            imagePosition: "before"
          }
    ]
  },
    {
    id: 8,
    animationOrder: 8,
        imageSrc: "/assets/images/latest-portfolio/eccf-portal.png",
        width: 1939,
        height: 1572,
        title: "Dynacare ECCF Portal",
        description: "A modern portal design for the ECCF organization, featuring appointment scheduling, patient management, and administrative tools. Includes a responsive design optimized for all devices.",
        author: "Shopnil Mahamud",
        date: "6 June, 2025",
        tags: ["Figma", "UI/UX", "Hide"],
        categories: ["UI/UX Design", "Hide", "Web Application"],
        showInAll: false,
        allOrder: 8,
        details: [
          {
            label: "Role: ",
            value: ["UX Research", "Product Design", "Interaction Design", "User Experience Design"]
          },
          {
            label: "Duration: ",
            value: "5 years"
          },
          {
            label: "Company: ",
            value: "Dynacare"
          }
        ],
        figmaUrl: "https://embed.figma.com/design/rmdbckNubVNZ2pq0bE4XDw/ECCF-Portal?node-id=0-1&embed-host=share",
        liveUrl: "",
        summary: "",
        sections: [
          {
            title: "",
            content: "Truck Driver's intoxication may cause fatal accidents, so the government regulation requires the drivers to be tested randomly."
          },
          {
            title: "",
            content: "While their employer makes an appointment, the drivers would come to a testing lab to give either urine or oral fluid samples."
          },
          {
            title: "",
            content: "The drivers reserve the right to refuse testing at any given time, and may refuse to provide their ID."
          },
          {
            title: "USER WORKFLOW DIAGRAM",
            image: "/assets/images/latest-portfolio/ECCF/1.png",
            imagePosition: "before"
          },
          {
        title: "",
        content: [
          {
            mainPoint: "**REQUIREMENTS**",
            subPoints: [
              "**Create an appointment scheduling system for the sample collectors.**",
              "**Create a digital form based on the paper form below.**",
              "**Create an admin dashboard to manage the users.**"
            ]
          }
        ]
      },
      {
        title: "IDEATION & DESIGN",
        titleFontSize: "font-size-custom-10", // Add this
        titleFontWeight: "font-weight-bold",
      },
          {
            title: "",
            image: "/assets/images/latest-portfolio/ECCF/2.png",
            imagePosition: "before"
          },
          {
            title: "",
            image: "/assets/images/latest-portfolio/ECCF/3.png",
            imagePosition: "before"
          },
          {
            title: "",
            image: "/assets/images/latest-portfolio/ECCF/4.png",
            imagePosition: "before"
          },
          {
            title: "",
            image: "/assets/images/latest-portfolio/ECCF/5.png",
            imagePosition: "before"
          },
          {
            title: "",
            image: "/assets/images/latest-portfolio/ECCF/6.png",
            imagePosition: "before"
          },
          {
            title: "",
            image: "/assets/images/latest-portfolio/ECCF/7.png",
            imagePosition: "before"
          },
          {
            title: "",
            image: "/assets/images/latest-portfolio/ECCF/8.png",
            imagePosition: "before"
          },
          {
            title: "",
            image: "/assets/images/latest-portfolio/ECCF/9.png",
            imagePosition: "before"
          },
          {
            title: "",
            image: "/assets/images/latest-portfolio/ECCF/10.png",
            imagePosition: "before"
          },
          {
            title: "",
            image: "/assets/images/latest-portfolio/ECCF/11.png",
            imagePosition: "before"
          },
          {
            title: "",
            image: "/assets/images/latest-portfolio/ECCF/12.png",
            imagePosition: "before"
          },
          {
            title: "",
            image: "/assets/images/latest-portfolio/ECCF/13.png",
            imagePosition: "before"
          },
          {
            title: "",
            image: "/assets/images/latest-portfolio/ECCF/14.png",
            imagePosition: "before"
          },
          {
            title: "",
            image: "/assets/images/latest-portfolio/ECCF/15.png",
            imagePosition: "before"
          }
    ]
  },
    {
    id: 1,
    animationOrder: 1,
    imageSrc: "/assets/images/latest-portfolio/Expense insight.png",
    width: 1939,
    height: 1572,
    title: "Expense Insight",
    description: "A cutting-edge expense management tool that helps users track and manage their expenses efficiently.",
    author: "Shopnil Mahamud",
    date: "6 June, 2025",
    tags: ["Figma", "UI/UX", "Fintech"],
    categories: ["UI/UX Design", "Fintech", "Web Application"],
    showInAll: true,
    allOrder: 1,
    details: [
      {
        label: "Role: ",
        value: ["UX Research", "Product Design", "Interaction Design", "User Experience Design"]
      },
      {
        label: "Duration: ",
        value: "5 years"
      },
      {
        label: "Company: ",
        value: "Expense Insight"
      }
    ],
    figmaUrl: "",
    summary: "",
    sections: [
      {
        title: "",
        image: "/assets/images/latest-portfolio/Expense Insight App_pages-to-jpg-0001.jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Expense Insight App_pages-to-jpg-0002.jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Expense Insight App_pages-to-jpg-0003.jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Expense Insight App_pages-to-jpg-0004.jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Expense Insight App_pages-to-jpg-0005.jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Expense Insight App_pages-to-jpg-0006.jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Expense Insight App_pages-to-jpg-0007.jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Expense Insight App_pages-to-jpg-0008.jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Expense Insight App_pages-to-jpg-0009.jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Expense Insight App_pages-to-jpg-0010.jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Expense Insight App_pages-to-jpg-0011.jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Expense Insight App_pages-to-jpg-0012.jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Expense Insight App_pages-to-jpg-0013.jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Expense Insight App_pages-to-jpg-0014.jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Expense Insight App_pages-to-jpg-0015.jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Expense Insight App_pages-to-jpg-0016.jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Expense Insight App_pages-to-jpg-0017.jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Expense Insight App_pages-to-jpg-0018.jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Expense Insight App_pages-to-jpg-0019.jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Expense Insight App_pages-to-jpg-0020.jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Expense Insight App_pages-to-jpg-0021.jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Expense Insight App_pages-to-jpg-0022.jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Expense Insight App_pages-to-jpg-0023.jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Expense Insight App_pages-to-jpg-0024.jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Expense Insight App_pages-to-jpg-0025.jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Expense Insight App_pages-to-jpg-0026.jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Expense Insight App_pages-to-jpg-0027.jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Expense Insight App_pages-to-jpg-0028.jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Expense Insight App_pages-to-jpg-0029.jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Expense Insight App_pages-to-jpg-0030.jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Expense Insight App_pages-to-jpg-0031.jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Expense Insight App_pages-to-jpg-0032.jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Expense Insight App_pages-to-jpg-0033.jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Expense Insight App_pages-to-jpg-0034.jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Expense Insight App_pages-to-jpg-0035.jpg",
        imagePosition: "before"
      },
      {
        title: "",
        image: "/assets/images/latest-portfolio/Expense Insight App_pages-to-jpg-0036.jpg",
        imagePosition: "before"
      }
    ]
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const allPortfolioItems = [
  ...portfolioItems,
];
