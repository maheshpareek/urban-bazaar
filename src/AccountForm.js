import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function AccountForm({ userDetails, saveUserDetails }) {
  const [formData, setFormData] = useState(userDetails || {
    name: '',
    email: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveUserDetails(formData);
  };

  return (
    <div className="account-form">
      <h2>{userDetails ? 'Edit Account' : 'Create Account'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Shipping Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">{userDetails ? 'Save Changes' : 'Create Account'}</button>
      </form>
    </div>
  );
}

export default AccountForm;
