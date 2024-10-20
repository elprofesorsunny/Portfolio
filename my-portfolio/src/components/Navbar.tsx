import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="fixed w-full p-2 z-10 flex justify-between items-center  bg-white dark:bg-black">
      {/* Hambergur Menu for Mobile Device */}
      <div className="md:hidden cursor-pointer py-2 px-4 text-black dark:text-white" onClick={() => setIsOpen(true)}>
        ☰
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-row space-x-8 m-auto text-black dark:text-white">
        <div className="py-2">About</div>
        <div className="py-2">Works</div>
        <div className="py-2">Home</div>
        <div className="py-2">Blogs</div>
        <div className="py-2">Contact</div>
      </div>

      {/* Light/Dark Mode Button */}
      <button
        onClick={toggleDarkMode}
        className="bg-gray-700 text-white px-4 py-2 rounded-full absolute right-4"
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 h-full w-52 bg-gray-800 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
        <div className="flex flex-col p-4 relative text-white">
          <div className="absolute top-4 left-4 cursor-pointer" onClick={() => setIsOpen(false)}>
            <AiOutlineClose size={24} />
          </div>
          <div className="mt-12 space-y-4">
            <div className="py-2">Home</div>
            <div className="py-2">Works</div>
            <div className="py-2">Blogs</div>
            <div className="py-2">About</div>
            <div className="py-2">Contact</div>
          </div>
        </div>
      </div>
    </div>
  );
}
