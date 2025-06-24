"use client";

import style from "../survey/survey.module.css";
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [interestedIn, setInterestedIn] = useState([]);
  const [othInt, setOthInt] = useState({ checked: false, val: "" });
  const [description, setDescription] = useState("");
  const [minBudget, setMinBudget] = useState(100);
  const [maxBudget, setMaxBudget] = useState(100);
  const [currency, setCurrency] = useState({
    currency: "USD",
    label: "US Dollar",
    min: 100,
  });
  const [contactPref, setContactPref] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [sent, setSent] = useState(false);
  const [received, setReceived] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    try {
      setSent(true);
      const response = await fetch(apiUrl + "/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          organization,
          interestedIn,
          description,
          minBudget,
          maxBudget,
          currency: currency.currency,
          contactPref,
          contactInfo,
        }),
      });

      if (response.ok) {
        setReceived(true);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const interestsOpts = [
    "Custom App",
    "Tutoring/Mentoring",
    "Web Design/Logo Design",
    "Just Want To Say Hello",
  ];

  const stripeCommonCurrencies = [
    { currency: "USD", label: "US Dollar", min: 100 },
    { currency: "EUR", label: "Euro", min: 95 },
    { currency: "GBP", label: "British Pound", min: 80 },
    { currency: "AUD", label: "Australian Dollar", min: 150 },
    { currency: "CAD", label: "Canadian Dollar", min: 135 },
    { currency: "JPY", label: "Japanese Yen", min: 15500 },
    { currency: "CHF", label: "Swiss Franc", min: 90 },
    { currency: "SGD", label: "Singapore Dollar", min: 135 },
    { currency: "HKD", label: "Hong Kong Dollar", min: 780 },
    { currency: "NZD", label: "New Zealand Dollar", min: 165 },
    { currency: "SEK", label: "Swedish Krona", min: 1080 },
    { currency: "NOK", label: "Norwegian Krone", min: 1085 },
    { currency: "DKK", label: "Danish Krone", min: 700 },
    { currency: "ZAR", label: "South African Rand", min: 1850 },
    { currency: "MXN", label: "Mexican Peso", min: 1800 },
    { currency: "INR", label: "Indian Rupee", min: 8350 },
    { currency: "PHP", label: "Philippine Peso", min: 5850 },
    { currency: "THB", label: "Thai Baht", min: 3650 },
  ];

  const contactOptions = [
    { label: "Email", value: "email" },
    { label: "WhatsApp", value: "WhatsApp" },
    { label: "Discord", value: "Discord" },
  ];

  return (
    <div className={style.form}>
      <label htmlFor="name">
        What name would you like us to call you?
        <input
          type="text"
          id="name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label htmlFor="organization">
        Are you here on behalf of a company or organization? Enter its name.
        <input
          type="text"
          autoComplete="organization"
          id="organization"
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
        />
      </label>

      <div>
        What are you interested in? Check all that apply!
        <ul className={style.checkboxList}>
          {interestsOpts.map((interest) => (
            <li key={interest}>
              <label htmlFor={interest}>
                <input
                  type="checkbox"
                  id={interest}
                  value={interest}
                  checked={interestedIn.includes(interest)}
                  onChange={(e) => {
                    const val = e.target.value;
                    setInterestedIn((prev) =>
                      e.target.checked
                        ? [...prev, val]
                        : prev.filter((x) => x !== val)
                    );
                  }}
                />
                {interest}
              </label>
            </li>
          ))}
          <li>
            <label htmlFor="other">
              <input
                id="other"
                type="checkbox"
                value={othInt.val}
                checked={othInt.checked}
                onChange={(e) => {
                  setOthInt((prev) => ({ ...prev, checked: e.target.checked }));
                }}
              />
              Other:{" "}
            </label>

            <input
              disabled={!othInt.checked}
              id="otherInt"
              type="text"
              value={othInt.val}
              onChange={(e) => {
                setOthInt((prev) => ({ ...prev, val: e.target.value }));
              }}
              style={{
                textDecorationLine: othInt.checked ? "" : "line-through",
              }}
            />
          </li>
        </ul>
      </div>

      <label htmlFor="description">
        Give us details: If you have a request, tell us what you are working on
        and how we can help. If you have a question, ask it and give us any
        context that would help us answer. If you just want to say hello, go for
        it!
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>

      <div
        className={
          interestedIn.length === 1 &&
          interestedIn[0] === "Just Want To Say Hello" &&
          !othInt.checked
            ? style.hide
            : style.collapsible
        }
      >
        <label htmlFor="currency">
          Which currency would you pay with?
          <select
            id="currency"
            value={currency.currency}
            onChange={(e) => {
              const curr = e.target.value;
              const currObj = stripeCommonCurrencies.find(
                (x) => x.currency === curr
              );
              setCurrency(currObj);
              setMinBudget(currObj.min);
            }}
          >
            {stripeCommonCurrencies.map((c) => (
              <option key={c.currency} value={c.currency}>
                {c.label}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="minBudget">
          Lower range of your budget (Sorry, we cannot take orders for less than{" "}
          {currency.min} {currency.currency})
          <input
            type="number"
            id="minBudget"
            min={currency.min}
            value={minBudget}
            onChange={(e) => {
              setMinBudget(
                e.target.value >= currency.min ? e.target.value : currency.min
              );
              setMaxBudget((prev) =>
                prev > e.target.value ? prev : e.target.value
              );
            }}
          />
        </label>

        <label htmlFor="maxBudget">
          Upper range of your budget
          <input
            type="number"
            id="maxBudget"
            min={currency.min}
            value={maxBudget}
            onChange={(e) =>
              setMaxBudget(
                e.target.value > minBudget ? e.target.value : minBudget
              )
            }
          />
        </label>
      </div>

      <label htmlFor="contactPref">
        How would you like for us to contact you back?
        <select
          id="contactPref"
          value={contactPref}
          onChange={(e) => setContactPref(e.target.value)}
        >
          <option value="">Select</option>
          {contactOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="contactInfo">
        {contactPref === "" && "How should we contact you?"}
        {contactPref === "email" && "What is your email address?"}
        {contactPref === "WhatsApp" && "What is your WhatsApp number?"}
        {contactPref === "Discord" &&
          "What is your Discord username? Please note that your privacy settings will need to permit a message from one of us."}

        <input
          id="contactInfo"
          value={contactInfo}
          onChange={(e) => setContactInfo(e.target.value)}
        />
      </label>

      {received && (
        <p className={style.thanks}>
          Thank you so much for contacting us! Give us at least one week. We
          should get back to you by then using your prefered contact method. If
          we cannot, we may have had trouble using your contact method, so send
          us another message.
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
