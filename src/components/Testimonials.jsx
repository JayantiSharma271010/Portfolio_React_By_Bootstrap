import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="mx-auto text-center container px-5 py-10 ">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="text-3xl text-white sm:text-4xl font-medium title-font mb-12">
          Client Testimonials
        </h1>
        <div>
          {testimonials.map((testimonial) => (
     <div className="md:w-1/2 p-4 w-full mx-auto">
              <div className="bg-gray-800 h-full p-8 bg-opacity-40">
                <TerminalIcon className="w-8 block text-gray-500 mb-4" />
                <p className="leading-relaxed mb-6">{testimonial.quote}</p>
                <div className="inline-flex items-center">
                  <img src={testimonial.image} alt="" className="w-12 rounded-full flex-shrink-0 object-cover object-center"/>
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">{testimonial.name}</span>
                    <span className="uppercase to-gray-500 text-sm">{testimonial.company}</span>
                  </span>
                </div>
              </div>
     </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
