import "../styles/Register.scss";
import Upload from "../assets/uploadPhoto.png";
import { useState } from "react";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === "profileImage" ? files[0] : value,
    });
  };

  return (
    <div className="register">
      <div className="register_content">
        <form className="register_content_form">
          <h1 style={{ color: "white" }}>Sign up</h1>
          <input
            onChange={handleChange}
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            required
          />
          <input
            onChange={handleChange}
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            required
          />
          <input
            onChange={handleChange}
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            required
          />
          <input
            onChange={handleChange}
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            required
          />
          <input
            onChange={handleChange}
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            name="confirmPassword"
            required
          />
          <input
            onChange={handleChange}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            id="image"
            name="profileImage"
            required
          />
          <label htmlFor="image">
            <img src={Upload} style={{ background: "transparent" }} alt="" />
            <p>Upload Your Photo</p>
          </label>
          {formData.profileImage && (
            <img
              src={URL.createObjectURL(formData.profileImage)}
              alt="profile photo"
              style={{ maxWidth: "80px" }}
            />
          )}
          <button type="submit">Register</button>
        </form>
        <a href="">Already have an account? Log in Here</a>
      </div>
    </div>
  );
};

export default RegisterPage;
