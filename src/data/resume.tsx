import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { SiTelegram } from "@icons-pack/react-simple-icons";

export const DATA = {
  name: "Yurii Chepiha",
  initials: "DV",
  url: "https://yurii-goldendev.vercel.app",
  location: "Dubno, Rivnenska",
  locationLink: "https://www.google.com/maps/place/dubno",
  description:
    // "I am passionate about developing innovative solutions on decentralized networks, such as blockchain, and have strong expertise in creating engaging and dynamic front-end experiences for websites."
    "I love building things on decentralized networks, such as blockchain. Also have strong expertise in creating engaging and dynamic front-end experiences for websites.",
  summary:
    "At the end of 2024, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/avatar/yurii2.jpg",
  // skills: [
  //   "React.js",
  //   "Next.js",
  //   "Typescript",
  //   "Javascript",
  //   "Express",
  //   "Solidity",
  //   "Web3",
  //   "Rust",
  //   "Blockchain",
  //   "Ethereum",
  //   "Solana",
  //   "Node.js",
  //   "Python",
  //   "PostgreSQL",
  //   "MySQL",
  //   "MongoDB",
  //   "Docker",
  //   "Truffle",
  //   "Hardhat",
  //   "HTML5",
  //   "CSS3",
  //   "OpenZeppelin",
  //   "Metaplex",
  //   "NFT",
  // ],
  // skills: {
  //   Languages: ["JavaScript", "TypeScript", "Solidity", "Rust", "Python"],
  //   Blockchain: [
  //     "Smart Contracts",
  //     "OpenZeppelin",
  //     "Ethereum",
  //     "Solana",
  //     "Web3.js",
  //     "Ethers.js",
  //     "NFT",
  //     "Hardhat",
  //     "Truffle",
  //     "Canache",
  //   ],
  //   Frontend: [
  //     "React.js",
  //     "Next.js",
  //     "Vue.js",
  //     "HTML5",
  //     "CSS3",
  //     "TailwindCSS",
  //     "SASS",
  //   ],
  //   Backend: ["Node.js", "Express", "GraphQL", "REST API", "OAuth"],
  //   Database: ["MongoDB Atlas", "MySQL", "PostgreSQL", "Redis"],
  //   Tools: ["Git", "Docker", "AWS", "Agile/Scrum Methodologies"],
  // },
  skills: {
    Languages: [
      {
        label: "JavaScript",
        icon: "javascript",
        color: "#F7DF1E",
      },
      {
        label: "TypeScript",
        icon: "typescript",
        color: "#3178C6",
      },
      {
        label: "Solidity",
        icon: "solidity",
        color: "#363636",
      },
      {
        label: "Rust",
        icon: "rust",
        color: "#000000",
      },
      {
        label: "Python",
        icon: "python",
        color: "#3776AB",
      },
    ],
    Blockchain: [
      {
        label: "Ethereum",
        icon: "ethereum",
        color: "#3C3C3D",
      },
      {
        label: "Solana",
        icon: "solana",
        color: "#9945FF",
      },
      {
        label: "Web3.js",
        icon: "web3dotjs",
        color: "#F16822",
      },
      {
        label: "Ethers.js",
        icon: "ethers",
        color: "#2535A0",
      },
      {
        label: "OpenZeppelin",
        icon: "openzeppelin",
        color: "#4E5EE4",
      },
      {
        label: "Ethers.js",
        icon: "ethers",
        color: "#2535A0",
      },
      {
        label: "Ethers.js",
        icon: "ethers",
        color: "#2535A0",
      },
      // "Smart Contracts",
      // "NFT",
      // "Hardhat",
      // "Truffle",
      // "Canache",
    ],
    Frontend: [
      {
        label: "React.js",
        icon: "react",
        color: "#61DAFB",
      },
      {
        label: "Next.js",
        icon: "nextdotjs",
        color: "#000000",
      },
      {
        label: "Vue.js",
        icon: "vuedotjs",
        color: "#4FC08D",
      },
      {
        label: "HTML5",
        icon: "html5",
        color: "#E34F26",
      },
      {
        label: "CSS3",
        icon: "css3",
        color: "#1572B6",
      },
      {
        label: "TailwindCSS",
        icon: "tailwindcss",
        color: "#06B6D4",
      },
      {
        label: "Sass",
        icon: "sass",
        color: "#CC6699",
      },
    ],
    Backend: [
      {
        label: "Node.js",
        icon: "nodedotjs",
        color: "#5FA04E",
      },
      {
        label: "Express",
        icon: "express",
        color: "#000000",
      },
      {
        label: "GraphQL",
        icon: "graphql",
        color: "#E10098",
      },
      {
        label: "Auth0",
        icon: "auth0",
        color: "#EB5424",
      },
    ],
    Database: [
      {
        label: "MongoDB",
        icon: "mongodb",
        color: "#47A248",
      },
      {
        label: "MySQL",
        icon: "mysql",
        color: "#4479A1",
      },
      {
        label: "PostgreSQL",
        icon: "postgresql",
        color: "#4169E1",
      },
      {
        label: "Redis",
        icon: "redis",
        color: "#FF4438",
      },
      // "MongoDB Atlas",
      // "MySQL",
      // "PostgreSQL",
      // "Redis",
    ],
    Tools: [
      {
        label: "Git",
        icon: "git",
        color: "#F05032",
      },
      {
        label: "GitHub",
        icon: "github",
        color: "#181717",
      },
      {
        label: "Docker",
        icon: "docker",
        color: "#2496ED",
      },
      {
        label: "AWS",
        icon: "amazonwebservices",
        color: "#232F3E",
      },
      // "Git",
      // "Docker",
      // "AWS",
      // "Agile/Scrum Methodologies",
    ],
  },

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/#skill", icon: HomeIcon, label: "Skill" },
    { href: "/project", icon: NotebookIcon, label: "Project" },
    { href: "/background", icon: NotebookIcon, label: "Background" },
    { href: "/background#work", icon: NotebookIcon, label: "Work" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "chepiha.yura@outlook.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/TheGoldProject",
        icon: Icons.github,

        navbar: true,
      },
      Telegram: {
        name: "Telegram",
        url: "https://t.me/goldendev726",
        icon: SiTelegram,

        navbar: true,
      },
      // Discord: {
      //   name: "Discord",
      //   url: "https://github.com/TheGoldProject",
      //   icon: Icons.github,

      //   navbar: true,
      // },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yura-chepiha-4675465489/", //4671b4343
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "chepiha.yura@outlook.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  links: {
    resume: "https://bit.ly/yura-resume",
    telegram: "https://t.me/goldendev726",
    linkedin: "https://www.linkedin.com/in/yura-chepiha-4675465489/",
    github: "https://github.com/TheGoldProject",
  },

  work: [
    {
      company: "Gempad",
      href: "https://gempad.app",
      badges: [],
      location: "Remote",
      title: "Senior Blockchain Engineer",
      logoUrl: "/projects/gempad.png",
      start: "Jul 2023",
      end: "Sep 2024",
      description:
        "Developed and optimized highly scalable and user-friendly web applications for 10k+ crypto token launches and presales on multiple blockchain networks, including Ethereum, BSC, Polygon, and 10+ others. Built and managed APIs and services with Node.js, Express, and MongoDB, ensuring 99.9% uptime and seamless data flow across the platform. Integrated blockchain technologies like Web3.js and ethers.js, enabling secure and efficient smart contract interactions for over $10M in transactions.",
    },
    {
      company: "StrikeX",
      href: "https://strikex.com",
      badges: [],
      location: "Remote",
      title: "Senior Full-Stack Developer",
      logoUrl: "/projects/strikex.png",
      start: "Mar 2022",
      end: "Jun 2023",
      description:
        "Delivered 15+ highly responsive user interfaces using React.js, Next.js, and modern JavaScript frameworks, increasing engagement by 35%. Created and refined multichain wallet interfaces for managing cryptocurrency assets, boosting transaction efficiency by 30% and supporting 10,000+ users. Conducted 50+ code reviews, authored technical documentation, and mentored junior developers, enhancing team productivity by 20%.",
    },
    {
      company: "S-PRO",
      href: "https://s-pro.io/",
      badges: [],
      location: "Ukraine",
      title: "Senior Frontend Developer",
      logoUrl: "/projects/s-pro.jpg",
      start: "Nov 2020",
      end: "Dec 2021",
      description:
        "Led the development of highly responsive and scalable front-end solutions for fintech and healthcare applications using React.js, TypeScript, and Redux. Implemented robust unit and integration testing using Jest and React Testing Library, ensuring high code quality and reliability. Mentored junior developers and conducted code reviews, fostering a culture of continuous improvement and knowledge sharing.",
    },
    {
      company: "Light IT",
      href: "https://light-it.net/",
      badges: [],
      location: "Ukraine",
      title: "Junior Frontend Engineer",
      logoUrl: "/projects/light-it.jpg",
      start: "May 2019",
      end: "Oct 2020",
      description:
        "Collaborated with the development team to build responsive and user-friendly interfaces using HTML, CSS, and JavaScript.Implemented RESTful API integrations to dynamically display data on the front end. Conducted performance optimization to improve page loading speeds and responsiveness.",
    },
  ],
  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s3, s4, sf1, s5",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "Taras Shevchenko National University of Kyiv",
      href: "https://uwaterloo.ca",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/waterloo.png",
      start: "2015",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
  ],
  testimonials: [
    {
      name: "Domen",
      role: "Co-Founder",
      company: "Gempad",
      avatar: "gempad.jpg",
      text: "I highly recommend Jinyi for React.js opportunities. At Gempad, he showed expertise in React.js and Next.js, delivering top-notch code. His eagerness to learn and tackle challenges made him invaluable. 👍",
    },
    {
      name: "Joe Jowett",
      role: "CEO & Co-founder",
      company: "StrikeX",
      avatar: "strikex.png",
      text: "He is very good with communication and experienced website developer, great experience to work with him.",
    },
    {
      name: "Ran Ma",
      role: "CTO & Co-Founder",
      company: "SuperBlocks",
      avatar: "superblocks.jpg",
      text: "I highly endorse Jinyi for any role. His talent and work ethic are exceptional. At SuperBlocks, his professionalism and attention to detail were outstanding.",
    },
  ],
} as const;
