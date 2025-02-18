import { useEffect, useState } from "react";
import "./App.css";
import CreateOfficeForm from "./CreateOfficeForm";
import FormData from "./form";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [officeId, setOfficeId] = useState<string | null>(null);
  interface Office {
    id: string;
    officeType: string;
    address: {
      region: string;
      district: string;
      street: string;
    };
    phoneNumber: string;
    email: string;
    manager: {
      name: string;
      email: string;
      phone: string;
    };
  }

  const [offices, setOffices] = useState<Office[]>([]);

  useEffect(() => {
    const storedOffices = localStorage.getItem("offices");
    if (storedOffices) {
      setOffices(JSON.parse(storedOffices));
     
      
    }
  }, []);

  if (officeId) return <FormData id={officeId} onback={()=>setOfficeId("")} />;

  return (
    <>
      <section className="flex  gap-6 p-6">
        {offices.length === 0 ? (
          <h1 className="mx-auto text-[34px] font-boldyy">No offices created yet. Please create an office.</h1>
        ) : (
          offices.map((office, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-md" onClick={()=>setOfficeId(office.id)}> 
              <h2 className="text-xl font-bold uppercase">{office.officeType}</h2>
              <p>Region: {office.address.region}</p>
              <p>District: {office.address.district}</p>
              <p>Street: {office.address.street}</p>
              <p>Phone: {office.phoneNumber}</p>
              <p>Email: {office.email}</p>
              <h3 className="font-semibold mt-2">Manager Details:</h3>
              <p>Name: {office.manager.name}</p>
              <p>Email: {office.manager.email}</p>
              <p>Phone: {office.manager.phone}</p>
            </div>
          ))
        )}
      </section>
      <div className="flex justify-center mt-6">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
          onClick={() => setShowForm(true)}
        >
          Create Office
        </button>
      </div>
      {showForm && <CreateOfficeForm onClose={() => setShowForm(false)} />}
    </>
  );
}

export default App;
