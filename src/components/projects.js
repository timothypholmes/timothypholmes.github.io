import React from 'react';

function Projects() {
  const projects = [
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
  ];

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