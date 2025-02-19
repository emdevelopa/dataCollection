import { useEffect, useState } from "react";
import BillForm from "./components/bill";
import BirthAndDeathForm from "./components/birthAndDeath";
import BirthDetailsForm from "./components/birthDetails";
import CrimeReportForm from "./components/crime";
import DeathDetailsForm from "./components/deathDetails";
import FleetManagementForm from "./components/fleetManagement";
import CreateOfficeForm from "./CreateOfficeForm";

interface OfficeData {
  id: string;
  officeType: string;
}

const allTabs = [
  {
    name: "Bill",
    component: <BillForm />,
    officeTypes: [
      "electric",
      "hospital",
      "police",
      "Ministry",
      "all",
      "District Office",
    ],
  },
  {
    name: "Crime Report",
    component: <CrimeReportForm />,
    officeTypes: ["police", "all"],
  },
  {
    name: "Fleet Management",
    component: <FleetManagementForm />,
    officeTypes: [
      "fleet",
      "hospital",
      "police",
      "all",
      "Ministry",
      "District Office",
    ],
  },
  {
    name: "Birth & Death",
    component: <BirthAndDeathForm />,
    officeTypes: ["hospital", "all"],
  },
  {
    name: "Birth Details",
    component: <BirthDetailsForm />,
    officeTypes: ["hospital", "all"],
  },
  {
    name: "Death Details",
    component: <DeathDetailsForm />,
    officeTypes: ["hospital", "all"],
  },
];

const FormTabs = ({ id, onback }: { id: string; onback: () => void }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [showTabs, setShowTabs] = useState(false);
  const [tabs, setTabs] = useState(allTabs);
  const [officeType, setOfficeType] = useState<string>();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const parsedUser = storedUser ? JSON.parse(storedUser) : null;
    const office = parsedUser?.office.find(
      (office: OfficeData) => office.id === id
    );
    const officeType = office ? office.officeType : "all";
    console.log(parsedUser);
    setOfficeType(officeType);
    const filteredTabs = allTabs.filter((tab) =>
      tab.officeTypes.includes(officeType)
    );
    setTabs(filteredTabs);
    setActiveTab(0); // Set the active tab to the first filtered tab
  }, [id]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    setShowTabs(false); // Hide tabs on mobile after clicking
  };

  return (
    <div className="mx-auto">
      <h1 className="font-bold text-2xl text-center">
        Office Type: <span className="uppercase">{officeType}</span>
      </h1>
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
        <p
          className="absolute right-10 underline text-blue-500 cursor-pointer"
          onClick={() => {
            setShowForm(true);
            onback();
          }}
        >
          Home
        </p>
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
      {showForm && <CreateOfficeForm onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default FormTabs;
