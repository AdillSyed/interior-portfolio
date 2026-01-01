import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

const ProjectDetail = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  let { id } = useParams();
  id = parseInt(id);
  const project = projects.find((p) => p.id === id);

  if (!project) return null;

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = () =>
    setLightboxIndex((prev) => (prev + 1) % project.images.length);

  const prevImage = () =>
    setLightboxIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );

  const currentIndex = projects.findIndex((p) => p.id === id);
  const prevProject = projects[currentIndex - 1];
  const nextProject = projects[currentIndex + 1];

  return (
    <>
      <section className="h-[100svh] relative flex items-center bg-[#F6F4EF]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <a
              href="/#works"
              className="inline-block mb-12 text-xs uppercase tracking-widest text-[#6B6B6B]"
            >
              ← Back to Work
            </a>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl">
              {project.title}
            </h1>

            <p className="mt-6 text-sm uppercase tracking-widest text-[#6B6B6B]">
              {project.type} · {project.style}
            </p>

            <p className="mt-6 text-[#6B6B6B] max-w-md">
              {project.description}
            </p>
          </div>

          <div className="w-full h-[56svh] overflow-hidden rounded-2xl">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover cursor-zoom-in"
              onClick={() => openLightbox(0)}
            />
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-between px-8 text-sm uppercase tracking-widest text-[#1C1C1C]">
          {prevProject ? (
            <a
              href={`/projects/${prevProject.id}`}
              className="hover:opacity-70"
            >
              ← Previous
            </a>
          ) : (
            <span />
          )}

          {nextProject ? (
            <a
              href={`/projects/${nextProject.id}`}
              className="hover:opacity-70"
            >
              Next →
            </a>
          ) : (
            <span />
          )}
        </div>
      </section>

      {project.images.length > 1 && (
        <section className="bg-[#F6F4EF]">
          <div className="max-w-5xl mx-auto px-6 py-32 space-y-24">
            {project.images.slice(1).map((img, index) => (
              <div
                key={index}
                className="w-full h-[75vh] overflow-hidden rounded-2xl"
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover cursor-zoom-in"
                  onClick={() => openLightbox(index + 1)}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <motion.img
              key={lightboxIndex}
              src={project.images[lightboxIndex]}
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="max-w-[90vw] max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-6 text-white text-3xl"
            >
              ‹
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-6 text-white text-3xl"
            >
              ›
            </button>

            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white text-sm uppercase tracking-widest"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectDetail;
