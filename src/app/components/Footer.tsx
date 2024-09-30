import React from 'react';


export default function Footer() {
    return (
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* FIT ZONE Brand */}
          <div>
          <div className="font-extrabold text-xl">
        <span className="text-[#7AE13F]">FIT</span>
         <span className="text-white"> ZONE</span>
        </div>          
      <p className="text-sm mt-4">
              Lorem ipsum dolor sit amet <br />consectetur. Nunc ac sagittis <br /> euismod habitasse.
              Placerat <br /> turpis id et at posuere sagittis <br /> neque dictum.
            </p>
          </div>
          
          {/* Services */}
          <div>
            <h5 className="text-xl font-extrabold mb-4">SERVICES</h5>
            <ul className="space-y-2">
              <li>Personal Training</li>
              <li>Online Training</li>
              <li>Corporate Fitness</li>
              <li>Diet Plans</li>
            </ul>
          </div>
          
          {/* Trainings */}
          <div>
            <h5 className="text-xl font-extrabold mb-4">TRAININGS</h5>
            <ul className="space-y-2">
              <li>Calisthenics</li>
              <li>Self Defence</li>
              <li>Yoga</li>
              <li>MMA</li>
            </ul>
          </div>
          
          {/* Address */}
          <div>
            <h5 className="text-xl font-extrabold mb-4">ADDRESS</h5>
            <p className="text-sm">
              4233, Florentine,<br />
              Longmount,<br />
              CO 8035033
            </p>
          </div>
        </div>
      </footer>
    );
  }
  