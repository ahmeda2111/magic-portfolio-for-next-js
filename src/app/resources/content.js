import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Ahmed",
  lastName: "Ashraf",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer",
  avatar: "/images/projects/project-01/IMG.JPG",
  email: "ahmedashrafa2028@gmail.com",
  location: "Africa/Cairo",
  languages: ["English", "Arabic"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: (
    <>
      I occasionally write about software development, technology, and the
      process of building practical web and mobile applications.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ahmeda2111",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ahmed-ashraf-frontend/",
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
  description:
    "A portfolio showcasing my experience building web and mobile applications as a Full Stack Developer.",
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <>
        Recent project: <strong className="ml-4">Calendar Site</strong>
      </>
    ),
    href: "/work",
  },
  subline: (
    <>
      I&apos;m Ahmed Ashraf, a Full Stack Developer specializing in React,
      Next.js, React Native, and Flutter.
      <br />I build scalable, responsive applications with reusable components,
      API integrations, maintainable architecture, and intuitive user
      experiences.
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
        I&apos;m a Full Stack Developer with over three years of experience
        building web and mobile applications using React, Next.js, React Native,
        Flutter, JavaScript, TypeScript, and Dart.
        <br />
        <br />
        My experience includes contributing to 13 official projects at Ukkera,
        starting 9 projects from scratch and joining 4 existing projects. I have
        worked on responsive interfaces, reusable component systems, API
        integrations, authentication, configurable forms, data-driven
        applications, and application performance improvements.
        <br />
        <br />
        I have also worked as a Team Lead and Trainer, helping developers
        understand project requirements, reviewing code, resolving technical
        issues, and supporting team delivery. My work includes structured
        YAML-based data models, GraphQL operations, Google OAuth, workspace
        permissions, Google Calendar integration, and dynamic site-building
        functionality.
        <br />
        <br />
        Alongside my professional experience, I work on independent projects
        covering frontend development, backend functionality, and database
        design. I enjoy solving practical problems, improving application
        architecture, and turning requirements into maintainable products.
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
          "GraphQL",
          "YAML",
        ],
        responsibilities: [
          <>
            Contributed to 13 official projects, starting 9 projects from
            scratch and joining 4 existing projects to extend functionality and
            maintain established applications.
          </>,
          <>
            Analyzed project requirements and business workflows, translating
            business needs into structured technical solutions and frontend
            implementation plans.
          </>,
          <>
            Created and maintained YAML-based data models defining entities,
            fields, relationships, and backend data structures before
            development.
          </>,
          <>
            Worked with data models that supported the generation of backend
            structures and GraphQL operations, helping connect structured
            application data with frontend functionality.
          </>,
          <>
            Integrated backend APIs and services into web and mobile
            applications, connecting application data with responsive,
            user-facing interfaces.
          </>,
          <>
            Translated UI/UX designs into functional interfaces and developed
            appropriate layouts when designs were unavailable.
          </>,
          <>
            Built responsive web and mobile interfaces with reusable components
            and consistent layouts across different screen sizes.
          </>,
          <>
            Implemented configurable forms with conditional fields to support
            different workflows and changing application requirements.
          </>,
          <>
            Implemented Google OAuth authentication and role-based workspace
            permissions, including View and Edit access.
          </>,
          <>
            Integrated Google Calendar with project tasks to support
            calendar-related workflows and task scheduling.
          </>,
          <>
            Investigated unnecessary component re-renders and improved
            application performance, including coordinating concurrent requests
            across 8 endpoints.
          </>,
          <>
            Contributed to a dynamic Site Builder and reusable application
            features, working with configurable layouts and structured interface
            components.
          </>,
          <>
            Led a team of 2 developers, provided technical guidance, reviewed
            code manually, and supported implementation quality using Git and
            GitHub workflows.
          </>,
          <>
            Trained a new development batch, helping developers understand
            project structure, implementation workflows, and practical
            development techniques.
          </>,
          <>
            Worked throughout the development lifecycle, from requirements
            analysis and data preparation to implementation, debugging, testing,
            and delivery.
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
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Arab Open University",
        description: (
          <>Bachelor of Information Technology and Computer Science.</>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Languages & Web Technologies",
        skills: [
          "JavaScript (ES6+)",
          "TypeScript",
          "Dart",
          "Java (Basic)",
          "HTML5",
          "CSS3",
        ],
      },
      {
        title: "Frameworks & Libraries",
        skills: [
          "React",
          "Next.js",
          "React Native",
          "Flutter",
          "Tailwind CSS",
          "Material UI",
          "Ant Design",
        ],
      },
      {
        title: "State Management & Architecture",
        skills: [
          "Context API",
          "Provider",
          "BLoC",
          "Design Systems",
          "Component Architecture",
        ],
      },
      {
        title: "Backend & Data",
        skills: [
          "REST APIs",
          "GraphQL",
          "Supabase",
          "SQL",
          "Google OAuth",
          "Supabase Auth",
          "Role-Based Access Control",
          "Roles & Permissions",
        ],
      },
      {
        title: "Performance & Accessibility",
        skills: [
          "Code Splitting",
          "Lazy Loading",
          "Memoization",
          "Render Optimization",
          "API Request Optimization",
          "Semantic HTML",
          "Keyboard Accessibility",
          "Accessibility Practices",
        ],
      },
      {
        title: "Tools & Platforms",
        skills: [
          "Webpack",
          "Vite",
          "Metro Bundler",
          "Git",
          "GitHub",
          "VS Code",
          "Android Studio",
          "Figma",
          "Vercel",
          "Responsive Design",
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
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Web and mobile development projects by ${person.name}`,
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "Project gallery image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "Project gallery image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "Project gallery image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "Project gallery image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "Project gallery image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "Project gallery image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "Project gallery image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "Project gallery image",
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
          "A real estate mobile application that helps users explore property listings, review property details, discover locations, and access property-related services through a dedicated Flutter experience.",
        links: {
          github: "https://github.com/ahmeda2111/aqarapp.git",
        },
        tools: ["Flutter", "Firebase", "Google Maps"],
        languages: ["Dart"],
        content: `## Overview

AQAR App is a real estate mobile application designed to make property discovery and property-related information accessible through a mobile interface.

## Product Experience

The application focuses on presenting property listings and their associated details in an organized format. Users can navigate between property information and explore location-related information to better understand available properties.

## Development and Implementation

- Developed the mobile application using Flutter and Dart.
- Built the main application screens and property browsing interfaces.
- Organized property information into clear, reusable layouts.
- Implemented property discovery and filtering workflows.
- Integrated Google Maps functionality for location-related experiences.
- Connected application interfaces with Firebase services where required.
- Structured reusable widgets and navigation flows to support maintainability.

## Technologies

Flutter, Dart, Firebase, and Google Maps.

## Source Code

The project repository is available on GitHub.`,
        imageFolder: "/images/projects/AQARAPP",
        team: [{ avatar: "/images/avatars/avatar-1.png" }],
        date: "09/2023–02/2024",
        responsibilities: [
          "Developed the application from initial implementation through its core mobile experience.",
          "Built property listing screens and detailed property information views.",
          "Implemented browsing and filtering interactions for property discovery.",
          "Integrated map-based functionality for location-related features.",
          "Connected application screens with the required data and Firebase services.",
          "Organized reusable Flutter widgets and application navigation.",
        ],
      },
      {
        title: "Digital Clinic",
        description:
          "A digital healthcare application built with Flutter to support doctor and patient workflows, bringing appointment-related interactions, prescription information, and healthcare service discovery into one mobile experience.",
        links: {
          github: "https://github.com/ahmeda2111/digital-clinic.git",
        },
        tools: ["Flutter", "Firebase", "Google Maps"],
        languages: ["Dart"],
        content: `## Overview

Digital Clinic is a healthcare-focused mobile application designed around the interactions between patients and healthcare providers.

## Healthcare Workflows

The application brings healthcare-related information and actions into a single mobile interface. Its screens are organized around appointment workflows, prescription information, and access to relevant healthcare services.

## Development and Implementation

- Developed the Flutter application and its primary screens.
- Built interfaces for healthcare information and appointment-related workflows.
- Structured prescription and service information for mobile presentation.
- Implemented navigation between the application's main areas.
- Integrated location-based interfaces for healthcare provider discovery.
- Worked with Firebase services as part of the application implementation.
- Created reusable widgets to keep the interface consistent across screens.

## Technologies

Flutter, Dart, Firebase, and Google Maps.

## Source Code

The project repository is available on GitHub.`,
        imageFolder: "/images/projects/DIGITALCLINIC",
        team: [{ avatar: "/images/avatars/avatar-1.png" }],
        responsibilities: [
          "Developed the healthcare application from the initial implementation through its core workflows.",
          "Built patient-facing screens for healthcare information and appointment interactions.",
          "Organized prescription details and service-related information into accessible layouts.",
          "Implemented navigation between healthcare application modules.",
          "Integrated map-related interfaces for discovering healthcare providers.",
          "Structured reusable Flutter components and connected screens with application services.",
        ],
      },
      {
        title: "Tourist Guide",
        description:
          "A tourism and destination discovery mobile application built with Flutter, helping users explore places of interest through destination information, map-based navigation, and location-oriented interfaces.",
        links: {
          github: "https://github.com/ahmeda2111/tour-guide.git",
        },
        tools: ["Flutter", "Google Maps"],
        languages: ["Dart"],
        content: `## Overview

Tourist Guide is a mobile application focused on discovering tourist destinations and presenting place-related information in an accessible format.

## Destination Discovery

The application organizes destination information into mobile-friendly screens and uses map-related interfaces to support location awareness. The experience centers on helping users browse places and move between destination details and location views.

## Development and Implementation

- Built the Flutter application and its core screen structure.
- Developed destination presentation and place information interfaces.
- Integrated Google Maps functionality for location-oriented experiences.
- Organized destination content into reusable layouts.
- Implemented navigation between browsing screens and destination details.
- Created reusable Flutter widgets for consistent presentation.
- Focused on maintainable application structure and straightforward mobile navigation.

## Technologies

Flutter, Dart, and Google Maps.

## Source Code

The project repository is available on GitHub.`,
        responsibilities: [
          "Developed the tourism application from the ground up using Flutter.",
          "Built destination browsing screens and place information layouts.",
          "Integrated map-based interfaces for location-related functionality.",
          "Structured navigation between destinations and their associated details.",
          "Created reusable widgets for consistent presentation across screens.",
          "Organized the application structure to support maintainability and usability.",
        ],
        imageFolder: "/images/projects/tour-guide",
        team: [{ avatar: "/images/avatars/avatar-1.png" }],
      },
    ],
  },
  {
    category: "React Next",
    projects: [
      {
        title: "Pharma EGY",
        description:
          "A pharmaceutical e-commerce project focused on making medicine and pharmacy-related information accessible through a web platform, with frontend development, application logic, and database-related implementation.",
        links: {
          github: "https://github.com/ahmeda2111/PHarmEGY.git",
          website: "https://pharmegy-eg.vercel.app/",
        },
        content: `## Overview

Pharma EGY is an independent pharmaceutical e-commerce project developed across the web application and data layers.

## Product Direction

The platform is designed around pharmacy-related browsing and the presentation of pharmaceutical information. Its frontend provides the structure through which users interact with the platform and explore its available content.

## Development and Implementation

- Developed the frontend application using React and Next.js.
- Structured application pages and reusable interface components.
- Implemented user-facing workflows appropriate to the platform.
- Worked on application logic and backend-related functionality.
- Organized database structures and data handling.
- Connected frontend components with the application's data layer.
- Focused on maintainability, clear navigation, and consistent UI behavior.

## Role

Independent development across the project's core implementation.

## Technologies

React, Next.js, TypeScript, and the associated application and database technologies used by the project.

## Timeline

September 2026 – Present.`,
        date: "09/2026–Present",
        responsibilities: [
          "Designed and developed the web application from the initial implementation through its core functionality.",
          "Built the frontend structure and reusable React components.",
          "Implemented application workflows and user-facing interactions.",
          "Worked on backend functionality and application data handling.",
          "Structured database-related functionality and connected application layers.",
          "Maintained a consistent architecture across the frontend and supporting services.",
        ],
        imageFolder: "/images/projects/pharma-egy",
        team: [{ avatar: "/images/avatars/avatar-1.png" }],
        tools: ["React", "Next.js", "TypeScript"],
        languages: ["TypeScript", "JavaScript"],
      },
      {
        title: "Project Manager",
        description:
          "A Notion-inspired project and workspace management platform that brings structured pages, task organization, and project information together in a flexible environment for organizing work.",
        links: {},
        content: `## Overview

Project Manager is a productivity platform inspired by modern workspace tools such as Notion. It focuses on organizing project information and supporting flexible ways to structure work.

## Workspace Organization

Rather than presenting projects only as a list of tasks, the platform is designed around structured workspace content. Pages and project-related information can be organized into a consistent interface that supports documentation and day-to-day work management.

## Product Areas

- Project and task organization.
- Structured workspace and page layouts.
- Reusable interface elements for displaying project information.
- Navigation between project-related sections.
- Consistent presentation of structured content.

## Development and Implementation

- Developed the application's core frontend experience.
- Built reusable React components and workspace-oriented layouts.
- Organized project information into structured views.
- Implemented application navigation and related user interactions.
- Worked on the underlying UI patterns to keep the interface consistent and maintainable.

## Technologies

React, Next.js, and TypeScript.

## Timeline

November 2025 – June 2026.`,
        date: "11/2025–06/2026",
        responsibilities: [
          "Developed the application from the initial implementation through its core workspace experience.",
          "Built structured interfaces for organizing project information and tasks.",
          "Created reusable components for workspace and page layouts.",
          "Implemented navigation between project-related sections.",
          "Organized complex information into a clear and maintainable frontend structure.",
          "Focused on consistency across the application's productivity workflows.",
        ],
        imageFolder: "/images/projects/project-manager",
        team: [{ avatar: "/images/avatars/avatar-1.png" }],
        tools: ["React", "Next.js", "TypeScript"],
        languages: ["TypeScript", "JavaScript"],
      },
      {
        title: "SBA Dashboard",
        description:
          "An operational dashboard for protected areas and nature reserves, bringing survey records, violations, animal deaths, site users, filtered metrics, and geographic visualizations into a centralized reporting interface.",
        links: {},
        content: `## Overview

SBA Dashboard is an internal operational reporting platform designed to present information related to protected areas and reserves.

## Operational Monitoring

The dashboard organizes different categories of operational data, including surveys, violations, animal deaths, and site users. Its reporting interface helps users navigate the available information through charts, filters, and geographic visualizations.

## Dashboard Capabilities

- Operational summaries for different data categories.
- Dynamic donut, line, and bar chart interfaces.
- Filter-driven metrics and data views.
- Bubble maps, heat maps, and thematic map visualizations.
- Structured dashboard sections for reporting and exploration.

## Development and Implementation

- Developed the dashboard application and its primary interface.
- Built reusable reporting components and data visualization layouts.
- Implemented interactive chart interfaces.
- Connected filtering interactions with dashboard presentation.
- Organized geographic visualizations and operational reporting sections.
- Focused on readable data presentation and consistent UI behavior.

## Intellectual Property Notice

This was an internal project. Its source code is not included in this portfolio. Any displayed materials are intended to illustrate my professional contribution and do not imply ownership of the organization or its intellectual property.

## Timeline

April 2025 – October 2025.`,
        date: "04/2025–10/2025",
        responsibilities: [
          "Developed the dashboard from the initial implementation through its core reporting interface.",
          "Built reusable dashboard sections for operational information.",
          "Implemented dynamic donut, line, and bar chart visualizations.",
          "Developed filter-driven data presentation and interactive reporting views.",
          "Built geographic visualization interfaces, including bubble, heat, and thematic maps.",
          "Organized complex operational information into a clear dashboard structure.",
        ],
        imageFolder: "/images/projects/sba-dashboard",
        team: [{ avatar: "/images/avatars/avatar-1.png" }],
        tools: ["React", "Next.js", "TypeScript"],
        languages: ["TypeScript", "JavaScript"],
      },
      {
        title: "Calendar Site",
        description:
          "A web-based scheduling and calendar application designed to help organize company activities, customize calendar views, filter information by date, and coordinate scheduled items with project tasks.",
        links: {},
        content: `## Overview

Calendar Site is a scheduling-focused web application that brings date-based information and calendar interactions into a centralized interface.

## Scheduling Experience

The application focuses on helping users navigate dates, view scheduled information, and organize calendar content. Its relationship with project tasks supports a more connected view of scheduled work.

## Key Areas

- Calendar views and date navigation.
- Date-based filtering.
- Customizable calendar presentation.
- Integration between calendar information and project task workflows.
- Reusable components for scheduling interfaces.

## Development and Implementation

- Developed the calendar interface and its supporting components.
- Implemented date-oriented navigation and filtering interactions.
- Organized scheduling information into readable layouts.
- Connected calendar views with relevant task-related workflows.
- Focused on consistent component behavior and maintainable frontend code.

## Intellectual Property Notice

The source code for this project is proprietary to Ukkera and is not included here. Any displayed materials are intended to document my professional contribution and do not imply ownership of the company or its intellectual property.`,
        date: "04/2025–04/2025",
        responsibilities: [
          "Developed the calendar application from its initial implementation through its core scheduling interface.",
          "Built date navigation and calendar presentation components.",
          "Implemented filtering and calendar customization workflows.",
          "Connected scheduling views with project task-related functionality.",
          "Organized calendar information into clear, reusable interface sections.",
          "Maintained consistent UI behavior across calendar interactions.",
        ],
        imageFolder: "/images/projects/calendar",
        team: [{ avatar: "/images/avatars/avatar-1.png" }],
        tools: ["React", "Next.js", "TypeScript"],
        languages: ["TypeScript", "JavaScript"],
      },
      {
        title: "Site Builder",
        description:
          "A no-code website creation platform featuring reusable layout blocks, configurable page structures, content-editing interfaces, and a shared drag-and-drop system for visual page building.",
        links: {},
        content: `## Overview

Site Builder is an internal web platform designed to make website page creation more visual and configurable.

## Visual Page Creation

The application uses reusable page elements and layout blocks to support page composition. A shared drag-and-drop system helps users arrange content, while editing interfaces provide ways to configure the resulting page structure.

## Product Areas

- Reusable layout blocks.
- Configurable page structures.
- Content-editing interfaces.
- Drag-and-drop interactions.
- Consistent rendering of page elements.

## My Contribution

My contribution represented approximately 40% of the overall project work. I worked on assigned parts of the application rather than claiming sole responsibility for the complete product.

## Development and Implementation

- Contributed to the development of selected page-building features.
- Worked on reusable UI components and layout blocks.
- Implemented parts of the content-editing experience.
- Integrated assigned components with the shared drag-and-drop system.
- Improved component behavior and consistency within the existing application.

## Intellectual Property Notice

This is an internal project, and its proprietary source code is not included in this portfolio. Displayed materials are intended to document my contribution and do not imply ownership of the company's intellectual property.`,
        date: "01/2025–03/2025",
        responsibilities: [
          "Contributed approximately 40% of the overall project development work.",
          "Developed assigned UI components for configurable page layouts.",
          "Worked on reusable layout blocks and content-editing interfaces.",
          "Integrated assigned page elements with the existing drag-and-drop system.",
          "Improved the consistency and behavior of the components within my scope.",
          "Collaborated within the existing project structure rather than claiming sole ownership of the product.",
        ],
        imageFolder: "/images/projects/sitebuilder",
        team: [{ avatar: "/images/avatars/avatar-1.png" }],
        tools: ["React", "Next.js", "TypeScript"],
        languages: ["TypeScript", "JavaScript"],
      },
      {
        title: "Folder Drive",
        description:
          "A web-based file management platform inspired by cloud storage tools, focused on hierarchical folder organization, file browsing, file previews, and permission-related interfaces.",
        links: {},
        content: `## Overview

Folder Drive is an internal web application focused on organizing files and folders within a structured workspace.

## File Organization

The platform is designed around a hierarchical approach to content management. Users can navigate folder structures, browse available files, and interact with file-related interfaces in a consistent environment.

## Key Areas

- Hierarchical folder navigation.
- File and folder presentation.
- File preview interfaces.
- Permission-related workflows.
- Drag-and-drop interactions for organizing content.

## Development and Implementation

- Developed the file management interface and core application structure.
- Built reusable components for folder and file presentation.
- Implemented tree-based navigation and folder organization.
- Worked on file preview and permission-related interfaces.
- Integrated the shared drag-and-drop functionality.
- Focused on clear navigation and maintainable component design.

## Intellectual Property Notice

The project is proprietary to Ukkera, and its source code is not included in this portfolio. Any displayed materials are intended to illustrate my professional contribution and do not imply ownership of the company's intellectual property.`,
        date: "02/2025–03/2025",
        responsibilities: [
          "Developed the file management application from the initial implementation through its core interface.",
          "Built file and folder views for structured content navigation.",
          "Implemented hierarchical organization and tree-based navigation.",
          "Developed interfaces for file previews and permission-related workflows.",
          "Integrated drag-and-drop interactions for file organization.",
          "Maintained consistent navigation patterns across the application.",
        ],
        imageFolder: "/images/projects/mediadrive",
        team: [{ avatar: "/images/avatars/avatar-1.png" }],
        tools: ["React", "Next.js", "TypeScript"],
        languages: ["TypeScript", "JavaScript"],
      },
      {
        title: "Page Builder",
        description:
          "A visual page composition tool for configuring page layouts, arranging reusable content elements, and previewing how configured pages appear before publication or use.",
        links: {},
        content: `## Overview

Page Builder is an internal tool designed to provide a visual workflow for composing page layouts.

## Page Composition

The application focuses on assembling page elements into structured layouts. Reusable blocks and preview interfaces help keep page composition organized while reducing the need to manually construct every layout from scratch.

## Main Areas

- Page layout configuration.
- Reusable content elements.
- Live content preview.
- Drag-and-drop page composition.
- Consistent rendering of configured elements.

## Development and Implementation

- Developed the page-building interface and its component structure.
- Built reusable elements for configuring page layouts.
- Implemented preview-oriented UI interactions.
- Integrated page components with the shared block system.
- Worked on drag-and-drop composition workflows.
- Focused on predictable rendering and reusable frontend patterns.

## Intellectual Property Notice

This project belongs to Ukkera, and its proprietary source code is not included here. Displayed materials are intended to document my professional contribution rather than claim ownership of the company's intellectual property.`,
        date: "01/2025–03/2025",
        responsibilities: [
          "Developed the page composition tool from its initial implementation through its core features.",
          "Built reusable components for configurable page layouts.",
          "Implemented interfaces for arranging and previewing page elements.",
          "Integrated page elements with the shared block system.",
          "Developed drag-and-drop interactions for visual page composition.",
          "Maintained consistency between configured layouts and their rendered presentation.",
        ],
        imageFolder: "/images/projects/pagebuilder",
        team: [{ avatar: "/images/avatars/avatar-1.png" }],
        tools: ["React", "Next.js", "TypeScript"],
        languages: ["TypeScript", "JavaScript"],
      },
      {
        title: "UQ (Queue Web)",
        description:
          "A queue management web application for organizing service interactions and presenting queue-related information through a structured interface for customer-facing and employee-facing workflows.",
        links: {},
        content: `## Overview

UQ Queue Web is the web component of a queue management solution. It focuses on presenting service information and supporting the digital workflows associated with organized customer queues.

## Queue Management Experience

The web interface provides structured screens for queue-related information and service interactions. Its purpose is to make relevant information easier to navigate and help users move through the available service workflows.

## Development and Implementation

- Developed the web application's core frontend structure.
- Built screens for queue and service-related information.
- Implemented navigation and user interaction flows.
- Organized queue information into reusable interface components.
- Connected the relevant frontend views with application data and services.
- Focused on consistent layouts and predictable interface behavior.

## Intellectual Property Notice

The source code is proprietary to Ukkera and is not included in this portfolio. Any displayed materials are intended to document my contribution to the project and do not imply ownership of the company's intellectual property.`,
        date: "08/2023–11/2024",
        responsibilities: [
          "Developed the web application from the initial implementation through its core queue workflows.",
          "Built service-oriented screens and queue information views.",
          "Implemented reusable React components and responsive layouts.",
          "Organized navigation between queue-related application sections.",
          "Connected frontend views with the required application data and services.",
          "Improved the consistency and usability of the web interface.",
        ],
        imageFolder: "/images/projects/uqapp",
        team: [{ avatar: "/images/avatars/avatar-1.png" }],
        tools: ["React", "Next.js", "JavaScript"],
        languages: ["JavaScript", "TypeScript"],
      },
      {
        title: "Cashier System",
        description:
          "A cashier and point-of-sale application centered on checkout operations, product pricing, and transaction-related workflows. My contribution was limited to fixing a small number of bugs in the existing system.",
        links: {},
        content: `## Overview

Cashier System is a point-of-sale project designed around retail checkout and transaction workflows.

## Project Context

The application supports cashier-oriented functionality, including product and pricing-related interactions. My involvement was limited to resolving selected issues in the existing application rather than building the product or its main features from scratch.

## My Contribution

- Investigated a small number of reported application issues.
- Fixed selected bugs in existing functionality.
- Helped improve the reliability of the affected workflows.
- Verified the behavior of the areas changed during bug fixing.

## Intellectual Property Notice

The project's source code is proprietary to its respective owner and is not included in this portfolio. Any displayed materials are intended to illustrate the project context and do not imply ownership of the underlying software.`,
        date: "09/2023–10/2023",
        responsibilities: [
          "Fixed a small number of bugs in the existing cashier application.",
          "Investigated issues affecting selected application workflows.",
          "Applied targeted fixes to the affected functionality.",
          "Checked the behavior of the updated areas after making changes.",
        ],
        team: [{ avatar: "/images/avatars/avatar-1.png" }],
        tools: ["React", "Next.js", "JavaScript"],
        languages: ["JavaScript"],
      },
      {
        title: "Wallet Web",
        description:
          "A web-based digital wallet interface focused on presenting wallet information and supporting financial-service workflows, including user-facing interactions associated with peer-to-peer transfers.",
        links: {},
        content: `## Overview

Wallet Web is the web component of a digital wallet project. It provides an interface for users to interact with wallet-related information and financial-service workflows.

## Wallet Experience

The application organizes financial information into dedicated views and provides navigation between wallet-related actions. The web interface emphasizes clear information hierarchy and accessible interaction patterns.

## Development and Implementation

- Developed the web application's core interface and page structure.
- Built reusable components for wallet-related screens.
- Organized financial information into clear layouts.
- Implemented navigation between relevant user workflows.
- Worked on responsive behavior across different screen sizes.
- Connected the frontend with the application's supporting services where required.

## Intellectual Property Notice

The project source code is proprietary to Ukkera and is not included in this portfolio. Displayed materials are intended to document my contribution and do not imply ownership of the company's intellectual property.`,
        date: "05/2024–08/2024",
        responsibilities: [
          "Developed the wallet web application from the initial implementation through its core interface.",
          "Built dedicated views for wallet-related information and user actions.",
          "Created reusable components for financial-service workflows.",
          "Implemented navigation between the application's primary sections.",
          "Organized financial information into clear, responsive layouts.",
          "Connected relevant frontend workflows with supporting application services.",
        ],
        team: [{ avatar: "/images/avatars/avatar-1.png" }],
        tools: ["React", "Next.js", "JavaScript"],
        languages: ["JavaScript", "TypeScript"],
      },
    ],
  },
  {
    category: "React Native",
    projects: [
      {
        title: "Wallet App",
        description:
          "A mobile digital wallet application built with React Native, designed to provide access to wallet-related information and financial-service workflows through a mobile-first interface.",
        links: {},
        content: `## Overview

Wallet App is the mobile component of a digital wallet product. It brings wallet-related interactions into a dedicated application designed for mobile use.

## Mobile Wallet Experience

The application organizes financial information and user-facing actions into focused screens. Its mobile interface prioritizes clear navigation, readable information, and consistent interaction patterns.

## Development and Implementation

- Developed the mobile application using React Native.
- Built the main wallet-related screens and navigation structure.
- Created reusable components for financial information and user actions.
- Organized mobile layouts for different screen sizes.
- Implemented application interactions and connected relevant views with supporting services.
- Focused on maintainable component structure and a consistent mobile experience.

## Intellectual Property Notice

The source code is proprietary to Ukkera and is not included in this portfolio. Any displayed materials are intended to document my professional contribution and do not imply ownership of the company's intellectual property.`,
        responsibilities: [
          "Developed the mobile wallet application from its initial implementation through its core experience.",
          "Built React Native screens for wallet-related information and user actions.",
          "Created reusable components for mobile financial workflows.",
          "Implemented navigation between the application's primary screens.",
          "Organized wallet information into readable mobile layouts.",
          "Connected relevant interface workflows with supporting application services.",
        ],
        imageFolder: "/images/projects/walletapp",
        team: [{ avatar: "/images/avatars/avatar-1.png" }],
        tools: ["React Native", "JavaScript"],
        languages: ["JavaScript"],
      },
      {
        title: "My Services App",
        description:
          "An employee services mobile application with employee-facing and administrative versions. My contribution focused on selected UI components, interface improvements, and bug fixes within the existing application.",
        links: {
          playStore: [
            "https://play.google.com/store/apps/details?id=com.collection.employee",
            "https://play.google.com/store/apps/details?id=com.collection.admin",
          ],
        },
        content: `## Overview

My Services App is a mobile employee services product with separate applications for employee and administrative workflows.

## Application Context

The product supports workplace service interactions, including employee requests and related administrative processes. Its mobile interfaces organize these services into dedicated screens.

## My Contribution

My work was limited to selected parts of the existing application. I contributed to UI implementation and improvements, addressed interface issues, and fixed bugs in the areas assigned to me.

## Areas of Contribution

- Selected employee-service UI screens.
- Interface components and layout improvements.
- Navigation and presentation refinements in assigned areas.
- Bug fixes affecting existing functionality.

## Intellectual Property Notice

The application and its proprietary source code belong to their respective rights holders. The public store links are provided as references to the listed applications and do not imply ownership of the product or its intellectual property.`,
        imageFolder: "/images/projects/myServices",
        team: [{ avatar: "/images/avatars/avatar-1.png" }],
        tools: ["React Native", "JavaScript"],
        languages: ["JavaScript"],
        responsibilities: [
          "Worked on selected UI screens within the existing mobile application.",
          "Implemented assigned interface components and layout improvements.",
          "Refined the presentation of employee service workflows in the areas handled.",
          "Investigated and fixed bugs in assigned application screens.",
          "Improved consistency across the UI components within my scope.",
        ],
      },
      {
        title: "UQ (Queue App)",
        description:
          "A React Native mobile application for queue management, providing a mobile interface for queue-related information and service interactions.",
        links: {},
        content: `## Overview

UQ Queue App is the mobile component of the UQ queue management solution.

## Mobile Service Experience

The application brings queue-related interactions into a mobile environment. Its screens are organized to make service information accessible and support navigation through the relevant queue workflows.

## Development and Implementation

- Developed the mobile application using React Native.
- Built screens for queue and service-related information.
- Implemented mobile navigation and user interactions.
- Created reusable components for queue-related views.
- Connected relevant screens with application data and services.
- Focused on consistent behavior and maintainable mobile code.

## Intellectual Property Notice

The source code is proprietary to Ukkera and is not included in this portfolio. Displayed materials are intended to document my contribution and do not imply ownership of the company's intellectual property.`,
        date: "08/2023–12/2024",
        responsibilities: [
          "Developed the mobile queue application from its initial implementation through its core workflows.",
          "Built React Native screens for queue and service information.",
          "Created reusable mobile components for the application's main sections.",
          "Implemented navigation and user interactions across queue-related screens.",
          "Connected the interface with the relevant application data and services.",
          "Maintained consistent UI behavior across the mobile experience.",
        ],
        imageFolder: "/images/projects/uqapp",
        team: [{ avatar: "/images/avatars/avatar-1.png" }],
        tools: ["React Native", "JavaScript"],
        languages: ["JavaScript"],
      },
      {
        title: "HR-System App",
        description:
          "A human resources mobile application with manager and employee versions, supporting workplace services and employee-related workflows. My contribution focused on selected UI work and fixing bugs in the existing application.",
        links: {
          playStore: [
            "https://play.google.com/store/apps/details?id=com.ukkera.hrmanager",
            "https://play.google.com/store/apps/details?id=com.ukkera.hremployee",
          ],
        },
        content: `## Overview

HR-System App is a mobile HR product with separate experiences for managers and employees.

## Application Context

The product covers HR-related workflows such as employee services, leave requests, certificates, and other workplace processes. The manager and employee applications provide interfaces suited to their respective workflows.

## My Contribution

I worked on selected areas of the existing React Native application, focusing on UI components, interface refinements, and bug fixes. My role did not involve developing the entire HR product from scratch.

## Areas of Contribution

- Selected employee and manager UI components.
- Layout and interface refinements.
- Improvements to assigned HR-related screens.
- Bug fixes affecting existing UI behavior.

## Intellectual Property Notice

The applications and their proprietary source code belong to their respective rights holders. The Google Play links are included for reference and do not imply ownership of the applications, trademarks, or source code.`,
        responsibilities: [
          "Worked on selected UI screens in the existing HR mobile applications.",
          "Implemented assigned React Native components and layout refinements.",
          "Improved the presentation of selected employee and manager workflows.",
          "Investigated and fixed bugs in the screens assigned to me.",
          "Maintained consistency with the existing application design and component patterns.",
        ],
        imageFolder: "/images/projects/hrsysetemapp",
        team: [{ avatar: "/images/avatars/avatar-1.png" }],
        tools: ["React Native", "JavaScript"],
        languages: ["JavaScript"],
      },
//       {
//         title: "Reel App",
//         description:
//           "A short-form video and photo sharing mobile application. My contribution was limited to fixing a small number of bugs in the existing application.",
//         links: {
//           playStore: [
//             "https://play.google.com/store/apps/details?id=com.topreels.app",
//           ],
//         },
//         content: `## Overview

// Reel App is a social-style mobile application focused on browsing short-form video and photo content.

// ## Application Context

// The product provides a feed-oriented experience for discovering visual content. Its existing mobile interface supports browsing and interacting with content.

// ## My Contribution

// My involvement was limited to a small number of bug fixes in the existing application. I did not build the application from scratch or claim responsibility for its overall development.

// ## Work Performed

// - Investigated selected application issues.
// - Fixed a small number of bugs.
// - Checked the behavior of the affected areas after the fixes.

// ## Intellectual Property Notice

// The application and its proprietary source code belong to their respective rights holders. The public store listing is provided for reference and does not imply ownership of the application or its intellectual property.`,
//         date: "09/2023–10/2023",
//         responsibilities: [
//           "Fixed a small number of bugs in the existing mobile application.",
//           "Investigated specific issues in the areas assigned to me.",
//           "Applied targeted fixes to the affected functionality.",
//           "Checked the affected flows after making changes.",
//         ],
//         imageFolder: "/images/projects/reelapp",
//         team: [{ avatar: "/images/avatars/avatar-1.png" }],
//         tools: ["React Native", "JavaScript"],
//         languages: ["JavaScript"],
//       },
    ],
  },
];

export {
  person,
  newsletter,
  social,
  home,
  about,
  blog,
  work,
  gallery,
  projectsConfig,
};
