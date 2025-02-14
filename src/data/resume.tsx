import { Icons } from "@/components/icons";
import { FileText, HomeIcon, NotebookIcon } from "lucide-react";
import { SiTelegram, SiGithub, SiLinkedin, SiDiscord } from "@icons-pack/react-simple-icons";

const GITHUB_URL = "https://github.com/byteassemble";
const LINKEDIN_URL = "https://www.linkedin.com/in/sebastianwagiel";
const TELEGRAM_URL = "https://t.me/byteassembler";
const DISCORD_URL = "https://discord.gg/cA98uDvC";
const EMAIL_URL = "swagiel.work@gmail.com";
const RESUME_URL = "https://bit.ly/byteassembler-resume";
const PORTFOLIO_URL = "https://sebastianwagiel.vercel.app";

export const DATA = {
  name: "Sebastian Wagiel",
  initials: "SW",
  url: PORTFOLIO_URL,
  location: "Krzeszów, Lesser Poland, Poland",
  locationLink: "https://www.google.com/maps/place/sangabriel",
  description:
    "I am passionate about developing innovative solutions on decentralized networks, such as blockchain, and have strong expertise in creating engaging and dynamic front-end experiences for websites.",
  // "I love building things on decentralized networks, such as blockchain. Also have strong expertise in creating engaging and dynamic front-end experiences for websites.",
  summary:
    "At the end of 2024, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/avatar/me_full.png",
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
    email: EMAIL_URL,
    phone: "+48519502766",
    social: {
      GitHub: {
        name: "GitHub",
        url: GITHUB_URL,
        icon: Icons.github,
        navbar: true,
      },
      Telegram: {
        name: "Telegram",
        url: TELEGRAM_URL,
        icon: SiTelegram,
        navbar: true,
      },
      Discord: {
        name: "Discord",
        url: DISCORD_URL,
        icon: SiDiscord,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: LINKEDIN_URL,
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: EMAIL_URL,
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  footerLinks: [
    { href: RESUME_URL, label: "Resume", icon: FileText },
    { href: TELEGRAM_URL, label: "Telegram", icon: SiTelegram },
    { href: LINKEDIN_URL, label: "LinkedIn", icon: SiLinkedin },
    { href: GITHUB_URL, label: "GitHub", icon: SiGithub },
    { href: DISCORD_URL, label: "Discord", icon: SiDiscord },
  ],

  links: {
    resume: RESUME_URL,
    telegram: TELEGRAM_URL,
    linkedin: LINKEDIN_URL,
    github: GITHUB_URL,
    discord: DISCORD_URL,
  },

  work: [
    {
      company: "Gempad",
      href: "https://gempad.app",
      badges: [],
      location: "Remote",
      title: "Full Stack Lead, Blockchain",
      logoUrl: "/experience/gempad.png",
      start: "May 2022",
      end: "Dec 2024",
      description: [
        "Led Gempad's protocol development, boosting system performance and enhancing user experience by 25%.",
        "Architected and developed scalable and effcient solutions using Solidity for smart contracts and React.js for frontend applications.",
        "Engineered smart contracts for Gempad's vaults and presales, increasing effciency and securing $1.5M+ in user funds.",
        "Implemented Subgraph, cutting query times by 50% and providing real-time insights for Gempad.",
        "Maintained backend systems with Node.js, TypeScript, and GraphQL, ensuring 97% uptime and serving 10k users daily.",
        "Fostered collaboration, driving a 20% increase in liquidity and user adoption across decentralized exchanges.",
      ],
    },
    {
      company: "StrikeX",
      href: "https://strikex.com",
      badges: [],
      location: "Remote",
      title: "Senior Full-Stack Developer",
      logoUrl: "/experience/strikex.jpg",
      start: "Jun 2021",
      end: "Mar 2022",
      description: [
        "Delivered 15+ highly responsive user interfaces using React.js, Next.js, and modern JavaScript frameworks, increasing engagement by 35%.",
        "Created and refined multichain wallet interfaces for managing cryptocurrency assets, boosting transaction efficiency by 30% and supporting 10,000+ users.",
        "Conducted 50+ code reviews, authored technical documentation, and mentored junior developers, enhancing team productivity by 20%.",
      ],
    },
  ],
  education: [
    {
      school: "Silesian University of Technology",
      href: "https://www.sut.edu.pl/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/education/sut.jpg",
      start: "Oct 2019",
      end: "Feb 2023",
    },
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s3, s4, sf1, s5",
      logoUrl: "/education/buildspace.jpg",
      start: "Apr 2021",
      end: "Jan 2022",
    },
    {
      school: "Coursera",
      href: "https://coursera.org",
      degree: "Certified Blockchain Expert (CBE)",
      logoUrl: "/education/coursera.png",
      start: "Mar 2022",
      end: "Jul 2022",
    },
    {
      school: "ICB",
      href: "https://coursera.org",
      degree: "Rust + Solana Developer",
      logoUrl: "/education/icb.svg",
      start: "Aug 2022",
      end: "Nov 2022",
    },
    {
      school: "Consensys Academy",
      href: "https://consensys.org",
      degree: "Ethereum Developer Certification",
      logoUrl: "/education/consensys_academy.jpeg",
      start: "Feb 2023",
      end: "May 2023",
    },
  ],
  projects: [
    {
      title: "TG Lux Stay",
      href: "https://tgluxstay.com",
      active: true,
      shortDescription: "Villa Booking Platform",
      description:
        "TG Lux Stay is a platform that allows users to book luxury stays in the most popular destinations around the world.",
      technologies: [
        "Next.js",
        "Typescript",
        "React.js",
        "Redux",
        "MUI",
        "TailwindCSS",
        "React Query",
        "Node.js",
        "Express",
        "MongoDB",
        "AWS",
        "Git",
      ],
      links: [
        {
          type: "Website",
          href: "https://tgluxstay.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/tgluxstay.png",
      video: "/projects/tgluxstay.webm",
      className: "col-span-3 lg:col-span-2 h-[400px]",
    },
    {
      title: "Gamma",
      href: "https://gamma.xyz",
      active: true,
      shortDescription: "Liquidity management platform",
      description:
        "The Gamma platform is a decentralized finance (DeFi) protocol designed to provide efficient and secure trading and management of digital assets on the blockchain.",
      technologies: [
        "Solidity",
        "Ethers.js",
        "Web3Auth",
        "Hardhat",
        "React.js",
        "Redux",
        "MUI",
        "React Query",
      ],
      links: [
        {
          type: "Website",
          href: "https://gamma.xyz",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/gamma.png",
      video: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
      className: "col-span-3 lg:col-span-1",
    },

    {
      title: "SunContract",
      href: "https://suncontract.org/",
      active: true,
      shortDescription: "NFT-Powered Energy Trading System",
      description:
        "A platform that leverages blockchain technology to enable peer-to-peer energy trading, promoting renewable energy usage and efficiency.",
      technologies: ["Solidity", "Polygon", "React.js", "Typescript", "Web3.js"],
      links: [
        {
          type: "Website",
          href: "https://suncontract.org/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://suncontract.org/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/suncontract.png",
      video: "https://cdn.magicui.design/bento-grid.mp4",
      className: "col-span-3 lg:col-span-1",
    },
    {
      title: "Gempad",
      href: "https://gempad.app",
      active: true,
      shortDescription: "Token Presale Launchpad",
      description:
        "Gempad is one of the most popular presale platforms on the Ethereum and Solana blockchain with many utilities.",
      technologies: [
        "Next.js",
        "Typescript",
        "React.js",
        "Redux",
        "MUI",
        "TailwindCSS",
        "Ethers.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Solidity",
        "Hardhat",
        "The Graph",
        "Web3.js",
        "Web3Auth",
      ],
      links: [
        {
          type: "Website",
          href: "https://gempad.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/gempad.png",
      video: "/projects/gempad.webm",
      className: "col-span-3 lg:col-span-2",
    },
    {
      title: "Sede Blockchain - Assets Tokenization",
      href: "https://sedeblockchain.com/",
      active: true,
      description:
        "A gateway to blockchain solutions, offering services in crypto custody, asset tokenization, and blockchain networks, with a focus on simplicity and sophistication in digital currency.",
      technologies: [
        "Next.js",
        "Typescript",
        "React.js",
        "Solidity",
        "The Graph",
        "Ethers.js",
        "Web3.js",
        "IPFS",
      ],
      links: [
        {
          type: "Website",
          href: "https://sedeblockchain.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://sedeblockchain.com/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/sedeblockchain.png",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Benqi - Avalanche DeFi platform",
      href: "https://app.benqi.fi/",
      active: true,
      description:
        "Benqi is a decentralized finance (DeFi) platform built on the Avalanche blockchain, offering users the ability to lend, borrow, and earn interest on their crypto assets with high efficiency and low fees.",
      technologies: [
        "React.js",
        "Ethers.js",
        "Web3.js",
        "Solidity",
        "Hardhat",
        "Avalanche",
        "Ethereum",
        "Node.js",
        "TailwindCSS",
        "Express",
        "MongoDB",
      ],
      links: [
        {
          type: "Website",
          href: "https://app.benqi.fi/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/benqi.jpg",
      video: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "Mirror Protocol - DEX platform",
      href: "https://dashboard.themirrorprotocol.com/",
      active: true,
      description:
        "Mirror Protocol enables users to create and trade synthetic assets on the Terra blockchain, offering exposure to real-world assets like stocks and commodities in a decentralized manner.",
      technologies: [
        "Terra SDK",
        "Cosmos",
        "Rust",
        "React.js",
        "Next.js",
        "TypeScript",
        "Redux Toolkit",
        "ethers.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://dashboard.themirrorprotocol.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/mirrorprotocol.png",
      video: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
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
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
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
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
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
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
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
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
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
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
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
