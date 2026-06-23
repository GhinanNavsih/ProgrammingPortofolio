/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Fajrul Alam",
  title: "Hi all, I'm Fajrul",
  subTitle: emoji(
    "IT Graduate Trainee at Philip Morris International || ex-Tiket.com"
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/fajrulalamn",
  linkedin: "https://www.linkedin.com/in/fajrulalam/",
  gmail: "fajrulalam01@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  instagram: "https://www.instagram.com/fajrul_alam/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "A DEDICATED SOFTWARE QUALITY ASSURANCE ENGINEER AND DATA ENTHUSIAST",
  skills: [
    emoji(
      "⚡ Ensure defect-free product delivery by combining automated and manual quality assurance methodologies"
    ),
    emoji(
      "⚡ Design and implement robust machine learning, deep learning, and data science research models"
    ),
    emoji(
      "⚡ Architect and configure cloud infrastructure using AWS Cloud, Data Analytics, and Machine Learning services"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Dart",
      fontAwesomeClassname: "devicon-dart-plain"
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "devicon-flutter-plain"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "devicon-react-original"
    },
    {
      skillName: "Next.js",
      fontAwesomeClassname: "devicon-nextjs-plain"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "devicon-nodejs-plain"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "devicon-firebase-plain"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Institut Teknologi Sepuluh Nopember (ITS)",
      logo: require("./assets/images/itsLogo.png"),
      subHeader: "Master's degree, Information Technology",
      duration: "2022 - 2024",
      desc: "GPA: 3.93/4.00. Awarded the best graduate of the Master's degree in Information Technology.",
      descBullets: [
        "Fast-track master's degree scholarship program for high-achieving students.",
        "Published multiple research papers on machine learning and software engineering systems."
      ]
    },
    {
      schoolName: "Institut Teknologi Sepuluh Nopember (ITS)",
      logo: require("./assets/images/itsLogo.png"),
      subHeader: "Bachelor's degree, Information Technology",
      duration: "2019 - 2022",
      desc: "GPA: 3.75/4.00. Graduated with honors.",
      descBullets: [
        "Focused on software engineering, database design, and mobile application development.",
        "Active in student organizations (Himpunan Mahasiswa Sistem Informasi ITS)."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Graduate Trainee - Technology",
      company: "Philip Morris International",
      companylogo: require("./assets/images/Phillip Morris International Logo.png"),
      date: "April 2026 – Present",
      desc: "Part of the technology department's graduate rotation program, driving innovation and digital solutions within a global corporation.",
      descBullets: []
    },
    {
      role: "Software Quality Assurance Engineer",
      company: "tiket.com",
      companylogo: require("./assets/images/tiketLogo.png"),
      date: "August 2024 – April 2026",
      desc: "Ensuring defect-free product delivery by combining automated testing with a human touch. Constantly pushing for innovation in the field of Quality Assurance.",
      descBullets: [
        "Collaborated with cross-functional teams to deliver high-quality features.",
        "Awarded 'AI Innovator' and 'QA Rockstar' (employee of the quarter) twice during first year."
      ]
    },
    {
      role: "Software Quality Assurance Engineer",
      company: "tiket.com",
      companylogo: require("./assets/images/tiketLogo.png"),
      date: "November 2023 – May 2024",
      desc: "Contributed to the continuous improvement of QA processes and quality standards for critical product components.",
      descBullets: []
    },
    {
      role: "Technology Directorate Intern",
      company: "PT. XL Axiata Tbk",
      companylogo: require("./assets/images/xlLogo.png"),
      date: "January 2022 – June 2022",
      desc: "Assisted in technology operations and network infrastructure monitoring within the technology directorate.",
      descBullets: []
    },
    {
      role: "Research Assistant",
      company: "PT. Tatacipta Teknologi Indonesia",
      companylogo: require("./assets/images/tataciptaLogo.png"),
      date: "December 2020 – June 2021",
      desc: "Contributed to incremental advancements and betterment of government websites, applications, and online services by easing the transfer of knowledge through research.",
      descBullets: []
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AI Innovator & QA Rockstar",
      subtitle:
        "Awarded Employee of the Quarter twice during the first year at tiket.com for QA excellence and pushing innovation.",
      image: require("./assets/images/tiketLogo.png"),
      imageAlt: "Tiket.com Logo",
      footerLink: []
    },
    {
      title: "AWS Academy Graduate - Cloud Architecting",
      subtitle:
        "Issued by Amazon Web Services (AWS) in June 2021. Demonstrates expertise in designing cloud architecture solutions.",
      image: require("./assets/images/awsLogo.png"),
      imageAlt: "AWS Logo",
      footerLink: []
    },
    {
      title: "AWS Academy Graduate - Data Analytics",
      subtitle:
        "Issued by Amazon Web Services (AWS) in July 2021. Validates capabilities in data analytics platforms and pipelines.",
      image: require("./assets/images/awsLogo.png"),
      imageAlt: "AWS Logo",
      footerLink: []
    },
    {
      title: "AWS Academy Graduate - Machine Learning Foundations",
      subtitle:
        "Issued by Amazon Web Services (AWS) in July 2021. Covers machine learning pipelines and foundation model training.",
      image: require("./assets/images/awsLogo.png"),
      imageAlt: "AWS Logo",
      footerLink: []
    },
    {
      title: "Applied Data Science with Python - Level 2",
      subtitle:
        "Issued by IBM in September 2021. Certifies advanced data science modeling, analysis, and visualization in Python.",
      image: require("./assets/images/ibmLogo.png"),
      imageAlt: "IBM Logo",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "fajrulalam01@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const portfolioProjects = {
  display: true,
  projects: [
    {
      title: "Asrama Management System",
      description:
        "An integrated web platform for managing registrations, payments, attendance monitoring, and leave permissions for boarding school students.",
      techStack: ["Next.js", "Firebase", "Zustand", "Tailwind CSS"],
      link: "https://esantren-chosyiah.vercel.app/",
      logo: require("./assets/images/esantrenLogo.png")
    },
    {
      title: "Canteen375 Membership App",
      description:
        "A customer loyalty, self-ordering, and real-time leaderboard gamification platform designed for campus canteens.",
      techStack: ["Next.js", "Firebase", "TypeScript", "Tailwind CSS"],
      link: "https://canteen-375-registration.vercel.app/leaderboard",
      logo: require("./assets/images/canteen375Logo.png")
    },
    {
      title: "Sistem Administrasi Keuangan UNIPDU",
      description:
        "An enterprise internal admin console managing employee directories, multi-tiered salary matrices, automated grid-aligned OCR attendance sheet scanners, and PDF payslip deliveries.",
      techStack: ["Next.js", "Firebase", "TypeScript", "Python (OCR)"],
      link: "https://saku.unipdu.ac.id",
      logo: require("./assets/images/yapetiduLogo.png")
    },
    {
      title: "Koperasi UNIPDU SuperApp",
      description:
        "An enterprise cooperative system managing retail transactions, savings-loan accounts, multi-role financial audits, and barcode rewards.",
      techStack: ["React.js", "Firebase", "Tailwind CSS", "jspdf"],
      link: "https://koperasi-unipdu.web.app/",
      logo: require("./assets/images/koperasiLogo.png")
    },
    {
      title: "Wholesale Inventory Management System",
      description:
        "A B2B wholesale distribution portal managing product catalog, real-time inventory adjustments, dual-unit pricing, and POS checkout terminal.",
      techStack: ["React 19", "Firebase", "Vite", "Tailwind CSS"],
      link: "https://sentra-distribusi-rejoso-gemilang.vercel.app/",
      logo: require("./assets/images/distribusirejosoLogo.png")
    },
    {
      title: "Canteen375 POS App",
      description:
        "A multi-platform localized POS and ERP terminal supporting atomic inventory deductions, open bill accounts, and Sunmi thermal printing hardware.",
      techStack: ["Flutter", "Firebase", "SQLite", "Sunmi Printer"],
      link: "https://github.com/fajrulalam/point_of_sales_app_v3",
      logo: "devicon-flutter-plain colored"
    },
    {
      title: "Canteen375 Kitchen Display System",
      description:
        "A real-time native Android kitchen controller display aggregating pending food preparation counts, tracking preparation timers, and supporting swipe-to-serve actions.",
      techStack: ["Android Studio", "Java", "Firebase Firestore", "Gson"],
      link: "https://github.com/fajrulalam/orders-to-be-served",
      logo: "devicon-android-plain colored"
    }
  ]
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  portfolioProjects
};
