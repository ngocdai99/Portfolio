export type Project = {
  image: string;
  title: string;
  description: string;
  detail: {
    startDate: string;
    endDate: string;
    teamSize: number;
    role: string;
    organization: string;
    myResponsiblity: string[];
    techStack: string;
  };
  github?:
    | string
    | {
        frontend?: string;
        backend?: string;
      };
  demo?: string;
  news?: string;
};

const data: Project[] = [
  {
    image: "menu_book",
    title: "Learning Chinese System (Application)",
    description:
      "A Chinese learning app that enables users to study through videos, documents, and quizzes. The system tracks learning progress, supports assignment submissions and instant results, and enhances engagement via gamification and push notifications.",
    detail: {
      startDate: "6/2025",
      endDate: "Present",
      teamSize: 10,
      role: "Mobile Developer",
      organization:
        "Academic Department – FPT Polytechnic College, Ho Chi Minh City.",
      myResponsiblity: [
        "Developed features including video lecture playback, user management, FCM push notifications, and offline video download functionality",
        "Built and maintained user interfaces using React Native",
        "Integrated front-end with back-end via RESTful APIs",
      ],
      techStack:
        "React Native, Redux, Firebase Cloud Messaging, NestJS, PostGreSQL, TypeORM",
    },
  },
  {
    image: "work_outline",
    title: "FPT Polytechnic Career (Website)",
    description:
      "A web platform that supports students in finding full-time and part-time job opportunities aligned with their majors at FPT Polytechnic College. The system is used by administrators and staff to manage student profiles and job postings.",
    detail: {
      startDate: "4/2025",
      endDate: "6/2025",
      teamSize: 10,
      role: "Front-end Developer",
      organization:
        "Business Relations Department – FPT Polytechnic College, Ho Chi Minh City.",
      myResponsiblity: [
        "Developed the student CV management feature for the admin dashboard",
        "Built and maintained responsive user interfaces using ReactJS",
        "Integrated front-end with back-end via RESTful APIs",
      ],
      techStack: "ReactJS, Redux, Tailwind CSS, NestJS, MongoDB",
    },
  },
  {
    image: "local_cafe",
    title: "GreenZone Drinks Ordering System",
    description:
      "An online drink ordering system with Customer, Merchant (tablet), and Delivery apps. Includes real-time order tracking, voucher redemption, delivery progress updates, and revenue statistics.",
    detail: {
      startDate: "1/2025",
      endDate: "5/2025",
      teamSize: 5,
      role: "Leader (Fullstack)",
      organization: "FPT Polytechnic College",
      myResponsiblity: [
        "Led a team of 5, handled task planning, code reviews, and overall project architecture",
        "Developed backend APIs with Express.js and MongoDB",
        "Implemented real-time order tracking using Socket.IO",
        "Designed and implemented 70% of the user interface",
        "Integrated services: ZegoCloud for audio calls, Goong Map API for delivery tracking",
      ],
      techStack:
        "React Native, Express.js, Redux Toolkit, Saga, SQLite, MongoDB, Socket.IO, ZegoCloud, Goong Map API",
    },
    github: {
      frontend: "https://github.com/GreenZone-FPL",
      backend: "https://github.com/MyGreenZone/Backend",
    },
    demo: "https://youtu.be/STSSRkU-6Og?si=GL80pNYLoozcXdFn",
  },
  {
    image: "shopping_cart",
    title: `Furniture
    (Application)`,
    description:
      "A mobile app for buying and selling furniture with features like product management, cart, orders, and revenue tracking.",
    detail: {
      startDate: "8/2024",
      endDate: "10/2024",
      teamSize: 1,
      role: "Fullstack Developer",
      organization: "",
      myResponsiblity: [
        "Designed UI in React Native and backend with Express.js",
        "Built features: product management, cart, orders, stats",
      ],
      techStack: "React Native, Redux Toolkit, Express.js, SQLite, MongoDB",
    },
    github: {
      frontend: "https://github.com/ngocdai99/FurnitureReact",
      backend: "https://github.com/ngocdai99/FurnitureBackend",
    },
  },
  {
    image: "book",
    title: `Porfolio
    Website`,
    description:
      "A personal website to showcase my profile, experiences, projects, and blog posts. The site features responsive design, smooth animations",
    detail: {
      startDate: "06/2024",
      endDate: "08/2024",
      teamSize: 1,
      role: "Frontend Developer",
      organization: "",
      myResponsiblity: [
        "Designed UI with React JS",
        "Deploy website",
      ],
      techStack: "React JS",
    },
    github: "https://github.com/ngocdai99/Portfolio",
  },
  {
    image: "article",
    title: `Sun News
    (Application)`,
    description:
      "A mobile application that allows users to read global news and explore trending topics in real-time.",
    detail: {
      startDate: "11/2024",
      endDate: "12/2024",
      teamSize: 1,
      role: "Fullstack Developer",
      organization: "",
      myResponsiblity: [
        "Designed database and UI in React Native",
        "Implemented core features: authentication, profile management, tag-based filtering, news exploration, favoriting articles",
        "Published app to Google Play",
      ],
      techStack: "React Native, Redux Toolkit, Saga, MongoDB, SQLite",
    },
    github: "https://github.com/ngocdai99/Sun-News",
  },
  {
    image: "shopping_cart",
    title: "Ecommerce (Shopee Clone)",
    description:
      "An e-commerce mobile application supporting shop, product, cart, order, and revenue management.",
    detail: {
      startDate: "6/2024",
      endDate: "8/2024",
      teamSize: 2,
      role: "Fullstack Developer",
      organization: "",
      myResponsiblity: [
        "Designed database and UI in Java XML",
        "Developed features for managing shops, products, shopping cart, orders, and revenue statistics",
      ],
      techStack: "Java, XML, Firebase/Firestore",
    },
    github: "https://github.com/duynguyentan/ecommerce-android-app",
  },
  {
    image: "menu_book",
    title: `Minimum Library
    (Application)`,
    description:
      "A mobile application for library management including book management, staff, borrowing records, and usage statistics.",
    detail: {
      startDate: "4/2024",
      endDate: "6/2024",
      teamSize: 2,
      role: "Fullstack Developer",
      organization: "",
      myResponsiblity: [
        "Designed database and UI in Java XML",
        "Developed features for managing books, staff, borrowing records, and usage statistics",
      ],
      techStack: "Java, XML, SQLite",
    },
    news: "https://caodang.fpt.edu.vn/tin-tuc-poly/tp-ho-chi-minh-tin-sinh-vien/minilib-ung-dung-di-dong-tien-ich-cho-quan-ly-thu-vien-cua-sinh-vien-fpt-polytechnic-tp-hcm.html",
  },
];

export default data;
