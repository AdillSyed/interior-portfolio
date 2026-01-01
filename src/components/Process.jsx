import { motion } from "framer-motion";

const steps = [
  {
    title: "Concept",
    description:
      "Understanding the space, its purpose, and the way it should feel.",
  },
  {
    title: "Design",
    description:
      "Translating ideas into layouts, materials, and balanced proportions.",
  },
  {
    title: "Execution",
    description:
      "Detail-driven coordination to bring the vision together seamlessly.",
  },
];

const Process = () => {
  return (
    <section className="bg-[#F6F4EF]">
      <div className="max-w-7xl mx-auto px-6 py-40">

        <div className="mb-24">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1C1C]">
            Process
          </h2>
          <p className="mt-6 text-[#6B6B6B] max-w-md">
            Every project follows a clear, thoughtful approach—
            from first idea to final detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.08,
              }}
            >
              <p className="text-sm uppercase tracking-widest text-[#6B6B6B]">
                {`0${index + 1}`}
              </p>

              <h3 className="mt-4 font-serif text-2xl sm:text-3xl text-[#1C1C1C]">
                {step.title}
              </h3>

              <p className="mt-6 text-[#6B6B6B] max-w-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;
