
import React, { useContext } from "react";
import { DropdownContext } from "../context/DropdownContext";
import person from "../assets/images/hero_person.png";
import blueCircle from "../assets/images/Group 538j.png";
import lightningIcon from "../assets/images/Group 24.png";
import likeIcon from "../assets/images/icon-park-solid_good-one 9.png";
import waveBg from "../assets/images/image 1.png";
import verifiedIcon from "../assets/images/ic_round-gpp-good.png";
import '../assets/styles/Home.css'

const HeroSection = () => {
  const { setIsDropdownOpen } = useContext(DropdownContext);

  const handleServiceClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsDropdownOpen(true);
  };

  return (
    <section className="relative bg-white px-4 py-10 md:py-16 overflow-hidden">
      <img
        src={waveBg}
        alt="Wave Background"
        className="absolute top-0 right-0 w-[250px] sm:w-[350px] md:w-[600px] z-0"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative z-10">
        {/* Left */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-black">
            Transforming Safety and Security With
            Cutting-Edge Technology
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl text-[#4A66A0] font-semibold">
            Empowering Your Space with Innovative Solutions
          </h2>

          <p className="text-gray-800 max-w-xl mx-auto md:mx-0 text-sm sm:text-base md:text-lg">
            <span className="font-bold text-[#4A66A0]">Zahrix</span> provides
            cutting-edge electrical, CCTV, and BMS services to enhance your
            building's efficiency, safety, and security. Trust us to illuminate
            your world. Our expertise ensures a safer, more secure, and
            efficient environment. We design, install, and maintain systems that
            protect people, property, and assets.
          </p>

          <button
            onClick={handleServiceClick}
            className="mt-6 bg-[#4A66A0] text-white px-6 py-3 rounded hover:bg-[#3a4f85] font-medium"
          >
            Discover Our Services
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {[
              ["500+", "Locations In the Country"],
              ["25+", "Years Of Experience"],
              ["200+", "Specialized Workers"],
            ].map(([value, label], idx) => (
              <div
                key={idx}
                className="bg-white shadow-lg rounded-lg text-center py-6 px-4"
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-[#4A66A0]">
                  {value}
                </h3>
                <p className="text-[#4A66A0] font-medium text-sm sm:text-base">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="relative flex justify-center items-center mt-10 md:mt-0">
          <div className="absolute w-[180px] sm:w-[250px] md:w-[300px] h-[180px] sm:h-[250px] md:h-[300px] rounded-full bg-white border-[4px] border-[#4A66A0] top-[-10px] sm:top-[120px] right-[20px] md:right-[30px] "></div>

          <img
            src={blueCircle}
            alt="Blue Circle"
            className="absolute top-[110px] sm:top-[120px] right-[20px] md:right-[30px] w-[250px] sm:w-[350px] md:w-[520px] z-10"
          />

          <img
  src={person}
  alt="Person"
  className="person_img relative z-30 w-auto max-w-none object-cover" />



          {/* Icons */}
          <div className="absolute top-[100px] sm:top-[100px] lg:top-[150px] left-[20px] sm:-left-[10px] lg:left-[80px] p-2 z-40">
            <img
              src={likeIcon}
              alt="Like Icon"
              className="w-8 sm:w-10 h-8 sm:h-10"
            />
          </div>

          <div className="absolute top-[150px] sm:top-[180px] lg:top-[250px] -left-[10px] sm:-left-[60px] lg:left-[25px] p-2 z-40">
            <img
              src={likeIcon}
              alt="Like Icon"
              className="w-8 sm:w-10 h-8 sm:h-10"
            />
          </div>

          <div className="absolute bottom-[150px] sm:bottom-[180px] lg:bottom-[250px] -left-[10px] sm:-left-[60px] lg:left-[25px] p-2 z-40">
            <img
              src={lightningIcon}
              alt="Lightning Icon"
              className="w-5 sm:w-12 h-5 sm:h-12"
            />
          </div>

          {/* Tooltip with Verified Icon */}
          <div className="tooltip-box absolute bg-white rounded-xl shadow-md flex items-center z-40">
            <img
  src={lightningIcon}
  alt="Zap Icon"
  className="w-6 sm:w-8 md:w-10 lg:w-12"
/>

            <span className="tooltip-text text-sm sm:text-base md:text-sm lg:text-lg font-medium text-[#4A66A0]">
  Unlock a safer tomorrow <br className="hidden sm:block" /> with Zahrix!
</span>

            <img
  src={verifiedIcon}
  alt="Verified Icon"
  className="w-6 sm:w-8 md:w-10 lg:w-12"
/>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;




// import React, { useContext } from "react";
// import { DropdownContext } from "../context/DropdownContext";
// import person from "../assets/images/hero_person.png";
// import blueCircle from "../assets/images/Group 538j.png";
// import lightningIcon from "../assets/images/Group 24.png";
// import likeIcon from "../assets/images/icon-park-solid_good-one 9.png";
// import waveBg from "../assets/images/image 1.png";
// import verifiedIcon from "../assets/images/ic_round-gpp-good.png";
// import '../assets/styles/home.css'

// const HeroSection = () => {
//   const { setIsDropdownOpen } = useContext(DropdownContext);

//   const handleServiceClick = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     setIsDropdownOpen(true);
//   };

//   return (
//     <section className="relative bg-white px-4 py-10 md:py-16 overflow-hidden">
//       <img
//         src={waveBg}
//         alt="Wave Background"
//         className="absolute top-0 right-0 w-[250px] sm:w-[350px] md:w-[600px] z-0"
//       />

//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative z-10">
//         <div className="space-y-6 text-center md:text-left">
//           <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-black">
//             Transforming Safety and Security With
//             Cutting-Edge Technology
//           </h1>

//           <h2 className="text-lg sm:text-xl md:text-2xl text-[#4A66A0] font-semibold">
//             Empowering Your Space with Innovative Solutions
//           </h2>

//           <p className="text-gray-800 max-w-xl mx-auto md:mx-0 text-sm sm:text-base md:text-lg">
//             <span className="font-bold text-[#4A66A0]">Zahrix</span> provides
//             cutting-edge electrical, CCTV, and BMS services to enhance your
//             building's efficiency, safety, and security. Trust us to illuminate
//             your world. Our expertise ensures a safer, more secure, and
//             efficient environment. We design, install, and maintain systems that
//             protect people, property, and assets.
//           </p>

//           <button
//             onClick={handleServiceClick}
//             className="mt-6 bg-[#4A66A0] text-white px-6 py-3 rounded hover:bg-[#3a4f85] font-medium"
//           >
//             Discover Our Services
//           </button>

//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
//             {[
//               ["500+", "Locations In the Country"],
//               ["25+", "Years Of Experience"],
//               ["200+", "Specialized Workers"],
//             ].map(([value, label], idx) => (
//               <div
//                 key={idx}
//                 className="bg-white shadow-lg rounded-lg text-center py-6 px-4"
//               >
//                 <h3 className="text-2xl sm:text-3xl font-bold text-[#4A66A0]">
//                   {value}
//                 </h3>
//                 <p className="text-[#4A66A0] font-medium text-sm sm:text-base">
//                   {label}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="relative  flex justify-center items-center mt-10 md:mt-0">
//           <div className="absolute w-[180px]  sm:w-[250px] md:w-[300px] h-[180px] sm:h-[250px] md:h-[300px] rounded-full bg-white border-[4px] border-[#4A66A0] top-[-10px] sm:top-[120px] right-[20px] md:right-[30px] "></div>

//           <img
//             src={blueCircle}
//             alt="Blue Circle"
//             className="absolute top-[110px] sm:top-[120px] right-[20px] md:right-[30px] w-[250px] sm:w-[350px] md:w-[520px] z-10"
//           />

//           <img
//             src={person}
//             alt="Person"
//             className="person_img relative  z-30 w-auto max-w-none object-cover" />

//           <div className="absolute top-[100px] sm:top-[100px] lg:top-[150px] left-[20px] sm:-left-[10px] lg:left-[80px] p-2 z-40">
//             <img
//               src={likeIcon}
//               alt="Like Icon"
//               className="w-8 sm:w-10 h-8 sm:h-10"
//             />
//           </div>

//           <div className="absolute top-[150px] sm:top-[180px] lg:top-[250px] -left-[10px] sm:-left-[60px] lg:left-[25px] p-2 z-40">
//             <img
//               src={likeIcon}
//               alt="Like Icon"
//               className="w-8 sm:w-10 h-8 sm:h-10"
//             />
//           </div>

//           <div className="absolute bottom-[150px] sm:bottom-[180px] lg:bottom-[250px] -left-[10px] sm:-left-[60px] lg:left-[25px] p-2 z-40">
//             <img
//               src={lightningIcon}
//               alt="Lightning Icon"
//               className="w-5 sm:w-12 h-5 sm:h-12"
//             />
//           </div>

//           {/* Tooltip with Verified Icon */}
//           <div className="tooltip-box absolute bg-white rounded-xl shadow-md flex items-center z-40">
//             <img
//               src={lightningIcon}
//               alt="Zap Icon"
//               className="w-6 sm:w-8 md:w-10 lg:w-12"
//             />

//             <span className="tooltip-text text-sm sm:text-base md:text-sm lg:text-lg font-medium text-[#4A66A0]">
//               Unlock a safer tomorrow <br className="hidden sm:block" /> with Zahrix!
//             </span>

//             <img
//               src={verifiedIcon}
//               alt="Verified Icon"
//               className="w-6 sm:w-8 md:w-10 lg:w-12"
//             />

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
