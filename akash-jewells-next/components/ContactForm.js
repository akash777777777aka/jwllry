"use client";

import { useState } from "react";

const initialState = {
  name: "",
  phone: "",
  service: "",
  message: ""
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ loading: false, message: "", error: "" });

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ loading: true, message: "", error: "" });

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus({ loading: false, message: "", error: result.error || "Something went wrong." });
        return;
      }

      setForm(initialState);
      setStatus({ loading: false, message: result.message, error: "" });
    } catch {
      setStatus({ loading: false, message: "", error: "Network error. Please try again." });
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Full Name</label>
      <input
        id="name"
        type="text"
        required
        value={form.name}
        onChange={(event) => setForm({ ...form, name: event.target.value })}
      />

      <label htmlFor="phone">Phone Number</label>
      <input
        id="phone"
        type="tel"
        required
        value={form.phone}
        onChange={(event) => setForm({ ...form, phone: event.target.value })}
      />

      <label htmlFor="service">Interested In</label>
      <select
        id="service"
        required
        value={form.service}
        onChange={(event) => setForm({ ...form, service: event.target.value })}
      >
        <option value="">Select one</option>
        <option>Bridal Collection</option>
        <option>Diamond Jewellery</option>
        <option>Custom Design</option>
        <option>Repair and Care</option>
      </select>

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        rows="4"
        value={form.message}
        onChange={(event) => setForm({ ...form, message: event.target.value })}
      />

      <button className="btn btn-primary" type="submit" disabled={status.loading}>
        {status.loading ? "Submitting..." : "Submit Inquiry"}
      </button>

      {status.message ? <p className="form-msg">{status.message}</p> : null}
      {status.error ? <p className="form-msg error-msg">{status.error}</p> : null}
    </form>
  );
}
