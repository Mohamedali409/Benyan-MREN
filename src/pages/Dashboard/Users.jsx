import { useState } from "react";

const Users = ({ setShowDraft }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    const updateData = {
      ...formData,
      [e.target.name]: e.target.value,
    };

    setFormData(updateData);

    const hasData = Object.values(updateData).some(
      (value) => value.trim() !== "",
    );

    setShowDraft(hasData);
  };

  return (
    <div className="p-4">
      <h2>Add user</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        className="form-control mb-3"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        className="form-control mb-3"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="address"
        placeholder="Address"
        className="form-control mb-3"
        value={formData.address}
        onChange={handleChange}
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone"
        className="form-control mb-3"
        value={formData.phone}
        onChange={handleChange}
      />
    </div>
  );
};

export default Users;
