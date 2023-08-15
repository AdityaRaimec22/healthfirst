import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Advantage.css';

export default function ProposerForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    maritalStatus: '',
    gender: '',
    panCardNumber: '',
    dateOfBirth: '',
    height: '',
    weight: '',
    city: '',
    state: '',
    street: '',
    phoneNumber: '',
    email: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add logic here to handle form submission
  };

  return (
    <div className="container">
      <h1 className="mb-3">Let's start with Proposer Details</h1>
      <h4 className="mb-3">Proposer Details</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="maritalStatus" className="form-label">
            Marital Status
          </label>
          <input
            type="text"
            className="form-control"
            id="maritalStatus"
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <input
            type="text"
            className="form-control"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="panCardNumber" className="form-label">
            PAN Card Number
          </label>
          <input
            type="text"
            className="form-control"
            id="panCardNumber"
            name="panCardNumber"
            value={formData.panCardNumber}
            onChange={handleChange}
          />
        </div>

        <h4 className="mb-3">Personal Details</h4>
        <div className="mb-3">
          <label htmlFor="dateOfBirth" className="form-label">
            Date of Birth
          </label>
          <input
            type="date"
            className="form-control"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="height" className="form-label">
            Height
          </label>
          <input
            type="text"
            className="form-control"
            id="height"
            name="height"
            value={formData.height}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="weight" className="form-label">
            Weight
          </label>
          <input
            type="text"
            className="form-control"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
          />
        </div>

        <h4 className="mb-3">Address</h4>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="state" className="form-label">
            State
          </label>
          <input
            type="text"
            className="form-control"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="street" className="form-label">
            Street
          </label>
          <input
            type="text"
            className="form-control"
            id="street"
            name="street"
            value={formData.street}
            onChange={handleChange}
          />
        </div>

        <h4 className="mb-3">Contact Details</h4>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-dark mt-3">
          <Link className="nav-link" to='/Questions'>Proceed to Medical Questions</Link>
        </button>
      </form>
    </div>
  );
}
