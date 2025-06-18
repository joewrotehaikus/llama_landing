"use client";

import style from "../survey/survey.module.css";
import { useState } from "react";

export default function WorkApplication({ opportunities }) {
  const [sent, setSent] = useState(false);
  const [received, setReceived] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [applyingFor, setApplyingFor] = useState("");
  const [experience, setExperience] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [github, setGithub] = useState("");
  const [about, setAbout] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setSent(true);

    try {
    } catch (e) {}
  }

  return (
    <div className={style.form}>
      <label htmlFor="name">
        What is your full name?
        <input
          type="text"
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor="email">
        What is your email address?
        <input
          type="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="applyingFor">
        What are you applying for?
        <select
          id="applyingFor"
          value={applyingFor}
          onChange={(e) => setApplyingFor(e.target.value)}
        >
          <option value={0}>Select</option>
          {opportunities.map((opp, index) => (
            <option key={index} value={opp.title}>
              {opp.title}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="experience">
        Tell us about your experience.
        <textarea
          id="experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        ></textarea>
      </label>
      <label htmlFor="portfolio">
        Provide a link to a portfolio, freelance website, or profile on a
        freelancer platform
        <input
          type="text"
          id="portfolio"
          required
          value={portfolio}
          onChange={(e) => setPortfolio(e.target.value)}
        />
      </label>
      <label htmlFor="github">
        Provide a link to your GitHub page
        <input
          type="text"
          id="github"
          required
          value={github}
          onChange={(e) => setGithub(e.target.value)}
        />
      </label>
      <label htmlFor="about">
        Tell us something you think we should know about you that you may not
        have already mentioned.
        <textarea
          id="about"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        ></textarea>
      </label>

      {received && (
        <p className={style.thanks}>
          Thank you so much for applying! We have received your application and
          should respond to your email in one week. If you don't get anything,
          check your spam folder, then send us a message on our contact page.
        </p>
      )}

      <button
        disabled={sent}
        className={style.btn_submit}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}
