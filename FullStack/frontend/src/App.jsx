import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API = "http://localhost:3000/users";

const App = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const [editingId, setEditingId] = useState(null);

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const res = await axios.get(API);
      setUsers(res.data);
    } catch (err) {
      toast.error("Failed to fetch users!");
    }
  };

  // Create or update user
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`${API}/${editingId}`, form);
        toast.success("User updated!");
        setEditingId(null);
      } else {
        await axios.post(API, form);
        toast.success("User created!");
      }
      setForm({ name: "", email: "", address: "" });
      fetchUsers();
    } catch (err) {
      toast.error("Failed to save user!");
    }
  };

  // Load data into form for editing
  const handleEdit = (user) => {
    setForm({ name: user.name, email: user.email, address: user.address });
    setEditingId(user._id);
  };

  // Delete user
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      await axios.delete(`${API}/${id}`);
      toast.success("User deleted!");
      fetchUsers();
    } catch (err) {
      toast.error("Failed to delete user!");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">CRUD User Form</h1>

      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="text"
          placeholder="Address"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {editingId ? "Update" : "Create"}
        </button>
      </form>

      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user._id} className="border p-3 rounded flex justify-between items-center">
            <div>
              <strong>{user.name}</strong> | {user.email} | {user.address}
            </div>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(user)}
                className="text-yellow-600 hover:underline"
              >
                ✏️ Edit
              </button>
              <button
                onClick={() => handleDelete(user._id)}
                className="text-red-600 hover:underline"
              >
                🗑️ Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Toast Container (Required for react-toastify) */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Bounce}
        theme="light"
      />
    </div>
  );
};

export default App;
