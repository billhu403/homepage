export const profile = {
  name: "Bill Hu",
  title: "Software Engineer",
  affiliationLogo: "/img/baskin-engineering-logo.png",
  affiliationName: "Baskin Engineering",
  locations: ["Los Angeles", "Santa Cruz"],
  avatar: "/img/otto.jpg",
  avatarBanner: "/img/banner2.png",
  tags: ["Developer", "UCSC Grad", "AI", "Backend", "Frontend", "Fullstack", "Gaming"],
};

export const skills = [
  { name: "C", icon: "/svg/C.svg" },
  { name: "JavaScript", icon: "/svg/JavaScript.svg" },
  { name: "Python", icon: "/svg/Python-Dark.svg" },
  { name: "Node.js", icon: "/svg/NodeJS-Dark.svg" },
  { name: "React", icon: "/svg/React-Dark.svg" },
];

export const socials = [
  { name: "Github", href: "https://github.com/billhu403", icon: "github" },
  { name: "Mail", href: "mailto:billhu403@gmail.com", icon: "mail" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/bill-hu", icon: "linkedin" },
  { name: "Resume", href: "/docs/resume.pdf", icon: "resume" },
];

export const projects = [
  {
    name: "Pinpoint",
    role: "Backend Developer",
    image: "/img/pinpoint.png",
    bullets: [
      "Pinpoint is a mobile app for tracking UCSC campus enforcement bodies",
      "Helps students avoid parking fines and keeping students aware of the movement of campus police and immigration enforcement",
      "Worked on securing credentials with bcrypt-hashed passwords and JWT-based authentication.",
      "Hooked in geospatial logic (geolib) to detect when a new pin fell within a user's watch-zone and send an Expo push notification.",
    ],
  },
  {
    name: "Argus",
    role: "Full-Stack Developer",
    image: "/img/argus.ico",
    url: "https://argus.masondrake.dev",
    bullets: [
      "Built a full-stack event monitoring pipeline with a Go API, worker process, RabbitMQ queue, and Postgres persistence.",
      "Implemented standardized event schemas, environment-based configuration, and a CLI for publishing test events through the pipeline.",
      "Integrated RSSHub-based feed polling for sources like YouTube and delivered normalized events to Discord using webhook embeds.",
      "Worked on session-based authentication with bcrypt password hashing and protected API routes for the dashboard experience.",
    ],
  },
];
