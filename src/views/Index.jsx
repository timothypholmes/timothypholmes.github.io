/*eslint-disable*/
import React from "react";
import ReactDom from "react-dom";
import styles from "../assets/styles/index.css"

// components
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Projects from "../components/projects"
import About from "../components/about";


export default function Index() {
  return (
    <>
        <body class="relative bg-[#F2F2F2] w-full h-full ">
            <Navbar />
            <div class="flex h-full">
                <About />
            </div>
            <div class="flex bg-[#F2F2F2] h-auto">
                <Projects />
            </div>
            <div class="bg-[#F2F2F2] h-screen">
                <div class="ml-auto mr-auto w-1/2 pt-4">
                    <p class="pt-4">
                        <a class="text-4xl">
                            Contacts
                        </a>
                    </p>
                </div>
            </div>
            <Footer />
        </body>
    </>
  );
}
