import Image from 'next/image';
import yogaImage from '../../../public/LeanImg.jpg';  
import mmaImage from '../../../public/BoxImg.jpg';   
import selfDefImage from '../../../public/SelfDefImg.jpg'; 

export default function Training() {
  return (
    <section className="bg-gray-300 py-10">
         <div className="flex justify-between items-center mb-5 px-4">
          <h2 className="text-2xl font-extrabold text-black ml-4">TRAININGS</h2>
          <a href="#see-all" className="text-lg text-black font-semibold hover:underline">
            See all &#8594;
          </a>
        </div>
      {/* Training Items */}
      <div className="grid grid-cols-1 gap-0 space-y-1">
        {/* YOGA */}
        <div className="relative h-52 md:h-72 overflow-hidden">
          <Image
            src={yogaImage}
            alt="Yoga"
            layout="fill"
            objectFit="cover"
            objectPosition='1% 85%'
            className="hover:opacity-90 transition-opacity duration-300"
          />
          <div className="absolute inset-0 flex items-center justify-start px-4">
            <h3 className="text-white text-3xl md:text-4xl font-extrabold ml-10">YOGA</h3>
          </div>
        </div>

        {/* MMA */}
        <div className="relative h-52 md:h-72 overflow-hidden">
          <Image
            src={mmaImage}
            alt="MMA"
            layout="fill"
            objectFit="cover"
            objectPosition='10% 24%'
            className="hover:opacity-90 transition-opacity duration-300"
          />
          <div className="absolute inset-0 flex items-center justify-start px-4">
            <h3 className="text-white text-3xl md:text-4xl font-extrabold ml-10">MMA</h3>
          </div>
        </div>

        {/* SELF DEFENSE */}
        <div className="relative h-52 md:h-72 overflow-hidden">
          <Image
            src={selfDefImage}
            alt="Self Defense"
            layout="fill"
            objectFit="cover"
            objectPosition='top'
            className="hover:opacity-90 opacity-80 transition-opacity duration-300 object-scale-down"
          />
          <div className="absolute inset-0 flex items-center justify-start px-4">
            <h3 className="text-white text-3xl md:text-4xl font-extrabold ml-10">SELF DEFENSE</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
