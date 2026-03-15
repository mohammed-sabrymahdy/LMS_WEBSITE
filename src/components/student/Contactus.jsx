import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { CheckCircleIcon } from "@heroicons/react/solid";

const Contactus = () => {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage("Message sent successfully!");
          setSent(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setMessage("Failed to send message. Please try again.");
        },
      );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20 px-5">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-8 relative overflow-hidden">
        <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">
          Contact Us
        </h2>

        {!sent ? (
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Title
              </label>
              <input
                type="text"
                name="title"
                required
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                name="message"
                required
                rows="5"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors font-semibold"
            >
              Send Message
            </button>
          </form>
        ) : (
          <div className="flex flex-col items-center justify-center py-10 animate-fadeIn">
            <CheckCircleIcon className="w-24 h-24 text-green-500 mb-4 animate-bounce" />
            <h3 className="text-2xl font-bold text-green-600">{message}</h3>
            <p className="text-gray-600 mt-2">
              Thank you for reaching out! We'll get back to you soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contactus;
