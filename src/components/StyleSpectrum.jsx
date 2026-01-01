import { motion } from "framer-motion";

const styles = [
  "Minimal & Luxury",
  "Warm & Earthy",
  "Bold & Modern",
  "Soft & Scandinavian",
];

const StyleSpectrum = () => {
  return (
    <section id="styles" className="bg-[#F6F4EF]">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-12">

        <div className="mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1C1C]">
            Style Spectrum
          </h2>
          <p className="mt-6 text-[#6B6B6B] max-w-md">
            Every space demands its own language.
            The approach adapts, the intent remains.
          </p>
        </div>

        <div className="space-y-14">
          {styles.map((style, index) => (
            <motion.div
              key={style}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
              className="border-b border-[#E2DED6] pb-6"
            >
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1C1C1C]">
                {style}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StyleSpectrum;
