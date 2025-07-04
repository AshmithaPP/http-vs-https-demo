import React, { useState } from "react";
import CryptoJS from "crypto-js";

const ContactForm = ({ onResult }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (type) => {
  if (!formData.name || !formData.email || !formData.message) {
    alert("❗ Please fill in all fields before submitting.");
    return;
  }

  if (type === "http") {
    const rawPlain = JSON.stringify(formData, null, 2);
    onResult("http", formData, rawPlain);
    return;
  }

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      const encrypted = CryptoJS.AES.encrypt(
        JSON.stringify(formData),
        "simulated-secret-key"
      ).toString();
      onResult("https", data, encrypted);
    } else {
      onResult("error", formData, null);
    }
  } catch (error) {
    onResult("error", formData, null);
  }
};


  return (
    <div
      style={{
        maxWidth: "400px",
        width: "100%",
        backgroundColor: "#111", // dark box
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 0 12px rgba(255, 255, 255, 0.1)",
        marginTop: "20px",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        style={inputStyle}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        style={inputStyle}
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        style={{ ...inputStyle, height: "100px" }}
      />
      <div style={{ display: "flex", gap: "10px" }}>
    <button
  onClick={() => handleSubmit("http")}
  style={{ ...buttonStyle, backgroundColor: "#dc3545", color: "white" }}
>
  ⚠️ Submit via HTTP
</button>

        <button
          onClick={() => handleSubmit("https")}
          style={{ ...buttonStyle, backgroundColor: "#28a745", color: "white" }}
        >
          🔐 Submit via HTTPS
        </button>
      </div>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  marginBottom: "15px",
  padding: "12px",
  fontSize: "16px",
  borderRadius: "6px",
  border: "1px solid #555",
  backgroundColor: "#222",
  color: "#fff",
  marginLeft:"-12px"
};

const buttonStyle = {
  flex: 1,
  padding: "10px",
  border: "none",
  borderRadius: "6px",
  fontSize: "16px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};

export default ContactForm;
