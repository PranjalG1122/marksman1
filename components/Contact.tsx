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
    <section className="flex flex-col items-center justify-center py-12 bg-gray-50 min-h-container w-full">
      <div className="flex flex-col md:flex-row w-full p-4 md:p-8 max-w-7xl mx-auto">
        <div className="md:w-1/2 p-4">
          <div className="p-8 bg-white rounded-lg shadow-lg border border-grey-400 w-full">
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
        </div>
        <div className="md:w-1/2 p-4">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-lg border border-grey-400 w-full"
          >
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
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
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
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
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
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <Button variant="primary">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
