import React, { useState } from "react";
import { Button, variants } from "@/components/Button";

const Contact: React.FC = () => {
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
    <section className="flex md:flex-row flex-col md:px-8 md:py-16 p-4 items-center justify-center py-12 gap-8 bg-white min-h-container w-full">
      <div className="p-8 bg-white w-full h-full flex flex-col border border-gray-200 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
        <p className="mb-4">
          <strong>Address:</strong>
          <br />
          1234 Street Name
          <br />
          City, State, ZIP Code
        </p>
        <p className="mb-4">
          <strong>Phone:</strong>
          <br />
          +919876543210
          <br />
          0124-1234567
        </p>
        <p className="mb-4">
          <strong>Email:</strong>
          <br />
          info@marksmantech.com
        </p>
        <p className="mb-4">
          <strong>Working Hours:</strong>
          <br />
          Monday - Friday: 9:00 AM - 6:00 PM
          <br />
          Saturday - Sunday: Closed
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white w-full p-8 h-full">
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-4">Leave us a message</h2>
          <label htmlFor="name" className="block text-gray-700 mb-2">
            Name:
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
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email:
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
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 mb-2">
            Message:
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={variants({ variant: "input" }) + " resize-none h-full"}
            required
          />
        </div>
        <Button variant="primary">Send Message</Button>
      </form>
    </section>
  );
};

export default Contact;
