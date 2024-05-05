"use client";
import React, { useEffect, useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    comment: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    console.log("Form Data:", formData);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log("Response:", response);

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSuccess(true);
    } catch (error: any) {
      console.error("Error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (success) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        comment: "",
      });
    }
  }, [success]);

  return (
    <div
      className="w-full bg-white p-8 flex items-center
     flex-col text-black"
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">CONTACT ME</h1>
        <p className="text-gray-600 mt-2">
          Whatever your question or query, please feel free to get in touch and
          I will get back to you promptly.
        </p>
        <hr className="my-6 border-t-2 border-gray-200" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="lg:order-last">
          <h2 className="text-lg font-semibold mb-2">TELEPHONE</h2>
          <p>07743346007</p>
        </div>
        <div className="lg:order-first">
          <h2 className="text-lg font-semibold mb-2">EMAIL</h2>
          <p>mark@markpersonaltraining.com</p>
        </div>
        <div className="lg:order-last">
          <h2 className="text-lg font-semibold mb-2">ADDRESS</h2>
          <p>
            82 Manor Road,
            <br />
            Lancing,
            <br />
            West Sussex BN15 0HD
            <br />
            United Kingdom
          </p>
        </div>
        <div className="lg:order-first">
          <h2 className="text-lg font-semibold mb-2">TRAINING HOURS</h2>
          <p>
            Monday - Friday: 8:00 - 21:00
            <br />
            Saturday - Sunday: 8:00 - 14:00
          </p>
        </div>
      </div>
      <hr className="my-6 border-t-2 border-gray-200" />
      <div className="lg:w-1/2 lg:mx-auto">
        <h2 className="text-lg font-semibold mb-2">CONTACT ME</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border border-gray-300
                 rounded-lg px-4 py-2"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border border-gray-300 
                rounded-lg px-4 py-2"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block mb-1">
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="comment" className="block mb-1">
                Comment
              </label>
              <textarea
                name="comment"
                id="comment"
                value={formData.comment}
                onChange={handleChange}
                className="w-full border border-gray-300 
                rounded-lg px-4 py-2"
                rows={3}
              ></textarea>
            </div>
            <div className="col-span-2">
              <button
                type="submit"
                className="lg:w-1/4 w-1/2 bg-transparent text-black
                 hover:bg-gray-300 border border-black py-2"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </form>
      </div>
      {success && (
        <p className="text-green-500">Form submitted successfully!</p>
      )}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default ContactUs;
