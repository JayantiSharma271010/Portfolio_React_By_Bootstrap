import React from "react";
import { CodeIcon } from "@heroicons/react/solid";
import { projects } from "../data";

const Projects = () => {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            consectetur omnis dolores molestias deserunt perspiciatis, error
            dolore quaerat? Nesciunt dolorem, eos nulla voluptatibus rem
            nostrum, itaque debitis qui eaque delectus placeat voluptates sit
            atque.
          </p>
        </div>

        <div className="flex flex-wrap -m-4 lg:flex-nowrap lg:gap-4">
          {projects.map((project) => {
            return (
              <div>
                <a
                  href={project.link}
                  key={project.image}
                  className="sm:w-1/2 w-100  p-4"
                >
                  <div className="flex relative">
                    <img
                      src={project.image}
                      alt="gallery"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 ">
                      <h2 className="title-font text-lg font-medium text-white mb-3">
                        {project.subtitle}
                      </h2>
                      <h1 className="title-font text-lg font-medium to-white mb-3">
                        {project.title}
                      </h1>
                      <p className="leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
