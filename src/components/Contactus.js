import React, { useState, useEffect } from "react";

function App() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: ""
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const onSubmit = async (e) => {
    e.preventDefault();
    const { first_name, last_name, email, message } = formData;

    if (!first_name || !last_name || !email || !message) {
      setError("All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }

    const body = JSON.stringify({
      access_key: "1aee5581-faa4-48c3-b1dc-83b922cc4ff6",
      ...formData
    });

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body
      }).then((res) => res.json());

      if (res.success) {
        setSuccess(true);
        setFormData({ first_name: "", last_name: "", email: "", message: "" });
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch {
      setError("An error occurred. Please try again.");
    }
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const closeSuccessModal = () => setSuccess(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#032442] via-[#032442] to-[#1d667a] transition-colors duration-300 flex justify-center items-center">
      <div className="container mx-auto py-12 px-4">
        <h1
          className="text-4xl font-extrabold text-center text-white mb-12"
          data-aos="zoom-in"
        >
          Contact Us
        </h1>

        <div className="md:flex md:space-x-8 items-start">
          {/* Form */}
          <div
            className="md:w-1/2 bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl"
            data-aos="fade-right"
          >
            {error && (
              <div className="mb-4 text-red-400 font-medium">{error}</div>
            )}
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block text-white text-sm font-semibold mb-1"
                  >
                    First Name
                  </label>
                  <input
                    id="first_name"
                    name="first_name"
                    type="text"
                    className="w-full px-4 py-2 rounded bg-transparent text-white border border-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block text-white text-sm font-semibold mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    id="last_name"
                    name="last_name"
                    type="text"
                    className="w-full px-4 py-2 rounded bg-transparent text-white border border-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.last_name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-white text-sm font-semibold mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full px-4 py-2 rounded bg-transparent text-white border border-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-white text-sm font-semibold mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="w-full px-4 py-2 rounded bg-transparent text-white border border-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Image */}
          <div
            className="md:w-1/2 mt-10 md:mt-0 hidden md:flex"
            data-aos="fade-left"
          >
            <img
              src="https://res.cloudinary.com/dx5lg8mei/image/upload/v1745992298/online-survey_uqp4k4.png"
              alt="Contact Illustration"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {success && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl text-center">
            <div className="text-green-500 text-5xl mb-4 animate-ping">&#10004;</div>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              Thank you! Your message has been sent.
            </p>
            <button
              onClick={closeSuccessModal}
              className="mt-6 text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
