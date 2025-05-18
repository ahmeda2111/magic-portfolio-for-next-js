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

// const home = {
//   path: "/",
//   image: "/images/og/home.jpg",
//   label: "Home",
//   title: `${person.name}'s Portfolio`,
//   description: `Portfolio website showcasing my work as a ${person.role}`,
//   headline: <>Building bridges between design and code</>,
//   featured: {
//     display: true,
//     title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
//     href: "/work/building-once-ui-a-customizable-design-system",
//   },
//   subline: (
//     <>
//       I'm Selene, a design engineer at <Logo icon={false} style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}/>, where I craft intuitive
//       <br /> user experiences. After hours, I build my own projects.
//     </>
//   ),
// };
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
export const Projects = [
  {
    category: "Flutter",
    projects: [
      {
        title: "E-Commerce App",
        description: "A full-featured e-commerce app with cart and checkout.",
        link: "https://example.com/ecommerce",
        content: "Built using Flutter and Firebase.",
        team: [
          { avatar: "/images/avatars/avatar-1.png" },
          { avatar: "/images/avatars/avatar-2.png" },
        ],
        images: [
          "/images/gallery/horizontal-1.jpg",
          "/images/gallery/horizontal-1.jpg",
        ],
      },
      {
        title: "Chat App",
        description: "Real-time chat using Firebase and Flutter.",
        link: "https://example.com/chatapp",
        content: "Supports group and private chats.",
        team: [
          { avatar: "/images/avatars/avatar-3.png" },
        ],
        images: [
          "/images/gallery/horizontal-1.jpg",
        ],
      },
    ],
  },
  {
    category: "React/Next.js",
    projects: [
      {
        title: "Portfolio Website",
        description: "A dynamic portfolio site built with Next.js and Tailwind CSS.",
        link: "https://example.com/portfolio",
        content: "Showcasing personal projects and skills.",
        team: [
          { avatar: "/images/avatars/avatar-4.png" },
        ],
        images: [
          "/images/gallery/horizontal-1.jpg",
        ],
      },
    ],
  },
  {
    category: "React Native",
    projects: [
      {
        title: "Fitness Tracker",
        description: "Track workouts and progress using React Native.",
        link: "https://example.com/fitness",
        content: "Includes step counter and progress charts.",
        team: [
          { avatar: "/images/avatars/avatar-5.png" },
          { avatar: "/images/avatars/avatar-6.png" },
        ],
        images: [
          "/images/gallery/horizontal-1.jpg",
          "/images/gallery/vertical-3.jpg",
        ],
      },
    ],
  },
];

export { person, social, newsletter, home, about, blog, work, gallery,Projects };
