import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
      < div className="w-full p-4 text-white flex flex-row items-center 
      justify-center lg:h-screen mobile:h-full">
        <div className=' grid md:grid-cols-2 '>
        <div className=' text-center font-medium'>
          <p className='text-[#6ed8eb] font-bold p-2'>
            ABOUT ME
          </p>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
            Shivani Sri
          </h1>
          <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
              I'm a 
            </p>
              <Typed
              className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                strings={['Developer', 'UI Designer.', '3rd Year CSE Student.']}
                typeSpeed={140}
                backSpeed={180}
                loop
              />
          </div>
        </div>
        <div className='w-full  mx-auto shadow-xl flex flex-col hover:scale-105 duration-300'>
        <div class="p-8 m-10 border border-gray-300 rounded-lg shadow bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hello & Welcome!</h5>
          <p class="font-normal text-gray-700 dark:text-gray-400 text-left">
          
            My name is Shivani,
            and I am a third-year student pursuing computer science engineering from Coimbatore.
            <br/>
            From a young age, I have been fascinated by the intersection of technology and innovation. 
            This is what drew me towards the field of computer science engineering. My interest in designing, coding, and developing 
            software started in high school, and I have been honing these skills ever since.
            <br/>
            I am particularly passionate about emerging technologies such as IoT, AI, and ML, which have the potential to 
            revolutionize the way we live, work, and interact with the world around us. I am always on the lookout for opportunities to 
            work on projects that involve these cutting-edge technologies, and in UI/UX Design.
            <br/>
            As a computer science engineering student, I have had the opportunity to work on several projects that have helped me gain a
            deeper understanding of software development and its applications. I believe that technology has the power to make a positive
            impact on society, and I am eager to be a part of this change.
          </p>
        </div>
        </div>
        </div>
      </div>

  );
};

export default Hero;
