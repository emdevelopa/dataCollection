import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Register from "./accounts/register";
import SignIn from "./accounts/signIn";
import "./App.css";
import FormData from "./form";
import UserPage from "./user/page.js";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [officeId, setOfficeId] = useState<string | null>(null);
  const navigate = useNavigate();
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
      // navigate("/accounts/register");
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

  const handleLogout = () => {
    localStorage.setItem("user", "");
    navigate("/accounts/signIn");
  };

  return (
    <Routes>
      <Route path="/accounts/signIn" element={<SignIn />} />
      <Route path="/accounts/register" element={<Register />} />
      <Route
        path="/"
        element={
          <UserPage
            // key={index}
            setShowForm={setShowForm}
            showForm={showForm}
            data={offices}
            setOfficeId={setOfficeId}
            username={username}
            onLogout={handleLogout}
          />
        }
      />
    </Routes>
  );
}

export default App;
