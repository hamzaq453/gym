import React from 'react';

export default function Membership() {
  return (
    <section className="bg-gray-300 py-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-black mb-8">MEMBERSHIP</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 px-4 md:px-0">
          
          {/* Basic Plan */}
          <div className="bg-black text-white p-8 flex flex-col justify-between  h-[400px]">
            <div>
              <h3 className="text-sm uppercase tracking-wide mb-4">Get Fit with</h3>
              <h4 className="text-3xl font-extrabold mb-2">BASIC</h4>
              <p className="text-5xl font-extrabold mb-2 mt-8">$80</p>
              <p className="text-lg font-bold mb-4">PER MONTH</p>
              <p className="text-sm leading-relaxed mb-8">
                Lorem ipsum dolor sit amet consectetur. <br /> Vulputate in nulla viverra dolor odio. <br />
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <button className="bg-white text-black font-bold py-2 px-8 rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-300">GET</button>
          </div>
          
          {/* Premium Plan */}
          <div className="bg-[#7AE13F] text-black p-8 flex flex-col justify-between h-[450px] relative transform -translate-y-5">
            <div>
              <h3 className="text-sm uppercase tracking-wide mb-4">Get Fit with</h3>
              <h4 className="text-3xl font-extrabold mb-2">PREMIUM</h4>
              <p className="text-5xl font-extrabold mb-2 mt-8">$100</p>
              <p className="text-lg font-bold mb-4">PER MONTH</p>
              <p className="text-sm leading-relaxed mb-8">
                Lorem ipsum dolor sit amet consectetur. <br /> Vulputate in nulla viverra dolor odio. <br />
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <button className="bg-black text-white font-bold py-2 px-8 rounded-full shadow-lg hover:bg-gray-800 transition-colors duration-300">GET</button>
          </div>
          
          {/* Elite Plan */}
          <div className="bg-black text-white p-8 flex flex-col justify-between h-[400px]">
            <div>
              <h3 className="text-sm uppercase tracking-wide mb-4">Get Fit with</h3>
              <h4 className="text-3xl font-extrabold mb-2">ELITE</h4>
              <p className="text-5xl font-extrabold mb-2 mt-8">$120</p>
              <p className="text-lg font-bold mb-4">PER MONTH</p>
              <p className="text-sm leading-relaxed mb-8">
                Lorem ipsum dolor sit amet consectetur. <br /> Vulputate in nulla viverra dolor odio. <br />
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <button className="bg-white text-black font-bold py-2 px-8 rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-300">GET</button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
