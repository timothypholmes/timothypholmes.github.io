/*eslint-disable*/
import React from "react";
import ReactDom from "react-dom";
import styles from "../assets/styles/index.css"
import config from "../config/"

// components
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Projects from "../components/sections/projects"
import About from "../components/sections/about";
import Contact from "../components/sections/contact";


export default function Index() {
  return (
    <>
        <body class={`${config.style.background} relative w-full h-full`}>
            <Navbar />
            <div class="flex">
                <About />
            </div>
            <div href="projects" class={`${config.style.background} flex h-auto`}>
                <Projects />
            </div>
            <div id="contact" class={`${config.style.background} h-auto`}>
                <Contact />
            </div>
            <Footer />
        </body>
    </>
  );
}
