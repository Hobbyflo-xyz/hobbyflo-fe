import React from 'react';

function Features() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4 animate-fade-in-down">Our Features</h2>
        <p className="text-gray-500 mb-12 animate-fade-in">Check out what we offer</p>

        <div className="flex flex-wrap justify-center">
          <div className="p-4 animate-fade-in-up">
            <h3 className="text-lg font-medium text-gray-700">Feature One</h3>
            <p className="text-gray-500">Description for feature one.</p>
          </div>
          {/* Repeat for other features with animations */}
        </div>
      </div>
    </div>
  );
}

export default Features;
