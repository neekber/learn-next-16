"use client";

import React from "react";

import style from "./messages.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Messages = () => {
  return (
    <>
      <div className={style.page}>
        <h1>Messages</h1>

        <div className={style.card}>
          <div className={style.message}>
            <div className={style.sender}>Alice</div>
            <p className={inter.className}>Hey, how is the project going?</p>
          </div>

          <div className={style.message}>
            <div className={style.sender}>Bob</div>
            <p className={inter.className}>Please review the latest update.</p>
          </div>

          <div className={style.message}>
            <div className={style.sender}>Charlie</div>
            <p className={inter.className}>Meeting scheduled for tomorrow.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
