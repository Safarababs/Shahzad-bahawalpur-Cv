import React, { useState } from "react";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";
import { FaExclamationCircle } from "react-icons/fa";
import classNames from "classnames";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.message ||
      !formData.subject
    ) {
      // if any field is empty, show an alert icon and add a red border to empty fields
      setError("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:5000/send-email",
        formData
      );
      console.log(response.data);
      // Do something with the response
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const nameClass = classNames("inputBox", {
    "error-border": !formData.name && error,
  });
  const emailClass = classNames("inputBox", {
    "error-border": !formData.email && error,
  });
  const messageClass = classNames("inputBox", {
    "error-border": !formData.message && error,
  });
  const subjectClass = classNames("inputBox", {
    "error-border": !formData.subject && error,
  });

  return (
    <section className="contact" id="contact">
      <h1 className="heading">
        {" "}
        <span> contact me </span>{" "}
      </h1>

      <form onSubmit={handleSubmit}>
        <div className={nameClass}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className={emailClass}>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className={subjectClass}>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
          {error && <FaExclamationCircle size={20} color="red" />}
        </div>

        <div className={messageClass}>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" disabled={loading} className="btn">
          {loading ? (
            <span>
              <FaSpinner
                style={{ marginRight: "0.5rem" }}
                className="animate-spin"
              />
              Please wait...
            </span>
          ) : (
            "Submit"
          )}
        </button>
        {error && (
          <p
            className="error"
            style={{
              marginLeft: ".5rem",
              display: "inline-block",
              color: "red",
              fontSize: "1.5rem",
            }}
          >
            {error}
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;
