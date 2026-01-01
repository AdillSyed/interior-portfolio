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

          <span className="font-serif text-base tracking-wide text-[#1C1C1C]">
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
            onClick={() => setOpen(true)}
            className="md:hidden flex flex-col gap-1"
            aria-label="Open menu"
          >
            <span className="w-6 h-px bg-[#1C1C1C]" />
            <span className="w-6 h-px bg-[#1C1C1C]" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#F6F4EF]"
          >
            <motion.div
              initial={{ y: 40 }}
              animate={{ y: 0 }}
              exit={{ y: 40 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="h-full flex flex-col justify-center px-6"
            >
              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-8 right-6 text-sm uppercase tracking-widest"
              >
                Close
              </button>

              {/* Nav links */}
              <nav className="space-y-10">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block font-serif text-3xl text-[#1C1C1C]"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
