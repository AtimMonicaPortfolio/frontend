import { FaLinkedin, FaGithub, FaWhatsapp, FaHandshake } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import Footer from "../components/footer";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content */}
      <main className="flex-grow max-w-6xl mx-auto p-6">
        {/* Top row: Form/Heading on left, Contact Bar on right */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">

          {/* Left: Heading + Form */}
          <div className="md:w-1/2 flex flex-col gap-4">
            <h1 className="text-4xl font-bold mb-2 text-deepBlue">
              Get In Touch
            </h1>
            <p className="text-lg text-gray-800 flex items-center gap-2 drop-shadow">
              Have a project in mind? Let's work together!
              <FaHandshake className="w-5 h-5 text-tigerGold" />
            </p>

            <form className="grid gap-4 mt-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 border border-deepBlue rounded w-full"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 border border-deepBlue rounded w-full"
                required
              />
              <textarea
                placeholder="Your Message"
                className="p-3 border border-deepBlue rounded h-32 w-full"
              ></textarea>
              <button
                type="submit"
                className="bg-tigerGold text-white py-3 rounded hover:bg-deepBlue transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Contact Bar */}
          <div className="md:w-1/2 flex flex-col justify-center mt-8 md:mt-16">
            <ContactBar />
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// ContactBar as named export
export function ContactBar() {
  return (
    <div className="bg-deepBlue p-4 rounded-md flex flex-col md:justify-start mt-8 md:mt-16 gap-4">
      {/* Email on top, full width */}
      <ContactCard
        href="mailto:atimmonica360@gmail.com"
        icon={<HiOutlineMail className="w-6 h-6 text-gray-800" />}
        label="atimmonica360@gmail.com"
        fullWidth
      />

      {/* Other contacts in a grid below */}
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

// ContactCard component with optional fullWidth
function ContactCard({ href, icon, label, fullWidth }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-3 p-4 rounded-lg shadow-md bg-white hover:shadow-xl hover:scale-105 transition transform duration-200 ${
        fullWidth ? "w-full" : ""
      }`}
    >
      {icon}
      <span className="text-gray-800 font-semibold">{label}</span>
    </a>
  );
}
