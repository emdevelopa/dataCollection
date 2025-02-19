import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Register = () => {
  const [user, setUser] = useState({
    id: uuidv4(),
    fullname: "",
    office:[],
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(user));
    setMessage("User registered successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Full Name:
        </label>
        <input
          type="text"
          name="fullname"
          value={user.fullname}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Username:
        </label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Password:
        </label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Register
      </button>
      {message && (
        <div className="mt-4 text-center text-green-500">{message}</div>
      )}
    </form>
  );
};

export default Register;
