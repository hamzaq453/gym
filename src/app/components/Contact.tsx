import React from 'react'

export default function Contact() {
    return (
      <section className="bg-black text-white py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-2 text-start">GET IN TOUCH</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-start mt-10">BOOK A FREE CONSULTATION CALL!</h3>
          
          {/* Form */}
          <form className="space-y-4 mt-16 mb-4 py-10">
            <div className="flex flex-col mb-8 md:flex-row md:space-x-4 space-y-4 md:space-y-0 justify-center">
              <input
                type="text"
                placeholder="FULL NAME"
                className="bg-transparent border-2 border-white rounded-full text-white px-6 py-3 focus:outline-none"
              />
              <input
                type="text"
                placeholder="PHONE NUMBER"
                className="bg-transparent border-2 border-white rounded-full text-white px-6 py-3 focus:outline-none"
              />
              <input
                type="email"
                placeholder="ACTIVE EMAIL"
                className="bg-transparent border-2 border-white rounded-full text-white px-6 py-3 focus:outline-none"
              />
            </div>
            
            <button className="bg-white text-black font-bold py-3 px-80 rounded-full hover:bg-gray-200 transition-colors duration-300 mt-6">
            GET CALL
            </button>
          </form>
        </div>
      </section>
    );
  }
  
