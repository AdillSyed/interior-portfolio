import { motion } from "framer-motion";
import concept from "../assets/concept.jpg";
import render from "../assets/render.jpg";
import execution from "../assets/execution.png"

const steps = [
  {
    title: "Concept",
    description:
      "Understanding the space, its purpose, and the way it should feel.",
    image: concept
  },
  {
    title: "Design",
    description:
      "Translating ideas into layouts, materials, and balanced proportions.",
    image: render
  },
  {
    title: "Execution",
    description:
      "Detail-driven coordination to bring the vision together seamlessly.",
    image: execution
  },
];

const Process = () => {
  return (
    <section id="process" className="bg-[#F6F4EF]">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-30">
        <div className="mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1C1C]">
            Process
          </h2>
          <p className="mt-6 text-[#6B6B6B] max-w-md">
            Every project follows a clear, thoughtful approach— from first idea
            to final detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
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
              className="bg-white/40 rounded-2xl p-8 md:p-10"
            >
              <div className="mb-8 w-full h-40 overflow-hidden rounded-xl">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-sm uppercase tracking-widest text-[#6B6B6B]">
                {`0${index + 1}`}
              </p>

              <h3 className="mt-4 font-serif text-2xl sm:text-3xl text-[#1C1C1C]">
                {step.title}
              </h3>

              <p className="mt-6 text-[#6B6B6B] max-w-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
