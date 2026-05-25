'use client';

import React, { useState } from "react";

const Settings = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");

  return (
    <>
      <style>{`
        .page {
          padding: 30px;
          font-family: Arial, sans-serif;
        }

        .settings-card {
          max-width: 500px;
          background: white;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          margin-top: 20px;
        }

        .form-group {
          margin-bottom: 15px;
        }

        label {
          display: block;
          margin-bottom: 6px;
          font-weight: bold;
        }

        input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 8px;
        }

        button {
          background: #2563eb;
          color: white;
          border: none;
          padding: 12px 20px;
          border-radius: 8px;
          cursor: pointer;
        }

        button:hover {
          opacity: 0.9;
        }
      `}</style>

      <div className="page">
        <h1>Settings</h1>

        <div className="settings-card">
          <div className="form-group">
            <label>Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <button>Save Changes</button>
        </div>
      </div>
    </>
  );
};

export default Settings;
