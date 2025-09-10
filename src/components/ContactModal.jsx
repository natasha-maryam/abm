import { useState } from "react";
import businessImage from "../assets/images/contact.svg"; // Using an existing business image
import call from "../assets/images/call-black.png"

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    organizationName: "",
    consultationType: "phone",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Close modal after submission
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-30 flex items-start justify-center p-4 pt-4 md:pt-40 animate-fadeIn"
      style={{ zIndex: 999999 }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl  max-w-[90%] md:max-w-[60%] w-full max-h-[95vh] md:max-h-[90vh] overflow-y-auto shadow-2xl transform animate-slideUp"
        style={{ zIndex: 1000000 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex">
          {/* Left side - Image */}
          <div className="hidden md:block w-1/2 rounded-l-2xl p-0 flex-shrink-0 relative overflow-hidden">
            <div className="h-full flex flex-col items-center justify-between p-8">
              {/* Business image area */}
              <div className="flex-1 flex items-center justify-center relative">
                <div className="relative overflow-hidden">
                  {/* Professional business image */}
                  <img
                    src={businessImage}
                    alt="Business Growth"
                    // className="w-48 h-56 object-cover"
                  />
                </div>
              </div>

              {/* Phone number at bottom */}
              <div className="w-[90%]">
                <div className="flex items-center  rounded-2xl px-6 py-3 border border-gradient-to-r from-[#DE5FCB] to-[#DED65F]">
                  <img src={call} className="w-[22px] h-[22px]" />
                  <span className="text-lg font-medium pl-3">
                    (877) 721-7447
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="w-full md:w-1/2 p-8">
            {/* Close button */}
            <div className="flex justify-end mb-4">
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 text-2xl"
                aria-label="Close modal"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* First Name and Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-[16px] font-medium text-gray-700 font-dm  mb-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border-b  border-b-[2px] border-[#8D8D8D] focus:border-green-500 focus:outline-none bg-transparent -mt-2"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-[16px] font-medium text-gray-700 mb-1 font-dm"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border-b  border-b-[2px] border-[#8D8D8D] focus:border-green-500 focus:outline-none bg-transparent -mt-2"
                    required
                  />
                </div>
              </div>

              {/* Email and Phone Number */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[16px] font-medium text-gray-700 mb-1 font-dm"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border-b  border-b-[2px] border-[#8D8D8D] focus:border-green-500 focus:outline-none bg-transparent -mt-2"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-[16px] font-medium text-gray-700 mb-1 font-dm"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border-b  border-b-[2px] border-[#8D8D8D] focus:border-green-500 focus:outline-none bg-transparent -mt-2"
                    required
                  />
                </div>
              </div>

              {/* Organization Name */}
              <div>
                <label
                  htmlFor="organizationName"
                  className="block text-[16px] font-medium text-gray-700 mb-1 font-dm"
                >
                  Organization Name
                </label>
                <input
                  type="text"
                  id="organizationName"
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border-b  border-b-[2px] border-[#8D8D8D] focus:border-green-500 focus:outline-none bg-transparent -mt-2"
                />
              </div>

              {/* Consultation Type */}
              <div>
                <label className="block text-[20px] font-medium mb-3 font-clash">
                  Select Consultation?
                </label>
                <div className="flex space-x-6">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="consultationType"
                      value="phone"
                      checked={formData.consultationType === "phone"}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      formData.consultationType === "phone" 
                        ? "bg-black border-black" 
                        : "bg-gray-300 border-gray-300"
                    }`}>
                      {formData.consultationType === "phone" && (
                        <svg width="10" height="7" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 4.5L4.5 8L11 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    <span className="ml-2 text-[14px]  font-dm">
                      Phone Consultation
                    </span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="consultationType"
                      value="email"
                      checked={formData.consultationType === "email"}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      formData.consultationType === "email" 
                        ? "bg-black border-black" 
                        : "bg-gray-300 border-gray-300"
                    }`}>
                      {formData.consultationType === "email" && (
                        <svg width="10" height="7" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 4.5L4.5 8L11 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    <span className="ml-2 text-[14px]  font-dm">
                      Email Consultation
                    </span>
                  </label>
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-[16px] font-medium font-dm mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={1}
                  className="w-full px-3 py-2 border-b  border-b-[2px] border-[#8D8D8D] focus:border-green-500 focus:outline-none bg-transparent resize-none"
                  placeholder=""
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="font-nunito bg-[#68EF78] hover:bg-green-400 text-gray-800 font-semibold py-3 px-6 rounded-full transition-colors duration-200 -mt-4"
                >
                  Send Message
                </button>
              </div>
            </form>

            {/* Mobile phone number display */}
            <div className="md:hidden mt-6">
              <div className="flex items-center  rounded-2xl px-6 py-3 border border-gradient-to-r from-[#DE5FCB] to-[#DED65F]">
                <img src={call} className="w-[22px] h-[22px]" />
                <span className="text-lg font-medium pl-3">(877) 721-7447</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
