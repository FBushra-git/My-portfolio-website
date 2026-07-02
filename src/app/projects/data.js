export const projects = [
  {
    slug: "promptrix",
    name: "Promptrix",
    imageLabel: "AI Prompt Marketplace",
    screenshot: "/promptrix/promptrix1.jpeg",
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
    imageLabel: "Pet Adoption Platform",
    screenshot: "/petnest/petnest1.jpeg",
    screenshots: [
      "/petnest/petnest1.jpeg",
      "/petnest/petnest2.jpeg",
      "/petnest/petnest3.jpeg",
      "/petnest/petnest4.jpeg",
    ],
    liveLink: "https://pet-adoption-three-indol.vercel.app/",
    githubLink: "https://github.com/FBushra-git/Assignment-09-client-side",
    stack: ["Next.js", "React", "MongoDB", "JWT", "Tailwind CSS", "Toast Notifications", "Responsive Design"],
    shortDescription: "A full-stack pet adoption platform with pet listings, adoption requests, dashboards, and secure private routes.",
    description:
      "PetNest is a full-stack pet adoption platform built with Next.js, MongoDB, authentication, and secure backend APIs. Users can browse pets, view detailed pet profiles, and submit adoption requests, while pet owners can manage listings and handle adoption decisions.",
    purpose:
      "This project was created to model a real-world pet adoption portal where users, pet owners, and shelters can manage the adoption flow from discovery to request approval in a clean, recruiter-friendly interface.",
    purposePoints: [
      "Browse available pets by category and details",
      "Submit adoption requests from protected routes",
      "Allow owners to add, update, and delete pet listings",
      "Approve or reject adoption requests from a dashboard",
      "Protect private pages with secure authentication",
      "Store and manage pet and request data in MongoDB",
    ],
    features: [
      "Home page with hero, featured pets, adoption reasons, success stories, and pet care sections",
      "All Pets page with pet cards and details navigation",
      "Authentication with login, registration, password validation, and Google login support",
      "Private dashboard routes for My Requests, Add Pet, and My Listings",
      "Add Pet form with species, breed, age, gender, image, health, location, fee, and description fields",
      "Pet details page with adoption request form and pending request status",
      "Owner listing management with request modal, edit, view, and delete actions",
      "Search, filtering, and sorting support for browsing pets",
      "JWT authentication with protected private routes and secure API access",
      "Toast-based feedback, loading states, custom not-found page, and responsive design",
    ],
    challenges:
      "A key challenge was managing the adoption workflow across different user roles while keeping private route reloads stable, protecting owner-only actions, and preventing pet owners from requesting adoption for their own pets.",
    improvements:
      "Future improvements include richer pet discovery filters, wishlist support, dark/light theme polish, more detailed owner analytics, server-side moderation tools, and stronger adoption status automation.",
  },
  {
    slug: "tiles-gallery",
    name: "Tiles Gallery",
    imageLabel: "Gallery Interface",
    screenshot: "/Tiles gallery/tiles1.jpeg",
    screenshots: [
      "/Tiles gallery/tiles1.jpeg",
      "/Tiles gallery/tiles2.jpeg",
      "/Tiles gallery/tiles3.jpeg",
      "/Tiles gallery/tiles4.jpeg",
      "/Tiles gallery/tiles5.jpeg",
    ],
    liveLink: "https://assignment-08-tiles-gallery-iota.vercel.app/",
    githubLink: "https://assignment-08-tiles-gallery-iota.vercel.app/",
    stack: ["Next.js", "React", "MongoDB", "Better Auth", "DaisyUI / HeroUI", "SwiperJS", "Responsive Design"],
    shortDescription: "A Next.js tile gallery for browsing tile collections, viewing details, and managing profile access.",
    description:
      "Tiles Gallery is a Next.js App Router website built to showcase tile collections through a polished gallery interface. Users can browse all tiles, search by title, view high-resolution tile details, authenticate with email or Google, and access private profile features.",
    purpose:
      "This project was created to demonstrate a modern tile gallery experience with responsive browsing, secure authentication, protected detail/profile routes, and product-style tile presentation.",
    purposePoints: [
      "Showcase tile collections with strong visual focus",
      "Use Next.js App Router for public and private routes",
      "Support authentication with Better Auth and MongoDB",
      "Allow users to search tiles by title",
      "Display tile details with large image preview and product information",
      "Provide a private My Profile route with update capability",
    ],
    features: [
      "Home page with banner, marquee, and featured tiles section",
      "All Tiles page with search input and tile cards",
      "Single tile details page with large preview, title, creator, style description, and tags",
      "Login and registration pages with form validation and Google social login",
      "Private My Profile route for logged-in user data",
      "Profile update flow for name and image URL",
      "Responsive design for mobile, tablet, and desktop",
      "Loader states, custom not-found page, and safe route reload behavior",
      "Tile data structure with title, description, image, category, price, dimensions, material, and stock status",
      "SwiperJS/animation package support for a richer gallery experience",
    ],
    challenges:
      "The main challenge was combining an image-heavy product gallery with route permissions, authentication, search, and detail pages while keeping the layout clean and responsive across devices.",
    improvements:
      "Future improvements include richer category filtering, saved tile collections, image zoom, inquiry forms, admin tile management, and a dynamic content dashboard for maintaining the gallery.",
  },
  {
    slug: "keenkeeper",
    name: "KeenKeeper",
    imageLabel: "Friendship Tracker",
    screenshot: "/keenkeeper/keen1.jpeg",
    screenshots: [
      "/keenkeeper/keen1.jpeg",
      "/keenkeeper/keen2.jpeg",
      "/keenkeeper/keen3.jpeg",
      "/keenkeeper/keen4.jpeg",
      "/keenkeeper/keen5.jpeg",
    ],
    liveLink: "https://keenkeeper-bushra.netlify.app/",
    githubLink: "https://github.com/FBushra-git/Assignment-07",
    stack: ["Next.js", "React", "Tailwind CSS", "Recharts", "Toast Notifications", "Responsive Design"],
    shortDescription: "A friendship tracking app with friend cards, detail pages, timeline logging, and analytics.",
    description:
      "KeenKeeper is a friendship tracker built to help users stay connected with important people. The app displays friend profiles, tracks days since last contact, highlights relationship status, logs call/text/video check-ins, and visualizes interaction history through timeline and analytics views.",
    purpose:
      "This project was created to practice building a multi-page relationship management dashboard with clean navigation, realistic JSON data, interactive check-in actions, timeline state updates, toast feedback, and responsive analytics UI.",
    purposePoints: [
      "Track days since last contact for each friend",
      "Show status-based friend cards for overdue, almost due, and on-track relationships",
      "Provide friend detail pages with profile information and quick actions",
      "Log call, text, and video interactions into a timeline",
      "Visualize interaction counts with a Recharts pie chart",
      "Keep the layout responsive across mobile, tablet, and desktop screens",
    ],
    features: [
      "Navbar with logo, icon links, and active link highlighting",
      "Centered banner with subtitle, Add a Friend action, and four summary cards",
      "Friend data loaded from a JSON file with realistic profiles, tags, goals, and next due dates",
      "Four-column friend card grid on large screens with status-based colors",
      "Friend detail page with profile card, stats cards, relationship goal, and quick check-in actions",
      "Call, Text, and Video buttons that add timeline entries and show toast notifications",
      "Timeline page with dated interaction entries and type-specific icons",
      "Timeline filters for Call, Text, and Video interactions",
      "Friendship Analytics page with Recharts pie chart for interaction counts",
      "Loading animation, custom 404 page, responsive footer, and route-safe reload behavior",
    ],
    challenges:
      "The main challenge was coordinating shared interaction state across friend details, timeline, and analytics while keeping the UI aligned with the Figma-style layout and responsive on different screen sizes.",
    improvements:
      "Future improvements include persistent backend storage, friend search, timeline sorting by newest or oldest, editable friend goals, richer reminders, and authentication for personal friendship data.",
  },
];






