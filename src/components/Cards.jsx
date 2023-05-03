import React from 'react';

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
          <h1 className='md:text-4xl text-[#6ed8eb] text-center font-bold sm:text-3xl text-2xl py-2'>PROJECTS</h1>

      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>

          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <h2 className='text-2xl font-bold border-b text-center py-8'>CaterBid</h2>
              <div className='text-center font-medium'>
                  <p className='py-2  mx-8 mt-8'>CaterBid is an application that connects people with caterers to find a perfect match through the process of bidding. 
                  Developed using the MERN stack, it is a highly responsive and interactive application. Its design keeps 
                  the users in mind and allows for easy navigation between pages,  </p>
                  
              </div>
              <button className='bg-[#6ed8eb] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Visit Caterbid</button>
          </div>

          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <h2 className='text-2xl border-b font-bold text-center py-8'>Samsung Prism</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 mx-8 mt-8'>As a part of a Samsung Prism worklet, 
                  I have worked on various Deep learning algorithms like Yolo, VCG16 for object detection, etc and worked with Android Studio to develop apps.</p>
               
              </div>
              <button className='bg-[#6ed8eb]  w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>About Prism</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <h2 className='text-2xl font-bold border-b text-center py-8'>IoT Product - Gaze</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 mx-8 mt-8'>
                    Gaze is an IoT product made using Arduino and a camera module, designed to be compact enough to fit it in various cars or fleets to monitor drivers. 
                    It routinely captures images and processes it in the cloud to tell whether a driver is distracted or not. It helps prevent driver distraction and potentially improve road safety.
                    </p>
               
              </div>
              <button className='bg-[#6ed8eb]  w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Figma prototype</button>

          </div>


      </div>
    </div>
  );
};

export default Cards;
