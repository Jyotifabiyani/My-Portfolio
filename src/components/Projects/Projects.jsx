import React from 'react';

const Projects = () => {
  return (
    <div id="Projects" className="p-6 md:p-10">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-8">Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
       
        <div className="flex flex-col justify-between bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl p-4 md:p-6 w-full max-w-md mx-auto">
          <div>
            <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
              Think With AI – Personalized AI Assistant
            </h3>
            <p className="text-white text-md md:text-base leading-relaxed">
              – Built a personalized AI assistant using Gemini API for real-time, intelligent conversations. <br />
              – Designed a responsive React frontend with smooth API integration and dynamic response handling.
            </p>
          </div>
          <div className="mt-4 flex gap-4">
            
               <a
  href="https://github.com/Jyotifabiyani/Think-with-AI"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="text-white py-2 px-4 text-sm md:text-base hover:opacity-90 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
    Source Code
  </button>
</a>
          </div>
        </div>

        
        <div className="flex flex-col justify-between bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl p-4 md:p-6 w-full max-w-md mx-auto">
          <div>
            <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
              Employee Management System
            </h3>
            <p className="text-white text-md md:text-base leading-relaxed">
              – Developed using React with role-based dashboards for admin and employees. <br />
              – Admin can assign tasks to employees with secure authentication. <br />
              – Employees can update task status as pending or completed in real-time.
            </p>
          </div>
          <div className="mt-4 flex gap-4">
            
               <a
  href="https://github.com/Jyotifabiyani/Employee-Management-System"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="text-white py-2 px-4 text-sm md:text-base hover:opacity-90 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
    Source Code
  </button>
</a>
          </div>
        </div>
        <div className="flex flex-col justify-between bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl p-4 md:p-6 w-full max-w-md mx-auto">
  <div>
    <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
      Campus Calendar – Event Management App
    </h3>
    <p className="text-white text-md md:text-base leading-relaxed">
      – Built a mobile-first campus calendar app using Flutter and Firebase. <br />
      – Included role-based views for Admins and Students with event creation and live updates. <br />
      – Implemented email-based authentication with dynamic event display in a calendar UI.
    </p>
  </div>
  <div className="mt-4 flex gap-4">
    
    <a
  href="https://github.com/Jyotifabiyani/campus-calendar-flutter"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="text-white py-2 px-4 text-sm md:text-base hover:opacity-90 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
    Source Code
  </button>
</a>

  </div>
</div>

      </div>
    </div>
  );
};

export default Projects;
