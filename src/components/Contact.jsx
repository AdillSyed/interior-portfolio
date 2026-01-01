import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Instagram, MapPin } from "lucide-react";
import toast from "react-hot-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  const form = e.target;
  const data = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/xxxx", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      toast.success("Message sent. I’ll get back to you soon.");
      form.reset();
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  // eslint-disable-next-line no-unused-vars
  } catch (error) {
    toast.error("Network error. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <section id="contact" className="bg-[#F6F4EF]">
      <div className="max-w-7xl mx-auto px-6 py-40 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-24"
        >
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1C1C]">
              Let’s create something thoughtful.
            </h2>

            <p className="mt-8 text-[#6B6B6B] max-w-md">
              Reach out to discuss ideas, spaces, or upcoming projects.
            </p>

            <div className="mt-16 space-y-6 text-[#1C1C1C]">
              <div className="flex items-center gap-4">
                <Mail size={18} />
                <a
                  href="mailto:namrathamaadu@gmail.com"
                  className="hover:opacity-70 transition"
                >
                  namrathamaadu@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Instagram size={18} />
                <a
                  href="https://www.instagram.com/namratha_maadhu?igsh=MXhqcXM5ZzFod3IxbA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition"
                >
                  Namratha Maadhu
                </a>
              </div>

              <div className="flex items-start gap-4">
                <MapPin size={18} className="mt-1" />
                <p>Bengaluru, India</p>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm text-[#6B6B6B] mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-transparent border-b border-[#1C1C1C] py-3 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-[#6B6B6B] mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-transparent border-b border-[#1C1C1C] py-3 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-[#6B6B6B] mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full bg-transparent border-b border-[#1C1C1C] py-3 focus:outline-none resize-none"
              />
            </div>

            <input
              type="hidden"
              name="_subject"
              value="New Interior Design Enquiry"
            />
            <input type="hidden" name="_template" value="table" />

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-3 text-sm uppercase tracking-widest text-[#1C1C1C] group"
            >
              {isSubmitting ? "Sending…" : "Send Message"}
              <span className="block w-6 h-px bg-[#1C1C1C] transition-all group-hover:w-10" />
            </button>
          </form>
        </motion.div>
        <div className="mt-40 pt-12 border-t border-[#E2DED6]">
          <p className="text-sm text-[#6B6B6B]">
            © {new Date().getFullYear()} Interior Design Studio
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
