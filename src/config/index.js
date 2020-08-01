module.exports = {

    author: "@timothyholmes",
    siteTitle: "Timothy Holmes",
    siteShortTitle: "TH", // Used as logo text in header, footer, and splash screen
    siteDescription: "My Personal Page.",
    siteUrl: "https://timothypholmes.github.io",
    siteLanguage: "en_US",
    siteIcon: "src/content/favicon.png", // Relative to gatsby-config file

    splashScreen: false, // Set this to true if you want to use the splash screen

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
  
    navLinks: {
        menu: [
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
    }
}