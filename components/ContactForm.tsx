import React, { useState } from "react";
import { Button, variants } from "@/components/Button";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-50 p-8 rounded-lg shadow-lg border border-grey-400 w-full flex flex-col items-center gap-4"
    >
      <h2 className="text-2xl font-bold w-full">Leave us a message</h2>
      <div className="w-full">
        <label htmlFor="name" className="block text-gray-700 ">
          Name
        </label>

        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={variants({ variant: "input" })}
          required
        />
      </div>
      <div className="w-full">
        <label htmlFor="email" className="block text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={variants({ variant: "input" })}
          required
        />
      </div>
      <div className="w-full">
        <label htmlFor="message" className="block text-gray-700 ">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={variants({ variant: "input" }) + " resize-none"}
          required
          rows={2}
        />
      </div>
      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
