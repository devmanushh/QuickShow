import React from "react";

import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full max-w-3xl mx-auto py-10 px-4 sm:px-8 md:px-12 lg:px-20 relative">
      <button
        className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-red-600"
        aria-label="Close"
        onClick={() => navigate(-1)}
      >
        &times;
      </button>
      <h1 className="text-3xl font-bold mb-4">Screen Size & Responsive Design</h1>
      <p className="mb-4">
        QuickShow is designed to provide a seamless experience across all devices and screen sizes. Our responsive layout ensures that whether you are using a mobile phone, tablet, or desktop, the content adapts perfectly to your screen.
      </p>
      <p className="mb-4">
        We use modern CSS techniques and frameworks to guarantee that navigation, movie details, and booking features remain accessible and visually appealing on any device. Our goal is to make sure you enjoy QuickShow no matter where you are or what device you use.
      </p>
      <p>
        If you have feedback about the display or accessibility on your device, please contact us at <a href="mailto:support@quickshow.com" className="text-blue-500">support@quickshow.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
