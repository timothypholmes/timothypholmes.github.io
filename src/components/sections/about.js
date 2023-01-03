import React from 'react';
import { motion, useAnimation } from "framer-motion"

// assets
import me from "../../assets/img/me.jpg"
import config from "../../config/"

function About() {
  
  return (
    <>
        <div class="h-full lg:ml-auto lg:mr-auto lg:w-1/2 sm:ml-10 sm:mr-10 sm:w-full pt-4 w-8/12">
            <div class=" h-full float-right">
                <div class="h-fit float-right">
                    <img class="hidden lg:flex float-right rounded-xl w-72 h-full shadow-2xl" src={me}/>
                </div>
            </div>
            <div class="h-full float-left">
                <p class="pt-4">
                    <a class="font-bold text-3xl">
                        { config.greeting }
                    </a>
                </p>
                <p class="pt-4">
                    <a class="font-bold text-4xl">
                        I'm { config.siteTitle }.
                    </a>
                </p>
                <p class="justify-center pt-1"> 
                    <a class={`font-bold text-3xl underline ${config.style.underline} decoration-4`}>
                        { config.about.title }
                    </a>
                </p>
                <div class="pr-4">
                    {config.about.bio.map((bio, index) => (
                        <p class="justify-center text-justify pt-4"> 
                            <a class="justify-center text-justify pt-4 text-l ">
                                {bio.text}
                            </a>
                        </p>
                    ))}
                </div>
            </div>
        </div>
    </>
  );
}

export default About;