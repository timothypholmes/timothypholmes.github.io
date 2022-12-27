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
            name: "Google Scholar",
            url: "https://scholar.google.com/citations?user=VtyR8wEAAAAJ&hl=en"
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
          image: 'project-1.jpg',
          description: 'This is a description of Project 1',
          link: 'https://github.com/user/project-1'
        },
        {
          title: 'Lagrangian Mechanics & Chaos Theory',
          image: 'project-2.jpg',
          description: 'With the idea of Lagrangian Mechanics and the power of numerical methods this python package sets out to solve numerous classical mechanics pendulum problems.',
          link: 'https://github.com/user/project-2'
        },
        {
          title: 'Particle in a Box',
          image: 'project-3.jpg',
          description: 'A model of a particle in an infinite square well. Program has been created in python and Matlab.',
          link: 'https://github.com/user/project-3'
        },
    ],

    style: {
        background: 'bg-[#F2F2F2]',
        navBackground: 'bg-[#F2F2F2]'
    }
    
}