import React, { useState } from "react";

export default function CrimeReportForm() {
  const [formData, setFormData] = useState({
    // date: "",
    numberOfArrests: "",
    numberOnRemand: "",
    reportedCases: "",
    closedCases: "",
    casesTakenToCourt: "",
    casesPostponed: "",
    postponementReason: "",
    trafficOffenses: "",
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
        Crime Report
      </h2>
      {/* <div className="mb-4 flex flex-col items-start">
        <input
          type="date"
          name="date"
          className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
          onChange={handleChange}
        />
      </div> */}
      <div className="mb-4 flex flex-col items-start">
        <input
          type="text"
          name="numberOfArrests"
          className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
          placeholder="Number of arrests"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 flex flex-col items-start">
        <input
          type="text"
          name="numberOnRemand"
          className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
          placeholder="No. on remand"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 flex flex-col items-start">
        <input
          type="text"
          name="reportedCases"
          className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
          placeholder="Reported cases"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 flex flex-col items-start">
        <input
          type="text"
          name="closedCases"
          className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
          placeholder="Closed cases"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 flex flex-col items-start">
        <input
          type="text"
          name="casesTakenToCourt"
          className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
          placeholder="Cases taken to court"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 flex flex-col items-start">
        <input
          type="text"
          name="casesPostponed"
          className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
          placeholder="Cases postponed"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 flex flex-col items-start">
        <input
          type="text"
          name="postponementReason"
          className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
          placeholder="Reason for postponement"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 flex flex-col items-start">
        <input
          type="text"
          name="trafficOffenses"
          className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
          placeholder="Traffic offenses"
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
