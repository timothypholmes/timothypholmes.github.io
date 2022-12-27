import React from 'react';
import config from "../../config/"

function Projects() {
  const { projects } = config

  return (
    <div class="ml-auto mr-auto w-1/2 pt-4">
        <p class="pt-4">
            <a class="text-4xl">
                Projects
            </a>
        </p>
    {projects.map((project, index) => (
        <div key={index} class="mb-8 mt-8 w-full h-96">
            <img class={`w-96 h-96 object-cover shadow-2xl ${index % 2 === 0 ? 'float-right' : 'float-left'}`} src={project.image} alt={project.title} />
            <h3 class={`text-2xl font-bold text-gray-800 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>{project.title}</h3>
            <p class={`text-gray-600 mt-2 text-justify ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>{project.description}</p>
            <a href={project.link} class={`inline-block mt-4 py-2 px-4 rounded-md text-sm font-medium text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:bg-gray-900 ${index % 2 === 0 ? 'float-left' : 'float-right'}`}>View on GitHub</a>
        </div>
    ))}
    </div>
  );
}

export default Projects;