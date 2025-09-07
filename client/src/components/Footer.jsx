import { FaGooglePlay, FaApple } from "react-icons/fa";
import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#943823] text-gray-300 px-6 md:px-16 lg:px-36 mt-40 w-full py-12">
      <div className="flex flex-col md:flex-row justify-between gap-12 px-6 md:px-16">
        
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold text-white">
            <span className="text-black">Quick</span>Show
          </h2>
          <p className="text-sm mt-4 leading-6 max-w-md">
            QuickShow is your ultimate destination for movies and entertainment. 
            Book tickets in seconds, discover the latest blockbusters, and enjoy a 
            seamless experience designed for every movie lover.
          </p>

          {/* App store buttons */}
          <div className="flex gap-4 mt-6">
            <a href="https://play.google.com/">
              <img
                src={assets.googlePlay}
                alt="Google Play"
                className="h-12"
              />
            </a>
            <a href="https://www.apple.com/">
              <img
                src={assets.appStore}
                alt="App Store"
                className="h-12"
              />
            </a>
          </div>
        </div>

        {/* Company Section  */}
        <div className="w-full md:w-1/4 flex flex-col items-center text-center">
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/footer/home" className="hover:text-white">Home</Link></li>
            <li><Link to="/footer/aboutus" className="hover:text-white">About us</Link></li>
            <li><Link to="/footer/contactus" className="hover:text-white">Contact us</Link></li>
            <li><Link to="/footer/privacypolicy" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Get in touch */}
        <div className="w-full md:w-1/4 flex flex-col items-center text-center">
          <h3 className="text-white font-semibold mb-4">Get in touch</h3>
          <p className="text-sm mb-2">+91 9000000000</p>
          <p className="text-sm">contactus@quicksearch.com</p>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-400 mt-12 pt-6 text-center text-sm text-gray-100">
        Copyright © 2025 Quick Show. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
