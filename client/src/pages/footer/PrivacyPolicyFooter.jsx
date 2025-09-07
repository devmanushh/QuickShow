import React from "react";


const PrivacyPolicyFooter = () => (
  <div className="p-6 mt-24 md:mt-32">
    <h2 className="text-3xl font-extrabold mb-4 text-primary">Privacy Policy</h2>
    <p className="text-gray-700 mb-4">At QuickShow, your privacy and data security are our top priorities. We are committed to maintaining transparency about how your information is collected, used, and protected.</p>
    <ul className="list-disc pl-6 text-gray-600 mb-4">
      <li>We collect only the information necessary to provide you with seamless ticket booking and personalized recommendations.</li>
      <li>Your data is encrypted and stored securely, following industry best practices.</li>
      <li>We never sell or share your personal information with third parties without your explicit consent.</li>
      <li>You have full control over your account and can update or delete your information at any time.</li>
      <li>For detailed information, please read our full privacy policy or contact our support team.</li>
    </ul>
    <p className="text-gray-700">Thank you for trusting QuickShow with your movie experiences. Your security is our promise.</p>
  </div>
);

export default PrivacyPolicyFooter;
