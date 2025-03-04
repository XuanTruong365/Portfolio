// --- 🎨 Site Styling ---

// Colors (recommendation: choose a color suitable for dark and light modes)
// Should be inputted as a hex value. Use https://g.co/kgs/XCcs7T for choosing colors with hex.
const colors = {
    buttonColor: "#4305ba",
    LinkHighlightColor: "#4305ba"
}

// Transitions
const transitions = {
    active: true, // activate for all sections
    onlyLanding: false, // activate only for initial load of landing page
    showOnce: true, // transition only once
    thresholdOption: 0.2 // indicates at what percentage of the sections visibility the transition should start
}

// Splash Screen
const splashScreen = true // recommended: for best behavior after refresh

// --- 👋 Greeting Section ---
const greeting = {
    intro: "Hello 👋, my name is",
    name: "Xuan Truong",
    message: "I am a web developer with 2 years of experience, specializing in PHP (Laravel) and Vue.js. With a strong problem-solving mindset and a passion for building efficient web applications, I am always eager to learn and take on new challenges. Currently, I am based in Hanoi, Vietnam. 🚀",
    basedLocation: "Ha Noi, Viet Nam",
    resumeLink: "https://drive.google.com/file/d/1VIYtfhZPH9lRUzzWqxJP4HMnLpcD5rm1/view?usp=sharing", // recommended: google drive file share link (change to "anyone on the internet can view")
    logo: {
        link: "images/logo.png", // use relative path from  parent directory -> ex: images/image.ext
        custom: true // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
    },
    portraitLink: 'images/if1.jpg'
}

const socialMediaLinks = {
    github: "https://github.com/XuanTruong365",
    linkedin: "https://www.linkedin.com/in/truong-xuan-17ba60265/",
    medium: "https://github.com/XuanTruong365",
    stackoverflow: "",
    x: "https://github.com/XuanTruong365"
}

// --- 😎 About Section ---
const about = {
    autobiography: [
        "Hi, I’m Xuan Truong, a web developer with 2 years of experience, specializing in PHP (Laravel) and Vue.js. I have a strong foundation in Front-end and Back-end development, with expertise in JavaScript (ES6+), TypeScript, Vue.js, and Laravel. Proficient in RESTful APIs, Docker, and Git, I am always eager to learn and optimize web applications for better performance. Currently, I am based in Hanoi, Vietnam, and open to new opportunities. 🚀"
    ], // Separated items are paragraphs
    techStack: [
        "HTML",
        "CSS",
        "PHP",
        "Laravel",
        "JavaScript",
        "Vue.js",
        "React.js",
        "MySQL"
    ],
    photo1Link: "images/if1.jpg",
    photo2Link: "images/if3.jpg"
}

// --- 🛡️ Experience Section ---
const experiences = [
    {
        position: "Student",
        company: {
            name: "HANOI COLLEGE OF INDUSTRIAL ECONOMICS ",
            link: ""
        },
        duration: "10/2020 - 05/2023",
        bulletPoints: [
            "Information Technology (Software Application)"
        ],
        hashtags: [
            "INFORMATION TECHNOLOGY"
        ]
    },
    {
        position: "Web Developer",
        company: {
            name: "KaiyouIT - International Technology Company",
            link: ""
        },
        duration: "02/2023 - 02/2025",
        bulletPoints: [
            "KaiyouIT centers on Tech projects (Web development, iOS, Android Dev, AR, VR, IoT...) in Japan market "
        ],
        hashtags: [
            "HTML",
            "CSS(SCSS)",
            "PHP(Laravel)",
            "Javascript(Vue.js)",
            "MySQL"
        ]
    }
]

// --- 💻 Work Section ---
const works = [
    {
        projectName: "Invoice System",
        yearCompleted: "2023",
        description: "The project involves building a robust, scalable invoice management system designed to streamline billing processes for businesses. The system includes features such as creating, sending, and tracking invoices, managing payments, and generating financial reports.",
        techStack: "Node.js (Nest), MySQL, Redis, Docker, AWS S3, Vue.js, TypeScript, Bootstrap, Sweetalert2, Vue-Route",
        links: [

        ],
        imageLink: "images/pj1.png",
        alignLeft: false
    },
    {
        projectName: "New Core System (NCS)",
        yearCompleted: "07/2023 -  03/2024",
        description: "Developed a core system for a mechanical parts manufacturing company to manage and automate essential processes such as production orders, machining, transportation coordination, and inventory control. The system also facilitates the generation of technical drawings, production directives, and shipping invoices.",
        techStack: "Vue.js, Bootstrap, Pinia, Vue-Route, Lodash, Axios, PHP (Laravel), Websocket, Mysql, Redis, Pusher, Docker, AWS S3, Microservice",
        links: [

        ],
        imageLink: "images/ncs.png",
        alignLeft: true
    },
    {
        projectName: "YANE",
        yearCompleted: "03/2024 - 02/2025",
        description: "YANE is a real estate platform where users can create personal and common templates based on technical specifications and basic parameters to design properties. These templates can then be shared with property owners for collaboration and customization.",
        techStack: "Vue.js, Bootstrap, Pinia, Vue-Route, Lodash, Axios, PHP (Laravel), Websocket, Mysql, Redis, Pusher, Docker, AWS S3, Microservice",
        links: [

        ],
        imageLink: "images/yane.png",
        alignLeft: false
    },
    {
        projectName: "Clone Tiktok App",
        yearCompleted: "2023",
        description: "Clone demo app",
        techStack: "HTML, CSS, Bootstrap, JS, React.js",
        links: [
            {
                label: "",
                type: "external",
                url: "https://tiktok-ui-nu.vercel.app/"
            }
        ],
        imageLink: "images/tiktok.png",
        alignLeft: true
    },
    {
        projectName: "Personal Portfolio App",
        yearCompleted: "2024",
        description: "Built a dynamic, live-editable personal portfolio website with an admin dashboard for real-time updates. Developed using Django (Python) for the backend, and HTML, CSS, and JavaScript for the frontend, following the MVC architecture, which enhanced my full-stack development skills.",
        techStack: "HTML, CSS, Bootstrap, JS, Vue.js",
        links: [
            {
                label: "",
                type: "external",
                url: "https://portfolio-ruddy-pi-44.vercel.app/"
            }
        ],
        imageLink: "images/profile.png",
        alignLeft: true
    },
]

const archiveLink = "https://github.com/XuanTruong365?tab=repositories"

// --- 📭 Contact Section ---
// 2 Options available - Choose 1
const contact = {
    externalLink: {
        shortTitle: "Get in Touch",
        note: [
            "Actively seeking full-time software development positions as a May 2025 graduate.",
        ], // paragraph breaks will be entered after each item,
        link: {
            email: "xuantruongcoder@gmail.com", // email takes precedance
            other: "https://drive.google.com/file/d/1VIYtfhZPH9lRUzzWqxJP4HMnLpcD5rm1/view?usp=sharing" //cv
        },
        responseTimeMessage: ""
    },
    formEmbedLink: "" // inclusion of this link will take precedance
}

export default {
    colors,
    transitions,
    splashScreen,
    greeting,
    socialMediaLinks,
    about,
    experiences,
    works,
    archiveLink,
    contact
}