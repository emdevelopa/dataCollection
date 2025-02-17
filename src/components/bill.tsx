import React, { useState } from "react";

export default function BillForm() {
  const [formData, setFormData] = useState({
    billType: "",
    date: "",
    file: null,
    accountNumber: "",
    usage: "",
    amount: "",
    bill: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
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
        Bill Form
      </h2>
      <div className="mb-4 flex flex-col items-start ">
        <select
          name="billType"
          id="billType"
          className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
        >
          <option value="">Select a bill type</option>
          <option value="electricityBill">Electricity bill</option>
          <option value="waterBill">Water bill</option>
        </select>
      </div>
      <div className="mb-4 flex flex-col items-start ">
        <input
          type="date"
          name="date"
          className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 flex flex-col items-start">
        <input
          type="file"
          name="file"
          className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 flex flex-col items-start">
        <input
          type="text"
          name="accountNumber"
          className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
          placeholder="Enter your account number"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 flex flex-col items-start">
        <input
          type="text"
          name="usage"
          className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
          placeholder="Usage (Meter Reading)"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 flex flex-col items-start">
        <input
          type="text"
          name="amount"
          className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
          placeholder="Amount No"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 flex flex-col items-start">
        <input
          type="text"
          name="bill"
          className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
          placeholder="Bill"
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
