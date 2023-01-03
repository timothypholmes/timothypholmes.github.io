import React from 'react';
import config from "../../config/"

function Projects() {
  const { projects } = config

  return (
    <div class="lg:ml-auto lg:mr-auto lg:w-1/2 sm:ml-10 sm:mr-10 sm:w-full pt-4">
        <p class="pt-4">
            <a class="text-4xl">
                Projects
            </a>
        </p>
    <div className="grid grid-cols-1">
      {projects.map((project, index) => (
          <div key={index} class="mb-8 mt-8 h-96">
              <div class={`w-1/3 ${index % 2 === 0 ? 'float-left' : 'float-right'}`}>
                <img class={`w-72 h-full object-cover shadow-2xl rounded-xl ${index % 2 === 0 ? 'float-left' : 'float-right'}`} src={ project.image } alt={ project.title } />
              </div>
              <div class={`w-2/3 ${index % 2 === 0 ? 'float-left' : 'float-right'}`}>
                <h3 class={`flex text-2xl font-bold text-gray-800 text-justify ${index % 2 === 0 ? 'float-right' : 'float-left'} ${index % 2 === 0 ? 'ml-10' : 'mr-10'}`}>{project.title}</h3> <br></br>
                <p class={`flex text-gray-600 mt-2 text-justify ${index % 2 === 0 ? 'float-right' : 'float-left'} ${index % 2 === 0 ? 'ml-10' : 'mr-10'}`}>{ project.description }</p> <br></br>
                <a href={project.link} class={`mt-4 py-2 px-4 rounded-md text-sm font-medium text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:bg-gray-900 ${index % 2 === 0 ? 'float-right' : 'float-left'}`}>View on GitHub</a>
              </div>
          </div>
      ))}
    </div>
    </div>
  );
}

export default Projects;