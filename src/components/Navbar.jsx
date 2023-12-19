import React from "react";

const Navbar = () => {
  return (
    <div>
      <header className="bg-gray-800 top-0 md:sticky z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="title-font font-medium text-white mb-4 md:mb-0">
            <a href="#about" className="ml-3 text-xl uppercase">
              {" "}
              Jayanti Sharma
            </a>
          </a>
          <nav className=" flex justify-center items-center text-base md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-1 md:border-gray-700">
            <a href="#projects" className="mr-4 hover:text-white">Past Work</a>
            <a href="#skills" className="mr-4 hover:text-white">Skills</a>
            <a href="#testimonials" className="mr-4 hover:text-white">Testimonials</a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
