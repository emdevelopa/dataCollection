import React from "react";
// import Header from "./Header";
// import BusLayout from "./components/bus";
import { useState } from "react";
import OfficeCard from "../components/OfficeCard";
import FormData from "../form";
interface DashboardProps {
  username: string;
  data: any[];
  setShowForm: (show: boolean) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ username, data, setShowForm }) => {
  const [officeId, setOfficeId] = useState<string | undefined>(undefined);
  if (officeId)
    return <FormData id={officeId} onback={() => setOfficeId("")} />;
  return (
    <div>
      <div className="">
        <div className="flex flex-col gap-4">
          <div>
            {/* <HistoryTable /> */}
            <div className="p-4 grid md:grid-cols-3 gap-4">
              {data.length === 0 && username ? (
                <div className="flex bg-[#000000b0] absolute left-0 right-0 top-0 bottom-0 flex-col items-center justify-center gap-4 ">
                  <h1 className="mx-auto text-[34px] text-white font-boldyy">
                    No offices created yet. Please create an office.
                  </h1>

                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
                    onClick={() => setShowForm(true)}
                  >
                    Create Office
                  </button>
                </div>
              ) : (
                data.map((office, index) => (
                  <OfficeCard
                    key={index}
                    data={office}
                    setOfficeId={setOfficeId}
                  />
                ))
              )}
            </div>
          </div>
        </div>
        {/* <HistoryTable /> */}
      </div>
    </div>
  );
};

export default Dashboard;
