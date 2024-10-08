import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AdminNavbar = ({ setIsAddModal }) => {
  const { user } = useSelector((store) => store.user);

  return (
    <div className="w-full flex justify-between items-center px-5 py-3 border-b border-zinc-500">
      <h1>{user.email}</h1>
      <div className="flex gap-x-3">
        <Link to="/">Anasayfa</Link>
        <button onClick={() => setIsAddModal(true)}>Yeni Proje</button>
      </div>
    </div>
  );
};

export default AdminNavbar;
