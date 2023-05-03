import React from 'react';
// import { Link } from "react-router-dom";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
// githubLink = {"//www.github.com/shxvani"}
//               instaLink = {"//www.instagram.com/shxvani/"}
//               linkedinLink = {"//www.linkedin.com/in/shivani-s-b640241b2/"}
const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#6ed8eb]'>Contact Me</h1>
        <p className='py-4'>Feel free to drop an email - shivanii.srii@gmail.com or 20Z250@psgtech.ac.in!</p>
        <div className='flex justify-between md:w-[75%] my-6'>
        <p className='py-4'>FORCE SHWINVEE TO FIX THIS, ADD LINKS</p>


            
            
      
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
      </div>
    </div>
  );
};

export default Footer;
