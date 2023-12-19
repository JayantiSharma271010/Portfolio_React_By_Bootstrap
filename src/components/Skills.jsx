import React from 'react'
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { skills } from '../data';

const Skills = () => {
  return (
    <section id='skills'>
      <div className="container px-5 py-10 mx-auto ">
        <div className='text-center'>
          <ChipIcon className='w-10 inline-block mb-4'/>
          <h1 className='text-3xl text-white mb-3 font-medium title-font sm:text-4xl'>Skills &amp; Technologies </h1>
          <p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos qui magni beatae impedit atque facere velit ratione perferendis deserunt sapiente? Laboriosam tenetur repellendus modi doloribus! Enim aliquam quas, modi qui quisquam dolor pariatur debitis, est unde nulla repudiandae sunt quod laboriosam quasi assumenda accusantium corrupti?</p>
        </div>

        <div className="skills-container flex flex-wrap   mt sm:mx-auto lg:w-4/5 -mt-5 sm:my-2 -mx-2">
{skills.map((skill)=>(
  <div key={skill} className='p-3 sm:w-1/2 w-full '>
    <div className='bg-gray-800 rounded flex p-4 h-full items-center  '>
      <BadgeCheckIcon className='w-6 h-6 text-green-400 mr-4 flex-shrink-0'/>
      <span className='text-white font-medium title-font'>{skill.skill}</span>
    </div>
  </div>
))}
        </div>
      </div>
    </section>
  )
}

export default Skills