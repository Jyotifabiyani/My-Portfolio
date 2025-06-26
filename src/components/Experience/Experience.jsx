import React from 'react';
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';

const Experience = () => {
  return (
    <div>
      <div id="Experience" className="p-6 sm:p-10 md:p-16 lg:p-24">
        <h1 className="text-2xl md:text-4xl text-white font-bold mb-8">Experience</h1>

        <div className="flex flex-col lg:flex-row justify-around gap-10">
        
          <div className="grid grid-cols-3 gap-6 lg:w-2/5">
            <span className='p-3 bg-zinc-950 flex items-center justify-center rounded-2xl'>
              <FaHtml5 color='#E34F26' size={50}/>
            </span>
            <span className='p-3 bg-zinc-950 flex items-center justify-center rounded-2xl'>
              <FaCss3 color='#1572b6' size={50}/>
            </span>
            <span className='p-3 bg-zinc-950 flex items-center justify-center rounded-2xl'>
              <FaJs color='#F7DF1E' size={50}/>
            </span>
            <span className='p-3 bg-zinc-950 flex items-center justify-center rounded-2xl'>
              <FaReact color='#61DAF8' size={50}/>
            </span>
            <span className='p-3 bg-zinc-950 flex items-center justify-center rounded-2xl'>
              <SiMongodb color='#47A248' size={50}/>
            </span>
            <span className='p-3 bg-zinc-950 flex items-center justify-center rounded-2xl'>
              <FaNodeJs color='#68A063' size={50}/>
            </span>
          </div>

         
          <div className="flex flex-col gap-6 bg-slate-800 bg-opacity-45 mt-6 lg:mt-0 rounded-lg p-6 text-white w-full lg:w-[50%] shadow-lg">
            
            <div>
              <h2 className="text-md sm:text-lg font-semibold leading-tight mb-1">
                Placement Coordinator – Information Technology Department (2025 – 2026)
              </h2>
              <p className="text-sm sm:text-base font-light leading-relaxed">
                VESIT, Mumbai <br />
                – Coordinating placement activities including company outreach, student preparation, and pre-placement talks. <br />
                – Acted as a liaison between students and the Training & Placement Cell.
              </p>
            </div>

            <div>
              <h2 className="text-md sm:text-lg font-semibold leading-tight mb-1">
                Web Development Intern – Intrainz (Jun 2023 – Aug 2023)
              </h2>
              <p className="text-sm sm:text-base font-light leading-relaxed">
                Remote Internship <br />
                – Completed a 2-month internship focusing on building responsive UIs using HTML, CSS, and JavaScript. <br />
                – Developed dynamic page components and gained hands-on experience with front-end design principles.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Experience;
