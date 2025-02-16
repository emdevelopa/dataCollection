import { useState } from "react";
import BillForm from "./components/bill";
import BirthAndDeathForm from "./components/birthAndDeath";
import BirthDetailsForm from "./components/birthDetails";
import CrimeReportForm from "./components/crime";
import DeathDetailsForm from "./components/deathDetails";
import FleetManagementForm from "./components/fleetManagement";

const tabs = [
  { name: "Bill", component: <BillForm /> },
  { name: "Crime Report", component: <CrimeReportForm /> },
  { name: "Fleet Management", component: <FleetManagementForm /> },
  { name: "Birth & Death", component: <BirthAndDeathForm /> },
  { name: "Birth Details", component: <BirthDetailsForm /> },
  { name: "Death Details", component: <DeathDetailsForm /> },
];

const FormTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showTabs, setShowTabs] = useState(false);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    setShowTabs(false); // Hide tabs on mobile after clicking
  };

  return (
    <div className="mx-auto">
      <button
        className="block md:hidden absolute top-1 right-2 p-1 min-w-[2em] bg-blue-600 text-white rounded-lg mb-4"
        onClick={() => setShowTabs(!showTabs)}
      >
        {showTabs ? "X" : "Menu"}
      </button>
      <div
        className={`${
          showTabs
            ? "flex flex-col absolute z-10 bg-[#000000e7] h-screen w-[80%] top-0"
            : "hidden"
        } md:flex md:flex-row border-b lg:flex lg:justify-center lg:items-center`}
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`p-3 text-center ${
              activeTab === index
                ? "border-b-2 md:border-b-0 text-blue-600 md:border-r-2 border-blue-600 font-bold lg:border-b-2 lg:border-r-0 "
                : "text-white lg:text-black md:text-black "
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="p-6 bg-white shadow-m mt-4 rounded-lg">
        {tabs[activeTab].component}
      </div>
    </div>
  );
};

export default FormTabs;
