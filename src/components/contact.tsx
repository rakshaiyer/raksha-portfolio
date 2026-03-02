"use client";

import { useState } from "react";
import content from "@/data/content.json";
import styles from "./contact.module.scss";

type FormData = {
  name: string;
  email: string;
  phone: string;
};

type FormErrors = {
  email?: string;
};
export default function Contact() {
  const { contact } = content;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email format";
    }

    return newErrors;
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to submit");

      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", company: "" });
      setErrors({});
    } catch (err) {
      console.error("Submission error:", err);
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{contact.title}</h1>
      <p className={styles.description}>{contact.description}</p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label>Full Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className={styles.field}>
          <label>Email *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>

        <div className={styles.field}>
          <label>Phone Number</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </div>
        {/* Honeypot field (hidden from humans) */}
        <input
          type="text"
          name="company"
          style={{ display: "none" }}
          value={formData.company || ""}
          onChange={(e) =>
            setFormData({ ...formData, company: e.target.value })
          }
        />

        <button type="submit" className={styles.button}>
          {loading ? "Sending..." : contact.buttonText}
        </button>

        {success && (
          <div className={styles.success}>
            <strong>{contact.successTitle}</strong>
            <p>{contact.successMessage}</p>
          </div>
        )}
      </form>
    </div>
  );
}
