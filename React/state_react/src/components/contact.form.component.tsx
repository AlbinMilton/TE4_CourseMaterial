import React, { useState } from "react";

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  message: "",
};
const ContactFormComponent = () => {
  const [form, setForm] = useState(initialState);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div>
      <h2>Example object in useState - Contact Form</h2>
      <label htmlFor="firstname">First Name</label>
      <input
        type="text"
        name="firstname"
        id="firstname"
        value={form.firstname}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="lastname">Last Name</label>
      <input
        type="text"
        name="lastname"
        id="lastname"
        value={form.lastname}
        onChange={handleChange}
      ></input>
      <br />
      <label htmlFor="message">Message</label>
      <textarea
        name="message"
        id="message"
        value={form.message}
        onChange={handleChange}
      ></textarea>
      <button
        onClick={() => console.log("data to be submitted ", form)}
      ></button>
    </div>
  );
};

export default ContactFormComponent;
