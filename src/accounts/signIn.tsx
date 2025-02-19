import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    if (storedUser.username === username && storedUser.password === password) {
      setMessage("User signed in successfully!");
      setIsError(false);
      navigate("/", { state: { username: storedUser.username } });
    } else {
      setMessage("Invalid username or password!");
      setIsError(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Username:</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Sign In
        </button>
        {message && (
          <div
            className={`mt-4 text-center ${
              isError ? "text-red-500" : "text-green-500"
            }`}
          >
            {message}
          </div>
        )}
      </form>
      <div className="mt-4">
        <p>
          Don't have an account?{" "}
          <Link
            to="/accounts/register"
            className="text-blue-500 hover:underline"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
