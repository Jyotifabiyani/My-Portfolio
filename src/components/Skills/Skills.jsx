import React from 'react';

const Skills = () => {
  return (
    <div id="Skills" className="px-6 py-12 sm:px-10 md:px-16 lg:px-24 text-white bg-[#0f172a]">
      <h1 className="text-3xl md:text-4xl font-bold mb-12   pb-4">
        Skills
      </h1>

      <div className="flex flex-col lg:flex-row justify-between gap-10">

        
        <div className="lg:w-1/2 bg-zinc-900 bg-opacity-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300">
          <h2 className="text-xl md:text-2xl font-semibold mb-5 text-indigo-400 border-b border-gray-600 pb-2">
            Technical Skills
          </h2>
          <ul className="list-disc list-inside space-y-4 text-base leading-relaxed">
            <li>
              <span className="font-semibold text-white">Languages:</span> C++, HTML, CSS, JavaScript
            </li>
            <li>
              <span className="font-semibold text-white">Frameworks/Libraries:</span> React, Node.js, Express, Bootstrap, Tailwind CSS
            </li>
            <li>
              <span className="font-semibold text-white">Databases:</span> MongoDB, MySQL, Firebase
            </li>
            <li>
              <span className="font-semibold text-white">Tools & Platforms:</span> Git, GitHub, VS Code, Android Studio, Postman, XAMPP, REST APIs
            </li>
          </ul>
        </div>

        
        <div className="lg:w-1/2 bg-zinc-900 bg-opacity-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300">
          <h2 className="text-xl md:text-2xl font-semibold mb-5 text-indigo-400 border-b border-gray-600 pb-2">
            Soft Skills
          </h2>
          <ul className="list-disc list-inside space-y-4 text-base leading-relaxed">
            <li>Strong communication and presentation abilities</li>
            <li>Quick learner and highly adaptable</li>
            <li>Team collaboration and leadership experience</li>
            <li>Effective time management and organization</li>
            <li>Logical thinking and problem-solving approach</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Skills;
