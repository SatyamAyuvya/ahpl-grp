"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaAngleDown } from "react-icons/fa";
import { HiOutlineDevicePhoneMobile, HiOutlineEnvelope } from "react-icons/hi2";

export default function ContactUs() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    purpose: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (field === "name" || field === "email") {
      setFormErrors((prev) => ({
        ...prev,
        [field]: value.trim() === "",
      }));
    }
  };

  const handleSubmitClick = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const nameError = formData.name.trim() === "";
    const emailError =
      formData.email.trim() === "" || !emailRegex.test(formData.email);

    setFormErrors({
      name: nameError,
      email: emailError,
    });

    if (nameError || emailError) return;

    alert("Form submitted successfully!");
    console.log("Submitted Data:", formData);

    setFormData({
      name: "",
      email: "",
      purpose: "",
      message: "",
    });
  };

  const isSubmitDisabled =
    formData.name.trim() === "" || formData.email.trim() === "";

  const handleMailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handlePhoneClick = (phone) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <div
      id="contactUs"
      className="min-h-screen w-full py-10 px-5 flex justify-center bg-black"
    >
      <div className="flex flex-col w-full xl:w-[55%] bg-white px-8 py-10 xl:px-20 xl:py-12 2xl:px-32 2xl:py-14 rounded-lg">
        <h2 className="text-black font-bold text-[26px] mb-6 text-center xl:text-left">
          Get In Touch
        </h2>

        {/* Name */}
        <label className="text-sm font-semibold text-black mb-1">
          Your Name (Required)
        </label>
        <input
          type="text"
          className={`border rounded-md px-4 py-2 mb-4 ${
            formErrors.name ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter your name"
          value={formData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
        />
        {formErrors.name && (
          <p className="text-red-500 text-sm -mt-3 mb-3">
            Please fill out this field
          </p>
        )}

        {/* Email */}
        <label className="text-sm font-semibold text-black mb-1">
          Your Email (Required)
        </label>
        <input
          type="email"
          className={`border rounded-md px-4 py-2 mb-4 ${
            formErrors.email ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
        />
        {formErrors.email && (
          <p className="text-red-500 text-sm -mt-3 mb-3">
            {formData.email.trim() === ""
              ? "Please fill out this field"
              : "Please enter a valid email address"}
          </p>
        )}

        {/* Purpose */}
        <label className="text-sm font-semibold text-black mb-1">Purpose</label>
        <div className="relative mb-4">
          <select
            className="block w-full bg-white text-gray-700 text-sm px-4 py-2 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 appearance-none"
            value={formData.purpose}
            onChange={(e) => handleInputChange("purpose", e.target.value)}
          >
            <option value="" disabled hidden>
              Select purpose
            </option>
            <option value="general">💬 General Inquiry</option>
            <option value="support">🛠️ Support</option>
            <option value="feedback">📝 Feedback</option>
          </select>
          <FaAngleDown
            className="pointer-events-none absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
            size={16}
          />
        </div>

        {/* Message */}
        <label className="text-sm font-semibold text-black mb-1">
          Your Message
        </label>
        <textarea
          className="border border-gray-300 rounded-md px-4 py-2 mb-6 resize-none"
          rows={5}
          placeholder="Write your message..."
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
        />

        {/* Submit */}
        <button
          onClick={handleSubmitClick}
          className={`w-full xl:w-[60%] mx-auto py-3 text-white font-semibold rounded-md transition ${
            isSubmitDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Submit
        </button>

        {/* Contact Info */}
        <div className="flex flex-col items-start mt-10 space-y-4 text-sm text-black">
          <div className="flex flex-col gap-2">
            <span>To Apply, Mail Us Your Resume At:</span>
            <button
              onClick={() => handleMailClick("careers@example.com")}
              className="flex items-center gap-2 text-blue-600 hover:underline"
            >
              <HiOutlineEnvelope className="text-lg" />
              <span className="leading-none">careers@example.com</span>
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <span>For Creator Program, Mail Us At:</span>
            <button
              onClick={() => handleMailClick("creators@example.com")}
              className="flex items-center gap-2 text-blue-600 hover:underline"
            >
              <HiOutlineEnvelope className="text-lg" />
              <span className="leading-none">creators@example.com</span>
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <span>For Corporate Gifting, Contact Us On:</span>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => handleMailClick("corporate@example.com")}
                className="flex items-center gap-2 text-blue-600 hover:underline"
              >
                <HiOutlineEnvelope className="text-lg" />
                <span className="leading-none">corporate@example.com</span>
              </button>
              <button
                onClick={() => handlePhoneClick("+919876543210")}
                className="flex items-center gap-2 text-blue-600 hover:underline"
              >
                <HiOutlineDevicePhoneMobile className="text-lg" />
                <span className="leading-none">9876543210</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
