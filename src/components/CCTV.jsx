import React from "react";
import CCTVBanner from '../components/CCTVBanner';
import serviceimg from '../assets/images/Screenshot 2025-06-12 125941.png';
import Connectimg from '../assets/images/Screenshot 2025-06-12 170435.png';
import roundCamera from '../assets/images/Group 538j.png';
import CCTVEquipment from '../assets/images/Group 608.png';
import circleIcon from "../assets/images/material-symbols_drag-click-rounded.png";
import serviceBg from '../assets/images/standard-quality-control-collage-concept.png';
import wireImage from '../assets/images/Group 537.png';
import downloadImage from '../assets/images/downloadImage.png';
import { Zap } from "lucide-react";


const CCTVServices = () => {
    return (
        <div>
            <CCTVBanner />

            <section className="py-12 bg-white text-center px-4">

                <h3 className="text-sm font-bold text-black tracking-wide uppercase flex justify-center items-center gap-2">
                    <span className="border-b-2 text-xl border-black pb-1">OUR SERVICES</span>
                    <Zap className="w-4 h-4 text-xl  text-[#4A66A0]" />
                </h3>

                <h2 className="text-2xl md:text-4xl font-bold text-[#4A66A0] my-4">
                    Expert Services for a Safer, Smarter World
                </h2>

                <p className="max-w-6xl text-xl mx-auto text-black-700 mb-10">
                    At ZAHRIX, we offer a comprehensive range of electrical services designed to meet the needs of homes and businesses.
                    Our team of experts is dedicated to providing safe, efficient, and reliable electrical solutions.
                </p>


                <div className="max-w-7xl mx-auto px-4">
                    <div
                        className="relative rounded-2xl overflow-hidden shadow-lg h-[500px] md:h-[550px] bg-cover bg-center flex items-center justify-start text-white"
                        style={{ backgroundImage: `url(${serviceimg})` }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                        <div className="relative z-10 flex flex-col px-6 md:px-16 max-w-xl items-start justify-center">
                            <img
                                src={wireImage}
                                alt="Install"
                                className="w-24 h-24 mx-36 object-contain mb-4"
                            />
                            <h4 className="text-2xl mx-36 md:text-3xl font-bold mb-2">CCTV</h4>
                            <p className="text-lg mt-3 md:text-2xl">
                                Advanced CCTV systems for enhanced security and surveillance, providing peace of mind and protection.
                            </p>

                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4 bg-white">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-9 flex items-center justify-center gap-2">
                    Services We Offer
                    <Zap className="text-[#4A66A0]" size={22} />
                </h2>

                <div className="max-w-7xl mx-auto space-y-8">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-[2.5] relative rounded-xl overflow-hidden shadow-lg h-[300px]">
                            <img
                                src={serviceBg}
                                alt="Service"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4">
                                <p className="text-white text-lg text-center font-semibold leading-snug">
                                    “Experience the best in electrical,<br /> CCTV, BMS Solutions “
                                </p>
                            </div>
                        </div>

                        <div className="flex-[3] bg-[#F2F4FD] p-5 rounded-xl shadow-md flex flex-col justify-center h-[300px]">
                            <div className="flex items-center gap-4 mb-3">
                                <img src={downloadImage} alt="Install" className="w-20 h-20 object-contain" />
                                <h3 className="text-xl font-bold text-[#4A66A0]">CCTV Installation</h3>
                            </div>
                            <p className="text-gray-700 text-2xl leading-relaxed">
                                Expert CCTV installation services to enhance security and surveillance. Our team designs and installs customized CCTV systems for homes and business. Secure your property with our relaiable solutions.</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1 bg-[#F2F4FD] p-5 rounded-xl shadow-md flex flex-col justify-center h-[300px]">
                            <div className="flex items-center gap-4 mb-3">
                                <img src={roundCamera} alt="bms" className="w-20 h-20 object-contain" />
                                <h3 className="text-xl font-bold text-[#4A66A0]">CCTV Monitoring</h3>
                            </div>
                            <p className="text-gray-700 text-2xl leading-relaxed">
                                Remote CCTV monitoring services for real-time surveillance and security. Our experts provide 24/7 monitoring to ensure your property is always protected. Stay connected and secure with our advanced monitoring solutions.
                            </p>
                        </div>

                        <div className="flex-1 bg-[#F2F4FD] p-5 rounded-xl shadow-md flex flex-col justify-center h-[300px]">
                            <div className="flex items-center gap-4 mb-3">
                                <img src={CCTVEquipment} alt="Electrical" className="w-20 h-20 object-contain" />
                                <h3 className="text-xl font-bold text-[#4A66A0]">CCTV Maintenance</h3>
                            </div>
                            <p className="text-gray-700 text-2xl leading-relaxed">
                                Regular CCTV maintenance to ensure system uptime and reliability. Stay connected and secure with our advanced maintenance solutions. our techniciansperform routine checks and repairs to keep your CCTV system running smoothly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>



            <section className="py-8 flex justify-center">
                <button className="px-6 py-3 bg-[#4A66A0] text-white font-semibold rounded-lg flex items-center gap-2">
                    <img src={circleIcon} alt="icon" className="w-5 h-5" />
                    <span>Book Now</span>
                </button>
            </section>

            <section className="bg-blue-50  mb-8 px-4 md:px-16 flex flex-col-reverse md:flex-row items-center justify-between gap-6">
                <div className="text-left max-w-xl mx-52">
                    <h3 className="text-3xl md:text-4xl text-[#4A66A0] font-bold underline underline-offset-8 mb-4">
                        Let’s Connect
                    </h3>
                    <h2 className="text-3xl md:text-4xl font-semibold text-[#4A66A0] mb-6 leading-snug">
                        We’re here to answer your <br /> questions and help
                    </h2>
                    <button className="px-6 py-3 bg-[#4A66A0] hover:bg-blue-800 text-white font-semibold rounded-lg flex items-center gap-2">
                        <img src={circleIcon} alt="icon" className="w-5 h-5" />
                        <span>Contact Us</span>
                    </button>
                </div>

                <img
                    src={Connectimg}
                    alt="Connect with us"
                    className="w-full md:w-[40%] rounded-lg shadow-md"
                />
            </section>
        </div >
    );
};

export default CCTVServices;
