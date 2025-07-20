import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Motivated and detail-oriented React Developer with hands-on experience in
building dynamic and responsive MERN stack web applications. Strong command
of modern frontend tools like React.js and Redux Toolkit, and foundational backend
knowledge using Node.js, Express.js, and MongoDB. Successfully developed realworld projects following industry best practices.
Currently seeking an internship or junior-level opportunity in MERN Stack
development to contribute to innovative projects and further enhance technical
skills.`;

export const ABOUT_TEXT = `I am a passionate MERN Stack developer currently seeking internship opportunities to apply and grow my skills in real-world projects. I have hands-on experience with MongoDB, Express.js, React.js, and Node.js. I love solving JavaScript problems and continuously improving through building projects and learning new technologies.
I have built several full-stack projects using REST APIs, JWT authentication, and modern React features like hooks and context.
Currently learning advanced backend integration and deployment strategies.

Clear intent: looking for internship 

Tools mentioned: MERN stack 

Practical knowledge: projects, REST APIs, JWT 

Ongoing learning: backend & deployment `;

export const EDUCATION = [
  {
    year: " 2021 - 2023",
    role: "Master of Computer Science (MCS)",
    company: "Superior University, Lahore.",
    description: `CGPA 2.75`,
    
  },
  {
    year: "2018 - 2020",
    role: "ADP(CS)  in Computer Science ",
    company: "Superior College, Lahore.",
    description: `CGPA 3.00`,
    
  },
  {
    year: "2016 - 2018 ",
    role: "ICS in Computer Science",
    company: "Wahdat Women College",
    description: `70%`,
    
  }

];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    DemoVideoLink:"https://drive.google.com/file/d/1XTsPPbKmAhnC5ImMAxrtgZAL9Rfp5Buy/view",
    link: "https://github.com/taniasalmatwbm/Mern-Ecommerce",
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication User Authentication (Login/Register with JWT), Role-based Access (Admin/User),Product Management (Listing, Search, Filters), Payment Integration (Stripe), Admin Panel (Product & Order Management).",
    technologies: ["React vite", "Ajax", "Node.js","Express.js", "MongoDB"],
  },
  {
    title: "Portfolio Website",
    image: project2,
    link:"",
    description:
      "An application for managing complete portfolio, with the knowledge of complete working detail.",
    technologies: ["React vite", "Ajax", "TailWind CSS", "Framer Motion"],
  },
  {
    title: "Blogging Platform",
    image: project3,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["React vite", "Backend handle with Appwrite"],
  }
];

export const CONTACT = {
  address: "Thokar Niaz Beig Multan Road, near Cannal View Society",
  phoneNo: "0349-4482839",
  email: "taniasalamat2@gmail.com",
};
