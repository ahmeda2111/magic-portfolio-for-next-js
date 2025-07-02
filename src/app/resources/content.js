import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Ahmed",
  lastName: "Ashraf",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Frontend developer",
  avatar: "/images/projects/project-01/IMG.JPG",
  email: "ahmedashrafa2028@gmail.com",
  location: "Africa/Cairo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Arabic"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ahmeda2111",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ahmed-ashraf-885786189/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/AhmedAshh2000",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `Ahmed Ashraf's Portfolio`,
  description: `A website showcasing my projects and work as a Front End Developer.`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">calendar compoant</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
    subline: (
    <>
      I'm Ahmed Ashraf, a Front End Developer passionate about crafting intuitive user experiences.
      <br />
      I enjoy building projects that merge creativity and technology.    </>
  ),


};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        ahmed is Frontend Mobile & Web Developer based in Cairo, Egypt, with expertise in React, Next.js, React
 Native, and Flutter. Skilled in building cross-platform apps with a focus on performance, clean code,
 and great user experiences. Proficient in JavaScript, TypeScript, Dart, and modern development tools.
 Passionate about creating impactful digital solutions and continuously growing in a collaborative,
 innovative environment.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Ukkera",
        timeframe: "2022 - Present",
        role: " Frontend Developer",
        achievements: [
          <>
            Working as a Flutter, React Native, and Next.js (React) developer.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/ukkera.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Arab Open University",
        description: <>Bachelor of Information Technology and Computer Science.</>,
      },
    ],
  },
technical: {
  display: true,
  title: "Technical skills",
  skills: [
    {
      title: "JavaScript",
      description: <>Strong foundation in JavaScript for frontend development.</>,
      images: [
        {
          src: "/images/projects/project-01/JavaScript-logo.png",
          alt: "JavaScript logo",
          width: 16,
          height: 9,
        },
      ],
    },
    {
      title: "TypeScript",
      description: <>Typed superset of JavaScript for scalable applications.</>,
      images: [
        {
          src: "/images/projects/project-01/typescript.svg",
          alt: "TypeScript logo",
          width: 16,
          height: 9,
        },
      ],
    },
    {
      title: "Flutter & Dart",
      description: <>Building cross-platform mobile apps using Flutter and Dart.</>,
      images: [
        {
          src: "/images/projects/project-01/Google-flutter-logo.png",
          alt: "Flutter logo",
          width: 16,
          height: 9,
        },
        {
          src: "/images/projects/project-01/Dart_programming_language_logo.svg",
          alt: "Dart logo",
          width: 16,
          height: 9,
        },
      ],
    },
    {
      title: "React & Next.js",
      description: <>Modern UI development with React and Next.js.</>,
      images: [
        {
          src: "/images/projects/project-01/React-icon.svg",
          alt: "React logo",
          width: 16,
          height: 9,
        },
        {
          src: "/images/projects/project-01/cover-04.jpg",
          alt: "Next.js project",
          width: 16,
          height: 9,
        },
      ],
    },
    {
      title: "Tailwind CSS",
      description: <>Utility-first styling with Tailwind CSS.</>,
      images: [
        {
          src: "/images/projects/project-01/Tailwind_CSS_Logo.svg",
          alt: "Tailwind CSS logo",
          width: 16,
          height: 9,
        },
      ],
    },
    {
      title: "Git & GitHub",
      description: <>Version control and collaboration using Git and GitHub.</>,
      images: [
        {
          src: "/images/projects/project-01/Git-Icon-1788C.png",
          alt: "Git logo",
          width: 16,
          height: 9,
        },
        {
          src: "/images/projects/project-01/GitHub-Mark.png",
          alt: "GitHub logo",
          width: 16,
          height: 9,
        },
      ],
    },
    {
      title: "Firebase",
      description: <>Backend as a service with Firebase authentication and database.</>,
      images: [
        {
          src: "/images/projects/project-01/logo-vertical.png",
          alt: "Firebase logo",
          width: 16,
          height: 9,
        },
      ],
    },
    {
      title: "GraphQL & Postman",
      description: <>API development and testing using GraphQL and Postman.</>,
      images: [
        {
          src: "/images/projects/project-01/GraphQL_Logo.svg",
          alt: "GraphQL logo",
          width: 16,
          height: 9,
        },
        {
          src: "/images/projects/project-01/getpostman-icon.svg",
          alt: "Postman logo",
          width: 16,
          height: 9,
        },
      ],
    },
    {
      title: "Figma",
      description: <>UI/UX prototyping and design using Figma.</>,
      images: [
        {
          src: "/images/projects/project-01/Figma-logo.svg",
          alt: "Figma logo",
          width: 16,
          height: 9,
        },
      ],
    },
  ],
},

};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};
const Projects = [
  {
    category: "Flutter",
    projects: [
      {
        title: "AQAR App",
        description: "Real estate platform for apartment listings and maintenance services.",
        link: "https://github.com/ahmeda2111/aqarapp",
        content: `A modern real estate mobile app built with Flutter, integrating Firebase for real-time data storage, authentication, and cloud functions. Users can browse apartment listings, view detailed property info with images, filter by location and price, and request maintenance services seamlessly. The app offers a smooth, responsive UI with state management for an optimized user experience across Android and iOS devices.`,
        team: [{ avatar: "/images/avatars/avatar-1.png" }],
        images: [
          "/images/projects/AQARAPP/logo.jpeg",
          "/images/projects/AQARAPP/figma.png",
          "/images/projects/AQARAPP/1.jpeg",
          "/images/projects/AQARAPP/2.jpeg",
          "/images/projects/AQARAPP/3.jpeg",
          "/images/projects/AQARAPP/4.jpeg",
          "/images/projects/AQARAPP/5.jpeg",
          "/images/projects/AQARAPP/6.jpeg",
          "/images/projects/AQARAPP/7.jpeg",
        ],
                team: [
          { avatar: "/images/avatars/avatar-1.png" },
        ],
        date: "09/2023–02/2024",
        responsibilities: "UI development, map integration, API connections, and user flow design.",
      },
      {
        title: "Digital Clinic",
        description: "A digital health app for booking services and locating nearby providers.",
        link: "https://github.com/ahmeda2111/digital-clinic.git",
        content: `This Flutter app helps doctors and patients manage prescriptions, appointments, and healthcare bookings. Features include map-based provider search, real-time booking updates, and responsive UI design tailored for seamless interactions on mobile devices.`,
        team: [{ avatar: "/images/avatars/avatar-3.png" }],
        images: [
          "/images/projects/DIGITALCLINIC/1.jpeg",
          "/images/projects/DIGITALCLINIC/4.jpeg",
          "/images/projects/DIGITALCLINIC/3.jpeg",
          "/images/projects/DIGITALCLINIC/4.jpeg",
          "/images/projects/DIGITALCLINIC/5.jpeg",
          "/images/projects/DIGITALCLINIC/6.jpeg",
          "/images/projects/DIGITALCLINIC/7.jpeg",
          "/images/projects/DIGITALCLINIC/8.jpeg",
          "/images/projects/DIGITALCLINIC/9.jpeg",
          "/images/projects/DIGITALCLINIC/1.jpeg",
        ],
                        team: [
          { avatar: "/images/avatars/avatar-1.png" },
        ],
        responsibilities: "UI design, map routing, and responsive content display.",
      },
      {
        title: "Tourist Guide",
        description: "A tourism guide app with maps, routes, and attraction discovery features.",
        link: "ukkera/WalletApp",
        content: `An interactive tourism app built with Flutter, providing users with detailed maps, route planning, and discovery tools for attractions and points of interest. The app includes intuitive navigation and offline map access to enhance travel experiences.`,
        responsibilities: "Map interface, routing logic, and interactive screens.",
                        images: [
        "/images/projects/tour-guide/1.jpeg",
        "/images/projects/tour-guide/2.jpeg",
"/images/projects/tour-guide/3.jpeg",
"/images/projects/tour-guide/4.jpeg",
"/images/projects/tour-guide/5.jpeg",
"/images/projects/tour-guide/6.jpeg",
"/images/projects/tour-guide/7.jpeg",
"/images/projects/tour-guide/8.jpeg",
"/images/projects/tour-guide/9.jpeg",
"/images/projects/tour-guide/logo.jpeg",

        ],
                        team: [
          { avatar: "/images/avatars/avatar-1.png" },
        ],
      },
    ],
  },
  {
    category: "React Next",
    projects: [
      {
        title: "Calendar Site",
        description: "Calendar Management System for Company Operations",
        content: `A comprehensive calendar system designed for managing company operations. Features include robust UI development with date filtering capabilities, customizable layouts, and modular integration with backend services to streamline scheduling and event management.`,
        date: "04/2025–04/2025",
        responsibilities: "UI development, date filtering, layout customization, and module integration.",
        link: "ukkera/module-manager at calendar",
                images: [
          "/images/projects/calendar/1.jpeg",
          "/images/projects/calendar/2.jpeg",
          "/images/projects/calendar/3.jpeg",
        ],
                        team: [
          { avatar: "/images/avatars/avatar-1.png" },
        ],
      },
      {
        title: "Site Builder",
        description: "No-code tool for building and deploying websites using a visual editor.",
        content: `A React Next.js powered no-code website builder featuring reusable layout blocks and content editing capabilities. Integrated a shared drag-and-drop system to allow users to visually design and deploy fully functional websites without coding.`,
        date: "01/2025–03/2025",
        responsibilities: "Implemented reusable layout blocks, integrated content editing features, and connected with shared drag-and-drop system.",
        link: "ukkera/main-next at staging",
                images: [
        ],
                        team: [
          { avatar: "/images/avatars/avatar-1.png" },
        ],
      },
      {
        title: "Folder Drive",
        description: "Internal file system with folder structure, preview, and permissions similar to Google Drive.",
        content: `An internal React Next.js file management system replicating Google Drive functionality. Features include hierarchical folder structures, file preview, permission management, and tight integration with a shared drag-and-drop interface for easy file organization.`,
        date: "02/2025–03/2025",
        responsibilities: "Built reusable file/folder views, integrated tree-based organization, and connected with shared drag-and-drop system.",
        link: "ukkera/main-next at feature/medialibrary",
                images: [

          "/images/projects/mediadrive/1.jpeg",
          "/images/projects/mediadrive/2.jpeg",
          "/images/projects/mediadrive/3.jpeg",
          "/images/projects/mediadrive/4.jpeg",
          "/images/projects/mediadrive/5.jpeg",

        ],
                        team: [
          { avatar: "/images/avatars/avatar-1.png" },
        ],
      },
      {
        title: "DnD Component System",
        description: "Reusable Drag-and-Drop Component for Internal Tools",
        content: `Developed a modular React Next.js drag-and-drop component engine that supports moving items between tree tables and containers. Customized and integrated the system into multiple internal applications, enabling flexible UI interactions.`,
        date: "01/2025–04/2025",
        responsibilities: "Engineered a modular component to support drag-and-drop of items between tree tables and containers. Integrated and customized it across several apps.",
        link: "ukkera/main-next at feature/dnd-input",
                images: [
          "/images/projects/AQARAPP/logo.jpeg",
          "/images/projects/AQARAPP/figma.png",
          "/images/projects/AQARAPP/1.jpeg",
          "/images/projects/AQARAPP/2.jpeg",
          "/images/projects/AQARAPP/3.jpeg",
          "/images/projects/AQARAPP/4.jpeg",
          "/images/projects/AQARAPP/5.jpeg",
          "/images/projects/AQARAPP/6.jpeg",
          "/images/projects/AQARAPP/7.jpeg",
        ],
                        team: [
          { avatar: "/images/avatars/avatar-1.png" },
        ],
      },
      {
        title: "Page Builder",
        description: "Internal visual builder for designing and previewing content-rich pages.",
        content: `An internal React Next.js page builder tool for configuring layouts and live previewing content. Integrated with the block system and shared drag-and-drop functionality to allow users to build complex pages visually.`,
        date: "01/2025–03/2025",
        responsibilities: "Layout configuration, live content preview, integration with block system and shared drag-and-drop.",
        link: "ukkera/main-next at feature/page-builder",
                images: [
          "/images/projects/pagebuilder/1.jpeg",
          "/images/projects/pagebuilder/2.jpeg",
          "/images/projects/pagebuilder/3.jpeg",
          "/images/projects/pagebuilder/4.jpeg",

        ],
                        team: [
          { avatar: "/images/avatars/avatar-1.png" },
        ],
      },
      {
        title: "UQ (Queue Web)",
        description: "A web-based queue management system for streamlining employee and customer services.",
        content: `A React Next.js web application for managing queues in service environments. Included UI development, service module handling, custom layout design, and performance optimization for smooth user interactions.`,
        date: "08/2023–11/2024",
        responsibilities: "UI development, service module handling, layout design, and performance optimization.",
        link: "ukkera/queue_web",
                images: [
          "/images/projects/queuewep/1.jpeg",
          "/images/projects/queuewep/2.jpeg",
          "/images/projects/queuewep/3.jpeg",
          "/images/projects/queuewep/4.jpeg",
          "/images/projects/queuewep/5.jpeg",
          "/images/projects/queuewep/6.jpeg",
          "/images/projects/queuewep/7.jpeg",
        ],
                        team: [
          { avatar: "/images/avatars/avatar-1.png" },
        ],
      },

      {
        title: "Cashier System",
        description: "Transaction and inventory management app for retail environments.",
        content: `A React Next.js transaction and inventory management system tailored for retail. Focused on backend logic, feature development, and debugging without UI involvement.`,
        date: "09/2023–10/2023",
        responsibilities: "Feature development, debugging, and logic updates (no UI involvement).",
        link: "ukkera/cashier-system-admin",
                        images: [
        ],
                        team: [
          { avatar: "/images/avatars/avatar-1.png" },
        ],
      },
      {
        title: "Wallet Web",
        description: "A responsive web platform for secure peer-to-peer money transfers.",
        content: `A React Next.js responsive platform enabling secure, peer-to-peer money transfers. Included UI design, seamless navigation flows, and ensured mobile responsiveness across devices.`,
        date: "05/2024–08/2024",
        responsibilities: "UI design, navigation flow, and mobile responsiveness.",
        link: "ukkera/WalletSystem",
                        images: [
        ],
                        team: [
          { avatar: "/images/avatars/avatar-1.png" },
        ],
      },
      {
        title: "Wallet App",
        description: "A mobile wallet app enabling secure and quick money transfers.",
        content: `A React Next.js mobile app providing secure and fast peer-to-peer money transfer services. Developed reusable UI components and mobile-friendly design patterns to enhance usability.`,
        responsibilities: "UI layout, reusable components, mobile design patterns.",
        link: "ukkera/WalletApp",
                images: [
          "/images/projects/walletapp/1.jpeg",
          "/images/projects/walletapp/2.jpeg",
          "/images/projects/walletapp/3.jpeg",
          "/images/projects/walletapp/4.jpeg",
          "/images/projects/walletapp/5.jpeg",

        ],
                        team: [
          { avatar: "/images/avatars/avatar-1.png" },
        ],
      },
    ],
  },
  {
    category: "React Native",
    projects: [
            {
        title: "UQ (Queue App)",
        description: "A mobile queue system to simplify service booking and employee interactions.",
        content: `A React Next.js mobile-focused queue management app that supports booking, employee interactions, and navigation flow optimization to improve service delivery and customer experience.`,
        date: "08/2023–12/2024",
        responsibilities: "UI design, feature implementation, navigation structure, and performance improvement.",
        link: "ukkera/queue_mobile",
                images: [


        ],
                        team: [
          { avatar: "/images/avatars/avatar-1.png" },
        ],
      },
      {
        title: "HR-System App",
        description: "HR management system to handle employees, shifts, leaves, and internal communication.",
        content: `A React Native HR management system designed to manage employee data, shifts, leave requests, and facilitate internal communications. Integrated service modules and resolved UI bugs for a smooth user experience.`,
        responsibilities: "UI development, service integration, navigation, and bug resolution.",
        link: "ukkera/hr-system at master",
                images: [

          "/images/projects/sitebuilder/1.jpeg",

        ],
                        team: [
          { avatar: "/images/avatars/avatar-1.png" },
        ],
      },
      {
        title: "Reel App",
        description: "A rental and maintenance platform with property listings and service request tools.",
        content: `A React Native app for rental property management and maintenance requests. Features include property listings, map integration for location-based services, bug fixes, and feature enhancements for improved usability.`,
        date: "09/2023–10/2023",
        responsibilities: "UI screens, map integration, bug fixes, and feature enhancements.",
        link: "ukkera/reel-app",
                        images: [


        ],
                        team: [
          { avatar: "/images/avatars/avatar-1.png" },
        ],
      },
    ],
  },
];


export { person, social, newsletter, home, about, blog, work, gallery,Projects };
