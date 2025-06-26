import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="Footer" className="bg-[#465697] text-white px-6 py-10 md:px-12 md:py-14">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Contact Heading */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-semibold mb-2">Contact</h1>
          <p className="text-sm md:text-xl">Feel free to reach out!</p>
        </div>

        {/* Contact Links */}
        <ul className="space-y-4 text-sm md:text-lg">
          <li className="flex items-center gap-2 hover:underline">
            <MdOutlineEmail size={25} />
            <a href="mailto:jyotii77005@gmail.com" className="break-all">jyotii77005@gmail.com</a>
          </li>
          <li className="flex items-center gap-2 hover:underline">
            <CiLinkedin size={25} />
            <a
              href="https://www.linkedin.com/in/jyoti-fabiyani-355b972b2/"
              target="_blank"
              rel="noopener noreferrer"
              className="break-all"
            >
              linkedin.com/in/jyoti-fabiyani
            </a>
          </li>
          <li className="flex items-center gap-2 hover:underline">
            <FaGithub size={25} />
            <a
              href="https://github.com/Jyotifabiyani"
              target="_blank"
              rel="noopener noreferrer"
              className="break-all"
            >
              github.com/Jyotifabiyani
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
