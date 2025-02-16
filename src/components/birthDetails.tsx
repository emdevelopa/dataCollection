import React, { useState } from "react";

export default function BirthDetailsForm() {
  const [formData, setFormData] = useState({
    dateOfBirth: "",
    name: "",
    gender: "",
    fathersName: "",
    mothersName: "",
    parentProfession: "",
    ghanaCardIssued: "",
    birthCertificateIssued: "",
    address: "",
    parentsGhanaCardDetails: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg border"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
        Birth Details
      </h2>
      <div className="overflow-scroll h-[70vh]">
        <div className="mb-4 flex flex-col items-start">
          <input
            type="date"
            name="dateOfBirth"
            className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 flex flex-col items-start">
          <input
            type="text"
            name="name"
            className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Name"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 flex flex-col items-start">
          <input
            type="text"
            name="gender"
            className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Gender"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 flex flex-col items-start">
          <input
            type="text"
            name="fathersName"
            className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Father's name"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 flex flex-col items-start">
          <input
            type="text"
            name="mothersName"
            className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Mother's name"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 flex flex-col items-start">
          <input
            type="text"
            name="parentProfession"
            className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Parent profession"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 flex flex-col items-start">
          <input
            type="text"
            name="ghanaCardIssued"
            className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Ghanacard issued?"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 flex flex-col items-start">
          <input
            type="text"
            name="birthCertificateIssued"
            className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Birth certificate issued?"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 flex flex-col items-start">
          <input
            type="text"
            name="address"
            className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Address"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 flex flex-col items-start">
          <input
            type="text"
            name="parentsGhanaCardDetails"
            className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Parents Ghana card details"
            onChange={handleChange}
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-300"
      >
        Submit
      </button>
    </form>
  );
}