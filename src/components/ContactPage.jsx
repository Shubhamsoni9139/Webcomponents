// components/ContactPage.jsx
import React from "react";

const ContactPage = () => (
  <div className="container mx-auto px-4 pt-24">
    <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
    <div className="max-w-lg">
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            rows={4}
            placeholder="Your message"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
);

export default ContactPage;
