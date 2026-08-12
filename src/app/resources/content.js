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
      I'm Ahmed Ashraf, a Front End Developer specializing in React, Next.js, React Native, and Flutter.
      <br />
      I build scalable, responsive applications with clean architecture, reusable components, and intuitive user experiences.
    </>
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
        I'm a Frontend Developer specializing in building modern web and mobile
        applications using React, Next.js, React Native, and Flutter. I focus on
        creating responsive, scalable, and maintainable applications with clean
        architecture, reusable components, and intuitive user experiences.
        <br />
        <br />
        My experience includes developing real-world products across web and
        mobile platforms, working with APIs, maps, authentication, backend
        integrations, and modular application architectures. I'm comfortable
        working with JavaScript, TypeScript, Dart, and modern development tools,
        with a strong focus on performance, usability, and clean code.
        <br />
        <br />
        I'm passionate about solving problems through technology, learning new
        tools and approaches, and contributing to collaborative teams where I
        can build impactful products and continuously grow as a developer.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
  
    experiences: [
      {
        company: "Ukkera",
        timeframe: "2022 - May 2026",

        roles: ["Frontend Developer", "Team Lead", "Trainer"],

        languages: [
          "Flutter",
          "React Native",
          "React",
          "Next.js",
          "Dart",
          "JavaScript",
          "TypeScript",
        ],

        responsibilities: [
          <>
            Analyzed project requirements and business workflows, translating
            business needs into structured technical solutions and frontend
            implementation plans.
          </>,

          <>
            Created and maintained YAML-based data models that defined the
            required entities, fields, relationships, and backend data structure
            before development.
          </>,

          <>
            Worked closely with backend APIs and integrated services into
            frontend applications, connecting business logic and data with
            responsive user interfaces.
          </>,

          <>
            Translated provided UI/UX designs into functional interfaces and,
            when designs were not available, developed default layouts and
            interfaces based on the project requirements.
          </>,

          <>
            Developed responsive web and mobile applications, ensuring
            consistent layouts and usability across different screen sizes and
            platforms.
          </>,

          <>
            Worked across the full frontend development workflow, from
            understanding the business requirements and preparing the data
            structure to implementing, testing, debugging, and delivering the
            final application.
          </>,

          <>
            Supported and trained a new development batch, helping team members
            understand the development workflow, project structure, and
            implementation process.
          </>,

          <>
            Led the new development batch as Team Lead, providing technical
            guidance, reviewing work, solving development issues, and helping
            the team deliver their assigned tasks.
          </>,
        ],
  
        images: [
          {
            src: "/images/projects/project-01/ukkera.jpg",
            alt: "Ukkera",
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
          src: "/images/projects/project-01/flutter-logo.svg",
          alt: "Flutter logo",
          width: 16,
          height: 9,
        },
        {
          src: "/images/projects/project-01/dart-logo.svg",
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
          src: "/images/projects/project-01/react-logo.svg",
          alt: "React logo",
          width: 16,
          height: 9,
        },
        {
          src: "/images/projects/project-01/nextjs-logo.svg",
          alt: "Next.js logo",
          width: 16,
          height: 9,
        },
      ],
    },
    {
      title: "React Native",
      description: <>Cross-platform mobile apps with React Native.</>,
      images: [
        {
          src: "/images/projects/project-01/React-Native-Logo.svg",
          alt: "React Native logo",
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
          src: "/images/projects/project-01/firebase-logo.svg",
          alt: "Firebase logo",
          width: 16,
          height: 9,
        },
      ],
    },
    {
      title: "Google Authentication",
      description: <>User sign-in and authentication flows using Google OAuth.</>,
      images: [
        {
          src: "/images/projects/project-01/google-auth-logo.svg",
          alt: "Google Authentication logo",
          width: 16,
          height: 9,
        },
      ],
    },
    {
      title: "Google Maps",
      description: <>Map integration, location services, and route-based features.</>,
      images: [
        {
          src: "/images/projects/project-01/google-maps-logo.svg",
          alt: "Google Maps logo",
          width: 16,
          height: 9,
        },
      ],
    },
    {
      title: "Calendar",
      description: <>Calendar systems, scheduling, and date-based workflows.</>,
      images: [
        {
          src: "/images/projects/project-01/google-calendar-logo.svg",
          alt: "Google Calendar logo",
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
const projectsConfig = [
  {
    category: "Flutter",
    projects: [
      {
        title: "AQAR App",
        description:
          "A real estate mobile application built with Flutter for browsing apartment listings, viewing property details, filtering properties, and requesting maintenance services. The app integrates Firebase and Google Maps to provide a responsive and convenient property management experience.",
        link: "https://github.com/ahmeda2111/aqarapp",
        playStore:
          "https://play.google.com/store/apps/details?id=com.example.aqarapp",
        googleDrive: "https://drive.google.com/drive/folders/1abc123exampleAQAR",
        tools: ["Flutter", "Firebase", "Google Maps"],
        languages: ["Dart"],
        content: `A modern real estate mobile app built with Flutter, integrating Firebase for real-time data storage, authentication, and cloud functions. Users can browse apartment listings, view detailed property info with images, filter by location and price, and request maintenance services seamlessly. The app offers a smooth, responsive UI with state management for an optimized user experience across Android and iOS devices.`,
        imageFolder: "/images/projects/AQARAPP",
        team: [{ avatar: "/images/avatars/avatar-1.png" }],
        date: "09/2023–02/2024",
        responsibilities:
          "UI development, map integration, API connections, and user flow design.",
      },

      {
        title: "Digital Clinic",
        description:
          "A Flutter-based healthcare application designed to help doctors and patients manage appointments, prescriptions, and healthcare services. It includes map-based provider discovery, booking functionality, and responsive mobile interfaces.",
        link: "https://github.com/ahmeda2111/digital-clinic.git",
        playStore:
          "https://play.google.com/store/apps/details?id=com.example.digitalclinic",
        googleDrive:
          "https://drive.google.com/file/d/1xyz789exampleDigitalClinic/view",
        tools: ["Flutter", "Firebase", "Google Maps"],
        languages: ["Dart"],
        content: `This Flutter app helps doctors and patients manage prescriptions, appointments, and healthcare bookings. Features include map-based provider search, real-time booking updates, and responsive UI design tailored for seamless interactions on mobile devices.`,
        imageFolder: "/images/projects/DIGITALCLINIC",
        team: [{ avatar: "/images/avatars/avatar-1.png" }],
        responsibilities:
          "UI design, map routing, and responsive content display.",
      },

      {
        title: "Tourist Guide",
        description:
          "A Flutter-based tourism application that uses the user’s location to discover nearby tourist attractions and points of interest. The app helps users explore places around them and provides useful information about nearby destinations. It uses maps and location-based features to make discovering attractions easier and more convenient. The application is designed to provide a simple and interactive experience for users while exploring new places.",
        link: "https://github.com/ukkera/WalletApp",
        tools: ["Flutter", "Google Maps"],
        languages: ["Dart"],
        content: `An interactive tourism app built with Flutter, providing users with detailed maps, route planning, and discovery tools for attractions and points of interest. The app includes intuitive navigation and offline map access to enhance travel experiences.`,
        responsibilities:
          "Map interface, routing logic, and interactive screens.",
        imageFolder: "/images/projects/tour-guide",
        team: [{ avatar: "/images/avatars/avatar-1.png" }],
      },
    ],
  },

  {
    category: "React Next",
    projects: [
      {
        title: "Calendar Site",
        description:
          "A web-based calendar management system designed to support company operations through scheduling, date-based filtering, customizable layouts, and integration with backend modules.",
        content: `A comprehensive calendar system designed for managing company operations. Features include robust UI development with date filtering capabilities, customizable layouts, and modular integration with backend services to streamline scheduling and event management.`,
        date: "04/2025–04/2025",
        responsibilities:
          "UI development, date filtering, layout customization, and module integration.",
        link: "ukkera/module-manager at calendar",
        imageFolder: "/images/projects/calendar",
        team: [{ avatar: "/images/avatars/avatar-1.png" }],
      },

      {
        title: "Site Builder",
        description:
          "A no-code website builder built with React and Next.js that allows users to create websites using reusable layout blocks and content editing tools. It provides a visual building experience through an integrated drag-and-drop system.",
        content: `A React Next.js powered no-code website builder featuring reusable layout blocks and content editing capabilities. Integrated a shared drag-and-drop system to allow users to visually design and deploy fully functional websites without coding.`,
        date: "01/2025–03/2025",
        responsibilities:
          "Implemented reusable layout blocks, integrated content editing features, and connected with shared drag-and-drop system.",
        link: "ukkera/main-next at staging",
        imageFolder: "/images/projects/sitebuilder",
        team: [{ avatar: "/images/avatars/avatar-1.png" }],
      },

      {
        title: "Folder Drive",
        description:
          "An internal file management system built with React and Next.js, inspired by platforms such as Google Drive. The application allows users to organize their files through folders and hierarchical structures, while also providing file previews and permission management. It includes a tree-based organization system to make navigating large amounts of files easier. Drag-and-drop functionality is also integrated to provide a smooth experience when organizing and moving files.",
        content: `An internal React Next.js file management system replicating Google Drive functionality. Features include hierarchical folder structures, file preview, permission management, and tight integration with a shared drag-and-drop interface for easy file organization.`,
        date: "02/2025–03/2025",
        responsibilities:
          "Built reusable file/folder views, integrated tree-based organization, and connected with shared drag-and-drop system.",
        link: "ukkera/main-next at feature/medialibrary",
        imageFolder: "/images/projects/mediadrive",
        team: [{ avatar: "/images/avatars/avatar-1.png" }],
      },

      {
        title: "Page Builder",
        description:
          "A visual page-building tool developed with React and Next.js for creating and previewing content-rich pages. It combines configurable layouts, reusable content blocks, and drag-and-drop functionality to simplify page creation.",
        content: `An internal React Next.js page builder tool for configuring layouts and live previewing content. Integrated with the block system and shared drag-and-drop functionality to allow users to build complex pages visually.`,
        date: "01/2025–03/2025",
        responsibilities:
          "Layout configuration, live content preview, integration with block system and shared drag-and-drop.",
        link: "ukkera/main-next at feature/page-builder",
        imageFolder: "/images/projects/pagebuilder",
        team: [{ avatar: "/images/avatars/avatar-1.png" }],
      },

      {
        title: "UQ (Queue Web)",
        description:
          "A web-based queue management system built with React and Next.js to organize customer and employee service workflows. The application focuses on service management, intuitive interfaces, customizable layouts, and smooth user interactions.",
        content: `A React Next.js web application for managing queues in service environments. Included UI development, service module handling, custom layout design, and performance optimization for smooth user interactions.`,
        date: "08/2023–11/2024",
        responsibilities:
          "UI development, service module handling, layout design, and performance optimization.",
        link: "ukkera/queue_web",
        imageFolder: "/images/projects/uqapp",
        team: [{ avatar: "/images/avatars/avatar-1.png" }],
      },

      {
        title: "Cashier System",
        description:
          "A cashier and point-of-sale system designed to simplify everyday retail transactions. The system allows users to scan products, retrieve their prices, and automatically calculate the total amount of the customer's purchase. It helps streamline the checkout process by reducing manual calculations and making transactions faster and more organized. The project also involved implementing and maintaining the system's core functionality and business logic.",
        content: `A React Next.js transaction and inventory management system tailored for retail. Focused on backend logic, feature development, and debugging without UI involvement.`,
        date: "09/2023–10/2023",
        responsibilities:
          "Feature development, debugging, and logic updates (no UI involvement).",
        link: "ukkera/cashier-system-admin",
        team: [{ avatar: "/images/avatars/avatar-1.png" }],
      },

      {
        title: "Wallet Web",
        description:
          "A responsive web application designed to support secure peer-to-peer money transfers. The platform focuses on intuitive navigation, responsive interfaces, and a consistent user experience across different screen sizes.",
        content: `A React Next.js responsive platform enabling secure, peer-to-peer money transfers. Included UI design, seamless navigation flows, and ensured mobile responsiveness across devices.`,
        date: "05/2024–08/2024",
        responsibilities:
          "UI design, navigation flow, and mobile responsiveness.",
        link: "ukkera/WalletSystem",
        team: [{ avatar: "/images/avatars/avatar-1.png" }],
      },
    ],
  },

  {
    category: "React Native",
    projects: [
      {
        title: "Wallet App",
        description:
          "A React Native mobile wallet application designed for fast and secure peer-to-peer money transfers. The project focuses on reusable UI components, mobile-friendly layouts, and a simple user experience.",
        content: `A React Native mobile app providing secure and fast peer-to-peer money transfer services. Developed reusable UI components and mobile-friendly design patterns to enhance usability.`,
        responsibilities:
          "UI layout, reusable components, mobile design patterns.",
        link: "ukkera/WalletApp",
        imageFolder: "/images/projects/walletapp",
        team: [{ avatar: "/images/avatars/avatar-1.png" }],
      },

      {
        title: "My Services App",
        description:
          "A Saudi employee services application designed to help employees submit and manage different workplace requests through one platform. The application supports services such as business trip requests, leave requests, and other employee-related services and workflows. It provides employees with an organized way to submit requests and follow their related processes. The application focuses on simplifying internal employee services and making common workplace procedures easier to access.",
        content: `A React Next.js platform for discovering and booking local services. Includes service listings, provider profiles, and a streamlined booking flow with responsive layouts across devices.`,
        imageFolder: "/images/projects/myServices",
        team: [{ avatar: "/images/avatars/avatar-1.png" }],
      },

      {
        title: "UQ (Queue App)",
        description:
          "A mobile queue management application designed to simplify service booking and interactions between customers and employees. The project focuses on intuitive navigation, service workflows, and improving the overall user experience.",
        content: `A React Next.js mobile-focused queue management app that supports booking, employee interactions, and navigation flow optimization to improve service delivery and customer experience.`,
        date: "08/2023–12/2024",
        responsibilities:
          "UI design, feature implementation, navigation structure, and performance improvement.",
        link: "ukkera/queue_mobile",
        imageFolder: "/images/projects/uqapp",
        team: [{ avatar: "/images/avatars/avatar-1.png" }],
      },

      {
        title: "HR-System App",
        description:
          "A React Native HR management application designed to manage employee information and a wide range of internal HR services. The system supports employee requests such as leave applications and official certificates, as well as workflows related to absence, promotions, and employee insurance. It brings different HR services together in one mobile application with structured navigation and service modules. The project also focused on improving the user experience, integrating services, and resolving UI issues.",
        content: `A React Native HR management system designed to manage employee data, shifts, leave requests, and facilitate internal communications. Integrated service modules and resolved UI bugs for a smooth user experience.`,
        responsibilities:
          "UI development, service integration, navigation, and bug resolution.",
        link: "ukkera/hr-system at master",
        imageFolder: "/images/projects/hrsysetemapp",
        team: [{ avatar: "/images/avatars/avatar-1.png" }],
      },

      {
        title: "Reel App",
        description:
          "A React Native social media application focused on sharing and discovering short videos and photos. The app provides a feed-based experience where users can browse visual content in a way similar to social media platforms such as Facebook. It focuses on presenting images and videos in an engaging and easy-to-navigate interface. The project also included UI development, feature enhancements, map integration, and fixing application issues.",
        content: `A React Native app for rental property management and maintenance requests. Features include property listings, map integration for location-based services, bug fixes, and feature enhancements for improved usability.`,
        date: "09/2023–10/2023",
        responsibilities:
          "UI screens, map integration, bug fixes, and feature enhancements.",
        link: "ukkera/reel-app",
        imageFolder: "/images/projects/reelapp",
        team: [{ avatar: "/images/avatars/avatar-1.png" }],
      },
    ],
  },
];

export { person, social, newsletter, home, about, blog, work, gallery, projectsConfig };
