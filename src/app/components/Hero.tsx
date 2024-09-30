import Image from 'next/image';
import bgImage from '../../../public/HeroImg.jpg';

export default function Hero() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src={bgImage}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-start px-10 md:px-20 z-20">
          <h1 className="text-white font-extrabold text-5xl md:text-7xl leading-none mb-6">
            <span className="text-[#7AE13F]">GET FIT</span>
            <br />
            <span className="mt-2 inline-block">AND</span>
            <br />
            <span className="mt-2 inline-block">CHANGE YOUR</span>
            <br />
            <span className="mt-2 inline-block">LIFE!</span>
          </h1>
          <div className="flex space-x-4 mt-6">
            <button className="bg-[#7AE13F] text-black font-bold py-3 px-6 rounded-full">
              GET MEMBERSHIP
            </button>
            <button className="border-2 border-white text-white font-bold py-3 px-6 rounded-full">
              TRAININGS
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
