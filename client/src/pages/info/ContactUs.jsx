import React from "react";

import { useNavigate } from "react-router-dom";

const ContactUs = () => {
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
      <h1 className="text-3xl font-bold mb-4">Contact Us & Screen Size</h1>
      <p className="mb-4">
        For questions, feedback, or support regarding QuickShow or its responsive design, please contact us. We strive to make our platform accessible and user-friendly on all screen sizes.
      </p>
      <p className="mb-4">
        Email: <a href="mailto:support@quickshow.com" className="text-blue-500">support@quickshow.com</a>
      </p>
      <p className="mb-4">
        Phone: +91 97777 52711
      </p>
      <p>
        Our support team is available 24/7 to help you with any device or display issues.
      </p>
    </div>
  );
};

export default ContactUs;
