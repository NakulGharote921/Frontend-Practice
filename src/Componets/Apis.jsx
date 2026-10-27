import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = "https://69c8e30a68edf52c954e101a.mockapi.io/TodoApi/TODOS";

function Apis() {
  const [AddUser, AddUser_F] = useState({
    Name: "",
    age: "",
    Phone: "",
    Alive: false,
  });

  const [UserDetil, Set_User] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    FetchData();
  }, []);

  async function FetchData() {
    setLoading(true);
    const { data } = await axios.get(API_URL);
    Set_User(data);
    setLoading(false);
  }

  async function Post_Data(e) {
    e.preventDefault();
    await axios.post(API_URL, AddUser);
    AddUser_F({ Name: "", age: "", Phone: "", Alive: false });
    FetchData();
  }

  function FillingData(e) {
    const { name, value, type, checked } = e.target;
    AddUser_F((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto space-y-8">

        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-gray-800">
          User Manager
        </h1>

        {/* Form Card */}
        <form
          onSubmit={Post_Data}
          className="bg-white rounded-2xl shadow-md p-6 space-y-4"
        >
          <h2 className="text-lg font-semibold text-gray-700">
            Add New User
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              name="Name"
              value={AddUser.Name}
              onChange={FillingData}
              className="border text-black border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              placeholder="Age"
              name="age"
              value={AddUser.age}
              onChange={FillingData}
              className="border  text-black border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Phone"
              name="Phone"
              value={AddUser.Phone}
              onChange={FillingData}
              className="border  text-black border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 cursor-pointer  text-black">
                <input
                  type="radio"
                  name="Alive"
                  checked={AddUser.Alive === true}
                  onChange={FillingData}
                  className="accent-green-600"
                />
                <span>Alive</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer  text-black">
                <input
                  type="radio"
                  name="Alive"
                  checked={AddUser.Alive === false}
                  onChange={FillingData}
                  className="accent-red-600"
                />
                <span>Dead</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-colors"
          >
            Add User
          </button>
        </form>

        {/* User List */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-700">
            Users ({UserDetil.length})
          </h2>

          {loading ? (
            <p className="text-gray-500 text-center py-4">Loading...</p>
          ) : UserDetil.length === 0 ? (
            <p className="text-gray-400 text-center py-4">No users yet.</p>
          ) : (
            UserDetil.map((user) => (
              <div
                key={user.id}
                className="bg-white rounded-xl shadow-sm p-4 flex items-center justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <p className="font-medium text-gray-800">{user.Name}</p>
                  <p className="text-sm text-gray-500">
                    Age: {user.age} · Phone: {user.Phone} ·{" "}
                    <span className={user.Alive ? "text-green-600" : "text-red-600"}>
                      {user.Alive ? "Alive" : "Dead"}
                    </span>
                  </p>
                </div>
                <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded">
                  ID: {user.id}
                </span>
                <button className="btn btn-neutral">Edit</button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Apis;   