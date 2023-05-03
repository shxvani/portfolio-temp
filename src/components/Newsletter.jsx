import React from 'react';

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto '>
        <div className='lg:col-span-2 flex flex-col sm:flex-col items-center justify-between w-full my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Resumé
          </h1>
          <button className='bg-[#6fe5ee] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Download
            </button>
         
        </div>
        
      </div>
    </div>
  );
};

export default Newsletter;
