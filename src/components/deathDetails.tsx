import React, { useState } from "react";

export default function DeathDetailsForm() {
  const [formData, setFormData] = useState({
    date: "",
    parentsNames: "",
    dateOfBirth: "",
    dateOfDeath: "",
    causeOfDeath: "",
    placeOfDeath: "",
    identified: "",
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
        Death Details
      </h2>
      <div className="mb-4 flex flex-col items-start">
        <input
          type="date"
          name="date"
          className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 flex flex-col items-start">
        <input
          type="text"
          name="parentsNames"
          className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
          placeholder="Parents Names"
          onChange={handleChange}
        />
      </div>
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
          type="date"
          name="dateOfDeath"
          className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 flex flex-col items-start">
        <input
          type="text"
          name="causeOfDeath"
          className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
          placeholder="Cause of death"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 flex flex-col items-start">
        <input
          type="text"
          name="placeOfDeath"
          className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
          placeholder="Place of death"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 flex flex-col items-start">
        <input
          type="text"
          name="identified"
          className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
          placeholder="Identified"
          onChange={handleChange}
        />
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