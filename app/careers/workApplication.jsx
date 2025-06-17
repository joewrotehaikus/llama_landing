"use client";

import style from "../survey/survey.module.css";
import { useState, useEffect } from "react";

export default function WorkApplication() {
  return (
    <div className={style.form}>
      <label htmlFor="name">
        What is your full name
        <input type="text" id="name" required />
      </label>
      {/* 
            Email
            What role(s) are you interested in?
            Tell us about your experience
            Tell us what and how you would like to contribute
            Can you provide links to your GitHub, Portfolio, or your personal website?

            Submit goes to work application table
            Since we're using now three different tables, we should probably add a notifications table to help track
            */}
    </div>
  );
}
