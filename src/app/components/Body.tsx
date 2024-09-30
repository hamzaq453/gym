import Image from 'next/image';
import backgroundImage from '../../../public/LastSec.jpg';

export default function Body() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-black">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Your Body is Your Temple"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="opacity-80"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-gray-200 px-4 md:px-0">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          YOUR BODY IS <br />
          YOUR TEMPLE!
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Lorem ipsum dolor sit amet consectetur. <br />
          Ut fermentum eget non tortor nunc quis.
        </p>
        <button className="bg-white text-black font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-300">
          GET MEMBERSHIP
        </button>
      </div>
    </section>
  );
}
