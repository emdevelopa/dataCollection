import { useState, useEffect } from "react";
import { useNavigate, Routes, Route, useLocation } from "react-router-dom";
import FormData from "./form";
import CreateOfficeForm from "./CreateOfficeForm";
import SignIn from "./accounts/signIn";
import Register from "./accounts/register";
import "./App.css";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [officeId, setOfficeId] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState("");
  
  // const user = localStorage.getItem("user")

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
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      // navigate("/accounts/signIn");
      navigate("/accounts/register");
    } else {
      const user = JSON.parse(storedUser);
      if (user.office) {
        setUsername(user.username);
        setOffices(user.office);
      }
    }
  }, [navigate]);

  if (officeId)
    return <FormData id={officeId} onback={() => setOfficeId("")} />;

  return (
    <Routes>
      <Route path="/accounts/signIn" element={<SignIn />} />
      <Route path="/accounts/register" element={<Register />} />
      <Route
        path="/"
        element={
          <>
            {username && (
              <div className="text-center text-2xl font-bold mb-4">
                Welcome, {username}!
              </div>
            )}
            <section className="flex gap-6 p-6">
              {offices.length === 0 ? (
                <h1 className="mx-auto text-[34px] font-boldyy">
                  No offices created yet. Please create an office.
                </h1>
              ) : (
                offices.map((office, index) => (
                  <div key={index} className="p-4 border rounded-lg shadow-md">
                    <h2 className="text-xl font-bold uppercase">
                      {office.officeType}
                    </h2>
                    <p>Region: {office.address.region}</p>
                    <p>District: {office.address.district}</p>
                    <p>Street: {office.address.street}</p>
                    <p>Phone: {office.phoneNumber}</p>
                    <p>Email: {office.email}</p>
                    <h3 className="font-semibold mt-2">Manager Details:</h3>
                    <p>Name: {office.manager.name}</p>
                    <p>Email: {office.manager.email}</p>
                    <p>Phone: {office.manager.phone}</p>
                    <button
                      className="mt-4 bg-green-500 text-white px-3 py-1 rounded-lg shadow-md hover:bg-green-600"
                      onClick={() => setOfficeId(office?.id)}
                    >
                      Open Office
                    </button>
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
            {showForm && (
              <CreateOfficeForm onClose={() => setShowForm(false)} />
            )}
          </>
        }
      />
    </Routes>
  );
}

export default App;
