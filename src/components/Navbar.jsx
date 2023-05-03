import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1600px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#6ed8eb]'>SHIVANI</h1>
      <ul className='hidden md:flex'>
        <button>
        <li className='p-4  hover:text-cyan-300'>Home</li>
        </button>
        <button>
        <li className='p-4  hover:text-cyan-300'>About</li>
        </button>
        <button>
        <li className='p-4  hover:text-cyan-300'>Projects</li>
        </button>
        <button>
        <li className='p-4  hover:text-cyan-300'>Skills</li>
        </button>
        <button>
        <li className='p-4  hover:text-cyan-300'>Contact</li>
        </button>

      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[30%] h-full border-r border-r-gray-900 bg-[#0b3139] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#6ed8eb] m-4'>SHIVANI</h1>
      
        <li className='p-4 border-b border-gray-600  hover:text-cyan-300  text-center'>
        <button>Home  </button>
        </li>
        <li className='p-4 border-b border-gray-600  hover:text-cyan-300 text-center'><button>About</button>
        </li>
        <li className='p-4 border-b border-gray-600  hover:text-cyan-300 text-center'><button>Projects</button>
        </li>
        <li className='p-4 border-b border-gray-600  hover:text-cyan-300 text-center'> <button>Skills</button>
        </li>
        <li className='p-4 border-b border-gray-600  hover:text-cyan-300 text-center'><button>Contact </button>
        </li>

      </ul>
    </div>
  );
};

export default Navbar;
