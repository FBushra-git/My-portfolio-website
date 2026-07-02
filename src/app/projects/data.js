export const projects = [
  {
    slug: "promptrix",
    name: "Promptrix",
    imageLabel: "AI Prompt Marketplace",
    screenshot: "/promptrix/promptrix-client.vercel.app_.png",
    screenshots: [
      "/promptrix/promptrix1.jpeg",
      "/promptrix/promptrix2.jpeg",
      "/promptrix/promptrix3.jpeg",
      "/promptrix/promptrix4.jpeg",
      "/promptrix/promptrix5.jpeg",
    ],
    liveLink: "https://promptrix-client.vercel.app/",
    githubLink: "https://github.com/FBushra-git/promptrix-client-side",
    stack: ["Next.js", "React", "MongoDB", "Better Auth", "Stripe", "Tailwind CSS", "React Hot Toast", "Framer Motion"],
    shortDescription: "An AI prompt marketplace with creator workflows, premium access, and admin moderation.",
    description:
      "Promptrix is an AI prompt marketplace built with Next.js and MongoDB. It enables prompt creators to submit and manage AI prompts, while users can browse, bookmark, review, and unlock premium content. Admins moderate prompts, approve or reject submissions, and manage users.",
    purpose:
      "This project was created to demonstrate a modern creator marketplace with creator submission workflows, premium access control, role-based access, real-time prompt analytics, secure Better Auth authentication, and media upload support for prompt thumbnails.",
    purposePoints: [
      "Creator submission workflow",
      "Premium access control",
      "Role-based access for users, creators, and admins",
      "Real-time prompt analytics",
      "Secure authentication with Better Auth",
      "Media upload support for prompt thumbnails",
    ],
    features: [
      "Creator prompt submission with thumbnail upload",
      "Public and private prompt visibility modes",
      "Prompt approval workflow for admin moderation",
      "Premium subscription unlock for private prompts",
      "Prompt bookmarking, reviews, and reporting",
      "Creator dashboard with analytics and performance metrics",
      "Role-based navigation and access control",
      "Stripe-based premium purchase flow",
      "Search, filtering, sorting, and pagination for prompt browsing",
    ],
    challenges:
      "The main challenge was coordinating several product roles and states in one marketplace: public users, prompt creators, premium members, and admins all needed different access levels, dashboards, and moderation flows.",
    improvements:
      "Future improvements include richer creator insights, more advanced recommendation logic, additional premium plans, stronger reporting tools, and deeper content quality controls for admins.",
  },
  {
    slug: "petnest",
    name: "PetNest",
    imageLabel: "Adoption Web App",
    screenshot: "",
    screenshots: [],
    liveLink: "https://pet-adoption-three-indol.vercel.app/",
    githubLink: "https://github.com/FBushra-git/Assignment-09-client-side",
    stack: ["React", "Tailwind CSS", "JavaScript", "API Integration", "Responsive Design"],
    shortDescription: "A pet adoption platform for browsing pets and viewing adoption details.",
    description:
      "PetNest is a responsive web application where users can explore available pets and view useful information before adoption. It focuses on clean cards, details presentation, and user-friendly browsing.",
    challenges:
      "A key challenge was presenting different pet information clearly in cards and detail views while keeping the layout comfortable on both desktop and mobile screens.",
    improvements:
      "Future plans include authentication, adoption request tracking, favorites, better filtering by pet type, and an admin dashboard for managing pet listings.",
  },
  {
    slug: "tiles-gallery",
    name: "Tiles Gallery",
    imageLabel: "Gallery Interface",
    screenshot: "",
    screenshots: [],
    liveLink: "https://assignment-08-tiles-gallery-iota.vercel.app/",
    githubLink: "https://assignment-08-tiles-gallery-iota.vercel.app/",
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive Layout", "UI Design"],
    shortDescription: "A clean gallery-style website for presenting tile designs visually.",
    description:
      "Tiles Gallery is a visual website focused on presenting tile collections in an organized and attractive way. The project strengthened my layout, spacing, card design, and responsive UI skills.",
    challenges:
      "The main challenge was balancing visual content with clean spacing so the gallery remains easy to scan without feeling crowded.",
    improvements:
      "Future improvements include category filtering, image zoom, product detail pages, inquiry options, and a more dynamic content management flow.",
  },
  {
    slug: "keenkeeper",
    name: "KeenKeeper",
    imageLabel: "Frontend Utility",
    screenshot: "",
    screenshots: [],
    liveLink: "https://keenkeeper-bushra.netlify.app/",
    githubLink: "https://github.com/FBushra-git/Assignment-07",
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive Web Design"],
    shortDescription: "A frontend project focused on practicing web layout and interaction.",
    description:
      "KeenKeeper is a frontend practice project where I worked on layout, styling, responsiveness, and JavaScript behavior. It represents part of my learning journey and practical consistency.",
    challenges:
      "The challenge was translating requirements into a clean layout while keeping the code organized and responsive.",
    improvements:
      "Future plans include improving accessibility, polishing the UI, adding a live deployment, and refactoring repeated code into cleaner reusable parts.",
  },
];
