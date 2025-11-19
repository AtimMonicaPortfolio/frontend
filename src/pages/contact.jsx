import { useState } from "react";
import { FaLinkedin, FaGithub, FaWhatsapp, FaHandshake } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import Footer from "../components/footer";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://127.0.0.1:5000/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();
    setStatus(
      data.status === "sent"
        ? "Message sent successfully!"
        : "Error sending message."
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow max-w-6xl mx-auto p-6">
        {/* Top row: Left Form + Right Contact Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">

          {/* LEFT SIDE */}
          <div className="md:w-1/2 flex flex-col gap-4">
            <h1 className="text-4xl font-bold mb-2 text-deepBlue">Get In Touch</h1>

            <p className="text-lg text-gray-800 flex items-center gap-2 drop-shadow">
              Have a project in mind? Let's work together!
              <FaHandshake className="w-5 h-5 text-tigerGold" />
            </p>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="grid gap-4 mt-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 border border-deepBlue rounded w-full"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="email"
                placeholder="Your Email"
                className="p-3 border border-deepBlue rounded w-full"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <textarea
                placeholder="Your Message"
                className="p-3 border border-deepBlue rounded h-32 w-full"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              <button
                type="submit"
                className="bg-tigerGold text-white py-3 rounded hover:bg-deepBlue transition"
              >
                Send Message
              </button>

              {status && (
                <p className="text-sm text-green-600 mt-1">{status}</p>
              )}
            </form>
          </div>

          {/* RIGHT SIDE – CONTACT BAR */}
          <div className="md:w-1/2 flex justify-end mt-10 md:mt-20 pr-4">
            <ContactBar />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}


// CONTACT BAR
export function ContactBar() {
  return (
    <div className="bg-deepBlue p-4 rounded-md flex flex-col gap-4 shadow-lg w-full max-w-md">

      {/* Email always on top */}
      <ContactCard
        href="mailto:atimmonica360@gmail.com"
        icon={<HiOutlineMail className="w-6 h-6 text-gray-800" />}
        label="atimmonica360@gmail.com"
        fullWidth
      />

      {/* Other contacts */}
      <div className="grid grid-cols-2 gap-2">
        <ContactCard
          href="tel:+256782569360"
          icon={<HiOutlinePhone className="w-6 h-6 text-green-600" />}
          label="+256782569360"
        />
        <ContactCard
          href="https://wa.me/256782569360"
          icon={<FaWhatsapp className="w-6 h-6 text-green-500" />}
          label="WhatsApp"
        />
        <ContactCard
          href="https://www.linkedin.com/in/atim-monica-a4a043299"
          icon={<FaLinkedin className="w-6 h-6 text-blue-700" />}
          label="LinkedIn"
        />
        <ContactCard
          href="https://github.com/ATIM-MONICA"
          icon={<FaGithub className="w-6 h-6 text-gray-900" />}
          label="GitHub"
        />
      </div>

    </div>
  );
}


// CONTACT CARD
function ContactCard({ href, icon, label, fullWidth }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-3 p-4 rounded-lg shadow-md bg-white hover:shadow-xl hover:scale-105 transition-transform duration-200 ${
        fullWidth ? "w-full" : ""
      }`}
    >
      {icon}
      <span className="text-gray-800 font-semibold">{label}</span>
    </a>
  );
}
