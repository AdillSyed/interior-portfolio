import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SelectedWorks = () => {
  return (
    <section id="works" className="bg-[#F6F4EF]">
      <div className="max-w-7xl mx-auto px-6 py-12 pb-12">

        <div className="mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1C1C]">
            Selected Works
          </h2>
          <p className="mt-6 text-[#6B6B6B] max-w-md">
            A curated selection of residential and commercial interiors,
            shaped by context and intent.
          </p>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <Link to={`/projects/${project.id}`} className="block" key={project.id}>
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              key={project.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-16 items-center`}
            >

              <div className="w-full md:w-1/2 h-[60vh] overflow-hidden">
                <motion.img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>

              <div className="w-full md:w-1/2">
                <h3 className="mt-6 font-serif text-2xl sm:text-[28px] text-[#1C1C1C]">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm uppercase tracking-widest text-[#6B6B6B]">
                  {project.type}
                </p>

                <p className="mt-6 text-[#6B6B6B]">
                  {project.style}
                </p>
              </div>
            </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SelectedWorks;
