import React from "react";
import Navbar from "../components/Navbar";

const PrivacyPolicy = () => {
  return (
    <div>

      <Navbar/>
    
    <div className="px-[8%] py-[12%] bg-[var(--background-color-plain)] mx-auto text-black">
      
      <h1 className="font-['Libre_Baskerville',serif] text-[#000000] mb-16 text-[40px]">Privacy Policy</h1>
      <p className="mb-4  text-[16px] text-[#000000] font-['DM_Sans', 'sans-serif']">
        This Privacy Policy outlines how Business Name ("we," "our," or "us") collects, uses, protects, and discloses the
        personal information of visitors ("users," "you," or "your") to www.website.com (the "Website"). Please read this
        Privacy Policy carefully to understand our practices regarding your personal information and how we handle it.
        By accessing or using the Website, you agree to the terms of this Privacy Policy.
      </p>

      <h2 className="text-xl font-bold mt-6">1. Information We Collect</h2>
      <p className="mt-2">
        We may collect both personally identifiable information ("PII") and non-personally identifiable information
        ("Non-PII") from users through various interactions with the Website, including but not limited to:
      </p>

      <h3 className="font-semibold mt-4">a. Personal Information:</h3>
      <ul className="list-disc pl-6">
        <li>Name</li>
        <li>Email address</li>
        <li>Contact information</li>
        <li>Any other information you voluntarily provide</li>
      </ul>

      <h3 className="font-semibold mt-4">b. Non-Personal Information:</h3>
      <ul className="list-disc pl-6">
        <li>Browser type</li>
        <li>Operating system</li>
        <li>IP address</li>
        <li>Usage data (pages visited, actions taken on the Website)</li>
      </ul>

      <h2 className="text-xl font-bold mt-6">2. How We Use Your Information</h2>
      <ul className="list-disc pl-6">
        <li>To personalize your experience on the Website</li>
        <li>To send you periodic emails with updates, news, and promotions (you can opt out at any time)</li>
        <li>To improve our Website and services based on your feedback</li>
        <li>To analyze and monitor usage patterns and trends</li>
        <li>To fulfill our legal obligations and protect our rights</li>
      </ul>

      <h2 className="text-xl font-bold mt-6">3. Cookies and Tracking Technologies</h2>
      <p className="mt-2">
        We may use cookies and other tracking technologies to enhance user experience and collect usage data. Cookies are
        small files stored on your device that enable the Website to recognize your browser and capture certain information.
      </p>

      <h2 className="text-xl font-bold mt-6">4. Data Security</h2>
      <p className="mt-2">
        We implement industry-standard security measures to protect your personal information from unauthorized access,
        alteration, disclosure, or destruction. However, no data transmission over the internet or electronic storage is
        entirely secure, and we cannot guarantee absolute security.
      </p>

      <h2 className="text-xl font-bold mt-6">5. Third-Party Links</h2>
      <p className="mt-2">
        The Website may contain links to third-party websites, products, or services. These third-party sites have their own
        privacy policies, which we do not control. We are not responsible for the content or practices of these third-party
        websites.
      </p>

      <h2 className="text-xl font-bold mt-6">6. Children's Privacy</h2>
      <p className="mt-2">
        Our Website is not intended for use by individuals under the age of 13. We do not knowingly collect personal
        information from children under 13. If you believe we have collected information from a child under 13, please
        contact us immediately.
      </p>

      <h2 className="text-xl font-bold mt-6">7. Your Rights</h2>
      <p className="mt-2">
        You have the right to access, modify, or delete the personal information we hold about you. You can also unsubscribe
        from our emails at any time by using the provided opt-out link. If you wish to exercise any of these rights, please
        contact us at <span className="font-semibold">email@website.com</span>.
      </p>

      <h2 className="text-xl font-bold mt-6">8. Changes to this Privacy Policy</h2>
      <p className="mt-2">
        We reserve the right to update or modify this Privacy Policy at any time without prior notice. Any changes will be
        effective immediately upon posting on the Website. We encourage you to review this Privacy Policy periodically for
        any updates.
      </p>

      <h2 className="text-xl font-bold mt-6">9. Contact Us</h2>
      <p className="mt-2">
        If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please
        contact us at <span className="font-semibold">email@website.com</span>. By using the Website, you agree to the
        terms of this Privacy Policy. If you do not agree with our practices outlined in this policy, please refrain from
        using the Website.
      </p>
    </div>

    </div>
  );
};

export default PrivacyPolicy;
