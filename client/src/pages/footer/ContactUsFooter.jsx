import React from "react";


const ContactUsFooter = () => (
  <div className="p-6 mt-24 md:mt-32">
    <h2 className="text-3xl font-extrabold mb-4 text-primary">Contact Us</h2>
    <p className="text-gray-700 mb-4">We value your feedback and are here to help with any questions, partnership inquiries, or support needs. Our dedicated team is available around the clock to ensure your QuickShow experience is smooth and enjoyable.</p>
    <ul className="list-disc pl-6 text-gray-600 mb-4">
      <li>Customer Support: <span className="font-semibold">support@quickshow.com</span></li>
      <li>Business Partnerships: <span className="font-semibold">partners@quickshow.com</span></li>
      <li>Press & Media: <span className="font-semibold">media@quickshow.com</span></li>
      <li>Phone: <span className="font-semibold">+91 9000000000</span></li>
      <li>Address: 123 Cinema Lane, Film City, Mumbai, India</li>
    </ul>
    <p className="text-gray-700">Connect with us on social media for the latest updates and exclusive offers!</p>
  </div>
);

export default ContactUsFooter;
