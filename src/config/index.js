module.exports = {

    author: "@timothyholmes",
    greeting: "Hi!",
    siteTitle: "Timothy Holmes",
    siteShortTitle: "TH", // Used as logo text in header, footer, and splash screen
    siteDescription: "My Personal Page.",
    siteUrl: "https://timothypholmes.github.io",
    siteLanguage: "en_US",
    siteIcon: "src/content/favicon.png", // Relative to gatsby-config file

    splashScreen: false, // Set this to true if you want to use the splash screen

    about: {
        title: "Data Scientist | Developer | Physics MS",
        bio: [
            {
                text: "As a data scientist and former software engineer, I have a diverse background in technical fields, with experience in the financial and utility sectors. My formal education in physics and computational mathematics has provided me with a strong foundation for my work in data science and software engineering."
            },
            {
                text: "I am a driven and analytical professional, with a passion for using data to solve complex problems and drive business growth. I have a track record of success in both software engineering and data science, with a strong ability to bridge the gap between technical and non-technical stakeholders."
            },
            {
                text: "Currently based in Chicago, Illinois, I am always looking for new opportunities to use my skills and knowledge to make a meaningful impact. Whether it's developing software solutions, analyzing data to uncover insights, or leading cross-functional teams, I am dedicated to delivering high-quality results and driving value for my clients, organizations, and open sourced projects."
            }
        ]
    },

    socialMedia: [
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/timothy-holmes-50080286/"
        },
        {
            name: "Github",
            url: "https://github.com/timothypholmes"
        },
        {
            name: "Medium",
            url: "https://medium.com/@tpholmes7"
        },
    ],
  
    navLinks: [
        {
            name: "Projects",
            url: "/#projects",
        },
        {
            name: "Publications",
            url: "/#publications",
        },
        {
            name: "Contact",
            url: "/#contact",
        },
    ],

    projects: [
        {
          title: 'Startup Page',
          image: 'https://i.imgur.com/SuN8gKt.png',
          description: 'A minimal home page for a browser called Modular Grid Page. Modular Grid Page is designed to be a fast and efficient homepage that is easy to use. It has a clean and intuitive interface, and it comes with a number of useful features that make browsing the web a breeze.',
          link: 'https://github.com/timothypholmes/startup-page'
        },
        {
          title: 'Lagrangian Mechanics & Chaos Theory',
          image: 'https://i.imgur.com/5aLtFp6.png',
          description: 'The project is a simulation of the motion of a double pendulum, which is a system consisting of two interconnected pendulums. The motion of the pendulums is governed by the laws of classical mechanics, specifically by the principle of least action known as the Lagrangian formulation.',
          link: 'https://github.com/timothypholmes/lagrangian-mechanics'
        },
        {
          title: 'Particle in a Box',
          image: 'https://i.imgur.com/069gaTc.png',
          description: 'The project is a simulation of the behavior of a single quantum particle confined to a one-dimensional box, also known as a quantum well. The particle is described by the Schrödinger equation, which describes how the probability density of the particle changes over time.',
          link: 'https://github.com/timothypholmes/Infinite-square-well-Schrodinger-equation'
        },
    ],

    style: {
        background: 'bg-[#F2F2F2]',
        navBackground: 'bg-[#F2F2F2]',
        underline: 'decoration-blue-500'
    }
    
}