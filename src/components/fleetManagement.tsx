import React, { useState } from "react";

export default function FleetManagementForm() {
  const [formData, setFormData] = useState({
    startMiles: "",
    endMiles: "",
    date: "",
    amountOfFuel: "",
    volumeOfFuel: "",
    repairsDetails: "",
    repairsCost: "",
    repairPart: "",
    repairLocation: "",
    repairContact: "",
    receiptNumber: "",
    workmanship: "",
    fleetType: "",
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
        Fleet Management
      </h2>
      <div className="mb-4 flex flex-col items-start">
      <select
          name="fleetType"
          id="fleetType"
          className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
          onChange={(e) => handleChange(e as any)}
        >
          <option value="">Select a record type</option>
          <option value="fuel">Fuel</option>
          <option value="mileage">Mileage</option>
          <option value="repairs">Repairs</option>
        </select>
      </div>
      <div className="mb-4 flex flex-col items-start">
        <input
          type="date"
          name="date"
          className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
          onChange={handleChange}
        />
      </div>
      {formData.fleetType === "mileage" && <>
      <div className="mb-4 flex flex-col items-start">
        <input
          type="text"
          name="startMiles"
          className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
          placeholder="Start miles"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 flex flex-col items-start">
        <input
          type="text"
          name="endMiles"
          className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
          placeholder="End miles"
          onChange={handleChange}
        />
      </div>
      </>}
      {formData.fleetType === "fuel" &&<>
      <div className="mb-4 flex flex-col items-start">
        <input
          type="text"
          name="amountOfFuel"
          className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
          placeholder="Amount of fuel"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 flex flex-col items-start">
        <input
          type="text"
          name="volumeOfFuel"
          className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
          placeholder="Volume of fuel"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 flex flex-col items-start">
        <input
          type="text"
          name="receiptNumber"
          className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
          placeholder="Receipt Number"
          onChange={handleChange}
        />
      </div>
      </>}
      {formData.fleetType === "repairs" &&<>
      <div className="mb-4 flex flex-col items-start">
        <input
          type="text"
          name="repairPart"
          className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
          placeholder="Repair Part"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 flex flex-col items-start">
        <input
          type="text"
          name="repairLocation"
          className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
          placeholder="Repair Location"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 flex flex-col items-start">
        <input
          type="text"
          name="repairContact"
          className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
          placeholder="Repair Contact"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 flex flex-col items-start">
        <input
          type="text"
          name="receiptNumber"
          className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
          placeholder="Receipt Number"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 flex flex-col items-start">
        <input
          type="text"
          name="repairsDetails"
          className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
          placeholder="Repairs details"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 flex flex-col items-start">
        <input
          type="text"
          name="repairsCost"
          className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
          placeholder="Repairs cost"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 flex flex-col items-start">
        <input
          type="text"
          name="workmanship"
          className="w-full p-3 border border-black rounded-lg focus:ring focus:ring-blue-300"
          placeholder="Workmanship"
          onChange={handleChange}
        />
      </div>
      </>}
      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-300"
      >
        Submit
      </button>
    </form>
  );
}
