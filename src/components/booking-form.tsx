"use client";

import { useState, type FormEvent } from "react";

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Hello Ashpak & Arju, I would like to discuss a photoshoot session.",
      `Name: ${String(data.get("name") ?? "")}`,
      `Phone: ${String(data.get("phone") ?? "")}`,
      `Email: ${String(data.get("email") || "Not provided")}`,
      `Photoshoot: ${String(data.get("experience") ?? "")}`,
      `Date / due date: ${String(data.get("date") ?? "")}`,
      `Setting: ${String(data.get("setting") ?? "")}`,
      `Notes: ${String(data.get("notes") || "None")}`,
    ].join("\n");
    window.open(
      `https://wa.me/917558250015?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSubmitted(true);
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-two-up">
        <label className="form-field">
          <span>Your full name *</span>
          <input name="name" placeholder="Name" autoComplete="name" required />
        </label>
        <label className="form-field">
          <span>Phone number *</span>
          <input
            name="phone"
            type="tel"
            placeholder="10-digit mobile number"
            autoComplete="tel-national"
            inputMode="numeric"
            pattern="[0-9]{10}"
            title="Enter a 10-digit mobile number"
            required
          />
          <small>10 digits for appointment confirmation</small>
        </label>
      </div>
      <div className="form-two-up">
        <label className="form-field">
          <span>Email address</span>
          <input
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
          />
        </label>
        <label className="form-field">
          <span>Photoshoot experience *</span>
          <select
            name="experience"
            defaultValue="Maternity Photography Session"
            required
          >
            <option>Maternity Photography Session</option>
            <option>Newborn & Baby Photography</option>
            <option>Kids & 1st Birthday / Cake Smash</option>
            <option>Family & Heirloom Portraiture</option>
            <option>Other / Custom Session</option>
          </select>
        </label>
      </div>
      <div className="form-two-up">
        <label className="form-field">
          <span>Anticipated date or due date *</span>
          <input name="date" placeholder="Month / expected due date" required />
        </label>
        <label className="form-field">
          <span>Preferred setting</span>
          <select name="setting" defaultValue="Atelier Studio (Pune / PCMC)">
            <option>Atelier Studio (Pune / PCMC)</option>
            <option>Outdoor nature / scenic</option>
            <option>Need guidance / undecided</option>
          </select>
        </label>
      </div>
      <label className="form-field">
        <span>Specific wishes or notes</span>
        <textarea
          name="notes"
          rows={3}
          placeholder="Tell us what you have in mind…"
        />
      </label>
      <button className="button button-primary form-submit" type="submit">
        Send my enquiry <span aria-hidden="true">↗</span>
      </button>
      {submitted ? (
        <p className="form-success" role="status">
          Your enquiry is ready in WhatsApp. We look forward to planning this
          with you.
        </p>
      ) : null}
      <p className="form-fineprint">
        Prefer a call? <a href="tel:+917558250015">+91 95951 44144</a>
      </p>
    </form>
  );
}
