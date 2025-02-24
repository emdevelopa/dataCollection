import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AppSelect from "./components/Select";
import { regions } from "./regions";

function CreateOfficeForm({ onClose }: { onClose: () => void }) {
  const [officeType, setOfficeType] = useState("");
  const [region, setRegion] = useState("");
  const [district, setDistrict] = useState("");
  const [street, setStreet] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [managerName, setManagerName] = useState("");
  const [managerEmail, setManagerEmail] = useState("");
  const [managerPhone, setManagerPhone] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !officeType ||
      !region ||
      !district ||
      !street ||
      !phoneNumber ||
      !email ||
      !managerName ||
      !managerEmail ||
      !managerPhone
    ) {
      setErrorMessage("All fields are required.");
      return;
    }

    const newOfficeData = {
      id: uuidv4(), // Generate a unique ID for the office
      officeType,
      address: { region, district, street },
      phoneNumber,
      email,
      manager: { name: managerName, email: managerEmail, phone: managerPhone },
    };

    const existingUser = localStorage.getItem("user");
    const user = existingUser ? JSON.parse(existingUser) : null;
    if (user) {
      // Adjust this to dynamically get the current user
      user.office.push(newOfficeData);
      localStorage.setItem("user", JSON.stringify(user));
    }

    setSuccessMessage("Office created successfully!");
    setErrorMessage("");
    setTimeout(() => {
      setSuccessMessage("");
      onClose();
      window.location.reload();
    }, 500);
  };

  // Conditional logic to show/hide inputs based on office type
  // const getAvailableForms = () => {
  //   switch (officeType) {
  //     case "hospital":
  //       return ["Patient Records", "Billing"];
  //     case "police":
  //       return ["Crime Reports", "Lost & Found"];
  //     case "ministry":
  //     case "district":
  //       return ["Government Records", "Public Services"];
  //     default:
  //       return [];
  //   }
  // };
  // console.log(regions.find((item:any) => item.value === region)?.districts);

  return (
    <div className="fixed overflow-auto inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">Create Office</h2>
        {successMessage && (
          <div className="mb-4 text-green-500">{successMessage}</div>
        )}
        {errorMessage && (
          <div className="mb-4 text-red-500">{errorMessage}</div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Office Type */}
          <div className="mb-4">
            <select
              value={officeType}
              onChange={(e) => setOfficeType(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="" disabled>
                Select Office Type
              </option>
              <option value="hospital">Hospital</option>
              <option value="police">Police</option>
              <option value="ministry">Ministry</option>
              <option value="district">District Office</option>
            </select>
          </div>

          {/* Address Fields */}
          <div className="mb-4">
            {/* <input
              type="text"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              placeholder="Region"
              className="w-full p-2 border border-gray-300 rounded"
            /> */}
            <AppSelect id="region" name="region" value={region} setValue={setRegion} options={regions} />
          </div>
          {region && <div className="mb-4">
            {/* <input
              type="text"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              placeholder="District"
              className="w-full p-2 border border-gray-300 rounded"
              /> */}
            <AppSelect id="district" name="district" value={district} setValue={setDistrict} options={regions.find((item:any) => item.value === region)?.districts || []} />
          </div>}
          <div className="mb-4">
            <input
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              placeholder="Street"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Contact Info */}
          <div className="mb-4">
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Office Phone Number"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Office Email"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Manager Details */}
          <div className="mb-4">
            <input
              type="text"
              value={managerName}
              onChange={(e) => setManagerName(e.target.value)}
              placeholder="Manager Name"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              value={managerEmail}
              onChange={(e) => setManagerEmail(e.target.value)}
              placeholder="Manager Email"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              value={managerPhone}
              onChange={(e) => setManagerPhone(e.target.value)}
              placeholder="Manager Phone"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Conditionally Display Forms Based on Office Type */}
          {/* {officeType && (
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Available Forms:</h3>
              <ul className="list-disc pl-5">
                {getAvailableForms().map((form, index) => (
                  <li key={index} className="text-gray-700">
                    {form}
                  </li>
                ))}
              </ul>
            </div>
          )} */}

          {/* Buttons */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateOfficeForm;
