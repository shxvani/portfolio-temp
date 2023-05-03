import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          {/* <p className='text-[#6ed8eb] font-bold '>SKILLS</p> */}
          <h1 className='md:text-4xl text-[#6ed8eb] font-bold sm:text-3xl text-2xl py-2'>SKILLS</h1>
          <p>
          C, C++, Python, Java, JavaScript, HTML & CSS, React, MySQL
          <br/>
          Tools - Figma, Visual Studio Code, Git
          <br/>
          Languages - English, Tamil, Hindi (Beginner), French (Beginner), Korean (Beginner)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
