"use client";

import style from "./survey.module.css";
import { useState } from "react";

export default function Survey() {
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [question4, setQuestion4] = useState("");
  const [question5, setQuestion5] = useState("");
  const [question6, setQuestion6] = useState("");
  const [followup, setFollowup] = useState(false);
  const [preference, setPrefence] = useState("");
  const [address, setAddress] = useState("");
  const [sent, setSent] = useState(false);
  const [received, setReceived] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSent(true);

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question1,
          question2,
          question3,
          question4,
          question5,
          question6,
          preference: followup ? preference : "",
          address: followup ? address : "",
        }),
      });

      if (response.ok) {
        setReceived(true);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={style.form}>
      <label htmlFor="quest1">
        What learning or practice apps have you used (or are you using now), and
        what are you using them for?
        <textarea
          required={true}
          id="quest1"
          value={question1}
          onChange={(e) => setQuestion1(e.target.value)}
        ></textarea>
      </label>

      <label htmlFor="quest2">
        Does the app give you the right content for what you actually need to
        learn or practice? Why or why not?
        <textarea
          required={true}
          id="quest2"
          value={question2}
          onChange={(e) => setQuestion2(e.target.value)}
        ></textarea>
      </label>

      <label htmlFor="quest3">
        When you're tested in real life (e.g. a conversation, an exam, a job
        task), how easily does the information come to mind?
        <textarea
          required={true}
          id="quest3"
          value={question3}
          onChange={(e) => setQuestion3(e.target.value)}
        ></textarea>
      </label>

      <label htmlFor="quest4">
        When you have to use the knowledge—solve problems, talk to people, make
        decisions—how well does the app prepare you for that?
        <textarea
          required={true}
          id="quest4"
          value={question4}
          onChange={(e) => setQuestion4(e.target.value)}
        ></textarea>
      </label>

      <label htmlFor="quest5">
        What do you do on your own to get more out of the app—things that boost
        your success beyond just using the app passively?
        <textarea
          required={true}
          id="quest5"
          value={question5}
          onChange={(e) => setQuestion5(e.target.value)}
        ></textarea>
      </label>

      <label htmlFor="quest6">
        If you could wave a magic wand and improve one thing about your favorite
        learning app, what would it be?
        <textarea
          required={true}
          id="quest6"
          value={question6}
          onChange={(e) => setQuestion6(e.target.value)}
        ></textarea>
      </label>

      <label htmlFor="followup">
        May we contact you for some follow up questions based on your answers?{" "}
        <em>
          If you click the box, you will no longer be anonymous and we will
          contact you using the method you request. You may ask us to stop at
          any time and we will respect your wishes.
        </em>
        <input
          id="followup"
          value={followup}
          onChange={() => setFollowup(!followup)}
          type="checkbox"
        />
      </label>

      <label className={followup ? "" : style.hide} htmlFor="preference">
        How would you prefer we contact you? (example: email, Discord, WhatsApp,
        SMS)
        <input
          required={followup}
          id="preference"
          type="text"
          value={preference}
          onChange={(e) => setPrefence(e.target.value)}
        />
      </label>
      <label className={followup ? "" : style.hide} htmlFor="address">
        Which number, username, email address, etc. do we use to contact you?
        <input
          required={followup}
          id="address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>

      {received && (
        <p className={style.thanks}>
          Thank you so much for taking the survey! We have received your
          answers.
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
