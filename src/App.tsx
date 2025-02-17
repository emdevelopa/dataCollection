import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import FormData from "./form";
import CreateOfficeForm from "./CreateOfficeForm";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showForm, setShowForm] = useState(false);

  if (localStorage.getItem("officeData")) return <FormData />;

  return (
    <>
      <section className="flex justify-between gap-6 p-6">
        <div className="card bg-white border border-gray-200 rounded-lg shadow-md p-6 w- text-center">
          <img
            src="https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Office Desk"
            className="w-full h-32 object-cover rounded-t-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Office Desk</h3>
          <p className="text-gray-600 mb-2">
            Find the perfect desk for your office space.
          </p>
          <p className="text-gray-600">
            Our desks are designed to provide comfort and functionality, making
            your work environment more productive.
          </p>
        </div>
        <div className="card bg-white border border-gray-200 rounded-lg shadow-md p-6  text-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1661931749081-23d69ddb62d1?q=80&w=1583&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Office Chair"
            className="w-full h-32 object-cover rounded-t-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Office Chair</h3>
          <p className="text-gray-600 mb-2">
            Choose a comfortable chair for your office.
          </p>
          <p className="text-gray-600">
            Our chairs are ergonomically designed to support your posture and
            reduce fatigue during long working hours.
          </p>
        </div>
        <div className="card bg-white border border-gray-200 rounded-lg shadow-md p-6  text-center">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Office Desk"
            className="w-full h-32 object-cover rounded-t-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Office Desk</h3>
          <p className="text-gray-600 mb-2">
            Find the perfect desk for your office space.
          </p>
          <p className="text-gray-600">
            Our desks are designed to provide comfort and functionality, making
            your work environment more productive.
          </p>
        </div>
        <div className="card bg-white border border-gray-200 rounded-lg shadow-md p-6  text-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1670315267667-69a0b41d8384?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Office Chair"
            className="w-full h-32 object-cover rounded-t-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Office Chair</h3>
          <p className="text-gray-600 mb-2">
            Choose a comfortable chair for your office.
          </p>
          <p className="text-gray-600">
            Our chairs are ergonomically designed to support your posture and
            reduce fatigue during long working hours.
          </p>
        </div>
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
