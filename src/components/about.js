import React from 'react';

// assets
import me from "../assets/img/me.jpg"

function About() {
  return (
    <div class="h-full ml-auto mr-auto w-1/2 pt-4">
        <div class="w-1/3 h-full float-right">
            <div class="h-fit float-right">
                <img class="float-right rounded-xl w-72 h-full shadow-2xl" src={me}/>
            </div>
        </div>
        <div class="w-2/3 h-full float-left">
            <p class="pt-4">
                <a class="font-bold text-3xl">
                    Hi!
                </a>
            </p>
            <p class="pt-4">
                <a class="font-bold text-4xl">
                    I'm Timothy Holmes.
                </a>
            </p>
            <p class="justify-center pt-1"> 
                <a class="font-bold text-3xl underline decoration-indigo-500 decoration-4">
                    Data Scientist | Developer | Physics MS 
                </a>
            </p>
            <div class="pr-4">
                <p class="justify-center text-justify pt-4"> 
                    <a class="text-l">
                        As a data scientist and former software engineer, I have a diverse background in technical fields, with experience in the financial and utility sectors. My formal education in physics and computational mathematics has provided me with a strong foundation for my work in data science and software engineering.
                    </a>
                </p>
                <p class="justify-center text-justify pt-4"> 
                    <a class="text-l">
                        I am a driven and analytical professional, with a passion for using data to solve complex problems and drive business growth. I have a track record of success in both software engineering and data science, with a strong ability to bridge the gap between technical and non-technical stakeholders.
                    </a>
                </p>
                <p class="justify-center text-justify pt-4"> 
                    <a class="text-l">
                        Currently based in Chicago, Illinois, I am always looking for new opportunities to use my skills and knowledge to make a meaningful impact. Whether it's developing software solutions, analyzing data to uncover insights, or leading cross-functional teams, I am dedicated to delivering high-quality results and driving value for my clients, organizations, and open sourced projects.
                    </a>
                </p>
            </div>
        </div>
    </div>
  );
}

export default About;