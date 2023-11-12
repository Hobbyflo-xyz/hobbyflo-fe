import React from 'react';

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 bg-[#00dc94] text-white">
      <h1 className="text-xl font-bold">HobbyFlo</h1>
      <div>
        <a href="#features" className="px-4">Features</a>
        <a href="#testimonials" className="px-4">Testimonials</a>
        <a href="#contact" className="px-4">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
