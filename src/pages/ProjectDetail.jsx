import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

const ProjectDetail = () => {
  let { id } = useParams();
  id = parseInt(id);
  const project = projects.find((p) => p.id === id);
  console.log("project", project, id, typeof(id))

  if (!project) return null;

  return (
    <section className="bg-[#F6F4EF]">
      <div className="max-w-5xl mx-auto px-6 py-32">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1C1C1C]">
            {project.title}
          </h1>

          <p className="mt-6 text-sm uppercase tracking-widest text-[#6B6B6B]">
            {project.type} · {project.style}
          </p>

          <p className="mt-8 text-[#6B6B6B] max-w-xl">
            {project.description}
          </p>
        </motion.div>

        {/* Images */}
        <div className="mt-24 space-y-24">
          {project.images.map((img, index) => (
            <motion.div
              key={img}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full h-[70vh] overflow-hidden"
            >
              <img
                src={img}
                alt={`${project.title} view ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectDetail;
