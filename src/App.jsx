import React, { useState } from "react";
import ContactForm from "./components/ContactForm";

function App() {
  const [result, setResult] = useState(null);

  const handleResult = (type, data, rawData) => {
    if (type === "http") {
      setResult({
        status: "warning",
        message: "⚠️ HTTP sends data in plain text (Simulated).",
        explanation: `This data could be intercepted easily. Real HTTP has no encryption.`,
        rawData,
      });
    } else if (type === "https") {
      setResult({
        status: "success",
        message: "✅ HTTPS encrypts your data securely (Simulated AES Encryption).",
        explanation:
          "In reality, HTTPS uses TLS which includes asymmetric key exchange (RSA/ECDHE), symmetric encryption (AES/ChaCha20), and message authentication (HMAC-SHA256).",
        rawData,
      });
    } else {
      setResult({
        status: "error",
        message: "❌ Submission failed.",
        explanation: "Something went wrong. Try again later.",
        rawData: null,
      });
    }
  };

  return (
    <div
      style={{
        minHeight: "90vh",
        background: "linear-gradient(135deg, #0f0f0f, #1a1a1a)", // Gradient black
        color: "#eaeaea",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        fontFamily: "Segoe UI, sans-serif",
        textAlign: "center",
        scrollbarWidth:"none",
        msOverflowStyle:"none"
      }}
    >
      <h1 style={{ fontWeight: "600", fontSize: "2rem" }}>🔐 HTTP vs HTTPS Contact Form</h1>
      <p style={{ marginBottom: "20px", maxWidth: "600px", color: "#bbbbbb" }}>
        This project visually demonstrates the difference between insecure HTTP (plain data)
        and secure HTTPS (AES-encrypted). This encryption is simulated for learning purposes.
      </p>

      <ContactForm onResult={handleResult} />

      {result && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.6)", 
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
    }}
  >
    <div
      style={{
        backgroundColor:
          result.status === "success"
            ? "#003c2d"
            : result.status === "warning"
            ? "#3f3a00"
            : "#4b1a1a",
        color: "#fff",
        padding: "25px",
        borderRadius: "12px",
        maxWidth: "500px",
        width: "90%",
        boxShadow: "0 0 30px rgba(0,0,0,0.5)",
        textAlign: "left",
        position: "relative",
      }}
    >
      {/*  Close button */}
      <button
        onClick={() => setResult(null)}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "transparent",
          color: "#fff",
          border: "none",
          fontSize: "8px",
          cursor: "pointer",
        }}
      >
        ❌
      </button>

      <h3 style={{ marginBottom: "10px" }}>{result.message}</h3>
      <p>{result.explanation}</p>

      <pre
        style={{
          backgroundColor: "#111",
          padding: "12px",
          borderRadius: "8px",
          marginTop: "10px",
          overflowX: "auto",
          fontSize: "14px",
          color: "#8fffab",
          scrollbarWidth:"none"
        }}
      >
        {result.rawData}
      </pre>
    </div>
  </div>
)}

    </div>
  );
}

export default App;
