import React, { useState } from "react";
import CreateOfficeForm from "../CreateOfficeForm";
import Header from "./Header";
import Dashboard from "./Dashboard";

interface UserPageProps {
  showForm: boolean;
  data: any;
  setOfficeId: (id: string) => void;
  username: string;
  onLogout: () => void;
  setShowForm: (show: boolean) => void;
}

const UserPage: React.FC<UserPageProps> = ({
  showForm,
  data,
  setOfficeId,
  username,
  onLogout,
  setShowForm,
}) => {
  return (
    <div className="px-[1em] py-[1em] lg:px-[4em] md:px-[4em] sm:px-[2em] ">
      <Header
        username={username}
        handleLogout={onLogout}
        setShowForm={setShowForm}
      />
      <main>
        <Dashboard username={username} data={data} setShowForm={setShowForm} />
        {showForm && <CreateOfficeForm onClose={() => setShowForm(false)} />}
      </main>
    </div>
  );
};

export default UserPage;
