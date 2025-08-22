import React from "react";

import { useNavigate } from "react-router-dom";

const AboutUs = () => {
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
      <h1 className="text-3xl font-bold mb-4">About Us & Screen Size</h1>
      <p className="mb-4">
        QuickShow is built to deliver a great experience on any device. Our responsive design ensures that you can browse movies, book tickets, and enjoy all features whether you are on a mobile, tablet, or desktop.
      </p>
      <p className="mb-4">
        We use modern web technologies to adapt our layout and content to your screen size, so you always get the best view and usability. Your feedback helps us improve accessibility and performance for everyone.
      </p>
      <p>
        Thank you for using QuickShow! If you have suggestions about our responsive design, please contact us at <a href="mailto:support@quickshow.com" className="text-blue-500">support@quickshow.com</a>.
      </p>
    </div>
  );
};

export default AboutUs;
