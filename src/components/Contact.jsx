import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="bg-[#F6F4EF]">
      <div className="max-w-7xl mx-auto px-6 py-40">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1C1C]">
            Let’s create something thoughtful.
          </h2>

          <p className="mt-8 text-[#6B6B6B] max-w-md">
            Reach out to discuss ideas, spaces, or upcoming projects.
          </p>

          <div className="mt-16 space-y-6">
            <a
              href="mailto:namrathamaadu@gmail.com"
              className="block text-lg text-[#1C1C1C] hover:opacity-70 transition"
            >
              namrathamaadu@gmail.com
            </a>

            <a
              href="https://www.instagram.com/namratha_maadhu?igsh=MXhqcXM5ZzFod3IxbA=="
              target="_blank"
              rel="noopener noreferrer"
              className="block text-lg text-[#1C1C1C] hover:opacity-70 transition"
            >
              Instagram
            </a>
          </div>
        </motion.div>

        {/* Footer */}
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
