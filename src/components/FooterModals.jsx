import React, { useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import './FooterModals.css';
import closeIcon from '../assets/images/close-modal.svg';

const FooterModals = forwardRef((props, ref) => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalType) => {
    setActiveModal(modalType);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = '';
  };

  useImperativeHandle(ref, () => ({
    openTerms: () => openModal('terms'),
    openPrivacy: () => openModal('privacy'),
    openCookies: () => openModal('cookies'),
  }));

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && activeModal) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeModal]);

  // Modal component with original styling
  const Modal = ({ children, title, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
      <div 
        className={`modal-overlay ${isOpen ? 'active' : ''}`}
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <div className="modal">
          <div className="close-modal-sticky">
            <button 
              className="modal-close" 
              onClick={onClose}
            >
              <img src={closeIcon} alt="close modal" />
            </button>
          </div>
          <div className="modal-header">
            <h2>{title}</h2>
          </div>
          <div className="modal-content">
            {children}
          </div>
        </div>
      </div>
    );
  };

  // Terms of Use Content
  const TermsContent = () => (
    <div className="terms-content">
      <div className="terms-section">
        <h3><span>1.</span> Acceptance of Terms</h3>
        <p>By accessing and using this website ("Site"), you accept and agree to be bound by the terms and
          provision of this agreement. These Terms of Use govern your use of our website and services. If
          you do not agree to abide by the above, please do not use this service.</p>
      </div>

      <div className="terms-section">
        <h3><span>2.</span> Description Of Service</h3>
        <p>We provide a menu of professional services for both businesses and non profit organizations as
          detailed on our site. Our services may include content, communications, software, and other
          services provided to you through our website.</p>
      </div>

      <div className="terms-section terms-section-list">
        <h3><span>3.</span> User Responsibilities</h3>
        <h4 className="terms-section-list-heading">You agree to use our website only for lawful purposes and in
          accordance with these Terms. You agree not to:</h4>
        <ul className="terms-list">
          <li>Use the site in any way that violates applicable federal, state, local, or international law.</li>
          <li>Transmit or procure the sending of any advertising or promotional material.</li>
          <li>Impersonate or attempt to impersonate the company, employees, or other users.</li>
          <li>Engage in any conduct that restricts or inhibits anyone's use of the website.</li>
          <li>Use any automated system to access the website</li>
        </ul>
      </div>

      <div className="terms-section">
        <h3><span>4.</span> Intellectual Property Rights</h3>
        <p>The website and its original content, features, and functionality are and will remain the
          exclusive property of Applied Branding & Marketing, LLC and its licensors. The website is
          protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be
          used in connection with any product or service without our prior written consent.</p>
      </div>

      <div className="terms-section">
        <h3><span>5.</span> User Content</h3>
        <p>Our service may allow you to post, link, store, share and otherwise make available certain
          information, text, graphics, videos, or other material. You are responsible for the content that
          you post to the service, including its legality, reliability, and appropriateness.</p>
      </div>

      <div className="terms-section">
        <h3><span>6.</span> Privacy Policy</h3>
        <p>Your privacy is important to us. Please review our Privacy Policy, which also governs your use of
          our website, to understand our practices.</p>
      </div>

      <div className="terms-section terms-section-list">
        <h3><span>7.</span> Disclaimers</h3>
        <h4 className="disclaimer-bold terms-section-list-heading">THE INFORMATION ON THIS WEBSITE IS PROVIDED
          ON AN "AS IS" BASIS. TO THE FULLEST EXTENT PERMITTED BY LAW, THIS COMPANY:</h4>
        <ul className="terms-list">
          <li>EXCLUDES ALL REPRESENTATIONS AND WARRANTIES RELATING TO THIS WEBSITE AND ITS CONTENTS</li>
          <li>EXCLUDES ALL LIABILITY FOR DAMAGES ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THIS
            WEBSITE</li>
        </ul>
      </div>

      <div className="terms-section">
        <h3><span>8.</span> Limitation Of Liability</h3>
        <p>In no event shall ABM, LLC nor its directors, employees, partners, agents, suppliers, or
          affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages,
          including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
          resulting from your use of the service.</p>
      </div>

      <div className="terms-section">
        <h3><span>9.</span> Termination</h3>
        <p>We may terminate or suspend your account and bar access to the service immediately, without prior
          notice or liability, under our sole discretion, for any reason whatsoever including without
          limitation if you breach the Terms.</p>
      </div>

      <div className="terms-section">
        <h3><span>10.</span> Governing Law</h3>
        <p>These Terms shall be interpreted and governed by the laws of the State of WY, United States,
          without regard to conflict of law provisions.</p>
      </div>

      <div className="terms-section">
        <h3><span>11.</span> Changes To Terms</h3>
        <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
          revision is material, we will provide at least 30 days notice prior to any new terms taking
          effect.</p>
      </div>

      <div className="terms-section" style={{border: 'none', marginBottom: '0px'}}>
        <h3><span>12.</span> Questions About Our Policies?</h3>
        <p>If you have any questions about these Terms of Use, Privacy Policy, or Cookie Policy, please
          contact us:</p>
        <h2 className="contact-details">Contact Details</h2>
        <h2 className="company"><b>Company:</b> ABM, LLC</h2>
        <h2 className="email"><b>Email:</b> legal@abmize.com</h2>
        <h2 className="email"><b>Call Us:</b> <a href="tel:8777217447" className="call-me">(877) 721-7447</a></h2>
      </div>
    </div>
  );

  // Privacy Policy Content  
  const PrivacyContent = () => (
    <div className="terms-content">
      <h4 className="last-update"><b>Last Updated:</b> July 2, 2025</h4>
      
      <div className="terms-section mb-0 border-none">
        <h3 className="text-[22px] font-bold text-[#2d2d2d] mb-2.5 font-dm">
          <span className="text-[#d9305b] mr-2">1.</span> Information We Collect
        </h3>
        
        <div className="card-privay bg-gradient-to-b from-[rgba(56,120,88,0.1)] to-[rgba(208,211,112,0.1)] p-5 rounded-[20px] mb-5">
          <h5 className="text-[#2d2d2d] mb-2.5 font-bold text-[22px] leading-[30px]">Personal Information</h5>
          <div className="personal-info-card grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <p className="font-medium text-[#2d2d2d] text-[18px] leading-[30px]">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="privacy-list list-none pl-0 mt-2.5">
                {[
                  "Register for an account",
                  "Subscribe to our newsletter", 
                  "Contact us through our website",
                  "Participate in surveys or promotions",
                  "Make a purchase or transaction"
                ].map((item, index) => (
                  <li key={index} className="relative pl-5 mb-2 text-[18px] leading-[30px] text-[#666666] font-dm before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-[14px] before:h-[14px] before:bg-[url('/assets/circle-gradient.svg')] before:bg-contain before:bg-no-repeat before:bg-center">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-medium text-[#2d2d2d] text-[18px] leading-[30px]">
                This information may include:
              </p>
              <ul className="privacy-list list-none pl-0 mt-2.5">
                {[
                  "Name, email address, phone number",
                  "Billing and shipping addresses",
                  "Payment information (processed securely through third-party providers)",
                  "Demographic information", 
                  "Any other information you choose to provide"
                ].map((item, index) => (
                  <li key={index} className="relative pl-5 mb-2 text-[18px] leading-[30px] text-[#666666] font-dm before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-[14px] before:h-[14px] before:bg-[url('/assets/circle-gradient.svg')] before:bg-contain before:bg-no-repeat before:bg-center">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="card-privay bg-gradient-to-b from-[rgba(56,120,88,0.1)] to-[rgba(208,211,112,0.1)] p-5 rounded-[20px] mt-5">
          <h5 className="text-[#2d2d2d] mb-2.5 font-bold text-[22px] leading-[30px]">Automatically Collected Information</h5>
          <p className="automatically-collected-info-para font-medium text-[#2d2d2d] text-[18px] leading-[30px] mb-2.5">
            When you visit our website, we automatically collect certain information about your device and usage:
          </p>
          <ul className="privacy-list list-none pl-0 mt-2.5">
            {[
              "IP address and browser type",
              "Operating system and device information",
              "Pages visited and time spent on our site",
              "Referring website addresses",
              "Search terms used to find our website"
            ].map((item, index) => (
              <li key={index} className="relative pl-5 mb-2 text-[18px] leading-[30px] text-[#666666] font-dm before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-[14px] before:h-[14px] before:bg-[url('/assets/circle-gradient.svg')] before:bg-contain before:bg-no-repeat before:bg-center">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="terms-section mb-0 border-none mt-8">
        <h3 className="text-[22px] font-bold text-[#2d2d2d] mb-2.5 font-dm">
          <span className="text-[#d9305b] mr-2">2.</span> How We Use Your Information
        </h3>
        <h4 className="your-info-heading text-[18px] leading-[30px] text-[#2d2d2d] font-medium mb-4">
          We use the information we collect for various purposes, including:
        </h4>
        <ul className="privacy-list list-none pl-0 mt-2.5">
          {[
            "Providing and maintaining our services",
            "Processing transactions and sending related information",
            "Sending administrative information and updates",
            "Responding to your comments and questions",
            "Improving our website and services",
            "Personalizing your experience",
            "Sending marketing communications (with your consent)",
            "Detecting and preventing fraud",
            "Complying with legal obligations"
          ].map((item, index) => (
            <li key={index} className="relative pl-5 mb-2 text-[18px] leading-[30px] text-[#666666] font-dm before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-[14px] before:h-[14px] before:bg-[url('/assets/circle-gradient.svg')] before:bg-contain before:bg-no-repeat before:bg-center">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="terms-section mt-8">
        <h3 className="text-[22px] font-bold text-[#2d2d2d] mb-2.5 font-dm">
          <span className="text-[#d9305b] mr-2">3.</span> How We Share Your Information
        </h3>
        <h4 className="share-your-info-heading text-[18px] font-dm leading-[30px] mb-4 font-normal text-[#666666]">
          We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
        </h4>
        <div className="cookie-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              title: "Service Providers",
              description: "We may share your information with trusted third-party service providers who assist us in operating our website, conducting business, or serving our users, provided they agree to keep this information confidential."
            },
            {
              title: "Legal Requirements", 
              description: "We may disclose your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety."
            },
            {
              title: "Business Transfers",
              description: "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction."
            }
          ].map((card, index) => (
            <div key={index} className="cookie-card bg-gradient-to-b from-[rgba(56,120,88,0.1)] to-[rgba(208,211,112,0.1)] p-5 rounded-[20px]">
              <h4 className="text-[18px] font-semibold text-[#2d2d2d] mb-2.5">{card.title}</h4>
              <p className="text-[16px] leading-[24px] text-[#666666]">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="terms-section mt-8 mb-8 pb-8 border-b border-gray-200">
        <h3 className="text-[22px] font-bold text-[#2d2d2d] mb-2.5 font-dm">
          <span className="text-[#d9305b] mr-2">4.</span> Data Security
        </h3>
        <p className="text-[18px] leading-[30px] text-[#666666] font-dm">
          We implement appropriate security measures to protect your personal information against
          unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
          over the internet or electronic storage is 100% secure.
        </p>
      </div>

      <div className="terms-section mb-8 pb-8 border-b border-gray-200">
        <h3 className="text-[22px] font-bold text-[#2d2d2d] mb-2.5 font-dm">
          <span className="text-[#d9305b] mr-2">5.</span> Your Rights and Choices
        </h3>
        <h4 className="third-party-heading text-[18px] leading-[30px] font-semibold text-[#2d2d2d] mb-4">
          Depending on your location, you may have certain rights regarding your personal information:
        </h4>
        <ul className="cookie-list list-none pl-0 mt-2.5">
          {[
            { label: "Access:", description: "Request access to your personal information" },
            { label: "Correction:", description: "Request correction of inaccurate information" },
            { label: "Deletion:", description: "Request deletion of your personal information" },
            { label: "Portability:", description: "Request transfer of your information" },
            { label: "Opt-out:", description: "Unsubscribe from marketing communications" }
          ].map((item, index) => (
            <li key={index} className="relative pl-4 mb-2.5 text-[18px] leading-[30px] text-[#666666] font-dm before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-[13px] before:h-[13px] before:bg-[url('/assets/circle-gradient.svg')] before:bg-contain before:bg-no-repeat before:bg-center">
              <span className="text-[16px] leading-[16px] font-semibold text-[#2d2d2d]">{item.label}</span> {item.description}
            </li>
          ))}
        </ul>
      </div>

      {/* Continue with remaining sections... */}
      <div className="terms-section mb-8 pb-8 border-b border-gray-200">
        <h3 className="text-[22px] font-bold text-[#2d2d2d] mb-2.5 font-dm">
          <span className="text-[#d9305b] mr-2">6.</span> Data Retention
        </h3>
        <p className="text-[18px] leading-[30px] text-[#666666] font-dm">
          We retain your personal information only as long as necessary to fulfill the purposes for which
          it was collected, comply with legal obligations, resolve disputes, and enforce our agreements.
        </p>
      </div>

      <div className="terms-section mb-8 pb-8 border-b border-gray-200">
        <h3 className="text-[22px] font-bold text-[#2d2d2d] mb-2.5 font-dm">
          <span className="text-[#d9305b] mr-2">7.</span> Children's Privacy
        </h3>
        <p className="text-[18px] leading-[30px] text-[#666666] font-dm">
          Our services are not intended for children under 13 years of age. We do not knowingly collect
          personal information from children under 13. If we discover we have collected information from a
          child under 13, we will delete such information immediately.
        </p>
      </div>

      <div className="terms-section mb-8 pb-8 border-b border-gray-200">
        <h3 className="text-[22px] font-bold text-[#2d2d2d] mb-2.5 font-dm">
          <span className="text-[#d9305b] mr-2">8.</span> International Transfers
        </h3>
        <p className="text-[18px] leading-[30px] text-[#666666] font-dm">
          Your information may be transferred to and maintained on computers located outside of your state,
          province, country, or other governmental jurisdiction where data protection laws may differ.
        </p>
      </div>

      <div className="terms-section mb-8 pb-8 border-b border-gray-200">
        <h3 className="text-[22px] font-bold text-[#2d2d2d] mb-2.5 font-dm">
          <span className="text-[#d9305b] mr-2">9.</span> Third-Party Links
        </h3>
        <p className="text-[18px] leading-[30px] text-[#666666] font-dm">
          Our website may contain links to third-party websites. We are not responsible for the privacy
          practices or content of these external sites. We encourage you to review their privacy policies.
        </p>
      </div>

      <div className="terms-section mb-8 pb-8 border-b border-gray-200">
        <h3 className="text-[22px] font-bold text-[#2d2d2d] mb-2.5 font-dm">
          <span className="text-[#d9305b] mr-2">10.</span> California Privacy Rights
        </h3>
        <p className="text-[18px] leading-[30px] text-[#666666] font-dm">
          If you are a California resident, you have additional rights under the California Consumer
          Privacy Act (CCPA), including the right to know what personal information we collect, the right
          to delete personal information, and the right to opt-out of the sale of personal information.
        </p>
      </div>

      <div className="terms-section mb-0 border-none">
        <h3 className="text-[22px] font-bold text-[#2d2d2d] mb-2.5 font-dm">
          <span className="text-[#d9305b] mr-2">11.</span> Questions About Our Policies?
        </h3>
        <p className="text-[18px] leading-[30px] text-[#666666] font-dm mb-4">
          If you have any questions about these Terms of Use, Privacy Policy, or Cookie Policy, please
          contact us:
        </p>
        <h2 className="contact-details text-[22px] font-semibold my-3 font-dm">Contact Details</h2>
        <h2 className="company text-[18px] leading-[18px] font-dm font-normal"><b>Company:</b> ABM, LLC</h2>
        <h2 className="email mt-3.5 text-[18px] leading-[18px] font-dm font-normal"><b>Email:</b> legal@abmize.com</h2>
        <h2 className="email mt-3.5 text-[18px] leading-[18px] font-dm font-normal">
          <b>Call Us:</b> <a href="tel:8777217447" className="call-me text-black no-underline">(877) 721-7447</a>
        </h2>
      </div>
    </div>
  );

  // Cookies Content
  const CookiesContent = () => (
    <div className="terms-content">
      <h4 className="last-update mb-3.5 text-[20px] font-dm font-normal">
        <b>Last Updated:</b> July 2, 2025
      </h4>
      
      <div className="terms-section mb-8 pb-8 border-b border-gray-200">
        <h3 className="text-[22px] font-bold text-[#2d2d2d] mb-2.5 font-dm">
          <span className="text-[#d9305b] mr-2">1.</span> What Are Cookies
        </h3>
        <p className="text-[18px] leading-[30px] text-[#666666] font-dm">
          Cookies are small text files that are placed on your computer or mobile device when you visit a
          website. They are widely used to make websites work more efficiently and provide information to
          the owners of the site.
        </p>
      </div>

      <div className="terms-section mb-8">
        <h3 className="text-[22px] font-bold text-[#2d2d2d] mb-2.5 font-dm">
          <span className="text-[#d9305b] mr-2">2.</span> Types Of Cookies We Use
        </h3>
        <div className="cookie-grid grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              title: "Essential Cookies",
              description: "These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms."
            },
            {
              title: "Analytics Cookies",
              description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website's performance and user experience."
            },
            {
              title: "Functional Cookies",
              description: "These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages."
            },
            {
              title: "Marketing Cookies",
              description: "These cookies may be set through our site by our advertising partners. They may be used to build a profile of your interests and show you relevant adverts on other sites."
            }
          ].map((card, index) => (
            <div key={index} className="cookie-card bg-gradient-to-b from-[rgba(56,120,88,0.1)] to-[rgba(208,211,112,0.1)] p-5 rounded-[20px]">
              <h4 className="text-[18px] font-semibold text-[#2d2d2d] mb-2.5">{card.title}</h4>
              <p className="text-[16px] leading-[24px] text-[#666666]">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="terms-section mb-8 pb-8 border-b border-gray-200">
        <h3 className="text-[22px] font-bold text-[#2d2d2d] mb-2.5 font-dm">
          <span className="text-[#d9305b] mr-2">3.</span> Third-Party Cookies
        </h3>
        <h4 className="third-party-heading text-[18px] leading-[30px] font-semibold text-[#2d2d2d] mb-4">
          We may also use third-party services that place cookies on your device, including:
        </h4>
        <ul className="cookie-list list-none pl-0 mt-2.5">
          {[
            { label: "Google Analytics:", description: "For website analytics and performance monitoring" },
            { label: "Social Media Platforms:", description: "For social sharing functionality" },
            { label: "Advertising Networks:", description: "For targeted advertising (if applicable)" }
          ].map((item, index) => (
            <li key={index} className="relative pl-4 mb-2.5 text-[18px] leading-[30px] text-[#666666] font-dm before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-[13px] before:h-[13px] before:bg-[url('/assets/circle-gradient.svg')] before:bg-contain before:bg-no-repeat before:bg-center">
              <span className="text-[16px] leading-[16px] font-semibold text-[#2d2d2d]">{item.label}</span> {item.description}
            </li>
          ))}
        </ul>
      </div>

      <div className="terms-section mb-8">
        <h3 className="text-[22px] font-bold text-[#2d2d2d] mb-2.5 font-dm">
          <span className="text-[#d9305b] mr-2">4.</span> Managing Cookies
        </h3>
        <h4 className="managing-cookies-heading text-[18px] leading-[30px] font-semibold text-[#2d2d2d] mb-2.5">
          You can control and manage cookies in various ways:
        </h4>
        <div className="cookie-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              title: "Browser Settings",
              description: "Most web browsers allow you to control cookies through their settings preferences. You can set your browser to refuse cookies or delete certain cookies. However, this may affect the functionality of our website."
            },
            {
              title: "Opt-Out Links",
              description: "For analytics cookies, you can opt-out using these links:",
              extra: (
                <h3 className="mt-2 text-[14px] leading-[20px] text-[#666666]">
                  Google Analytics:{" "}
                  <a 
                    href="https://tools.google.com/dlpage/gaoptout" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#d9305b] hover:underline text-[14px] leading-[20px]"
                  >
                    https://tools.google.com/dlpage/gaoptout
                  </a>
                </h3>
              )
            },
            {
              title: "Cookie Consent",
              description: "By continuing to use our website, you consent to our use of cookies as described in this policy. You can withdraw your consent at any time by adjusting your browser settings or contacting us."
            }
          ].map((card, index) => (
            <div key={index} className="cookie-card bg-gradient-to-b from-[rgba(56,120,88,0.1)] to-[rgba(208,211,112,0.1)] p-5 rounded-[20px]">
              <h4 className="text-[18px] font-semibold text-[#2d2d2d] mb-2.5">{card.title}</h4>
              <p className="text-[16px] leading-[24px] text-[#666666]">{card.description}</p>
              {card.extra && card.extra}
            </div>
          ))}
        </div>
      </div>

      <div className="terms-section mb-8 pb-8 border-b border-gray-200">
        <h3 className="text-[22px] font-bold text-[#2d2d2d] mb-2.5 font-dm">
          <span className="text-[#d9305b] mr-2">5.</span> Updates to Cookie Policy
        </h3>
        <p className="text-[18px] leading-[30px] text-[#666666] font-dm">
          We may update this Cookie Policy from time to time to reflect changes in technology, legislation,
          or our business practices. We encourage you to review this policy periodically.
        </p>
      </div>

      <div className="terms-section mb-0 border-none">
        <h3 className="text-[22px] font-bold text-[#2d2d2d] mb-2.5 font-dm">
          <span className="text-[#d9305b] mr-2">6.</span> Questions About Our Policies?
        </h3>
        <p className="text-[18px] leading-[30px] text-[#666666] font-dm mb-4">
          If you have any questions about these Terms of Use, Privacy Policy, or Cookie Policy, please
          contact us:
        </p>
        <h2 className="contact-details text-[22px] font-semibold my-3 font-dm">Contact Details</h2>
        <h2 className="company text-[18px] leading-[18px] font-dm font-normal"><b>Company:</b> ABM, LLC</h2>
        <h2 className="email mt-3.5 text-[18px] leading-[18px] font-dm font-normal"><b>Email:</b> legal@abmize.com</h2>
        <h2 className="email mt-3.5 text-[18px] leading-[18px] font-dm font-normal">
          <b>Call Us:</b> <a href="tel:8777217447" className="call-me text-black no-underline">(877) 721-7447</a>
        </h2>
      </div>

      <p className="resp-time text-[20px] font-normal font-dm mt-4">
        <b>Response Time:</b> We strive to respond to all inquiries within 72 hours / business days.
      </p>
    </div>
  );

  return (
    <>
      <Modal isOpen={activeModal === 'terms'} onClose={closeModal} title="Terms Of Use">
        <TermsContent />
      </Modal>
      
      <Modal isOpen={activeModal === 'privacy'} onClose={closeModal} title="Privacy Policy">
        <PrivacyContent />
      </Modal>
      
      <Modal isOpen={activeModal === 'cookies'} onClose={closeModal} title="Cookie Policy">
        <CookiesContent />
      </Modal>
    </>
  );
});

FooterModals.displayName = 'FooterModals';

export default FooterModals;
