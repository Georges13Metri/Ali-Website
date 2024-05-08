"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const NewClient = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    town: "",
    email: "",
    phoneNumber: "",
    helpDescription: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    console.log("Form submission:", formData);

    try {
      const response = await fetch("/api/newclient", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setFormData(initialFormData);

      if (!response.ok) {
        throw new Error("Failed to apply form");
      }

      setSuccess(true);
    } catch (error: any) {
      console.error("Error:", error);
      if (error instanceof TypeError) {
        setError(
          "Network error occurred. Please check your internet connection."
        );
      } else {
        setError("Failed to apply form. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="w-full bg-white p-8 flex items-center
    flex-col text-black"
    >
      <div className=" w-full text-center">
        <h1 className="text-4xl font-bold">NEW CLIENT SPECIAL</h1>
      </div>
      <hr className="my-6 border-t-2  w-1/2 border-gray-300" />
      <div
        className="abs grid bg-white grid-cols-1 md:grid-cols-2 
      lg:grid-cols-2 gap-8 p-10 md:p-10 items-center"
      >
        <div className="flex justify-center">
          <Image
            width={200}
            height={100}
            src="/clientfree.png"
            alt="freeclient"
          />
        </div>
        <div
          className="flex flex-col
         justify-center mt-5 text-black"
        >
          <h1 className="text-lg md:text-3xl font-bold mb-4 font-serif">
            A FREE TRANSFORMATION CONSULTATION (£50.00 VALUE)
          </h1>
          <p className="text-sm md:text-base font-serif mb-6 md:mb-8 ">
            Take the first step to success by applying for a FREE Transformation
            Consultation. We will talk about your needs, your goals, lifestyle
            habits, your diet, and establish if we are a good fit to work
            together. I will give you actionable advice on how you can
            successfully progress and achieve more than you thought possible.
            There are limited slots available as I only work with a small number
            of clients at a time, so please complete the form in as much detail
            as you can and I will be in touch with you soon.
          </p>
        </div>
      </div>
      <hr className="my-6 border-t-2  w-1/2 border-gray-300" />
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
                placeholder="Enter Your First Name"
                required
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
                placeholder="Enter Your Last Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                placeholder="Enter your email address"
                title="Please enter a valid email address"
                required
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                placeholder="Enter your phone number"
                pattern="[0-9]{8}"
                title="Please enter a valid phone number (8 digits)"
                required
              />
            </div>
            <div>
              <label htmlFor="town" className="block mb-1">
                Town
              </label>
              <input
                type="text"
                id="town"
                name="town"
                value={formData.town}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                placeholder="Enter your Town"
                required
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="helpDescription" className="block mb-1">
                PLEASE TELL ME WHAT YOU NEED HELP WITH EXACTLY <br />
                (BE AS DETAILED AS POSSIBLE):
              </label>
              <textarea
                name="helpDescription"
                id="helpDescription"
                value={formData.helpDescription}
                onChange={handleChange}
                className="w-full border border-gray-300 
                rounded-lg px-4 py-2"
                rows={3}
                required
              ></textarea>
            </div>
            <div className="col-span-2">
              <button
                type="submit"
                className="lg:w-1/4 w-1/2 bg-transparent text-black
                 hover:bg-gray-300 border border-black py-2"
                disabled={loading}
              >
                {loading ? "Submitting..." : "APPLY"}
              </button>
            </div>
          </div>
        </form>
      </div>
      {success && <p className="text-black">Form submitted successfully!</p>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default NewClient;
