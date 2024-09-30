import Image from 'next/image';
import sectionImage from '../../../public/Section2.jpg'; 

export default function Section() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <Image
        src={sectionImage}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 md:px-20 text-white">
  <h2 className="text-4xl md:text-6xl font-extrabold leading-snug mb-4 text-gray-300">
    FITNESS SHOULD BE <br />
    <span className="mt-4 inline-block">ACCESSIBLE TO</span> <br />
    <span className="mt-4 inline-block">EVERYONE!</span>
  </h2>     
        <p className="text-lg md:text-xl mb-8 text-gray-100">
          Lorem ipsum dolor sit amet consectetur. <br /> Ut fermentum eget non tortor nunc .
          <br />
          Fermentum nulla amet sem nec.
        </p>
        <button className="bg-white text-black font-extrabold text-xl mt-3 py-3 px-7 rounded-full">
          GET MEMBERSHIP
        </button>
      </div>
    </section>
  );
}
