import hero from "../assets/hero.jpg"
const Hero = () => {
  return (
    <section className="min-h-screen bg-[#F6F4EF] flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">

        {/* Text */}
        <div>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl leading-[1.05] text-[#1C1C1C]">
            Spaces,<br />
            shaped with intent.
          </h1>

          <p className="mt-8 text-base sm:text-lg text-[#6B6B6B] max-w-md">
            Thoughtful residential and commercial interiors,
            designed across styles and scales.
          </p>

          <div className="mt-10 w-12 h-px bg-[#1C1C1C]" />

          <button className="mt-12 inline-flex items-center gap-3 text-sm uppercase tracking-widest text-[#1C1C1C] group">
            View Selected Work
            <span className="block w-6 h-px bg-[#1C1C1C] transition-all group-hover:w-10" />
          </button>
        </div>

        {/* Image */}
        <div className="w-full h-[60vh] md:h-[75vh] overflow-hidden">
          <img
            src={hero}
            alt="Interior design showcase"
            className="w-full h-full object-cover scale-105"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;

