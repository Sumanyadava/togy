import React from "react";

const Laydesign = () => {
  return (
    <div className="min-h-screen bg-white text-white p-8">
      <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-3 bg-red-600">
        {/* Name Section */}
        <div className="lg:col-span-1 bg-red-200">name</div>
        
        {/* Portfolio Section */}
        <div className="lg:col-span-2 bg-red-200">portfolio</div>
        
        {/* Challenge 1 */}
        <div className="lg:col-span-1 bg-red-200 lg:row-span-3 flex items-stretch">
          <div className="flex-grow bg-red-300">challenge 1</div>
        </div>
        
        {/* Challenges 3, 4, and 6 */}
        <div className="lg:col-span-2 lg:row-span-3 flex flex-col">
          <div className="bg-red-200 mb-6">challenge 3</div>
          <div className="bg-red-200 mb-6">challenge 4</div>
          <div className="bg-red-200">challenge 6</div>
        </div>
      </div>
    </div>
  );
};

export default Laydesign;
