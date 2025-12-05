const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Articles", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: false,
    },
];

const blogPosts = [];

const techStack = [
    {
        category: "Frontend",
        items: ["React.js", "Next.js", "TypeScript"],
    },
    {
        category: "Mobile",
        items: ["React Native", "Expo"],
    },
    {
        category: "Styling",
        items: ["Tailwind CSS", "Sass", "CSS"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express", "NestJS",],
    },
    {
        category: "Database",
        items: ["MongoDB", "PostgreSQL"],
    },
    {
        category: "Dev Tools",
        items: ["Git", "GitHub", "Docker"],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/PaagiotisKoulisoglou",
    },
    {
        id: 2,
        text: "Platform",
        icon: "/icons/atom.svg",
        bg: "#4bcb63",
        link: "https://jsmastery.com/",
    },
    {
        id: 3,
        text: "Instagram",
        icon: "/images/instagram.png",
        bg: "#ff866b",
        link: "https://www.instagram.com/koulisoglou_/",
    },
    {
        id: 4,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://www.linkedin.com/in/panagiotis-koulisoglou-614871252/",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];



export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1
        {
            id: 5,
            name: "Stock Market App",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-5", // icon position inside Finder
            windowPosition: "top-[5vh] left-5", // optional: Finder window position
            children: [
                {
                    id: 1,
                    name: "Signalist Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "Signalist is a modern stock market companion that makes exploring markets feel effortless and engaging.",
                        "Instead of a basic ticker list, it delivers an immersive experience with real‑time charts, a powerful command‑palette search, and clean, focused screens for each symbol.",
                        "Think of it like stepping onto a pro trading floor—complete with heat maps, news summaries, and rich visual context—right from your phone or laptop.",
                        "Built with Next.js and Tailwind, it’s fast, responsive, and polished; powered by TradingView for visuals, Finnhub for market data, Inngest for background jobs, and Nodemailer for timely, AI‑assisted email updates.",
                    ],
                },
                {
                    id: 2,
                    name: "Signalist.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://signal-stock-market-app.vercel.app/sign-in",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "signalist.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/signalist.JPG",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://google.com",
                    position: "top-60 right-20",
                },
            ],
        },

// ▶ Project 2
        {
            id: 6,
            name: "Mac 3D Product Page",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 right-80",
            windowPosition: "top-[20vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Mac 3D Product Page.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "A modern, animated product experience inspired by Apple's Mac pages, built with React and Vite.",
                        "Features a realtime 3D Macbook viewer using Three.js via @react-three/fiber and smooth GSAP ScrollTrigger animations.",
                        "Responsive, fast, and polished UI styled with Tailwind CSS v4 and lightweight global state via Zustand.",
                        "Perfect for showcasing hardware in an immersive, scroll-driven story that works great across devices.",
                    ],
                },
                {
                    id: 2,
                    name: "mac-3d-product-page.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://mac-book-landing-psi.vercel.app/",
                    position: "top-20 left-20",
                },
                {
                    id: 4,
                    name: "mac-3d.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/mac-3d.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://www.figma.com/",
                    position: "top-60 left-5",
                },
            ],
        },

        // ▶ Project 3
        {
            id: 7,
            name: "Movie Finder App",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-80",
            windowPosition: "top-[33vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Movie Finder App Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "Movie Finder App is a sleek mobile experience for discovering and searching movies instantly.",
                        "It pulls real-time data from TMDB and uses a custom popularity algorithm powered by user engagement.",
                        "Built with Expo (React Native), TypeScript, and NativeWind (Tailwind), it’s fast, responsive, and works on iOS, Android, and web.",
                        "Appwrite handles backend needs like analytics and data storage, making it scalable and production-ready.",
                    ],
                },
                {
                    id: 2,
                    name: "movie-app",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/PaagiotisKoulisoglou?tab=repositories",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "movie-finder-app.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/movie.JPG",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://google.com",
                    position: "top-60 right-20",
                },
            ],
        },
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [

        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/image.png",
            kind: "file",
            fileType: "txt",
            position: "top-10 left-5",
            subtitle: "Meet the Developer Behind the Code",
            image: "/images/egw.jpg",
            description: [
                "Hey! I’m Panagiotis 👋, a full-stack developer who loves building smooth, reliable, and modern web applications from front to back.",
                "I work with JavaScript, React, Next.js, Node.js, and cloud-ready backend tools to create fast UIs and scalable systems that actually perform.",
                "I focus on clean architecture, intuitive UX, and writing code that’s clear, efficient, and easy to maintain—no over-engineering, just good engineering.",
                "Outside of dev work, you’ll find me tweaking designs late at night, exploring new tech, or buying yet another tool I’m convinced will level up my workflow.",
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            // you can add `href` if you want to open a hosted resume
            // href: "/your/resume/path.pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/vide.JPG",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-40 left-80",
            imageUrl: "/images/tutorials.png",
        },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };