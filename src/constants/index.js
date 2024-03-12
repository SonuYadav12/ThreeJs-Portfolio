import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Android Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
  {
    title: "React.js Developer",
    company_name: "Self-paced Learning",
    icon: reactIcon,
    iconBg: "#61DAFB",
    date: "Ongoing",
    points: [
      "Explored React.js for building interactive and dynamic user interfaces.",
      "Developed personal projects using React.js to gain practical experience.",
      "Learned best practices in React.js development, including component-based architecture and state management.",
      "Experimented with different React.js libraries and tools to enhance productivity and efficiency."
    ],
  },
  {
    title: "Next.js Developer",
    company_name: "Self-paced Learning",
    icon: nextIcon,
    iconBg: "#000000",
    date: "Ongoing",
    points: [
      "Explored Next.js for building server-rendered React applications.",
      "Developed projects using Next.js, focusing on SEO optimization and performance improvements.",
      "Learned about server-side rendering and data fetching strategies in Next.js.",
      "Experimented with Next.js features like API routes and image optimization."
    ],
  },
  {
    title: "Vue.js Developer",
    company_name: "Self-paced Learning",
    icon: vueIcon,
    iconBg: "#4FC08D",
    date: "Ongoing",
    points: [
      "Explored Vue.js for building reactive and dynamic user interfaces.",
      "Developed personal projects using Vue.js to gain hands-on experience.",
      "Learned about Vue.js features such as directives, components, and Vuex for state management.",
      "Experimented with Vue.js ecosystem tools and plugins to enhance development workflow and productivity."
    ],
  },
  {
    title: "Three.js Developer",
    company_name: "Self-paced Learning",
    icon: threeIcon,
    iconBg: "#000000",
    date: "Ongoing",
    points: [
      "Explored Three.js for creating 3D graphics and interactive web experiences.",
      "Developed projects using Three.js to build immersive virtual environments and visualizations.",
      "Learned about Three.js fundamentals such as scenes, cameras, lights, and geometries.",
      "Experimented with advanced techniques in Three.js, including shaders, physics simulations, and animations."
    ],
  },
  {
    title: "Node.js Developer",
    company_name: "Self-paced Learning",
    icon: nodeIcon,
    iconBg: "#68A063",
    date: "Ongoing",
    points: [
      "Explored Node.js for server-side JavaScript development.",
      "Built RESTful APIs using Express.js for handling HTTP requests and responses.",
      "Learned about asynchronous programming and event-driven architecture in Node.js.",
      "Experimented with Node.js frameworks and tools for building scalable and efficient server-side applications."
    ],
  }
]
;
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "RecipeApp",
      description:
        "Browse a vast collection of mouthwatering dishes, create shopping lists, and access step-by-step instructions with beautiful visuals, all in one easy-to-use mobile application.",
      tags: [
        {
          name: "reactNative",
          color: "blue-text-gradient",
        },
        {
          name: "threeJs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/SonuYadav12/RecipeApp-ReactNative",
    },
    {
      name: "Tribe",
      description:"Create a comprehensive web application allowing users to efficiently search for job opportunities, explore estimated salary ranges for various positions, and easily locate available jobs tailored to their current geographic location.",
      tags: [
        {
          name: "nuxtjs",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "airtribe-three.vercel.app",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
