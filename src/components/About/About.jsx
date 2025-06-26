import React from 'react';
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div id="About" className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
      <div>
        <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
        <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
          <ul>
            <div className='flex gap-3 py-4'>
              <IoArrowForward size={30} className='mt-1' />
              <div className='w-96'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontend Developer</h1>
                <p className='text-sm md:text-lg leading-tight'>
                 Proficient in building responsive and interactive user interfaces. I like creating pages that look good and work well on all devices.
                </p>
              </div>
            </div>
            <div className='flex gap-3 py-4'>
              <IoArrowForward size={30} className='mt-1' />
              <div className='w-96'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Backend Developer</h1>
                <p className='text-sm md:text-lg leading-tight'>
                Currently exploring backend development  to build server-side applications and APIs integration.
                </p>
              </div>
            </div>
            <div className='flex gap-3 py-4'>
              <IoArrowForward size={30} className='mt-1' />
              <div className='w-96'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Database Developer</h1>
                <p className='text-sm md:text-lg leading-tight'>
                  Familiar with working with databases for storing and retrieving data in web apps.
                </p>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
