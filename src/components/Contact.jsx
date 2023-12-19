import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Vikas+Nagar,+Delhi,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          ></iframe>
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md px-16">
            <div className="lg:w-1/2 ">
              <h2 className="uppercase title-font font-semibold text-white tracking-widest text-xs">
                Address
              </h2>
              <p className="mt-1">
                Vikas nagar <br /> New delhi-110059
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="text-white title-font uppercase font-semibold tracking-widest text-xs">
                EMail
              </h2>
              <a href="" className="text-indigo-400 leading-relaxed">
                jayantiSharma747@gmail.com
              </a>
              <h2 className="text-white text-xs font-semibold title-font uppercase mt-2 tracking-widest">
                Phone
              </h2>
              <p className="leading-relaxed">123-23443-34</p>
            </div>
          </div>
        </div>

        <form
          action=""
          netlify
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire me
          </h2>
          <p className="leading-relaxed mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            porro ut commodi.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 border border-gray-700 focus:border-indigo-900 focus:ring-2 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm to-gray-400">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full py-1 px-5 bg-gray-800 outline-none text-white leading-8 border border-gray-700 focus:border-indigo-900 focus:ring-2 text-base transition-colors ease-in-out duration-200"
            />
          </div>
          <div >
            <label htmlFor="message">Message</label>
            <textarea type="text " id="message" name="message" className="w-full py-2 px-5 bg-gray-800 text-white leading-8 outline-none border border-gray-700 focus:border-indigo-500 focus:ring-indigo-900 rounded h-32 resize-none"/> 
          </div>
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 w-3/12 mx-auto mt-3 rounded text-lg" type='submit'>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
