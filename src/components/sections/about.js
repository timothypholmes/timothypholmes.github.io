import React from 'react';

// assets
import me from "../../assets/img/me.jpg"
import config from "../../config/"

function About() {
    const { navLinks } = config

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
                    { config.greeting }
                </a>
            </p>
            <p class="pt-4">
                <a class="font-bold text-4xl">
                    I'm { config.siteTitle }.
                </a>
            </p>
            <p class="justify-center pt-1"> 
                <a class="font-bold text-3xl underline decoration-indigo-500 decoration-4">
                    { config.about.title }
                </a>
            </p>
            <div class="pr-4">
                {config.about.bio.map((bio, index) => (
                    <p class="justify-center text-justify pt-4"> 
                        <a class="justify-center text-justify pt-4 text-l">
                            {bio.text}
                        </a>
                    </p>
                ))}
            </div>
        </div>
    </div>
  );
}

export default About;