import React from 'react';
import jyoti from '../../assets/jyoti.jpg';

const Home = () => {
  return (
    <div className="text-white flex flex-col-reverse lg:flex-row w-full items-center lg:items-start p-6 md:p-10 lg:p-20 gap-10">
      
      {/* Text Content */}
      <div className="w-full lg:w-1/2">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-snug tracking-tighter text-center lg:text-left">
          Hello, I’m Jyoti Fabiyani!
          <br />
          - a tech enthusiast and developer
        </h1>
        <p className="text-sm md:text-lg lg:text-2xl tracking-tight mt-6 text-center lg:text-left">
          I’m a final year Information Technology student with a strong interest in web development and problem-solving. 
          I'm passionate about learning new technologies and growing as a developer. I’m actively looking for opportunities to apply my skills and contribute to impactful projects.
        </p>
        <div className="flex justify-center lg:justify-start">
          <button className="mt-5 text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Contact me
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          className="w-[90%] max-w-[320px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] xl:max-w-[550px] h-auto rounded-lg object-cover shadow-md"
          src={jyoti}
          alt="Jyoti"
        />
      </div>
    </div>
  );
};

export default Home;
