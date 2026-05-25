"use client";

import React from "react";

const Messages = () => {
  return (
    <>
      <style>{`
        .page {
          padding: 30px;
          font-family: Arial, sans-serif;
        }

        .card {
          background: white;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          margin-top: 20px;
        }

        .message {
          padding: 15px;
          border-bottom: 1px solid #eee;
        }

        .message:last-child {
          border-bottom: none;
        }

        .sender {
          font-weight: bold;
          color: #2563eb;
        }
      `}</style>

      <div className="page">
        <h1>Messages</h1>

        <div className="card">
          <div className="message">
            <div className="sender">Alice</div>
            <p>Hey, how is the project going?</p>
          </div>

          <div className="message">
            <div className="sender">Bob</div>
            <p>Please review the latest update.</p>
          </div>

          <div className="message">
            <div className="sender">Charlie</div>
            <p>Meeting scheduled for tomorrow.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
