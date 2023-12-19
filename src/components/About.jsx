import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col  items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:text-left mb-16 md:mb-0 items-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Jayanti <br className="hidden lg:inline-block" />I love to
            build amazing websites
          </h1>
          <p className="mb-8 leading-relaxed">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quod molestias eaque repellat asperiores, exercitationem perferendis alias dicta, beatae nisi suscipit recusandae. Facere ipsa quidem quia recusandae? Temporibus qui aliquid modi facere, molestias voluptas.</p>
          <div className="flex justify-center mb-3">
            <a href="#contact" className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 hover:text-white rounded text-lg">
              Work with me
            </a>
            <a href="#projects" className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See my last Work Here it is
            </a>
          </div>
          <div className="object-cover object-center rounded">
            <img src="/img/programme.avif" className="object-cover object-center rounded" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
