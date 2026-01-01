import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Work", href: "#works" },
  { label: "Styles", href: "#styles" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#F6F4EF]/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-signature leading-none text-2xl md:text-3xl tracking-wide text-[#1C1C1C]">
            Namratha Maadhu
          </span>

          <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-widest text-[#1C1C1C]">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:opacity-70 transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px w-6 bg-[#1C1C1C] transition-all duration-300 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-[#1C1C1C] transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-[#1C1C1C] transition-all duration-300 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#F6F4EF] flex items-center px-8"
          >
            <nav className="space-y-10">
              {[
                { label: "Work", href: "#works" },
                { label: "Styles", href: "#styles" },
                { label: "Process", href: "#process" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block font-mono text-4xl tracking-tight leading-tight text-[#1C1C1C]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
