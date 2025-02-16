import React, { useState } from "react";

export default function BirthAndDeathForm() {
  const [formData, setFormData] = useState({
    birthAndDeath: "",
    numberOfBirths: "",
    numberOfDeaths: "",
    date: "",
    emergencies: "",
    referrals: "",
    specialCases: "",
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
        Birth and Death Report
      </h2>
      <div className="mb-4 flex flex-col items-start">
        <input
          type="text"
          name="birthAndDeath"
          className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
          placeholder="Birth and Death"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 flex flex-col items-start">
        <input
          type="text"
          name="numberOfBirths"
          className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
          placeholder="Number of births"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 flex flex-col items-start">
        <input
          type="text"
          name="numberOfDeaths"
          className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
          placeholder="Number of deaths"
          onChange={handleChange}
        />
      </div>
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
          name="emergencies"
          className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
          placeholder="Emergencies"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 flex flex-col items-start">
        <input
          type="text"
          name="referrals"
          className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
          placeholder="Referrals"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 flex flex-col items-start">
        <input
          type="text"
          name="specialCases"
          className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
          placeholder="Special cases"
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