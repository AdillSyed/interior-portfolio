import { projects } from "../data/projects";

const SelectedWorks = () => {
  return (
    <section className="bg-[#F6F4EF]">
      <div className="max-w-7xl mx-auto px-6 py-32">

        <div className="mb-24">
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
            <div
              key={project.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-16 items-center`}
            >

              <div className="w-full md:w-1/2 h-[60vh] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full md:w-1/2">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1C1C]">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm uppercase tracking-widest text-[#6B6B6B]">
                  {project.type}
                </p>

                <p className="mt-6 text-[#6B6B6B]">
                  {project.style}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SelectedWorks;
