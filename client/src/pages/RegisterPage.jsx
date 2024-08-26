import "../styles/Register.scss";
import Upload from "../assets/uploadPhoto.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: null,
  });
  const [passwordMatch, setPasswordMatch] = useState(true);
  const navigate = useNavigate()
  useEffect(() => {
    setPasswordMatch(formData.password === formData.confirmPassword || formData.confirmPassword === "")
  })
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const register_form = new FormData()

      for (var key in formData) {
        register_form.append(key, formData[key])
      }

      const response = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        body: register_form
      })

      if (response.ok) {
        navigate("/login")
      }
    } catch (err) {
      console.log("Registration failed", err.message)
    }
  }

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
        <form onSubmit={handleSubmit} className="register_content_form">
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
           {!passwordMatch && (
            <p style={{ color: "red" }}>Passwords are not matched!</p>
          )}
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
          <button  disabled={!passwordMatch} type="submit">Register</button>
        </form>
        <a href="">Already have an account? Log in Here</a>
      </div>
    </div>
  );
};

export default RegisterPage;
