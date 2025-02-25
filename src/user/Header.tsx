import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  username: string | null;
  handleLogout: () => void;
  setShowForm: (show: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
  username,
  handleLogout,
  setShowForm,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <header className="header flex items-center justify-between p-2 px-[4em] bg-white text-black border border-[gray] rounded-[5em] md:flex-row flex-col md:items-center">
        <div className="flex justify-between w-full md:w-auto lg:hidden">
          <div></div>

          <button
            className="text-black md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars />
          </button>
          <img
            src="https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile"
            className="profile-image w-10 h-10 rounded-full md:hidden"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 w-full justify-between items-center">
          <h2
            style={{ textTransform: "uppercase" }}
            className="text-2xl/10 font-bold text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight text-transform:uppercase"
          >
            Record Data
          </h2>

          <button></button>
          <img
            src="https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile"
            className="profile-image w-20 h-20 object-cover rounded-full"
          />

          {!username ? (
            <>
              <div></div>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
                onClick={() => navigate("/accounts/signIn")}
              >
                Login
              </button>
            </>
          ) : (
            <>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
                onClick={() => setShowForm(true)}
              >
                Create Office
              </button>
              <button
                onClick={() => handleLogout()}
                type="button"
                className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600"
              >
                <span className=""></span>
                <span>logout</span>
              </button>
            </>
          )}
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="flex flex-col absolute left-[4%] w-[60%] top-[12%] space-y-2 mt-4 md:hidden bg-white p-4 shadow-md rounded-lg">
            {!username ? (
              <>
                <div></div>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
                  onClick={() => navigate("/accounts/signIn")}
                >
                  Login
                </button>
              </>
            ) : (
              <>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
                  onClick={() => setShowForm(true)}
                >
                  Create Office
                </button>
                <button
                  onClick={() => handleLogout()}
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600"
                >
                  <span className=""></span>
                  <span>logout</span>
                </button>
              </>
            )}
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
